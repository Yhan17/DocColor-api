# DocColors-API

Essa API tem como objetivo auxiliar na produção de documentação de métodos e design packs, fornecendo de maneira visual a documentação de cores para api's

> Esta API foi inspirada na api singlecolorimagesapi, com o mesmo propósito. Resolvi desenvolver esta api aqui, pois a api do single color, não permite adicionar cores com transparência, o que as vezes se torna crucial para documentação de design packs. Caso tenham interesse, a url da single color api é: `https://singlecolorimage.com/api.html` 

URL base da API: ` https://docolor-api.herokuapp.com/api/`

## Exemplos:
Definição da url na documentação do método

**Javascript**
[![JSDOC](https://i.imgur.com/NBAMfVx.png)](https://i.imgur.com/NBAMfVx.png)

**Flutter**
[![FLUTTER](https://i.imgur.com/X0b9XZQ.png)](https://i.imgur.com/X0b9XZQ.png)

**Visualização na implementação (O mesmo principio tanto para qualquer linguagem que permite documentação)**
[![View](https://i.imgur.com/AcrLQDh.png)](https://i.imgur.com/AcrLQDh.png)


## Documentação

Documentação Online: https://docolor-api.herokuapp.com/doc/

> A documentação do app foi feito utilizando `swagger`, pois como o retorno é um `application/image`, é o que melhor retorna a visualização

## Funcionalidades
- Retorna um quadrilátero podendose definir as cores e o tamanho
- Retorna um circulo, podendo alterar a cor e o tamanho do raio

**Serão adicionadas mais algums retornos em outras versões**

## Infraestrutura da API

A api foi desenvolvida utilizando o microframework express, utilizando os paradigmas da programação funcional

**Tecnologias Utilizadas**
- Typescript - Linguagem de Programação
- Heroku - Cloud Paas
- Node - interpretador 

---

### Documentação


**Retorna quadrilátero**

`[GET] https://docolor-api.herokuapp.com/api/{color}/square?height=xxx&width=xxx`

Definição dos Parâmetros:
- color -> Cor do quadrilátero (obrigatório)
- height -> Altura do quadrilátero (não obrigatorio [Default: 200])
- width -> > Largura do quadrilátero (não obrigatorio [Default: 200])

Limites:
- O parametro **color** deve ser uma cor hexadecimal válida, podendo ser:
-- FFF (Cor Hexadecimal de 3 caracteres)
-- FFFF (Cor Hexadecimal de 4 caracteres [Comunmente utilizada para representar hexadecimais com alpha de modo simplificado])
-- FFFFFF (Cor Hexadecimal de 6 caracteres [mais comum])
-- FFFFFFFF (Cor Hexadecimal de 8 caracteres, com a implementação do valor alpha)
- **Height e Width** devem ter no maximo 5000px cada um


**Retorna Circulo**

`[GET] https://docolor-api.herokuapp.com/api/{color}/circle/{radius}`

Definição dos Parâmetros:
- color -> Cor do circulo (obrigatório)
- radius -> Raio do Circulo (obrigatorio)

**Limites**
- O parametro **color** deve ser uma cor hexadecimal válida, podendo ser:
-- FFF (Cor Hexadecimal de 3 caracteres)
-- FFFF (Cor Hexadecimal de 4 caracteres [Comunmente utilizada para representar hexadecimais com alpha de modo simplificado])
-- FFFFFF (Cor Hexadecimal de 6 caracteres [mais comum])
-- FFFFFFFF (Cor Hexadecimal de 8 caracteres, com a implementação do valor alpha)
- **Radius** devem ter no maximo 500px

> Veja os endpoints testaveis aqui: https://docolor-api.herokuapp.com/doc/


### Links de referencia

- Canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
- Programação Funcional: https://blogs.halodoc.io/functional-typescript/
- Biblioteca fp-ts (Disponibiliza programação funcional ao typescript): https://github.com/gcanti/fp-ts
- Express: https://expressjs.com/pt-br/

### Até mais!!!

----
Qualquer Duvida ou sugestão, vc pode abrir uma issue, ou entrar em contato pelo meu linkedin:

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yhan-nunes/)

- Caso tenha gostado não se esquece de dar uma estrela ao repositório 😊
----