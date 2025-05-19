# 📦 BRANCHó

Um sistema de gerenciamento de estoque feito com Express e React. 

---

## 📋 Índice

- [📦 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias](#-tecnologias)
- [⚙️ Instalação](#️-instalação)
- [🧪 Como Usar](#-como-usar)
- [🛠 Funcionalidades](#-funcionalidades)
- [🧑‍💻 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## 📦 Sobre o Projeto

O nosso projeto se propõe a resolver a problemática das doações de roupas da SANEM, visto que faz parte da disciplina de Oficina de Computação para a Comunidade (COM1029-2025/1), e tem como objetivos criar uma aplicação confiável, escalável e viável para a instituição.

---

## 🚀 Tecnologias

- React
- Express
- PostgreeSQL
- Docker
- Vercel

---

## ⚙️ Instalação

Siga os passos para rodar o projeto localmente:

1 - Clonar repositório 

   --> criar nova pasta;
   --> abrir pasta no vscode
   --> ctrl+' (abre o terminal)
   --> digitar no terminal git clone https://github.com/HerickCallegari/SANEMServer.git
   --> criar um arquivo chamado dev.env na pasta root da aplicação e colocar o seguinte texto:

DATABASE_USER=Admin
DATABASE_PASSWORD=Admin123
   

2 - Para rodar a aplicação 
 2.1 para rodar o servidor na maquina, sem ser através do Docker 
  --> digitar no terminal npm run dev para rodar 
 2.2 para rodar usando Docker
  --> Digitar no terminal do programa ( dentro do caminho dele)
  --> Docker build -t my-node-app .   ( para criar a imagem Docker)
  --> docker-compose up               ( para criar o container Docker)
  --> verificar no Docker se esta rodando tanto o servidor quanto o banco de dados
3. para testar o banco e fazer consultas direto nele
  --> docker exec -it postgres psql -U user123 -d SanemDB; ( esse comando vai abrir o terminal do banco)
  --> Se divertir fazendo consultas e operações

## 🧪 Como usar

1. Faça login como voluntário.
2. Cadastre itens, beneficiários e voluntário.
3. Gere movimentações de entrada e saída.
4. Acompanhe o estoque em tempo real.

## 🛠 Funcionalidades

Irei inserir a documentação aqui, porém irei revisá-la antes porque mudamos algumas coisas no bd.

## 🧑‍💻 Contribuindo

Apenas membros da equipe BRANCHó podem contribuir nesse projeto. Entretanto, possivelmente outra equipe do próximo semestre também contribuirá.

## 🙋‍♀️ Autores

Amabilly Barbosa Russo: Designing UX/UI
Fabiola Malman Nunes: Designing UX/UI
Gabrieli Machado Bianchin: SM, QA, Engenheira de Requisitos
Henrique Vicente Iha: Front End 
Herick Campos Calegari: Back End
Vitor Hugo Klein: Front End

## 📄 Licença 


