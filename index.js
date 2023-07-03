document.addEventListener("DOMContentLoaded", function() {
   
    var mainNode = document.getElementById("main");
    if (mainNode) {
      mainNode.remove();
    }
  
    
    var newHeader = document.createElement("h1");
    newHeader.textContent = "YOUR-NAME is the champion";
    newHeader.id = "victory";
  

    document.body.appendChild(newHeader);
  });
  