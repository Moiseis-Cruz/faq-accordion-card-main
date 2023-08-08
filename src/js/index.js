const items = document.querySelectorAll(".item")

items.forEach((item, index) => {
    if(item[index] === true){
        item.classList.add("clicked")
    }
})