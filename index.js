"use strict"

function expectedScore(winningPlayer, losingPlayer) {
    return 1 / (1 + Math.pow(10, ((losingPlayer - winningPlayer) / 400)))
}

function calculateNewScore(winningPlayer, losingPlayer, k = 32) {
    const scoreDiff = k * (1 - expectedScore(winningPlayer, losingPlayer))
    winningPlayer = Math.round(winningPlayer + scoreDiff)
    losingPlayer = Math.round(losingPlayer - scoreDiff)
  
    return [winningPlayer, losingPlayer]  
}

function getElo(k = 32) {
    return (winningPlayer, losingPlayer) => {
      return calculateNewScore(winningPlayer, losingPlayer, k)  
    }
}

module.exports = getElo
