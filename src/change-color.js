// changeColor takes an array of existing colors (Strings)
// and returns a new color (String). 

const getNewColor = () => {
  const t1 = performance.now()

  // ~~ is a little faster than Math.floor
  const rand = ~~(Math.random()*16777215)
  const newColor = '#' + rand.toString(16)
  
  const t2 = performance.now()
  console.log('Runtime: ', t2 - t1)
  
  return newColor
}

const changeColor = (usedColors) => {
  const newColor = getNewColor()

  if (usedColors.includes(newColor)) {
    changeColor(usedColors)
    return
  }

  const newUsed = [...usedColors, newColor]

  // Just so you can see the count and what's getting used
  console.log(newUsed.length, newUsed)

  return newColor
}

export default changeColor