<script setup>
import { ref , onMounted , watchEffect } from 'vue';

import cardBack from '../assets/image/gameImages/flipCard/back.png';
import front1 from '../assets/image/gameImages/flipCard/front1.png';
import front2 from '../assets/image/gameImages/flipCard/front2.png';
import front3 from '../assets/image/gameImages/flipCard/front3.png';
import front4 from '../assets/image/gameImages/flipCard/front4.png';
import front5 from '../assets/image/gameImages/flipCard/front5.png';
import front6 from '../assets/image/gameImages/flipCard/front6.png';
import front7 from '../assets/image/gameImages/flipCard/front7.png';
import front8 from '../assets/image/gameImages/flipCard/front8.png';
import router from '@/router';

let view = ref( 'gameSelect' );

onMounted( () => {
  
} );

//CARD FLIP GAME
//TODO- FINISH THE WINNING PART TO CLAIM PRIZE
const cards = [
  { id: 1 , front: front1 , back: cardBack , pointsValue: 1 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 2 , front: front2 , back: cardBack , pointsValue: 2 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 3 , front: front3 , back: cardBack , pointsValue: 3 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 4 , front: front4 , back: cardBack , pointsValue: 4 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 5 , front: front5 , back: cardBack , pointsValue: 5 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 6 , front: front6 , back: cardBack , pointsValue: 6 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 7 , front: front7 , back: cardBack , pointsValue: 7 , isWinner: false , isFlipped: false , isDisabled: false } ,
  { id: 8 , front: front8 , back: cardBack , pointsValue: 8 , isWinner: false , isFlipped: false , isDisabled: false } ,
];
const newCardGame = ref( [] );
const userSelection = ref( [] );
let isWinner = false; // set the winning banner or something to move on to claiming prize
let isWinnerIconVisible = ref( false );
const setGame = ( game ) => {
  view.value = game;
  if ( game === 'cardFlip' ) {
    createNewCardGame();
  }
  if ( game === 'slotMachine' ) {
    createNewCardGame();
  }
  if ( game === 'spinTheWheel' ) {
    createNewSpinGame();
  }
  if ( game === 'gameSelect' ) {
    //reset card flip game
    isWinner = false;
    userSelection.value = [];
    isWinnerIconVisible.value = false;
    
    //reset spin the wheel
    newSpinGame.value = [];
    prizeReverse.value = [];
  }
  
  //TODO - clear out all values set for the winning set
  if ( isWinnerIconVisible.value ) {
    isWinnerIconVisible.value = false;
    userSelection.value.splice( 0 , userSelection.value.length );
  }
};
const createNewCardGame = () => {
  //copy cards array
  const copyAllCards = cards.map( item => item );
  
  //select a random from the cards array
  let randomCard = Math.floor( Math.random() * copyAllCards.length );
  
  //select random winner
  const randomWinner = copyAllCards[ randomCard ];
  
  //duplicate winning card selection to new game array
  for ( let i = 0 ; i <= 1 ; i++ ) {
    newCardGame.value[ i ] = { ...randomWinner };
    newCardGame.value[ i ].isWinner = true;
  }
  
  //remove winning card from copy cards array
  copyAllCards.splice( copyAllCards.indexOf( randomWinner ) , 1 );
  
  //build random game to fill remaining cards
  for ( let i = 2 ; i <= 8 ; i++ ) {
    //new random number
    let randomCardSelection = Math.floor( Math.random() * copyAllCards.length );
    newCardGame.value[ i ] = { ...copyAllCards[ randomCardSelection ] };
    copyAllCards.splice( randomCardSelection , 1 );
  }
  
  //shuffle game
  newCardGame.value.sort( () => Math.random() - 0.5 );
  
  return newCardGame;
};
const toggleCard = ( card ) => {
  if ( !card.isDisabled ) {
    if ( !card.isFlipped ) {
      card.isFlipped = true;
      
      if ( card.isWinner ) {
        userSelection.value.push( card );
      }
      
      if ( userSelection.value.length === 2 ) {
        for ( card of newCardGame.value ) {
          card.isDisabled = true;
        }
        setTimeout( toggleWinnerIcon , 1000 );
        
      }
      
    }
  }
};
const toggleWinnerIcon = () => {
  isWinnerIconVisible.value = true;
};

//SPIN THE WHEEL GAME
//TODO- FINISH THE WINNING PART TO CLAIM PRIZE

let wheel = null;
let spinButton = null;
let deg = 0;
let zoneSize = 0;
const newSpinGame = ref( [] );
let prizeReverse = ref( [] );
let winningGame = [];
const SpinPrizes = ref( [
  {
    prizeName: '5 Points' ,
    name: 'fivePoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '10 Points' ,
    name: 'tenPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '15 Points' ,
    name: 'fifteenPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '20 Points' ,
    name: 'twentyPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '25 Points' ,
    name: 'twentyFivePoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '50 Points' ,
    name: 'fiftyPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '100 Points' ,
    name: 'oneHundredPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '200 Points' ,
    name: 'twoHundredPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '250 Points' ,
    name: 'twoHundredAndFiftyPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '500 Points' ,
    name: 'fiveHundredPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' ,
    selectedBgColour: '#000000' ,
  } ,
  {
    prizeName: '1000 Points' ,
    name: 'oneThousandPoints' ,
    isWinner: false ,
    isSpinAgain: false ,
    isSelected: false ,
    bgColour: '#88BE66' /*'#67b899'*/ ,
    selectedBgColour: '#000000' ,
  } ,
] );
const degrees = ref( [
  { deg: 9000 } ,
  { deg: 5705 } ,
  { deg: 10000 } ,
  { deg: 6000 } ,
  { deg: 7000 } ,
  { deg: 9500 } ,
  { deg: 8000 } ,
  { deg: 10500 } ,
] );
const isSpinning = ref( false );
let isWinningSpin = ref(false)
const createNewSpinGame = () => {
  //copy prizes
  const copySpinPrizes = SpinPrizes.value.map( item => item );
  
  //select random number based on prizes
  let randomSelection = Math.floor( Math.random() * copySpinPrizes.length );
  
  //set winning zone/ prize
  copySpinPrizes[ randomSelection ].isWinner = true;
  copySpinPrizes[ randomSelection ].deg = 9000;
  copySpinPrizes[ randomSelection ].id = 1;
  copySpinPrizes[ randomSelection ].isSelected = true;
  
  //add winning zone to new game
  newSpinGame.value.push( copySpinPrizes[ randomSelection ] );
  
  //remove winning zone/prize
  copySpinPrizes.splice( copySpinPrizes[ randomSelection ] , 1 );
  
  for ( let i = 1 ; i <= 7 ; i++ ) {
    if ( i % 2 !== 0 ) {
      newSpinGame.value.push(
          {
            id: i + 1 ,
            name: 'Spin Again' ,
            prizeName: 'Spin Again' ,
            bgColour: '#0AB285' /*'#67b899', #46b66d*/ ,
            selectedBgColour: '#000000' ,
            isWinner: false ,
            isSpinAgain: true ,
            isSelected: true ,
            deg: degrees.value[ i ].deg ,
          } ,
      );
    }
    else {
      let randomNumber = Math.floor( Math.random() * copySpinPrizes.length );
      copySpinPrizes[ randomNumber ].isSelected = true;
      copySpinPrizes[ randomNumber ].deg = degrees.value[ i ].deg;
      copySpinPrizes[ randomNumber ].id = i + 1;
      newSpinGame.value[ i ] = { ...copySpinPrizes[ randomNumber ] };
      copySpinPrizes.splice( randomNumber , 1 );
    }
  }
  
  //reverse the prizes to show the right zone/ prize after spinning
  prizeReverse.value = newSpinGame.value.map( item => item ).reverse();
  
  //
  winningGame = newSpinGame.value.filter( item => item.isWinner || item.isSpinAgain );
  
  return newSpinGame;
  
};
const generateRandom = ( min , max ) => {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
};
const handleWin = (actualDeg) => {
            const winningNum = Math.round(actualDeg / zoneSize);

            if (actualDeg < 44) {
                  newSpinGame.value[winningNum].name;

                  //set time out before changing style
                  setTimeout(() => {
                        newSpinGame.value[winningNum].isSelected = true;
                  }, 2000);
            } else {
                  prizeReverse.value[winningNum - 1].name;

                  setTimeout(() => {
                        prizeReverse.value[winningNum - 1].isSelected = true;
                  }, 2000);
            }
            if (newSpinGame.value[winningNum].isWinner) {
              isWinningSpin.value = true
              console.log('WINNER')

              setTimeout(() => {
                isWinningSpin.value = true;
              }, 3000);
            }
};

watchEffect( () => {
  if ( view.value === 'spinTheWheel' ) {
    console.log( 'spinTheWheel' );
    setTimeout( () => {
      wheel = document.querySelector( '.wheel' );
      spinButton = document.querySelector( '.spinButton' );
      zoneSize = 360 / newSpinGame.value.length; // get the size of zones on all sections
      let randomDeg = 0;
      
      spinButton.addEventListener( 'click' , () => {
        randomDeg = generateRandom( 0 , winningGame.length - 1 );
        deg = Math.ceil( winningGame[ randomDeg ].deg );
        wheel.style.transition = 'all 10s ease-in-out';
        wheel.style.transform = `rotate(${ deg }deg)`;
      } );
      
      wheel.addEventListener( 'transitionend' , () => {
        const actual = deg % 360;
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${ actual }deg)`;
        handleWin( actual );
        winningGame.splice( randomDeg , 1 );
      } );
    } , 250 );
    
    setTimeout( () => {
      for ( let i = 0 ; i <= newSpinGame.value.length - 1 ; i++ ) {
        newSpinGame.value[ i ].isSelected = false;
      }
    } , 5000 );
  }
} );

// SLOT MACHINE
//TODO- FINISH THE WINNING PART TO CLAIM PRIZE

const iconHeight = 79;
const numberIcons = 9;
const timePerIcon = 100;
const indexes = [ 0 , 0 , 0 ];
let isRolling = ref( false );
const iconMap = [ 'banana' , 'seven' , 'cherry' , 'plum' , 'orange' , 'bell' , 'bar' , 'lemon' , 'watermelon' ];
const numberPlay = ref( 0 );
let isWinnerSlots = ref(false)
const roll = (reel, offset = 0) => {
            const numberOfRounds = (offset + 2) * numberIcons + Math.round(Math.random() * numberIcons);

            const style = getComputedStyle(reel);
            const backgroundPositionY = parseFloat(style["background-position-y"]);
            const targetBackgroundPositionY = backgroundPositionY + numberOfRounds * iconHeight;
            const normalizeBackgroundPositionY = targetBackgroundPositionY % (numberIcons * iconHeight);

            return new Promise((resolve, reject) => {

                  reel.style.transition = `background-position-y ${8 + numberOfRounds * timePerIcon}ms cubic-bezier(.45, .05, .58, 1.09)`;
                  reel.style.backgroundPositionY = `${targetBackgroundPositionY}px`;

                  setTimeout(() => {
                        reel.style.transition = `none`;
                        reel.style.backgroundPositionY = `${normalizeBackgroundPositionY}px`;
                        resolve(numberOfRounds * timePerIcon);



                  }, 8 + numberOfRounds * timePerIcon);


            });
      };

function rollAll() {
      const reelList = document.querySelectorAll(".reel");
      isRolling.value = true // disables roll button
      isWinnerSlots.value = false

      Promise.all(
            [...reelList].map((reel, i) => roll(reel, i))
      )
      .then((datas) => {
            datas.forEach(( data, i ) => indexes[i] = (indexes[i] + data) % numberIcons)
            indexes.map(( i ) => console.log('STOPPED ON', iconMap[i])) // logs each reel once stopped

            // Winning condition
            if(indexes[0] === indexes[1] || indexes[0] === indexes[2] || indexes[1] === indexes[2] || indexes[0] === indexes[1] === indexes[2]) {
                  let rollCount = 0
                  rollCount += 1
                  if (rollCount >= 1 ) {
                  console.log('Winner')
                    isWinnerSlots.value = true
                  }
            }

        isRolling.value = false // enables roll button
      })
}

watchEffect( () => {
  if ( view.value === 'slotMachine' ) {
    setTimeout( rollAll , 1000 );
  }
} );

const home = () => {
  router.push( '/' );
};

</script>

<style scoped lang="scss">
.gameSelect {

  .gameWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    .gameBox {
      border: 1px solid red;
      width: 15em;
      height: 15em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1em;

      button {
        width: 100%;
        height: 100%;
        border: none;
        background: #FFFFFF;
      }
    }
  }
}

.flipCard {
  position: relative;
  height: 90vh;

  button {
    position: relative;
    z-index: 1;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;

    .card {
      margin: 0.5rem;
      position: relative;
      width: 7rem;
      height: 7rem;
      cursor: pointer;
      transform-style: preserve-3d;
      transform-origin: center right;
      transition: transform 1s;
      border: 1px solid #20314B;
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

      .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        backface-visibility: hidden;
        object-fit: contain;

        &.front {
          background-size: cover;
        }

        &.back {
          transform: rotateY(180deg);
        }
      }
    }

    .flipped {
      transform: translateX(-100%) rotateY(-180deg);
    }

    .imageWinOverlay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 9;
      animation: rotate 1s infinite;

      .bi-star {
        color: #FFD700;
        font-size: 5rem;
      }
    }
  }

  @keyframes rotate {
    0% {
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(360deg);
    }
  }
}

.spinTheWheel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 100vh;
  overflow: hidden;
  background-color: #131417;
  position: relative;

  .backButton {
    position: absolute;
    top: 0.7em;
    right: 0;
  }


  .container {
    position: relative;
    width: 320px;
    min-width: 300px;
    height: 320px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .spinButton, .spinning {
      position: absolute;
      width: 97px;
      height: 97px;
      background: #FFFFFF;
      border-radius: 50%;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: 600;
      color: #333333;
      letter-spacing: 0.1em;
      border: 4px solid rgba(0, 0, 0, 0.75);
      cursor: pointer;
      user-select: none;

      &:before {
        content: '';
        position: absolute;
        top: -28px;
        width: 20px;
        height: 30px;
        background: #FFFFFF;
        clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
      }
    }

    .wheel {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #444857;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 0 5px #333333, 0 0 0 15px #FFFFFF, 0 0 0 18px #111111;

      .number {
        position: absolute;
        width: 50%;
        height: 50%;
        background: var(--colour);
        transform-origin: bottom right;
        transform: rotate(calc(45deg * var(--index)));
        clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;

        span {
          position: relative;
          transform: rotate(45deg);
          font-size: 0.7em;
          font-weight: 700;
          color: #FFFFFF;
          text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}

.slotMachine {
  $icon_width: 79px;
  $icon_height: 79px;
  $number_icons: 9;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slots {
    width: 5 * $icon_width;
    height: auto;
    border: 1px solid red;
    padding: 0.2 * $icon_height;
    display: flex;
    justify-content: space-evenly;

    .reel {
      border: 1px solid black;
      width: $icon_width;
      height: 3 * $icon_height;
      background-image: url("../assets/image/gameImages/slotMachine/slotreel.webp");
      background-repeat: repeat-y;
      background-position: 0 0;
    }
  }

  button, .btn-primary {
    cursor: pointer;
    background: red;
    border-radius: 50%;
    width: 6em;
    height: 6em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-top: 1em;
  }
}


@media (min-height: 576px) {
  .flipCard {
    .cardContainer {
      .card {
        width: 6rem;
        height: 6rem;
      }
    }
  }

  .spinTheWheel {
    .container {
      .spinButton, .spinning {
        width: 100px;
        height: 100px;
        font-size: 1.6em;
      }

      .spinning {
        font-size: 1em;
      }
    }
  }
}

@media (min-width: 768px) {
  .gameSelect {
    height: 75vh;

    .gameWrapper {
      flex-direction: row;
    }
  }

  .slotMachine {
    flex-direction: row;

    button, .btn-primary {
      margin-top: 0;
    }
  }
}

@media (min-width: 768px) and (min-height: 1000px) {
  .flipCard {
    .cardContainer {
      .card {
        width: 13rem;
        height: 13rem;
      }

      .imageWinOverlay {
        .bi-star {
          font-size: 10rem;
        }
      }
    }
  }

  .spinTheWheel {
    .container {
      width: 600px;
      height: 600px;
    }
  }
}

@media (min-width: 992px) {
  .flipCard {
    .cardContainer {
      .card {
        width: 14rem;
        height: 14rem;
      }

      .imageWinOverlay {
        .bi-star {
          font-size: 12rem;
        }
      }
    }
  }

  .spinTheWheel {
    .container {
      width: 650px;
      height: 650px;

      .wheel {
        .number {
          span {
            font-size: 1.6em;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .spinTheWheel {
    .container {
      width: 700px;
      height: 700px;
    }
  }
}

</style>

<template>
    <button v-if="view === 'gameSelect'" class="btn btn-primary" @click="home" type="button">Home</button>
    
    <div class="d-flex justify-content-center align-items-center gameSelect" v-if="view === 'gameSelect'">
        <div class="gameWrapper">
            <div class="gameBox">
                <button @click="setGame('cardFlip')" type="button">
                    Card Flip
                </button>
            </div>
            <div class="gameBox">
                <button @click="setGame('slotMachine')" type="button">
                    Slot Machine
                </button>
            </div>
            <div class="gameBox">
                <button @click="setGame('spinTheWheel')" type="button">
                    Spin the Wheel
                </button>
            </div>
        </div>
    </div>
    
    <div v-if="view === 'cardFlip'" class="flipCard">
        <div class="d-flex justify-content-right w-100">
            <button class="btn btn-primary m-1" @click="setGame('gameSelect')" type="button">
                Game Select
            </button>
        </div>
        <div class="cardContainer">
            <div @click="toggleCard(card)"
                 v-for="card in newCardGame"
                 class="card"
                 :key="card.id"
                 :class="!card.isFlipped ? 'flipped ' : ''">
                <img class="card-face front" :src="card.front" alt="Card image front"/>
                <img class="card-face back" :src="card.back" alt="card image back">
                <div></div>
                <div :class="card.isWinner && isWinnerIconVisible ? 'imageWinOverlay' : ''">
                    <i class="bi bi-star"></i>
                </div>
            </div>
        </div>
    
    </div>
    
    <div v-if="view === 'slotMachine'">
        <button class="btn btn-primary m-1" @click="setGame('gameSelect')" type="button">
            Game Select
        </button>
        <div class="slotMachine">
            <div class="slots">
                <div class="reel"></div>
                <div class="reel"></div>
                <div class="reel"></div>
            </div>
            <button class="mx-2 btn btn-primary " :disabled="isRolling" @click="rollAll">{{ isRolling ? 'WAIT' : 'ROLL' }}</button>
        </div>
        <div class="d-flex justify-content-center" v-if="isWinnerSlots">
            <h4>Winner, Winner, Chicken Dinner</h4>
        </div>
    </div>
    
    <div v-if="view === 'spinTheWheel'">
        <button class="btn btn-primary m-1 position-absolute top-0 z-1" @click="setGame('gameSelect')" type="button">
            Game Select
        </button>
        <div class="spinTheWheel ">
            <div class="container">
                <div class="spinButton">{{ isSpinning ? '' : 'Spin' }}</div>
                <div class="wheel">
                    <div v-for="item in newSpinGame" class="number" :style="`--index:${item.id};--colour:${item.isSelected ? item.selectedBgColour :  item.bgColour}`">
                        <span v-if="!item.isSelected" class="text-capitalize">{{ item.id }}</span>
                        <span v-if="item.isSelected" class="text-capitalize">{{ item.prizeName }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



