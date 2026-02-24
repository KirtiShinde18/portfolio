
Array.from(document.getElementsByTagName('input')).forEach((e, i)=> {

    e.addEventListener('keyup', (el)=> {
        if (e.value.length > 0) {
            document.getElementsByName('caret-down')[i].style.transform = "rotate(180deg)" ;
        } else {
            document.getElementsByName('caret-down')[i].style.transform = "rotate(0deg)" ;
        }
    })

}
)