require('dotenv').config();
const express = require('express');
const { db_connect } = require('./config/database');
const proveedorRoutes = require('./routes/providerRoutes');
const apiController = require('./controllers/apiController');

const app = express();

// Middlewares
app.use(express.json());

// Conexión a la base de datos

db_connect();

// Rutas

app.use('/api/proveedor', proveedorRoutes);
app.post('/api/token', apiController.obtenerToken);
app.get('/api/proyectos', apiController.consumoApi);

//  servidor

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});