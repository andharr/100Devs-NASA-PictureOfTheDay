//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//Choose a date, get an image/video with information

document.querySelector('button').addEventListener('click', getFetch)
let h2 = document.querySelector('h2')
let img = document.querySelector('img')
let video = document.querySelector('.video')
let frame = document.querySelector('iframe')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')

let currentDate = new Date().toJSON().slice(0, 10);

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=pEUtppBdJImeuAOGYAtsLkwNci6EWQmolt70gzpj&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        h2.innerText = data.title
        h3.innerText = data.explanation
        
        if (data.media_type == 'image') {
            document.body.style.backgroundImage = `url(${data.hdurl})`
            video.classList.add('hidden')
            frame.src = ''
        }
        else if (data.media_type == 'video') {
            document.body.style.backgroundImage = `url(img/space.jpg)`
            video.classList.remove('hidden')
            frame.src = data.url
        }
        
        // TESTS //
        //console.log(currentDate)
       // console.log(data)
       // console.log(data.media_type)
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}


function backgroundFetch(){
    //const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=pEUtppBdJImeuAOGYAtsLkwNci6EWQmolt70gzpj&date=${currentDate}`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.body.style.backgroundImage = `url(${data.hdurl})`
            h2.innerText = data.title
            h3.innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

  backgroundFetch()