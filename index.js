function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  let response
  if (line === []) {
    response = "There is nobody waiting to be served!"
  } else {
    response = `Currently serving ${line[0]}.`
    line.shift
  }
  return response
}

function currentLine() {

}
