*Exercício retirado da hacker hank e adaptado para didática*

- Crie uma função chamada plusMinus que recebe como  parâmetro um array.
- A função deve informar qual é a porcentagem de números positivos, negativos e núlos contidos no array
- O Resultado impresso na tela precisa estar em decimal e com 6 casas após a virgula.
ex: o array [1, 2, -1, -2, 0] é composto por 40% de numeros positivos, 40% de numeros negativos e 20% de nulos
    então o resultado fica: positivos: 0.400000, negativos: 0.400000, nulos: 0.200000]
    
*REGRAS(CONSTRAINTS)*
 - O array(vetor) precisa estar com o tipo de dado númerico
 - a soma final do percentual dos numeros positivosm, negativos e nulos precisa resultar em 1.0 ou 0.9...
   ex: 0.5 + 0.5 + 0.0 = 1.0, 0.33.. + 0.33.. + 0.33.. = 0.99..
 - O número no array não pode ser menor que -100 e nem maior que 100
   formula: n >= -100 && n <= 100
 

*Entradas(Inputs)*
 - A entrada será composta por um array  que será passada no parametro da função(o que ta dentro do parenteses da função)
   ex: function plusMinus(arr) -> arr é o parametro da função plusMinus, voce coloca plusMinus([1,2,3]) por exemplo pra testar a função
 - Seu programa vai estar funcionando se todos os valores de entrada corresponderem aos valores de saída informados na parte de
   saídas(outputs).
   
    - ENTRADA1: [-1, -2, 3, 4, 0, 0]
    - ENTRADA2: [1, 2, -3, -4, 0]
    - ENTRADA3: [1, 2, -3, -4]
    - ENTRADA4: [1, 2, 0]
    - ENTRADA5: [-1, -2, 0, 0]
    
   
 *Saídas(outputs)*
 - A saída é o resultado que será mostrado na tela(O resultado que será impresso na tela quando o valor da ENTRADA for colocado).
 - A SAÍDA1 corresponde a saída da ENTRADA1 ,
   A SAÍDA 2 corresponde a saída da ENTRADA2 e assim sucessivamente.
   
   - SAIDA1: 0.333333
             0.333333
             0.333333
             
   - SAIDA2: 0.400000
             0.400000
             0.200000
             
   - SAIDA3: 0.500000
             0.500000
             0.000000
             
   - SAIDA4: 0.666667
             0.000000
             0.333333
             
   - SAIDA5: 0.000000
             0.500000
             0.500000
             
exemplo de escopo da função em javascript:

function PlusMinus(arr){
  
}
PlusMinus([1,,2, -3, -4])
             
            
