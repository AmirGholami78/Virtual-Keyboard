let title = document.querySelector('.title')
document.addEventListener('keyup' , function (event) {
    appendValueToDom(event)
    console.log(event)
    let userchar = event.key.toUpperCase()
   let mainchar = document.getElementById(userchar)

    mainchar.classList.add('hit')

    mainchar.addEventListener('animationend' , function () {
        mainchar.classList.remove('hit')
    })
    title.innerHTML += event.key

   
})

function appendValueToDom (event) {
    if (event.key == 'Backspace') {
        title.innerHTML = title.innerHTML.slice(0 , -1)
    }
    if (event.code == 'Space') {
        title.innerHTML += ' '
      }
}

