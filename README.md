# Instruções
Segue as instruções para fazer o projeto funcionar em outras máquinas.

### OBS: 
1. O projeto foi desenvolvido no windows 11.
2. Foi utilizado ReactJs com TypeScript.
3. O projeto foi criado com Vite (Uma opção ao create-react-app).
4. Alguns passos serão descritos utilizando o yarn, mas poderão também serem feitos com o npm, mudando um pouco a sintaxe.

## Pré-requisitos
1. Ter o node instalado 

## Passos
1. Instalação do yarn: npm install --global yarn
    1.1 Verificar se o yarn foi instalado: yarn --version
2. Clonar o projeto para a máquina desejada.
3. Acessar a pasta referente ao projeto, com o terminal, nesse caso: 'teste_impar'
4. Instalar as dependências do projeto: yarn install
5. Após instalar as dependências, executar o projeto com o comando: yarn run dev

## Features
1. Pesquisa de um só Pokemon: Digitar seu nome na barra de busca e clicar na lupa
2. Pesquisa pelos 150 primeiros Pokemons: Ao iniciar o sistema, uma busca pelos 150 primeiros pokemons é feita
    2.1 Um bug está ocorrendo e a UI não está atualizando como deveria, a UI apenas atualiza quando ocorre alguma interação. Para isso, digite qualquer caracter na barra de busca, não é necessário clicar na lupa, e os Pokemons anteriormente pesquisados são exibidos na tela.
3. Paginação dos pokemons pesquisados.
4. Exclusão dos pokemons. Ao clicar para excluir algum Pokemon, um modal aparece na tela perguntando se há mesmo a intenção de excluir, e em caso positivo, o Pokemon é excluido. Como a lista de Pokemons excluídos é um state, basta recarregar a tela para desfazer a ação.
5. Drawer com os campos conforme protótipo.
6. Tentativa de conexão com a API do ClimaTempo. Não obtive sucesso, pois houve um erro na política de CORS (Apesar de que no dashboard do ClimaTempo eu desabilitei o CORS)