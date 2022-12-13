let navbar = document.querySelector('.navbar')
 
let button = document.querySelector('.container button i')
let links = document.querySelector('.collapse')


document.addEventListener('click', (e) =>{

    if(e.target !== button && e.target !== links && e.target !== navbar ){
     
        if(links.classList.contains('show')){
           links.classList.toggle('show')
        }

    }
})


navbar.onclick = function(e){
    e.stopPropagation()
}
button.onclick = function(e){
    e.stopPropagation()
}
links.onclick = function(e){
 e.stopPropagation()
}