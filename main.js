const btn = document.querySelector('.arrow');
const icon = document.querySelector('.fas');
const itm1 = document.querySelector('.item1');

btn.addEventListener('click', function() {
    itm1.classList.toggle('hide');
    if(itm1.classList.contains('hide')) {
       icon.style.transform = "rotate(180deg)"; 
    } else {
       icon.style.transform = "rotate(0deg)";
    }
    
})