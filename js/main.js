
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector(".fact-text").innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

