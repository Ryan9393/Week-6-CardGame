// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// o	Ties result in zero points for either Player
// -	After all cards have been played, display the score.


class Card {
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor(){
        this.cards = [];
    }
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
    shuffleDeck(){                                                  // Durstenfeld Shuffle
        for (let i = this.cards.length - 1; i > 0; i--){
            let j = Math.floor(Math.random()* (i +1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}

class Player {
    constructor() {
        this.playerCards = [];
    }
}

class Computer{
    constructor(){
        this.computerCards = []
    }
}
class Hand {
    constructor() {
        this.players = [];
    }
    start(player, computer) {
        this.players.push(new Player(player));
        this.players.push(new Computer(computer));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();    
        this.players[0].playerCards = newDeck.cards.slice(0, 26);
        this.players[1].computerCards = newDeck.cards.slice(26, 52);
    }
}
let playerHands = new Hand();
playerHands.start('Player', 'Computer');
console.log(playerHands.players);



if(playerHands.players[0].playerCards[0].value === playerHands.players[1].computerCards[0].value){
    console.log("Tie")
} else if (playerHands.players[0].playerCards[0].value > playerHands.players[1].computerCards[0].value){
    console.log("Player wins")
}else{
    console.log("Computer Wins")
}

// while(playerHands.players[0].playerCards>0){
//     for(let i = 0; i < players.playerCards.length; i++){
//         if (players.playerCards[i] === players.computerCards[i]){
//             console.log('tie')
//         }else if (playerCards[i] > computerCards[i]){
//             console.log('Player Wins')
//         }else{
//             console.log('Computer Wins')
//         }
//     }
// }


// let p1 = playerHands.player[0];
// let p2 = playerHands.player[1];

// while(playerHands.player[0].playerCards.length>0){
//     for( let i = 0; i<playerHands.players[0].playerCards.length;i++){
//         if(p1.playerCards[i].value === p2.playerCards[i].value){
//             console.log('tie');
//         }else if (p1.playerCards[i].value > p2.playerCards[i].value){
//             console.log('Player Wins');
//         }else{
//             console.log('Computer Wins');
//         }
//         break;
//     }
//     break;
// }



// let p1 = playerHands.players[0];
// let p2 = playerHands.players[1];
// let v1=0;
// let v2=0;
// for(let i = 0;i<playerHands.players[0].playerCards.length;i++){
//     if (p1.playerCards[i].value>p2.playerCards[i].value){
//         v1++;
//     } else {
//         v2++;
//     }
// }
// console.log(`player 1 ${v1} player 2 ${v2}`);

// const newDeck = new Deck();
// newDeck.createDeck();
// newDeck.shuffleDeck();
// console.log(newDeck.cards);


// class Card {
//     constructor(suit, rank, value){
//         this.suit = suit;
//         this.rank = rank;
//         this.value = value;
//     }
// }

// class Deck {
//     constructor(){
//         this.cards = [];
//     }
//     createDeck() {
//         let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
//         let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
//         let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//         for (let i = 0; i < suits.length; i++) {
//             for (let j = 0; j < ranks.length; j++) {
//                 this.cards.push(new Card(suits[i], ranks[j], values[j]));
//             }
//         }
//     }
//     shuffleDeck(){                                                  // Durstenfeld Shuffle
//         for (let i = this.cards.length - 1; i > 0; i--){
//             let j = Math.floor(Math.random()* (i +1));
//             let temp = this.cards[i];
//             this.cards[i] = this.cards[j];
//             this.cards[j] = temp;
//         }
//     }
// }

// class Player {
//     constructor(name) {
//         this.playerName = name;
//         this.playerCards = [];
//     }
// }
// class Hand {
//     constructor() {
//         this.players = [];
//     }
//     start(player, Computer) {
//         this.players.push(new Player(player));
//         this.players.push(new Player(Computer));
//         let newDeck = new Deck();
//         newDeck.createDeck();
//         newDeck.shuffleDeck();    
//         this.players[0].playerCards = newDeck.cards.slice(0, 26);
//         this.players[1].playerCards = newDeck.cards.slice(26, 52);
//     }
// }
// let playerHands = new Hand();
// playerHands.start('Player', 'Computer');
// console.log(playerHands.players);


// let p1 = playerHands.players[0];
// let p2 = playerHands.players[1];
// let v1=0;
// let v2=0;
// for(let i = 0;i<playerHands.players[0].playerCards.length;i++){
//     if (p1.playerCards[i].value>p2.playerCards[i].value){
//         v1++;
//     } else {
//         v2++;
//     }
// }
// console.log(`player 1 ${v1} 
// player 2 ${v2}`);


// https://medium.com/@blakeeh723/how-to-build-a-card-game-with-object-oriented-programming-c43cd2cadb3a
// https://codepen.io/ashwell/pen/RwKKmV?editors=1010
// https://codereview.stackexchange.com/questions/156152/javascript-based-war-card-game-final
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
