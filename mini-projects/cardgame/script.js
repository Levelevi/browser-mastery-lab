const app=document.getElementById("app");

function startScreens(){
    app.innerHTML="";
    const container=document.createElement("div");
    container.classList.add("screen");
    container.dataset.status="StartScreen";
    container.innerHTML = `
  <div class="screen start-screen">

    <h1 class="title">🎮 Focus Arena</h1>

    <p class="subtitle">
      Train your reflexes and test your mind.
    </p>

    <div class="menu">
      <button class="btn start-btn">Start Game</button>
    </div>

    <p class="hint">
      Click start and see how far you can go.
    </p>

  </div>
`;
    app.append(container);
}

function gameScreen(){
    app.innerHTML="";
     const container=document.createElement("div");
    container.classList.add("screen");
    container.dataset.status="GameScreen";
    container.innerHTML=`
    <div class="screen Game-screen">

    <h1 class="title">🎮Game Screen</h1>

    <p class="subtitle">
      Game arean is here
    </p>

    <div class="menu">
      <button class="btn start-btn">Start Game</button>
    </div>

    <p class="hint">
     choose right card
    </p>

  </div>
    `
    app.append(container);
}


function cardGame(event){
    const target=event.target;
    if(target.matches(".start-btn"))gameScreen();
}

app.addEventListener("click",cardGame);
startScreens();