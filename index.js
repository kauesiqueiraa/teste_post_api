
// import axios from 'axios';

// const axios = require('axios');

const url = 'http://vagas.grupotecnotextil.com:9002/rest/ZWS_SQG';

async function testApi(formData) {
  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data);
    alert('Formulario enviado com sucesso!');
  } catch (error) {
    if (error.response) {
      console.error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`);
      console.error(`Error Details: ${error.response.data}`);
      alert('Erro ao enviar o formulário. Verifique os dados e tente novamente.');
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('Erro de comunicação com o servidor.');
    } else {
      console.error('Error:', error.message);
      alert('Erro ao configurar a solicitação.');
    }
  }
}

document.getElementById('submit').addEventListener('click', function() {
  const name = document.getElementById('name').value;

  const formData = {
    nome: name,
    end: "RUA TESTE 152",
    compl: "CASA",
    bairro: "CENTRO",
    cidade: "TRES PONTAS",
    uf: "MG",
    cep: "37190000",
    fone: "3532659100",
    rg: "MG14454995",
    cic: "08947874843",
    sexo: "M",
    estciv: "C",
    dtnasc: "19880516",
    dtcad: "20240808",
    pretsal: 15000,
    situac: "001",
    email: "francisco.mudrik@tecnotextil.net",
    cargo: "TI",
    indicacao: "",
    redacao: "SEM COMENTARIOS",
    declexm: "1",
    decok: "Ok",
    pai: "",
    mae: "",
    qtdfilho: 1
  };

  testApi(formData);

});
