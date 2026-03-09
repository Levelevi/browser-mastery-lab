const header=document.querySelector(".header");
const taskInput=document.getElementById("taskInput");
const board=document.querySelector(".board");
const taskContainer=document.querySelector(".task-container");
const todos=document.getElementById("todo");
const doing=document.getElementById("doing");
const done=document.getElementById("done");
const appState=[];
const todostatus=null;
function addtasks(event){
    const target=event.target;
    if(target.matches("#addTaskBtn")){
        if(taskInput.value==="")return;
        appState.push({taskTitle:taskInput.value,id: Date.now(),completed:false,})
        console.log(appState);
        taskInput.value="";
        todorender();
    }
 }

 function kanbanBoard(event){
     const target=event.target;
     if(target.matches(".move-btn")){  
          doingrender();
     }
     if(target.matches(".delete-btn")){
        const li=target.closest("li");
        const id=Number(li.dataset.id);
        deletedata(id);
     }
 };
 function deletedata(id){
    for(let i=0;i<appState.length;i++){
        if(appState[i].id===id){
            appState.splice(i,1);
            break;
        }
        todorender();
        doingrender();
    }
 }
 function doingrender(){
    doing.innerHTML="";
    for(let todo of appState){ 
    const li=document.createElement("li");
     li.classList.add("task-card");
    li.dataset.id=todo.id;
    li.innerHTML=`
     <div class="task-text">
         ${todo.taskTitle}
     </div>
     <div class="task-actions">
        <button class="move-btn">→ Done</button>
         <button class="delete-btn">✕</button>
     </div>
 `;

     doing.append(li);
    }
 }
 function todorender(){
   todos.innerHTML="";
 for(let todo of appState){ 
    const li=document.createElement("li");
     li.classList.add("task-card");
    li.dataset.id=todo.id;
    li.innerHTML=`
     <div class="task-text">
         ${todo.taskTitle}
     </div>
     <div class="task-actions">
        <button class="move-btn">→ Doing</button>
         <button class="delete-btn">✕</button>
     </div>
 `;

     todos.append(li);
    }
 }
 
board.addEventListener("click",kanbanBoard);
header.addEventListener("click",addtasks);