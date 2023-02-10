<template>
<div class="game-comp">
  <div class="title-text">
    Wanna play ?
  </div>
  <div class="txt-container">
    <div class="wrapper">
      ./game_instructions
    </div>
      <div class="wrapper">
        <p>
          Play tic-tac-toe with me ! <br/>
          This game was entirely created with HTML, CSS and Javascript. <br/>
          It is impossible for you to win, but one first good move can lead to a draw. <br/>
          The MiniMax algorithm calculates the best move on every turn. <br/>
          You can reset the game by refreshing the page.
        </p>
        
    </div>
  </div>
  <div id="board" class="board">
    <div class="row">
      <div id="sq1" class="square odd">
        <svg class="aiToken" width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.70312 0.5625L11.5391 11.4609L18.375 0.5625H22.7695L13.7852 14.6445L22.9844 29H18.5508L11.5391 17.8867L4.52734 29H0.09375L9.29297 14.6445L0.308594 0.5625H4.70312Z" fill="cyan"/>
        </svg>
      </div>
      <div id="sq2" v-on:click="playerTurn" class="square even">

      </div>
      <div id="sq3" v-on:click="playerTurn" class="square odd">

      </div>
    </div>
    <div class="row">
      <div id="sq4" v-on:click="playerTurn" class="square even">

      </div>
      <div id="sq5" v-on:click="playerTurn" class="square odd">

      </div>
      <div id="sq6" v-on:click="playerTurn" class="square even">

      </div>
    </div>
    <div class="row">
      <div id="sq7" v-on:click="playerTurn" class="square odd">

      </div>
      <div id="sq8" v-on:click="playerTurn" class="square even">

      </div>
      <div id="sq9" v-on:click="playerTurn" class="square odd">

      </div>
    </div>
  </div>

</div>
</template>

<script>

import gsap from 'gsap'

export default {
  name: "GameComp",
  methods: {
    playerTurn(event) {
      let id = event.target.id
      let index = id.replace(/\D/g,'')
      if (this.gameState.board[parseInt(index) - 1] === 0) {
        event.target.innerHTML += "<svg style='width: 80%; height: 80%' class='playerToken' width=\"23\" height=\"30\" viewBox=\"0 0 23 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M22.9258 13.8828V15.6797C22.9258 17.8151 22.6589 19.7292 22.125 21.4219C21.5911 23.1146 20.8229 24.5534 19.8203 25.7383C18.8177 26.9232 17.6133 27.8281 16.207 28.4531C14.8138 29.0781 13.2513 29.3906 11.5195 29.3906C9.83984 29.3906 8.29688 29.0781 6.89062 28.4531C5.4974 27.8281 4.28646 26.9232 3.25781 25.7383C2.24219 24.5534 1.45443 23.1146 0.894531 21.4219C0.334635 19.7292 0.0546875 17.8151 0.0546875 15.6797V13.8828C0.0546875 11.7474 0.328125 9.83984 0.875 8.16016C1.4349 6.46745 2.22266 5.02865 3.23828 3.84375C4.25391 2.64583 5.45833 1.73438 6.85156 1.10938C8.25781 0.484375 9.80078 0.171875 11.4805 0.171875C13.2122 0.171875 14.7747 0.484375 16.168 1.10938C17.5742 1.73438 18.7786 2.64583 19.7812 3.84375C20.7969 5.02865 21.5716 6.46745 22.1055 8.16016C22.6523 9.83984 22.9258 11.7474 22.9258 13.8828ZM19.1953 15.6797V13.8438C19.1953 12.151 19.0195 10.6536 18.668 9.35156C18.3294 8.04948 17.8281 6.95573 17.1641 6.07031C16.5 5.1849 15.6862 4.51432 14.7227 4.05859C13.7721 3.60286 12.6914 3.375 11.4805 3.375C10.3086 3.375 9.2474 3.60286 8.29688 4.05859C7.35938 4.51432 6.55208 5.1849 5.875 6.07031C5.21094 6.95573 4.69661 8.04948 4.33203 9.35156C3.96745 10.6536 3.78516 12.151 3.78516 13.8438V15.6797C3.78516 17.3854 3.96745 18.8958 4.33203 20.2109C4.69661 21.513 5.21745 22.6133 5.89453 23.5117C6.58464 24.3971 7.39844 25.0677 8.33594 25.5234C9.28646 25.9792 10.3477 26.207 11.5195 26.207C12.7435 26.207 13.8307 25.9792 14.7812 25.5234C15.7318 25.0677 16.5326 24.3971 17.1836 23.5117C17.8477 22.6133 18.349 21.513 18.6875 20.2109C19.026 18.8958 19.1953 17.3854 19.1953 15.6797Z\" fill=\"lime\"/>\n" +
            "</svg>";
        this.gameState.board[parseInt(index) - 1] = 2
        this.AITurn()
      }
    },
    AITurn() {
      // Joue le meilleur coup possible

      let tempBoard = this.gameState.board
      let bestMove = this.findBestMove(tempBoard) + 1

      // Ajoute image dans la case
      let docCase = document.getElementById(`sq${bestMove}`)
      docCase.innerHTML += "<svg style='width: 80%; height: 80%' class=\"aiToken\" width=\"23\" height=\"30\" viewBox=\"0 0 23 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
          "          <path d=\"M4.70312 0.5625L11.5391 11.4609L18.375 0.5625H22.7695L13.7852 14.6445L22.9844 29H18.5508L11.5391 17.8867L4.52734 29H0.09375L9.29297 14.6445L0.308594 0.5625H4.70312Z\" fill=\"cyan\"/>\n" +
          "        </svg>";

      // Ajuste le board
      this.gameState.board[bestMove -1] = 1
      if (this.isOver(this.gameState.board) !== 0) {
        this.over = true
        this.winner = this.isOver(this.gameState.board)
      }
      if (this.isDraw(this.gameState.board)) {
        this.draw = true
      }
    },
    miniMax(board, depth, isMax) {

      //If the game is over, return winner
      let winner = this.isOver(board)

      // AI won
      if (winner === 1) {
        return 10
      }
      // Player won
      if (winner === 2) {
        return -10
      }

      // Drawn game
      if (this.isDraw(board)) {
        return 0
      }

      if (isMax) {

        let best = null

        // Verifier toutes les cases
        for (let i = 0; i < board.length; i++) {

          // Si la case est vide
          if (board[i] === 0) {

            // Jouer le coup
            board[i] = 1

            // Call de miniMax pour evaluer le potentiel du coup
            best = Math.max(best, this.miniMax(board, depth++, !isMax))

            // Defaire le coup
            board[i] = 0
          }
        }

        return best

      }
      else {

        let best = 1000

        // Verifier toutes les cases
        for (let i = 0; i < board.length; i++) {

          // Si la case est vide
          if (board[i] === 0) {

            // Jouer le coup
            board[i] = 2

            // Call de miniMax pour evaluer le potentiel du coup
            best = Math.min(best, this.miniMax(board, depth++, !isMax))

            // Defaire le coup
            board[i] = 0
          }
        }
        return best
      }



    },
    findBestMove(board) {
      //Retourne index du best coup

      let best = 0
      let bestMoveIndex

      // Traverser toutes les cases
      for (let i = 0; i < board.length; i++) {

        // Verifier si la case est libre
        if (board[i] === 0) {

          //Jouer le coup
          board[i] = 1

          // Determiner la valeur de ce coup
          let moveVal = this.miniMax(board, 0, false)

          // Defaire le coup
          board[i] = 0

          // Update du best coup
          if (moveVal >= best) {
            bestMoveIndex = i
            best = moveVal
          }

        }
      }
      return bestMoveIndex

    },
    isDraw(board) {
      // Returns bool
      for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) {
          return false
        }
      }
      return true
    },
    isOver(board) {

      //Verifier les rangees
      if (board[0] === board[1] && board[1] === board[2]) {
        this.winning_combo = [0, 1, 2]
        return board[0]
      }
      if (board[3] === board[4] && board[4] === board[5]) {
        this.winning_combo = [3, 4, 5]
        return board[3]
      }
      if (board[6] === board[7] && board[7] === board[8]) {
        this.winning_combo = [6, 7, 8]
        return board[6]
      }

      //Verifier les colonnes
      if (board[0] === board[3] && board[3] === board[6]) {
        this.winning_combo = [0, 3, 6]
        return board[0]
      }
      if (board[1] === board[4] && board[4] === board[7]) {
        this.winning_combo = [1, 4, 7]
        return board[1]
      }
      if (board[2] === board[5] && board[5] === board[8]) {
        this.winning_combo = [2, 5, 8]
        return board[2]
      }

      //Verifier les diagonales
      if (board[0] === board[4] && board[4] === board[8]) {
        this.winning_combo = [0, 4, 8]
        return board[0]
      }
      if (board[2] === board[4] && board[4] === board[6]) {
        this.winning_combo = [2, 4, 6]
        return board[2]
      }

      // Aucun gagnant
      return 0
    },
    rejouer() {
      this.gameState.board = [1, 0, 0, 0, 0, 0, 0, 0, 0]
      this.draw = false
      this.winner = 0
      this.over = false
      let firstSq = document.getElementById("sq1")
      firstSq.classList.remove("disabled")
      gsap.killTweensOf(".winner-square")
      for (let i = 1; i < this.gameState.board.length; i++) {
        let elem = document.getElementById(`sq${i + 1}`)
        elem.innerHTML = ""
        elem.classList.remove("disabled")
      }
    }

  },
  mounted() {

  },
  data() {
    return {
      gameState: {
        board: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      draw: false,
      winner: 0,
      over: false,
      winning_combo: []
    }
  },
  watch: {
    draw: function() {
      for (let i = 0; i < this.gameState.board.length; i++) {
        let elem = document.getElementById(`sq${i+1}`)
        elem.classList.add("disabled")
      }
    },
    over: function() {
      for (let i = 0; i < this.gameState.board.length; i++) {
        let elem = document.getElementById(`sq${i + 1}`)
        elem.classList.add("disabled")
        for (let i = 0; i < this.winning_combo.length; i++) {
          let win_sq = document.getElementById(`sq${this.winning_combo[i] + 1}`)
          win_sq.classList.add("winner-square")

          let tl = gsap.timeline({repeat: -1, yoyo: true})
          tl.fromTo(
              ".winner-square",
              { rotation: -5 },
              {
                duration: 2,
                rotation: 5,
                yoyo: true,
                repeat: -1,
                transformOrigin: "center center",
                ease: "sine.inOut"
              })
        }
      }

    }
  }
}
</script>

<style scoped>
.title-text {
  text-align: center;
  margin: 30px;
  font-size: 120px;
  font-family: "Arvo", sans-serif;
}

.wrapper {
  display: grid;
}

.txt-container {
    margin: 2rem;
    text-justify: auto;
}

.wrapper {
    border-radius: 1px;
    border-color: black;
    border-style: solid;
    font-family: "Arvo", sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0;
    margin-inline: auto;
    max-width: 50rem;
    padding-inline: 1rem;
}

.square {
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square:hover {
  animation-name: hoverAnim;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

}

@keyframes hoverAnim {
  to{
    scale: 1.05;
    box-sizing: border-box;
    border-style: solid;
    border-color: blue;
    border-width: 3px;
    border-radius: 3px;
  }
}

.odd {
  background-color: magenta;
}

.even {
  background-color: yellow;
}

.board {
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.game-comp {
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150vh;
}

.aiToken {
  width: 80%;
  height: 80%;
}

.playerToken {
  width: 80%;
  height: 80%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.disabled {
  pointer-events: none;
  opacity: 0.3;
}

.winner-square {
  opacity: 1 !important;
  z-index: 9;
}

@media screen and (max-width: 1250px) {

  .wrapper {
    font-size: 12px;
  }

  .title-text {
    font-size: 80px;
  }

  .game-comp {
    height: 100vh;
  }

  .square {
    height: 7rem;
    width: 7rem;
  }
}

@media screen and (max-width: 700px) {
  .square {
    height: 5rem;
    width: 5rem;
  }
}

@media screen and (max-width: 500px) {
  .square {
    height: 4rem;
    width: 4rem;
  }
}

@media screen and (max-width: 385px) {
  .square {
    height: 3.5rem;
    width: 3.5rem;
  }
}

</style>