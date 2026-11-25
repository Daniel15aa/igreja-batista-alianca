function validarMensagem(mensagem) {
    return typeof mensagem === 'string' &&
        mensagem.trim().length >= 10 &&
        mensagem.trim().length <= 500;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarMensagem };
}