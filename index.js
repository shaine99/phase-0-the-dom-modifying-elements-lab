const main= document.querySelector('main#main') 
console.log(main)
main.remove()
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Shaine is the champion"