const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("list");


addBtn.addEventListener ("click", () => {
 const itemText = input.value.trim ();

 

if (itemText !== "") {
const li = document.createElement("li");
li.textContent = itemText;


list.appendChild(li);

input.value = "";

input.focus();

}

});
