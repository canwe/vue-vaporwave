// Imitate Python's randRange
let randRange = (min, max) => {
  if (max == null) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (max - min)) + min
}

// Revised modulus function for negative values
let mod = (n, m) => ((n % m) + m) % m

export { randRange, mod }
