const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

generateJoke()

jokeBtn.addEventListener("click", () => {
  generateJoke();
})

function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com', config).then(response => response.json()).then(data => {
    jokeElement.innerHTML = data.joke
  })
}

// USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }
