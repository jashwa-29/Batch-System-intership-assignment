let hambtn = document.getElementById('btn')



hambtn.addEventListener('click' , ()=>{

    // alert('helo')
    let ul = document.getElementById('ul')
    if (ul.style.display==="block") {
        ul.style.display = "none"
    } else {
        ul.style.display = "block"
    }
})

window.addEventListener('scroll' , ()=>{
    if (window.scrollY > 50) {
        let header = document.getElementById('header')
        header.style.backgroundColor = "white"
    } else {
        header.style.backgroundColor = "transparent"
    }
})
