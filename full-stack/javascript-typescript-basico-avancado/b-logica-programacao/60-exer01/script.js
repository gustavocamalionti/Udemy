// Escreva uma função que recebe 2 números e retorne o maior deles;


function returnMaxValue(n1, n2) {
    // OPÇÃO 1
    // if (n1 > n2) {
    //     return n1;
    // } else {
    //     return n2;
    // }

    // OPÇÃO 2
    // if(n1>n2) return n1;
    // return n2;

    
    // OPÇÃO 3
   return n1>n2 ? n1 : n2;
}

const max2 = (x,y) => {
    return x > y ? x : y;
};

const max3 = (x,y) => x > y ? x : y;

console.log(returnMaxValue(3, 6));
console.log(max2(63,33));
console.log(max3(21,42));