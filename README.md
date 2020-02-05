# Desafio Linx 
### Anderson Vieira Lidio.

{link para a página}()

Olá, obrigado pela oportunidade de realizar esse desafio, foi muito legal fazer parte desse processo. Espero que gostem do resultado.


## Descrição do projeto
O projeto consiste em uma landing page que simula um e-commerce que os produtos são gerados dinamicamente através de uma api externa.
#### HTML
Na parte do HTML, mantive a semântica. Evitei usar classes e id de forma excessivas e organizei a página em 4 grandes partes (Header, Main, Section e Footer).
#### CSS
No css eu organizei em 2 arquivos separados, um para estilização e outro para o reset, para que não haja problemas com navegadores diferentes. Também usei root para facilitar na estilização das cores. No fim ainda adicionei um media queries para responsividade, que atrelado ao flex faz com que o site se adapte a diversos tamanhos. 
#### Javascript
Nessa etapa separei 2 funções: loadProducts e renderProducts.

Em loadProducts fiz com que a função faça requisição da api através do fetch, e depois atribuí as respostas obtidas por meio de parâmetro na função renderProdutcs.

Em renderProducts utilizei o metódo map para percorrer todo meu array, depois usei o destructuring para usar as propriedades como parâmetro. Usei i innerHTML* para criar dinamicamente os cards no meu HTML.

Para complementar usei dois event listener, uma para garantir que meu DOM carregue antes que chame o js, e o outro para o botão de chamar mais produtos.

Observação:
* Decidi pela utilização do inner.HTML ao invés do createElement pois dessa forma eu deixei o código menor, já que não precisei declarar e atribuir diversas variáveis que teria que fazer caso usasse o createElement. Pensei também na reutilização desse código, como não iriamos reutilizar, o innerHTML se tornou mais eficiente, além de torná-lo visualmente mais limpo.
#### Commit
A cada alteração importante na minha landing page, eu dava commits no meu github, para melhor entendimento do processo de desenvolvimento.
#### Deploy
o deploy foi feito através do site netifly.
