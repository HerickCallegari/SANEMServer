const Pessoa = require('./Pessoa');

class Beneficiario extends Pessoa {
  contaCorrente;
  email;
  aprovado;

  constructor(idPessoa, nome, telefone, endereco, RG, CPF, contaCorrente, email, aprovado) {
    super(idPessoa, nome, telefone, endereco, RG, CPF);
    this.contaCorrente = contaCorrente;
    this.email = email;
    this.aprovado = aprovado;
  }
}

module.exports = Beneficiario;
