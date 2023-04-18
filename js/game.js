const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['piedra', 'papel', 'tijera']

const handleClick = (e) => {
  const userChoice = e.target.innerHTML
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  getResults(userChoice, computerChoice)
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'tijerapapel':
    case 'piedratijera':
    case 'papelpiedra':
      resultDisplay.innerHTML = 'Tu elección fue ' + userChoice + ' y el universo eligió ' + computerChoice + ', fue suerte... ganaste!'
      break
    case 'papeltijera':
    case 'tijerapiedra':
    case 'piedrapapel':
      resultDisplay.innerHTML = 'Tu elección fue ' + userChoice + ' y el universo eligió ' + computerChoice + ', jaja! Perdiste!!!!'
      break
    case 'tijeratijera':
    case 'piedrapiedra':
    case 'papelpapel':
      resultDisplay.innerHTML = 'Tu elección fue ' + userChoice + ' y el universo eligió ' + computerChoice + ', están en equilibrio!'
      break
  }
}