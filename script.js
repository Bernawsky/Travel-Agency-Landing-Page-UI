function translatePage() {
  const select = document.getElementById("language-select");
  const lang = select.value;
  const url = window.location.href; // Obtém a URL da página atual
  const translateUrl = `https://translate.google.com/translate?hl=${lang}&u=${encodeURIComponent(
    url
  )}`;
  window.location.href = translateUrl; // Redireciona para o Google Tradutor
}

myFunction(screen);
screen.addEventListener("change", function () {
  myFunction(screen);
});

const openMenu = document.getElementById("open");
const exitMenu = document.getElementById("exit");
const header = document.getElementById("menu");
const tagA = document.getElementById("tag-a");

function abrir() {
  if ((header.style.display = "none")) {
    header.style.display = "flex";
    exitMenu.style.display = "flex";
    openMenu.style.display = "none";
  }
}

function fechar() {
  if ((header.style.display = "flex")) {
    openMenu.style.display = "flex";
    exitMenu.style.display = "none";
    header.style.display = "none";
  }
}

function fecharLink() {
  if ((tagA.style.display = "flex")) {
    header.style.display = "none";
    openMenu.style.display = "flex";
    exitMenu.style.display = "none";
  }
}

function myFunction(screen) {
  const header = document.getElementById("menu");
  const openMenu = document.getElementById("open");

  if (screen.matches) {
    // Menor ou igual a 1000px
    header.style.display = "none";
    openMenu.style.display = "flex";
  } else {
    // Maior que 1000px
    header.style.display = "flex";
    openMenu.style.display = "none";
  }
}

// Crie a media query
var screen = window.matchMedia("(max-width: 1000px)");

// Chame a função quando a página carregar
myFunction(screen);

// Adicione o listener para detectar mudanças no tamanho da tela
screen.addListener(myFunction);

const skip = document.getElementById("skip");
const back = document.getElementById("back");
const testimonial1 = document.getElementById("testimonial1");
const testimonial2 = document.getElementById("testimonial2");

function iconSkip() {
  if ((back.style.pointerEvents = "none")) {
    back.style.pointerEvents = "all"
    skip.style.pointerEvents = "none"
    testimonial1.style.animation = "skip-testimonials1 1s ease-out";
    setTimeout(() => {
      testimonial1.style.display = "none";
    }, 1000);
    testimonial2.style.animation = "skip-testimonials2 1s ease-out";
    testimonial2.style.top = "-100px"
    testimonial2.style.right = "0px"
    testimonial2.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, 0.05);"
  }
}

function iconBack() {
  if((skip.style.pointerEvents = "none")) {
    skip.style.pointerEvents = "all"
    back.style.pointerEvents = "none"
    testimonial1.style.animation = "back-testimonials1 1s ease-out";
    setTimeout(() => {
      testimonial1.style.display = "flex"
    });
    testimonial2.style.animation = "back-testimonials2 1s ease-out";
    setTimeout(() =>{
    testimonial2.style.top = "80px"
    testimonial2.style.right = "-30px"
  });
    testimonial2.style.boxShadow = " 0px transparent;"
  }
}

// window.addEventListener('click', (e) =>{
//   if (e.target == skip){
//     skip.style.pointerEvents = "none"
//     testimonial1.style.animation = "skip-testimonials1 1s ease-out";
//     setTimeout(() => {
//       testimonial1.style.display = "none"
//     }, 1000);
//     testimonial2.style.animation = "skip-testimonials2 1s ease-out";
//     testimonial2.style.top = "-100px"
//     testimonial2.style.right = "0px"
//   }
// })

// window.addEventListener('click', (e) =>{
//   if (e.target == back){
//     back.style.pointerEvents = "all"
//     testimonial1.style.animation = "back-testimonials1 1s ease-out";
//     setTimeout(() => {
//       testimonial1.style.display = "flex"
//     });
//     testimonial2.style.animation = "back-testimonials2 1s ease-out";
//     testimonial2.style.top = "80px"
//     testimonial2.style.right = "-30px"
//   } 
// })
