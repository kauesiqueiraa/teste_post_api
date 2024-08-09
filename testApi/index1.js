const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const e = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/post',async (req, res) => {
    const formData = req.body;

    const url = 'http://vagas.grupotecnotextil.com:9002/rest/ZWS_SQG';

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    res.status(200).json({ message: "Dados enviados a API do Protheus", data: response.data });
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json({ message: error.response.statusText, details: error.response.data });
        } else if (error.request) {
            res.status(500).json({ message: 'Sem responsta recebida da API do Protheus', details: error.request });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});