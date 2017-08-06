// changeColor takes an array of existing colors (Strings)
// and returns a new color (String). 

const getNewColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

const changeColor = (usedColors) => {
  const newColor = getNewColor()

  if (usedColors.includes(newColor)) {
    // Beware stack overflows here...
    changeColor(usedColors)
    return
  }

  const newUsed = [...usedColors, newColor]

  // Just so you can see the count and what's getting used
  console.log(newUsed.length, newUsed)

  return newColor
}

export default changeColor