const axios = require('axios');


// Obtener Token

exports.obtenerToken = async (req, res) => {
    const url = 'https://analyticsdev.app.marval.com.co/api/jwtjde/loginjwt';

    try {
        const response = await axios.post(url, {
            login: 'prueba',
            pswd: '4d89b2a6498c0f4170ef9aa1de125a27.1dd564de6063cf1e0ec171ad7d030595730b0704a17fae8b066e44f67633ea876e8dfda41176672341b4f42aa044e4a2'
        });

        // Comprobar si el token existe en la respuesta
        if (!response.data.accessToken) {
            return res.status(401).json({ message: 'Token no recibido' });
        }

        const token = response.data.accessToken;
        res.json({ token });

    } catch (error) {
        
        if (error.response) {
            
            return res.status(error.response.status).json({
                message: 'Error en la autenticación',
                details: error.response.data
            });
        } else if (error.request) {
        
            return res.status(500).json({ message: 'No se recibió respuesta de la API', error: error.message });
        } else {
           
            return res.status(500).json({ message: 'Error en la autenticación', error: error.message });
        }
    }
};

// Consumo de API



exports.consumoApi = async (req, res) => {
    try {
        // Verificar si el header de autorización está presente
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Token de autorización no proporcionado' });
        }

        // Extraer el token JWT del header
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token de autorización no válido' });
        }

        // Hacer la solicitud a la API usando el token
        const response = await axios.get(process.env.API_URL, {
            headers: { Authorization: `Bearer ${token}` }
        });

        // Retornar la respuesta de la API
        res.json(response.data);

    } catch (error) {
        
        if (error.response) {
           
            res.status(error.response.status).json({
                message: 'Error en la API externa',
                details: error.response.data
            });
        } else if (error.request) {
            
            res.status(500).json({ message: 'No se recibió respuesta de la API', error: error.message });
        } else {
            
            res.status(500).json({ message: 'Error en el consumo de la API', error: error.message });
        }
    }
};