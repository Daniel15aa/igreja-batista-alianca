const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validarMensagem } = require('../public/validacao.js');

test('Rejeita mensagem vazia', () => {
    assert.equal(validarMensagem(''), false);
});

test('Rejeita mensagem com menos de 10 caracteres', () => {
    assert.equal(validarMensagem('123456789'), false);
});

test('Aceita mensagem com exatamente 10 caracteres', () => {
    assert.equal(validarMensagem('1234567890'), true);
});

test('Aceita mensagem com mais de 10 caracteres', () => {
    assert.equal(validarMensagem('Pedido de oração'), true);
});

test('Desconsidera espaços nas extremidades', () => {
    assert.equal(validarMensagem('   Oração   '), false);
});

test('Rejeita mensagem contendo somente espaços', () => {
    assert.equal(validarMensagem('          '), false);
});