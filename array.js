const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits);
/*percorrendo todos os itens do array*/

for (var contador=0;contador <fruits.length;contador++){
    console.log(contador,fruits[contador]);
}

/*removendo o ultimo da lista*/

fruits.pop();
console.log(fruits);


/*Adicionando kiwi*/

fruits.push("kiwi");
console.log(fruits);

/*removendo banana e orange */

fruits.splice(0,2);
console.log(fruits);
