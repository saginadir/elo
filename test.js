const assert = require("assert")
const Elo = require("./index.js")

{
    let elo = Elo(20)
    let [winning, losing] = elo(1200, 1400)

    assert(winning == 1215)
    assert(losing == 1385)
}

{
    let elo = Elo(10)
    let [winning, losing] = elo(1200, 1400)

    assert(winning == 1208)
    assert(losing == 1392)
}

{
    let elo = Elo()
    let [winning, losing] = elo(1200, 1400)

    assert(winning == 1224)
    assert(losing == 1376)
}

console.log("All tests have passed")
