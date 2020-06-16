let buttons = document.querySelectorAll('button');
// console.log(buttons);
buttons.forEach(item => {
    item.addEventListener('click', () => {
        alert("You clicked!")
    })
})