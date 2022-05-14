
// ======= PRIMEIRA FORMA ==========
function plusMinus(arr) {
    // Write your code here
    const size  = arr.length; //size of array
    let positives =  0, negatives = 0, nules = 0 , porcent;

    //take the negative, positive and null  values
    for(let i = 0; i < size; i++)
    {
        if(arr[i] > 0 && arr[i] <= 100)
            positives++;
        else if( arr[i] < 0 && arr[i] >= -100)
            negatives++;
        else
            nules++;
    }
    porcent =  positives  / size;
    positives = porcent;
    porcent =   negatives / size;
    negatives = porcent;
    porcent =  nules / size;
    nules = porcent;
    
    console.log(positives.toFixed(6));
    console.log(negatives.toFixed(6));
    console.log(nules.toFixed(6));
       
 }


// ======== SEGUNDA FORMA ==========
// const plusMinus=  (arr) => {
//     let size = arr.length; // tamanho do array
//     let positives = 0, negatives = 0, nules = 0; // contadores para os numeros
//     let porcent; //guarda a porcentagem de negativos, positivos e nulos
//     const isPositive = (n) => n > 0 && n <= 100;
//     const isNegative = (n) => n < 0 && n >= -100;

//     for(let i =0; i < size; i++)
//         isPositive(arr[i])? positives++ : isNegative(arr[i])? negatives++: nules++;
//     porcent =  positives  / size;
//     positives = porcent;
//     porcent =   negatives / size;
//     negatives = porcent;
//     porcent =  nules / size;
//     nules = porcent;
    
//     console.log(positives.toFixed(6));
//     console.log(negatives.toFixed(6));
//     console.log(nules.toFixed(6));
// }

// ======== Terceira forma ==========
// const plusMinus=  (arr) => {
//     let size = arr.length; // tamanho do array
//     let positives = 0, negatives = 0, nules = 0; // contadores para os numeros
//     const isPositive = (n) => n > 0 && n <= 100;
//     const isNegative = (n) => n < 0 && n >= -100;

//     for(let i =0; i < size; i++)
//         isPositive(arr[i])? positives++ : isNegative(arr[i])? negatives++: nules++;
 
//     positives /= size;
//     negatives /= size;
//     nules /= size;

//     console.log(positives.toFixed(6));
//     console.log(negatives.toFixed(6));
//     console.log(nules.toFixed(6));
// }

// ======== Quarta forma ==========
// const plusMinus=  (arr) => {
//     let size = arr.length; // tamanho do array
//     let numbers = [0,0,0]; // [0]-> positivos, [1]-> negativos, [2]-> nulos
//     const isPositive = (n) => n > 0 && n <= 100;
//     const isNegative = (n) => n < 0 && n >= -100;

//     //Pega o aray e conta quantos numeros positivos, negativos e nulos tem no array
//     for(let i = 0; i < size; i++)
//         isPositive(arr[i])? numbers[0]++: isNegative(arr[i])? numbers[1]++ : numbers[2]++;

//     //Calcula o percentual de cada um dos 3 com relação ai tananho do array
//     for(let i = 0; i < numbers.length; i++)
//         numbers[i] /= size;

//     //Mostra na tela o percentual de cada um
//     for(let i = 0; i < numbers.length; i++)
//         console.log(numbers[i].toFixed(6));
// }
// 

 let array = [2,2,-1,-1]; //array de teste
 plusMinus([-1, -2, 0, 0]);