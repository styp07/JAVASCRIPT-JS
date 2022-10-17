/* 

    getElementById() - Seleciona un elemento por ID
    getElementByTagName() - seleciona todos los elementos que coincidan con el nombre de la etiqueta especificada
    querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
    querySelectorAll() - Devuelve todos los elementos que coincida con el grupo especificado de selectores
    

*/

let text = document.getElementById('text');
let text2 = document.getElementsByTagName('p');
let text3 = document.querySelectorAll('.text');
document.write(text);
document.write(text2);
document.write(text3);