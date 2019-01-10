function goToMainPage(){
document.location.href = "http://leverx.ru";
}
var i = 0;
for (i; i < 9; i++) {
    var el = document.createElement("div");
    el.classList.add("card-header");
    el.innerHTML = '<div class="card-header"><div><header>Black Cat</header> <main>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores iusto, laudantium consectetur voluptate eos quod sapiente enim? Quibusdam vel quas tenetur praesentium, maxime perferendis perspiciatis ex minus distinctio nemo?</main><button>Try</button></div></div>';
    var cont = document.getElementById("card");
    cont.appendChild(el);
}