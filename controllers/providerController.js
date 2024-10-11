
const { sequelize } = require('../config/database');
const proveedores = require('../models/providerModels')(sequelize);
const usuarios = require('../models/userModels');
const { validationResult } = require('express-validator');

// Crear un nuevo Proveedor

exports.createProvider = async (req, res) =>{
    try {
        // Conectar a la base de datos
        await sequelize.authenticate();
         // Validar los datos del Proveedor
         const { NIT, nombre, apellido, cedula, tipoproveedor, tipopersona, beneficiarios, datosbancarios } = req.body;
         if (!NIT || !nombre || !apellido || !cedula || !tipoproveedor || !tipopersona || !beneficiarios || !datosbancarios) {
             return res.status(400).json({ message: 'Faltan datos requeridos' });
         }
         
        const proveedor = await proveedores.create(req.body);
        res.status(201).json(proveedor);
    } catch (error) {
      
        res.status(500).json({ message: error.errors ? error.errors.map(err => err.message) : error.message });
    
    }
};


// Buscar Proveedor

exports.getProvider = async (req, res) => {
     // Validar que el id sea un número
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }
    try {
        const id = parseInt(req.params.id, 10); 
        const proveedor = await proveedores.findByPk(id);
        if (!proveedor)
            { return res.status(404).json({ message: 'Proveedor no encontrado' });}
        return res.status(200).json({ success: true, proveedor });
        //res.json(proveedor);
    } catch (error) {
        console.error('Error al obtener el proveedor:', error); 
        return res.status(500).json({ error: 'Error interno del servidor' });
 
    }
};

// Actualizar datos Proveedor

exports.putProvider = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const id = parseInt(req.params.id, 10);
        const proveedor = await proveedores.findByPk(id);
        if (!proveedor)
            { return res.status(404).json({ message: 'Proveedor no encontrado' });}

        await proveedor.update(req.body);

        res.json(proveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// eliminar Proveedor

exports.deleteProvider = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const id = parseInt(req.params.id, 10);
        const proveedor = await proveedores.findByPk(id);
        if (!proveedor)
            { return res.status(404).json({ message: 'Proveedor no encontrado' });}
        await proveedor.destroy();
        return res.status(200).json({ success: true, message: 'Proveedor eliminado' });
        

    } catch (error) {
        console.error('Error al eliminar el proveedor:', error); 
        return res.status(500).json({ error: 'Error interno del servidor' });
   
    }
};

// Validar Proveedor

exports.validateProvider = async (req, res) => {
    const idusuario = 2;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { estado } = req.body;
        const { iduser } = req.body;

        // Validar Rol de usuario

        const user = await usuarios.findByPk(iduser);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
       
        if (user.rol !== 'admin') {
            return res.status(403).json({ message: 'Acceso denegado. Solo los administradores pueden validar proveedores.' });
        }

       
        const proveedor = await proveedores.findByPk(req.params.id);
        if (!proveedor)
            { return res.status(404).json({ message: 'Proveedor no encontrado' });}

        // Validar o rechazar estado

        if (estado === 'Aprobado' || estado === 'Rechazado') {
           proveedor.estado = estado;
           await proveedor.save();
           res.json(proveedor); 
        }else{
                 res.status(400).json({ message: 'Estado no válido' });
             }
       
    } catch (error) {
        console.error('Error al Validar el proveedor:', error); 
        return res.status(500).json({ error: 'Error interno del servidor' });
   
    }
};