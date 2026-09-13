# Calculadora de IMC

Uma pequena aplicação web desenvolvida como exercício de fundamentos do React. A calculadora recebe o peso e a altura da pessoa, calcula o Índice de Massa Corporal (IMC) e apresenta a classificação correspondente.

## Preview

![Preview da calculadora de IMC](./Video%20Project%2012.gif)

## Funcionalidades

- Entrada de peso em quilogramas e altura em metros.
- Cálculo do IMC a partir da fórmula `peso / (altura * altura)`.
- Classificação do resultado em quatro faixas:
	- Abaixo do peso: IMC menor que 18,5.
	- Peso normal: IMC entre 18,5 e 24,9.
	- Sobrepeso: IMC entre 25 e 29,9.
	- Obesidade: IMC a partir de 30.
- Atualização do resultado na própria página após o clique em **Calcular**.

## Tecnologias utilizadas

- **Next.js 16**: framework React utilizado para a estrutura da aplicação e o roteamento por App Router.
- **React 19**: construção da interface e gerenciamento do estado dos campos e do resultado.
- **TypeScript**: tipagem e organização do código.
- **CSS**: estilização do formulário, botão e layout da calculadora.
- **ESLint**: padronização e verificação estática do código.

## Conceitos praticados

- Componente funcional em React.
- Diretiva `"use client"` para habilitar interatividade no Next.js.
- Hook `useState` para controlar os valores dos inputs e o resultado.
- Eventos `onChange` e `onClick`.
- Conversão de valores de formulário com `parseFloat`.
- Renderização condicional da classificação do IMC.

## Como executar

Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Depois, acesse [http://localhost:3000/desafio-imc](http://localhost:3000/desafio-imc).

## Estrutura do desafio

```text
desafio-imc/
├── page.tsx   # Componente e lógica da calculadora
├── style.css  # Estilos da interface
└── Readme.md  # Documentação do projeto
```

> Este projeto tem finalidade educacional e não substitui uma avaliação profissional de saúde.
