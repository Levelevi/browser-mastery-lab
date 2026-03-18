const app=document.getElementById("app");
const appState = {
  // 8 pairs of numbers (1-8)
  cards: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
};
function startScreens(){
    app.innerHTML="";
    const container=document.createElement("div");
    container.classList.add("screen");
    container.dataset.status="StartScreen";
    container.innerHTML = `
        <h1>Memory Game</h1>
        <p>Are you ready to test your brain?</p>
        <button class="start-btn">Start Game</button>
    `;
    app.append(container);
}

function gameScreen() {
    app.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("game-grid"); // Changed to grid for structure
    container.dataset.status = "GameScreen";
    for (let card of appState.cards) {
        const onecard = document.createElement("div");
        onecard.classList.add("card");
        onecard.dataset.number=card;
        onecard.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back"></div>
            </div>
        `;
        container.append(onecard);
    }
    
    app.append(container);
}


function cardGame(event){
    const target=event.target;
    if(target.matches(".start-btn"))gameScreen();
    if(target.closest(".card")){
      const data=target.dataset.number;
      
    }
}

app.addEventListener("click",cardGame);
startScreens();