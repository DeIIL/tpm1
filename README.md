# TPM 1
Objetivo: exercitar os seguintes conceitos:
- Criação de um projeto Node.js.
- Manipulação de arquivos.
- Manipulação de objetos JSON.
- Criação de endpoints com Express.

``car-list.json`` arquivo JSON consiste em uma lista de marcas de carros (brand) e seus
modelos (models). O arquivo tem em sua raiz um array de marcas e dentro de cada
marca há um array de modelos daquela marca.

## EndPoints
1. ``/brands/moreModels``
 EndPoint que retorna o nome da marca que mais possui modelos.
2. ``/brands/lessModels``EndPoint que retorna o nome da marca que menos possui modelos.
> Observação: para os itens 1 e 2, em caso de empate em número de modelos,
retornar uma lista com o nome das marcas que empataram. Exemplo de retorno
em caso de empate: [“Marca 1”, “Marca 2”]. Exemplo de retorno caso não tenha
empate: “Marca 1”.
3. ``/brands/hasMoreModels/:x``EndPoint que recebe como parâmetro um número X e retorna as X
marcas que mais possuem modelos, seguidos da quantidade, em ordem
decrescente. Exemplo de retorno caso o parâmetro informado seja 5:
```javascript
[“Marca A - 10”, “Marca B - 9”, “Marca C - 8, “Marca D - 7“, “Marca D - 6”].
```
4.``/brands/hasLessModels/:x``EndPoint que recebe como parâmetro um número X, retorne as X
marcas que menos possuem modelos, seguidos da quantidade, em ordem
crescente. Exemplo de retorno caso o parâmetro informado seja 5:
```javascript
[“Marca E - 1”, “Marca F - 2”, “Marca G - 3, “Marca H - 3“, “Marca I - 4”].
````
> Observação: para os itens 3 e 4, em caso de empate, é considerado a ordem
alfabética do nome das marcas como critério de desempate. Exemplo, caso as
marcas “Audi” e “Renault” empatem, a marca “Audi” viria na frente da “Renault”,
pois ao ordená-los em ordem alfabética, ela é retornada primeiro.

5.``/brands/findBrand/:name`` Uma função que recebe como parâmetro o nome de uma marca e
retorna a lista de seus modelos. Caso o nome da marca informada não
exista no arquivo JSON, é retornado um array vazio. A busca desconsidera caracteres maiúsculos e minúsculos. 
- Exemplo: um parâmetro enviado como “HONDA”, encontrará a marca “Honda”.
- Exemplo de retorno caso não encontre a marca: []. 
- Exemplo de retorno caso encontre a marca:
```javascript
[“Modelo 1”, “Modelo 2”, “Modelo 3”].
````
___
- Os itens 1 a 4 devem receber as requisições a partir do método HTTP GET. 
- O item 5 deve ser uma requisição POST, recebendo o parâmetro “nomeMarca” a partir dos parâmetros da requisição
- OS itens 3 e 4 o X quer dizer o parâmetro que será recebido pela rota.
