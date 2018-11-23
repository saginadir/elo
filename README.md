# Elo 

The Elo ranking system was initially invented by [Arpad Elo](https://en.wikipedia.org/wiki/Elo_rating_system). Since then it's widly used in different kinds of competitive games.

## Example of usage:

```javascript
const Elo = require("./index.js")

let playerA = 1200
let playerB = 1400

// initialize Elo 
// Default k value is 32. In this case we use 20
const elo = Elo(20)

// Player A beat player B
let [winning, losing] = elo(playerA, playerB)
playerA = winning // new value: 1215
playerB = losing // new value 1385
```

Elo ranking system can be used in your personal game project. The obvious implementation is chess, which was the original intent of of Arpad Elo. But today Elo ranking is far more widly used than just for chess. For example, it is rumored that Blizzard is using a variation of the Elo ranking in it's matches. From 1v1 starcraft to multiplayer games like overwatch.

It was also rumored that Tinder was using the Elo ranking to match you with similar attractive partners. Imagine how interesting it is to choose the Elo ranking system in order to be incorporated in a dating app. Every match you get raises your score. Every rejection you get will deduct fron you score. That being said, if you weren't getting any matching on Tinder - perhaps it's likely that you have sunk so low you don't get any matches anymore. And now it'll be a good time to reset your account.

Feel free to use this code in any of your projects. Happy gaming.

License: MIT standard License
