class Movimento {
  idMovimento;
  data;
  tipo;
  idVoluntario;
  idBeneficiario;

  constructor(idMovimento, data, tipo, idVoluntario, idBeneficiario) {
    this.idMovimento = idMovimento;
    this.data = data || new Date();
    this.tipo = tipo;
    this.idVoluntario = idVoluntario;
    this.idBeneficiario = idBeneficiario;
  }
}

module.exports = Movimento;
