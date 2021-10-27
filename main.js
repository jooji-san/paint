const container = document.querySelector(".container");
let paintMode = false;
container.addEventListener("mousedown",() => paintMode = true); 
container.addEventListener("mouseup",() => paintMode = false);

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.style = "height: 10px; width: 10px; display: inline-block;";
  newDiv.addEventListener("mouseover", (e) => {
      if (paintMode) e.target.style.backgroundColor = "black";
    }
  );
  
  
  container.append(newDiv);
}

for (let i = 0; i <= 10000; i++){
  addElement();
}