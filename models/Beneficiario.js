import Pessoa from "./Pessoa.js";

export default class Beneficiario extends Pessoa {
  constructor(idPessoa, nome, telefone, endereco, RG, CPF, email, aprovado) {
    super(idPessoa, nome, telefone, endereco, RG, CPF);
    this.email = email;
    this.aprovado = aprovado;
  }
}
