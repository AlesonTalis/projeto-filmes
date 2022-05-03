# Projeto FILMISS

Sistema que usa a OMDb API para estar exibindo detalhes de alguns filmes/series.

- linguagem: TypeScript

## Páginas:

### HomePage `/`

Usa uma lista de palavras aleatórias para estar exibindo uma lista de filmes na página inicial.

### Pesquisa `/search`

Responsável por pesquisar por filmes, usando o titulo do filme.

### Detalhes `/detail`

Exibe alguns detalhes do filme selecionado, com a opção de adicionar aos 'favoritos'

### Favoritos `/favorites`

Exibe os filmes salvos nos favoritos, localmente no navegador

## Explicação

O Framework selecionado foi React, usando Vite para ser mais leve e rápido de testar.

O sistema de favoritos utiliza `localStorage` para salvar o id dos filmes, em forma de `string`.

## Para testar

``` 
git clone https://github.com/AlesonTalis/projeto-filmes

cd ./projeto-filmiss

npm install

npm run dev
```

Executa no endereço `localhost:3000/`

## Feedback será apreciado

Por favor, adicione seu feedback em [`issues/feedback`](https://github.com/AlesonTalis/projeto-filmes/labels/feedback)

## Observações finais:

- alguns posters não carregam
- alguns filmes demoram para carregar
- no error handler