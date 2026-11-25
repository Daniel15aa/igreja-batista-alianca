function validarMensagem(mensagem) {
    return typeof mensagem === 'string' &&
        mensagem.trim().length >= 10;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarMensagem };
}