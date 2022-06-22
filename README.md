
#  Ebyrt to-do

Este projeto é inspirado em um desafio da Trybe! Trata-se de uma simples aplicação de administração de tarefas.


## Funcionalidades

- Adicionar tarefas
- Editar tarefas
- Deletar tarefas
- Modificar os status das tarefas
- Adicionar detalhes às tarefas
- Opção de filtrar tarefas por status


## Stack utilizada

**Front-end:** React, Context-api, React Bootstrap, Jest, RTL.

**Back-end:** Typescript, Node, Express, Mocha, Chai, Sinon, Mongoose.

**Outras ferramentas:** Zod, Eslint, Docker, Axios.


## Rodando localmente

Lembrando que para rodar o projeto localmente será necessário [Docker](https://docs.docker.com/get-docker/) e
[Docker-Compose](https://docs.docker.com/compose/install/) instalados em sua máquina.

Clone o projeto

```bash
  git clone git@github.com:lithhhh/Ebyrt-challenge.git
```

Entre no diretório do projeto

```bash
  cd Ebyrt-challenge
```

Suba a orquestração de containers

```bash
  npm run compose:up
```

Quando estiver pronto ficará assim:

```bash
  Creating db ... done
  Creating backend ... done
  Creating frontend ... done
```

A aplicação estará sendo executada nas seguintes portas:
- frontend: <http://localhost:3000/>
- backend: http://localhost:3001/

### Para encerrar a aplicação utilize:

Use este comando para desativar a orquestração:

```bash
  npm run compose:down
```

Espere até que fique assim:

```bash
  Stopping frontend ... done
  Stopping backend  ... done
  Stopping db       ... done
  Removing frontend ... done
  Removing backend  ... done
  Removing db       ... done
  Removing network ebyrt-network
```


## Aprendizados

Este projeto foi implementado visando solidificar e colocar em prática
o conhecimento adquirido no módulo de Backend da Trybe utilizando uma stack chamada
MERN (mongo, express, react e node).


A ideia nasceu de um simples desafio proposto, era necessário
realizar a entrega da aplicação em um tempo mínimo! e claro, o objetivo
seria verificar como você organizaria as etapas (arquitetura, testes, implementação, estilização e etc...)
do desenvolvimento da aplicação por ordem de importância.

Graças a ele pude consolidar algumas dúvidas que me restava sobre POO, Design-patterns, Typescript, além de poder
revisitar React!

Meu grande foco em relação a arquitetura está presente no Backend, a ideia seria separar ao máximo
as camadas do banco, aplicação e framework (express nesse caso!), caso seja necessário uma substituição
no futuro seria possível com um mínimo de esforço, afinal cada camada assume com precisão suas devidas responsabilidades.


No front, precisava revisitar alguns conteúdos do React, e foi bastante
nostálgico! E devo confessar, front não é bem o meu forte hahah, então mantive o design mais objetivo.
Foi usado React-Boostrap na estilização, utilizei Axios para manter as requisições, e usei Context API
para administração do estado.


