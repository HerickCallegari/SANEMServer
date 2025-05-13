CREATE TABLE IF NOT EXISTS Pessoa (
    idPessoa SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(100),
    RG VARCHAR(20) UNIQUE,
    CPF VARCHAR(20) UNIQUE
);

CREATE TABLE IF NOT EXISTS Beneficiario (
    idBeneficiario INT PRIMARY KEY,
    email VARCHAR(100),
    aprovado BOOLEAN,
    FOREIGN KEY (idBeneficiario) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Voluntario (
    idVoluntario INT PRIMARY KEY,
    senha VARCHAR(100) NOT NULL,
    FOREIGN KEY (idVoluntario) REFERENCES Pessoa(idPessoa) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Item (
    idItem SERIAL PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    tamanho VARCHAR(20),
    quantidade INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Movimento (
    idMovimento SERIAL PRIMARY KEY,
    data TIMESTAMP NOT NULL DEFAULT now(),
    tipo VARCHAR(20) NOT NULL,
    idVoluntario INT NOT NULL,
    idBeneficiario INT,
    FOREIGN KEY (idVoluntario) REFERENCES Voluntario(idVoluntario) ON DELETE SET NULL,
    FOREIGN KEY (idBeneficiario) REFERENCES Beneficiario(idBeneficiario) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS ItemMovimento (
    idItemMovimento SERIAL PRIMARY KEY,
    idItem INT NOT NULL,
    idMovimento INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (idItem) REFERENCES Item(idItem) ON DELETE CASCADE,
    FOREIGN KEY (idMovimento) REFERENCES Movimento(idMovimento) ON DELETE CASCADE
);
