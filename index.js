const sum = (a, b) => a + b

const multiply =(a, b) => {
  if (a === 0 || b === 0) {
    return 0
  }
  return a * b
}

module.exports = {
  sum,
  multiply
}

