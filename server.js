// server.js
const http = require('http');
const webPageInfo = require('./data');

const server = http.createServer((req, res) => {
  // Construir el documento HTML con los datos del objeto
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${webPageInfo.title}</title>
    </head>
    <body>
      <h1>${webPageInfo.title} hola</h1>
      <h2>${webPageInfo.subtitle}</h2>
      <p>${webPageInfo.description}</p>
    </body>
    </html>
  `;

  // Enviar la respuesta al navegador
  res.end(htmlContent);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
