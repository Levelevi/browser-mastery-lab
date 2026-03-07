const header=document.querySelector(".header");
const taskInput=document.getElementById("taskInput");
const board=document.querySelector(".board");
const taskContainer=document.querySelector(".task-container");
const todos=document.getElementById("todo");
const doing=document.getElementById("doing");
const done=document.getElementById("done");
const appState=[];

function addtasks(event){
    const target=event.target;
    if(target.matches("#addTaskBtn")){
        if(taskInput.value==="")return;
        appState.push({taskTitle:taskInput.value,id: Date.now(),completed:false,status:"todo"})
        console.log(appState);
        taskInput.value="";
        render();
    }
 }
 function render(){
    taskContainer.innerHTML="";
    for(let i=0;i<appState.length;i++){
        if(appState[i].status==="todo"){

for(let todo of appState){

    const li=document.createElement("li");

    li.classList.add("task-card");

    li.dataset.id=todo.id;

   li.innerHTML=`
    <div class="task-text">
        ${todo.taskTitle}
    </div>

    <div class="task-actions">
        <button class="done-btn">→ Done</button>
        <button class="delete-btn">✕</button>
    </div>
`;

    todos.append(li);

}
        }
        if(appState[i].status==="doing"){

for(let todo of appState){

    const li=document.createElement("li");

    li.classList.add("task-card");

    li.dataset.id=todo.id;

   li.innerHTML=`
    <div class="task-text">
        ${todo.taskTitle}
    </div>

    <div class="task-actions">
        <button class="delete-btn">✕</button>
    </div>
`;

    doing.append(li);
        }
        if(appState[i].status==="done"){

for(let todo of appState){

    const li=document.createElement("li");

    li.classList.add("task-card");

    li.dataset.id=todo.id;

   li.innerHTML=`
    <div class="task-text">
        ${todo.taskTitle}
    </div>

    <div class="task-actions">
        <button class="delete-btn">✕</button>
    </div>
`;

    done.append(li);
}
        }
    }
 }
}

function kanbanBoard(event){
    const target=event.target;
    if(target.matches(".Doing-btn")){
        appState.status="doing";
        console.log(appState.status);
    };
     if(target.matches(".done-btn")){
        appState.status="Done";
        console.log(appState.status);
    };
    
}





























// function kanbanBoard(event){
//     const target=event.target;
//     if(target.matches(".move-btn")){
//         appState.status="todo";    
//         // doingRender();
//     }
// };
// function render(){
// todos.innerHTML="";

// for(let todo of appState){

//     const li=document.createElement("li");

//     li.classList.add("task-card");

//     li.dataset.id=todo.id;

//    li.innerHTML=`
//     <div class="task-text">
//         ${todo.taskTitle}
//     </div>

//     <div class="task-actions">
//         <button class="move-btn">→ Doing</button>
//         <button class="delete-btn">✕</button>
//     </div>
// `;

//     todos.append(li);
// }
// }
board.addEventListener("click",kanbanBoard);
header.addEventListener("click",addtasks);