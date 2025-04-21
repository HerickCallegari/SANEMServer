
-- Tabela Pessoa
INSERT INTO Pessoa (nome, telefone, endereco, RG, CPF) VALUES
('João Silva', '99999-1234', 'Rua das Flores, 123', '12345678', '111.111.111-11'),
('Maria Oliveira', '98888-5678', 'Av. Brasil, 456', '23456789', '222.222.222-22'),
('Carlos Souza', '97777-9876', 'Trav. Central, 789', '34567890', '333.333.333-33'),
('Ana Beatriz Ramos', '96666-1111', 'Rua do Sol, 321', '45678901', '444.444.444-44'),
('Lucas Mendes Pereira', '95555-2222', 'Av. das Palmeiras, 654', '56789012', '555.555.555-55'),
('Fernanda Costa Lima', '94444-3333', 'Travessa da Paz, 987', '67890123', '666.666.666-66');

-- Tabela Beneficiario (associado a Pessoa)
INSERT INTO Beneficiario (idBeneficiario, contaCorrente, email, aprovado) VALUES
(1, '12345-6', 'joao@email.com', true),
(2, '23456-7', 'maria@email.com', false),
(3, '34567-8', 'carlos@email.com', true);

-- Tabela Voluntario (associado a Pessoa)
INSERT INTO Voluntario (idVoluntario) VALUES
(4),
(5),
(6);

-- Tabela Item
INSERT INTO Item (tipo, tamanho, quantidade) VALUES
('Calça Jeans', '40', 2),
('Camisa', 'M', 0),
('Agasalho', 'P', 0);

-- Tabela Movimento
INSERT INTO Movimento (tipo, idVoluntario, idBeneficiario) VALUES
('Doação', 1, 1),
('Entrega', 2, 1),
('Descarte', 3, 3);

-- Tabela ItemMovimento
INSERT INTO ItemMovimento (idItem, idMovimento, quantidade) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 3);
