const Pessoa = require('./Pessoa');

class Voluntario extends Pessoa {
  constructor(idPessoa, nome, telefone, endereco, RG, CPF, senha) {
    super(idPessoa, nome, telefone, endereco, RG, CPF);
    this.senha = senha;
  }
}

module.exports = Voluntario;
