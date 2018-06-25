function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    let counter = 0
    let lineArray = []
    while (counter < lineArray.length) {
      let number = `${counter + 1}. ${line[counter]}`
      lineArray.push(number)
      counter++
      return lineArray
    }
  }
}
