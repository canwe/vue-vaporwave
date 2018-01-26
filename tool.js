let mod = (n, m) => ((n % m) + m) % m

let randRange = (min, max) => {
  if (max == null) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (max - min)) + min
}
