const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item =>{
    item.addEventListener('click',scrollToIdOnClick)
})


function getScroolTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}



function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScroolTopByHref(event.target) - 80;
    scrollToPosition(to);
}

