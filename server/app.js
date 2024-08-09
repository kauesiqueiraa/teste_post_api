const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", 'public')));

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post('http://vagas.grupotecnotextil.com:9002/rest/ZWS_SQG', req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Erro na comunicação com a API");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});