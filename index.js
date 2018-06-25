function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line === []) {
    "There is nobody waiting to be served!"
  } else {
    `Currently serving ${line.shift()}.`
  }
}

function currentLine() {

}
