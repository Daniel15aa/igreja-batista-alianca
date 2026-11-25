const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '../public/index.html'));
function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (req.method === 'GET' && ['/', '/index.html'].includes(url.pathname)) {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      return res.end(html);
    }
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Página não encontrada');
  });
}
if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, '127.0.0.1', () => console.log(`Site disponível em http://localhost:${port}`));
}
module.exports = { createServer };
