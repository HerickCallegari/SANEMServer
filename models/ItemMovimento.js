class ItemMovimento {
  idItemMovimento;
  idItem;
  idMovimento;
  quantidade;

  constructor(idItemMovimento, idItem, idMovimento, quantidade) {
    this.idItemMovimento = idItemMovimento;
    this.idItem = idItem;
    this.idMovimento = idMovimento;
    this.quantidade = quantidade;
  }
}

module.exports = ItemMovimento;
