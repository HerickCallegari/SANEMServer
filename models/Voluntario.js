import Pessoa from './Pessoa.js';

class Voluntario extends Pessoa {
  senha;
  constructor(idPessoa, nome, telefone, endereco, RG, CPF, senha) {
    super(idPessoa, nome, telefone, endereco, RG, CPF);
    this.senha = senha;
  }
}
