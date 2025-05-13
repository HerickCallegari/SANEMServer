export default class Item {
    constructor(idItem, tipo, tamanho, quantidade = 0) {
      this.idItem = idItem;
      this.tipo = tipo;
      this.tamanho = tamanho;
      this.quantidade = quantidade;
    }
  }
  