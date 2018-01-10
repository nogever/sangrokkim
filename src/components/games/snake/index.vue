<template>
  <div class="game-snake">
    <div class="header">
      <p>Press spacebar to start the game<br />Use arrow keys to control the <span>snake</span></p>
    </div>
    <div class="board"></div>
    <div class="footer">
      <p>Score: <span>0</span></p>
    </div>
    <div class="backdrop">
      <h1>Game over</h1>
      <button>Restart</button>
    </div>
  </div>
</template>

<script>
import Snake from './snake';
import { initBoardCells, placeSnake, generateFrog } from './init';
import { keyHandler } from './utils';
import { animate } from './animation';

export default {
  name: 'sr-snake',
  mounted: function() {
    const container = document.querySelector('.board');
    const snake = new Snake();

    initBoardCells(container);
    placeSnake(snake);
    generateFrog(snake);

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(key) {
      if (key.which === 32) {
        animate(snake);
      }
      keyHandler(snake, key.which);
    }
  },
  destroyed: function() {
    document.removeEventListener('keydown', handleKeydown);
  },
}
</script>

<style lang="scss">
.game-snake {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Arial', 'san-serif';
  color: #444;
  font-size: 14px;
  background: #f6f9fd;
  .header,
  .footer {
    padding: 20px;
    text-align: center;
  }
  .board {
    width: 402px;
    height: 402px;
    border: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    background: white;

    .cell {
      flex: 0 0 calc(400px / 40);
      height: calc(400px / 40);
    }

    .snake {
      background: #f08f00;
    }

    .frog {
      background: #21a88e;
    }
  }
  .backdrop {
    display: none;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background .5s ease-out;

    button {
      background: #21a88e;
      border: none;
      color: white;
      border-radius: 4px;
      padding: 8px 24px;
      margin: 20px;

      &:hover {
        background: #19bc9c;
        cursor: pointer;
      }
    }

    &.game-over {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .8);
    }
  }
}
</style>
