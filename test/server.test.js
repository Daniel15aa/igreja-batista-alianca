const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('../src/server');
test('servidor entrega a página inicial e retorna 404 para rota inexistente', async () => {
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const response = await fetch(base);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /<title>Igreja Batista Aliança, Joinville<\/title>/);
    assert.equal((await fetch(base + '/inexistente')).status, 404);
  } finally { await new Promise(resolve => server.close(resolve)); }
});
