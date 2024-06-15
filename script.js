const input = document.getElementById("input");
const liste_container = document.getElementById("tasks_info");

let tasks = [];

function addTask(){
    let task = {
        task : input.value,
    }
    tasks.push(task);
    if(input.value === ""){
        alert("You must write something !");
    }else{
        showTasks();
    }
    input.value = "";
    saveData();
}

let deleteAllContainer = document.querySelector(".All");

function showTasks(){
    liste_container.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      liste_container.innerHTML += `
        <li>
            ${tasks[i].task}
            <span onclick="Delete()">\u00d7</span>
        </li>
        `;
    }
    deleteAllContainer.style.display = "none";

    if (tasks.length > 0) {
        deleteAllContainer.innerHTML = `
        <button onclick="DeleteAll()" class="DeleteAllBtn">Delete All tasks ${tasks.length}</button>
        `;
        deleteAllContainer.style.display = "block";
    } else {
      deleteAllContainer.style.display = "none";
    }
}

liste_container.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
})

function Delete(i){
    if(confirm("Are you sure you want to delete this task?")){
        tasks.splice(i,1);
    };
    showTasks();
    saveData();
}


function DeleteAll(){
    if(confirm("Are you want to delete all tasks ?")){
        tasks.splice(0);
    }
    showTasks();
    saveData();
}

function saveData(){
    localStorage.setItem("tasks", liste_container.innerHTML);
}
function showData(){
    liste_container.innerHTML = localStorage.getItem("tasks");
}
showData();