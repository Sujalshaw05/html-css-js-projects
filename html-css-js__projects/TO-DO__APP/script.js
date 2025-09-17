const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-containers");

function AddTask(params) {
    if (inputBox.value==="") {
        alert("you must write some thing")
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
    }
    inputBox.value="";
}
