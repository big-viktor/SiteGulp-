const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')

if(menuContent){
    const menuBody = document.querySelector('menu_body');
burger.addEventListener("click", function (e) {
    menuContent.classList.add("_active");
    menuBody.classList.add("_active");

});

}
    
   
