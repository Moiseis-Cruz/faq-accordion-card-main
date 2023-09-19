const item = document.querySelectorAll(".item")

item.forEach((itemSelected) => {
    itemSelected.addEventListener('click', () => {
        const itemAtual = document.querySelector(".clicked")
        
        itemSelected.classList.add("clicked")
        
        if(itemAtual){
            itemAtual.classList.remove("clicked")
        }
    })
})