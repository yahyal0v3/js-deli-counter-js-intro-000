function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  let response
  if (line === []) {
    response = "There is nobody waiting to be served!"
  } else {
    counter = 0
    while (counter < line.length) {
      response = `Currently serving ${line[counter]}.`
      counter++
    }
  }
}

function currentLine() {

}
