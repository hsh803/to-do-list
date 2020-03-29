// add list under ul by clicking input button
// Create a new list item when clicking on the "Add" button
function addList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var listTextStr = document.createTextNode(inputValue);
  li.appendChild(listTextStr);
  if (inputValue === '') {
    alert("Please fill something.");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Create a close symbol in new created list element
  var span = document.createElement("span");
  var closeSymbol = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closeSymbol);
  li.appendChild(span);

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  var list = document.getElementsByTagName("li");
  var i;
  console.log(list.length);
  console.log(list[0]);
  console.log(list[1]);
  for (i = 0; i < list.length; i++) {
    list[i].onclick = function() {
      this.classList.toggle("checked"); // why doesn't work with list[i].classList.toggle("checked");
    } 
  }

}

function reset() {
  var closeAll = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < closeAll.length; i++) {
    closeAll[i].parentElement.style.display = "none";
    }
}
