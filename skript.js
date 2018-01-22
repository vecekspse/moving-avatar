'use strict'
class Game {
  constructor(player, playground, playerX = 0, playerY = 0) {
    this.dimensionX = playground.offsetWidth
    this.dimensionY = playground.offsetHeight
    this.playerX = playerX
    this.playerY = playerY
    this.player = player
    this.render()
  }
  checkMove(left, top) {
    let playerLeft = this.playerX + left
    let playerTop = this.playerY + top
    let playerRight = playerLeft + this.player.getBoundingClientRect().width
    let playerBottom = playerTop + this.player.getBoundingClientRect().height
    // TODO kontrola
    if (playerLeft >= 0 && playerRight < this.dimensionX 
        && playerTop >= 0 && playerBottom < this.dimensionY) {
      return true
    }
  }
  move(left, top) {
    if (this.checkMove(left, top)) {
      this.playerX = this.playerX + left
      this.playerY = this.playerY + top
      this.render()
    }
  }
  render() {
    player.style.left = this.playerX + 'px'
    player.style.top = this.playerY + 'px'
  }
}
const playground = document.querySelector('.playground')
const player = playground.querySelector('#avatar')
let game = new Game(player, playground)

window.addEventListener('keypress', movePlayer)

function movePlayer(evt) {
  if(evt.code == 'KeyW') {
    game.move(0, -10)
  }
  if(evt.code == "KeyS") {
    game.move(0, 10)
  }
  if(evt.code == 'KeyA') {
    game.move(-10, 0)
  }
  if(evt.code == "KeyD") {
    game.move(10, 0)
  }

}
