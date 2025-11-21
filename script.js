const input = document.getElementById("item-input");
const button = document.getElementById("button");
const list = document.getElementById("list");

  function adicionarItem() {
   const itemText = input.value.trim ();

   if (itemText !== "") {
   const li = document.createElement("li");

   const textElemnt = document.createElement("span");
   textElemnt.textContent = itemText;

   const removeBtn = document.createElement("button");
   removeBtn.textContent = "Remover";
   removeBtn.classList.add("remove-btn");

   textElemnt.addEventListener("click", () => {
   textElemnt.classList.toggle("checked");
   });

  removeBtn.addEventListener("click", (event) => {
   event.stopPropagation();
  li.remove();
  });

  li.appendChild(textElemnt);
  li.appendChild(removeBtn);

  list.appendChild(li);
  


  input.value = "";
  input.focus();
   
    }
 }

  button.addEventListener("click", () => {
  adicionarItem(); 
  });

 input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      adicionarItem();
    }
  }); 
