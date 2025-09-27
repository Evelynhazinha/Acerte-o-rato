const score = document.querySelector('.score span')
const holes = document.querySelectorAll('.hole')
const start_btn = document.querySelector('.buttons .start')
const stop_btn = document.querySelector('.buttons .stop')
const cursor = document.querySelector('.hammer img')

let points = 0
let round = 1
let gameActive = false
let activeRats = []

function bloquearZoom() {
  let meta = document.querySelector("meta[name=viewport]");
  meta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
}

function liberarZoom() {
  let meta = document.querySelector("meta[name=viewport]");
  meta.setAttribute("content", "width=device-width, initial-scale=1.0");
}

if (window.innerWidth <= 500) {
// martelo segue o cursor
window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + "px"
  cursor.style.left = e.pageX + "px"
})

window.addEventListener('click', () => {
  cursor.style.animation = 'none'
  setTimeout(() => cursor.style.animation = '', 101)
})

// iniciar jogo
start_btn.addEventListener('click', () => {
  start_btn.style.display = 'none'
  stop_btn.style.display = 'inline-block'
  score.innerText = 0
  points = 0
  round = 1
  gameActive = true
  startRound()
})

// parar jogo manualmente
stop_btn.addEventListener('click', endGame)

function startRound() {
  if (!gameActive) return

  let ratsToShow = Math.min(round, 5) // máx. 5 ratos
  let timeVisible = Math.max(300, 1000 - (round - 1) * 200) // cada vez mais rápido
  let clickedThisRound = 0

  activeRats = []

  // escolher buracos aleatórios
  let available = [...holes]
  for (let i = 0; i < ratsToShow; i++) {
    let rand = Math.floor(Math.random() * available.length)
    let hole = available.splice(rand, 1)[0]
    showRat(hole, timeVisible)
    activeRats.push(hole)
  }

  // checar fim da rodada
  setTimeout(() => {
    if (clickedThisRound < ratsToShow) {
      endGame() // perdeu
    } else {
      round++
      setTimeout(startRound, 800) // próxima rodada
    }
  }, timeVisible + 100)

  // clique conta ponto
  holes.forEach(hole => {
    hole.onclick = () => {
      if (activeRats.includes(hole)) {
        points++
        score.innerText = points
        hole.innerHTML = '' // tira rato
        clickedThisRound++
        activeRats = activeRats.filter(h => h !== hole)
      }
    }
  })
}

function showRat(hole, duration) {
  let img = document.createElement('img')
  img.src = "img/rato.png"
  img.classList.add('rat')
  hole.appendChild(img)

  setTimeout(() => {
    if (hole.contains(img)) {
      img.remove()
    }
  }, duration)
}

function restartGame(){
  const msg=document.getElementById("mensagemjogo")
  const escurecer = document.getElementById("overlay")
  escurecer.style.display="none"
  msg.style.display='none'
  score.innerText = 0
  points=0
  round=1
  
  start_btn.style.display='inline-block'
  stop_btn.style.display='none'
}

function endGame() {
  gameActive = false
  stop_btn.style.display = 'none'
  start_btn.style.display = 'inline-block'

  const escurecer = document.getElementById("overlay")
  const msg=document.getElementById("mensagemjogo")
  msg.innerHTML = `
    <p>Game Over! Pontos: ${points}</p>
    <button onclick="restartGame()">Jogar Novamente</button>
  `
  escurecer.style.display="block"
  msg.style.display="block"

  }
}

// martelo segue o cursor
window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + "px"
  cursor.style.left = e.pageX + "px"
})

window.addEventListener('click', () => {
  cursor.style.animation = 'none'
  setTimeout(() => cursor.style.animation = '', 101)
})

// iniciar jogo
start_btn.addEventListener('click', () => {
  start_btn.style.display = 'none'
  stop_btn.style.display = 'inline-block'
  score.innerText = 0
  points = 0
  round = 1
  gameActive = true
  startRound()
})

// parar jogo manualmente
stop_btn.addEventListener('click', endGame)

function startRound() {
  if (!gameActive) return

  let ratsToShow = Math.min(round, 5) // máx. 5 ratos
  let timeVisible = Math.max(300, 1000 + (round - 1) * 100) 
  let clickedThisRound = 0

  activeRats = []

  // escolher buracos aleatórios
  let available = [...holes]
  for (let i = 0; i < ratsToShow; i++) {
    let rand = Math.floor(Math.random() * available.length)
    let hole = available.splice(rand, 1)[0]
    showRat(hole, timeVisible)
    activeRats.push(hole)
  }

  // checar fim da rodada
  setTimeout(() => {
    if (clickedThisRound < ratsToShow) {
      endGame() // perdeu
    } else {
      round++
      setTimeout(startRound, 800) // próxima rodada
    }
  }, timeVisible + 100)

  // clique conta ponto
  holes.forEach(hole => {
    hole.onclick = () => {
      if (activeRats.includes(hole)) {
        points++
        score.innerText = points
        hole.innerHTML = '' // tira rato
        clickedThisRound++
        activeRats = activeRats.filter(h => h !== hole)
      }
    }
  })
}

function showRat(hole, duration) {
  let img = document.createElement('img')
  img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png'
  img.classList.add('rat')
  hole.appendChild(img)

  setTimeout(() => {
    if (hole.contains(img)) {
      img.remove()
    }
  }, duration)
}

function restartGame(){
  const msg=document.getElementById("mensagemjogo")
  const escurecer = document.getElementById("overlay")
  escurecer.style.display="none"
  msg.style.display='none'
  score.innerText = 0
  points=0
  round=1
  
  start_btn.style.display='inline-block'
  stop_btn.style.display='none'
}

function endGame() {
  gameActive = false
  stop_btn.style.display = 'none'
  start_btn.style.display = 'inline-block'

  const escurecer = document.getElementById("overlay")
  const msg=document.getElementById("mensagemjogo")
  msg.innerHTML = `
    <p>Game Over! Pontos: ${points}</p>
    <button onclick="restartGame()">Jogar Novamente</button>
  `
  escurecer.style.display="block"
  msg.style.display="block"

}
