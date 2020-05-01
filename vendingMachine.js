const coinValues = [1, 5, 10, 25, 50, 100]

const countCoinToGive = (sum, array) => {
  for(let i = coinValues.length - 1; i > -1; i--) {
    if(sum - coinValues[i] >= 0) {
      array[i]++
      return coinValues[i]
    }
  }

  return 0;
}

const getChange = (M, P) => {
  // get a new array with the same size and a defined element (0) at each index
  const coinCounts = coinValues.map(() => 0)

  // M is money tendered, P is sale price
  let changeTotal = M - P
  console.log('change to give:', changeTotal)

  while(changeTotal > 0) {
    changeTotal -= countCoinToGive(changeTotal, coinCounts)
  }

  console.log('coin counts:', coinCounts)

  const coinsReturnedPretty = coinCounts.map((count, i) => ({ value: coinValues[i], count}))
    .filter(coin => coin.count !== 0)
  
  console.log(`coins returned (formatted)`, coinsReturnedPretty)

  return coinCounts
}

// interview cases
getChange(500, 99) // [1,0,0,0,0,4]
getChange(200, 9) // [1,1,1,1,1,1]

// additional cases
getChange(456, 123)
getChange(5024, 100)
getChange(6789, 1234)
