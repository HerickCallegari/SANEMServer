export default class Movimento {
    constructor(idMovimento, data = new Date(), tipo, idVoluntario, idBeneficiario) {
      this.idMovimento = idMovimento;
      this.data = data;
      this.tipo = tipo;
      this.idVoluntario = idVoluntario;
      this.idBeneficiario = idBeneficiario;
    }
  }
  