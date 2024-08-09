const Service = require('node-windows').Service;
const path = require('path');

const svc = new Service({
  // Nome do serviço
  name: 'testePOST',
  // Diretorio do arquivo de entrada
  script: path.join(__dirname, 'index.js'),
});

svc.on('uninstall', function() {
  !svc.exists
  ? console.log('Desinstalação completa.')
  : console.log('Não foi possível desinstalar o serviço.')
});

svc.uninstall();