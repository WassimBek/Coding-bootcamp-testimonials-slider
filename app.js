

const prev = document.getElementById("img_prev") ;
const next = document.getElementById("img_next") ;
const getImage = document.querySelector(".Person_Img #person") ;
const personData = document.querySelector(".Person > .Person_info p")
const name = document.getElementById("personName") ;
const job = document.getElementById("personJob") ;
prev.onclick = () => {
    getImage.src = "./images/image-john.jpg"
    personData.textContent = `
    If you want  to lay the best foundation possible l'd recommend taking this course .
    The depth the instructors go into is incredible. I now feel se confident about starting up
    as a professional developer.
    ` 
    name.textContent = "Jhon Tarkpor"
    job.textContent = "Junior Front-end Developer"
}

next.onclick = () => {
    getImage.src = "./images/image-tanya.jpg"
    personData.textContent = `
          I've been interested in coding for a while but never taken
          the jump, until now. I couldn't recommend this course ebough.
          I'm now  in the job of my dreams and so excited about the future. 
    `
    name.textContent = "Tanya Sinclair"
    job.textContent = "Tanya Sinclair"
}