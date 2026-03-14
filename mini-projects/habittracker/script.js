const app=document.querySelector(".app");
const habitInput=document.getElementById("habitInput");
const habitlist=document.querySelector(".habit-list");
const appstate=[];
let streak=0;
function thisapp(event){
    const target=event.target;
    if(target.matches("#addHabitBtn")){
        assigndata();
    }
    if(target.matches(".done-btn")){
        console.log("done btn is clicked");
        const div=target.closest(".habit-card");
        const id=Number(div.dataset.id);
       done(id);
    }
    
};
function done(id){
    console.log(id);
    console.log("the fucntion is done running now");
    for(let habit of appstate){
        if(habit.id===id){
            streak++;
            habit.streak++;
            habit.doneToday=true;
            console.log(habit);
            break;
        };
    }
    render();
}
function assigndata(){
    if(habitInput.value==="")return console.log("plz fill it");
    appstate.push({
      id: Date.now(),
      name: habitInput.value,
      streak: 0,
      doneToday: false
    })
    habitInput.value="";
    render();
}

function render(){
habitlist.innerHTML="";
for(let habit of appstate){
    const div=document.createElement("div");
    div.classList.add("habit-card");
    div.dataset.id=habit.id;
    div.innerHTML=`
    <span class="habit-name">${habit.name}</span>
            <div class="habit-actions">
                <span class="streak">${habit.streak}</span>
                <button class="done-btn">Done</button>
                <button class="delete-btn">X</button>
            </div>`;
            habitlist.append(div);
}
}


app.addEventListener("click",thisapp);