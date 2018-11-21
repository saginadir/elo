# Elo 

The Elo ranking system was initially invented by [Arpad Elo](https://en.wikipedia.org/wiki/Elo_rating_system). Since then it's widly used in different kinds of competitive games.

## Example of usage:

```
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
