# Caminhos Dourados Front-end

A Plataforma que visa criar um ambiente de participação cidadã e colaboração ativa entre os moradores de comunidades e pessoas e/ou organizações interessadas.

## Sobre a aplicação

A aplicação foi desenvolvida em React + Typescript + Vite com Pwa, e a biblioteca Material UI para estilização e tematização da aplicação.
Foi decidido utilizar Pwa neste MVP porque é instalável e mais leve do que aplicativos mobile, além de se adaptar a diferentes dispositivos.

## Como rodar a aplicação?

**1.** Clone este repositório com o seguinte comando:

`git@github.com:GoldenPaths/caminhos-dourados-frontend.git`

**2.** Você vai precisar ter o **Node.js** instalado na sua máquina.

> [Página do Node.js](https://nodejs.org/en/).</br>

**3.** Instale as dependências do projeto com o comando:

`npm install`

**4.** Crie o arquivo `.env.local` (conforme o arquivo de exemplo `.env.local.exemple`), na raíz do projeto e adicione a variável de ambiente "VITE_API_URL" o valor da url local do backend (se a porta não tiver sido alterada, o valor inicial será o http://localhost:5101), em seguida inicie a aplicação com o comando:

`npm run dev`