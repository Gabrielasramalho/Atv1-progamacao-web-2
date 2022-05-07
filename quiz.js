 //Primeiro declarar quais são as váriaveis que eu vou trabalhar (let resultado = declarando o nome)
 let quiz = document.querySelector ('.quiz')
 let resultado = document.querySelector( '.resultado')
 let resposta = document.querySelector( '.resposta') 
 let imagem = document.querySelector( 'img' )
 

 //A função abaixo determina tudo que irá acontecer quando a pessoa clicar em uma das alternativas
 
 function checkAnswer( event){

      //desativa o clique repetido no quiz
      quiz.classList.add( 'inactive')

       // Cria variável que representa a alternativa clicada
      let alternative = event.target

      // cria uma classe para poder estilizar no Css
      alternative.classList.add( 'clicked' )

   // "A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira." Aqui ele está che checando se o item que clicado é da classe "correct"

    if ( event.target.classList.contains( 'correct'))
  { 
    // determina o conteúdo textual da classe "resultado".Neste caso o "acertou;)"
    resultado.textContent = 'Acertou ;)'
    resultado.style.display = 'initial'

    //personalizar o estilo:
    resultado.style.color = "green"  

    //Mostra gatinho (eu subescrevi aquela regra de CSS para esconder a img e declarei que se clicar na resposta certa irá aparecer a img)
    imagem.style.display = 'initial'    
   }
      
 // se clicar errado (que é o padrão aqui) é este comando que o JS vai executar:
    else {
    //Troca o txt do resultado por "errou :("
    resultado.textContent = 'Errou :('
    resultado.style.display = 'initial'
    resultado.style.color = 'red'
    imagem.style.display = 'initial' }          
 
    resposta.style.display = 'initial'
   }   
 
 
 // A proprieda let permite que declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. A querySelectorAll determina uma lista de elementos
  let alternatives = document.querySelectorAll( 'li' )
  
  //a propriedade 'for' cria um loop em todos os elementos que fazem parte da classe "alternatives", dessa forma não é necessário colocar uma classe para cada 'li'Ou seja: foi criada uma classe que reune todos os elementos de 'li'. 
  for( let alternative of alternatives) { 
   
   // o JS fica "ouvindo" e quando ele identifica o clique em um dos intes da classe 'alternative' ele executa o comando de chacar a resposta "checkAn". 
   alternative.addEventListener( 'click', checkAnswer)
 }






