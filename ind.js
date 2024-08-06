const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.post('/post', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
    res.json({
        message: 'POST  concluido com sucesso!',
        data: receivedData
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});