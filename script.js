//translation

function translatePage() {
  const select = document.getElementById("language-select");
  const lang = select.value;
  const url = window.location.href; // Obtém a URL da página atual
  const translateUrl = `https://translate.google.com/translate?hl=${lang}&u=${encodeURIComponent(
    url
  )}`;
  window.location.href = translateUrl; // Redireciona para o Google Tradutor
}

//open nav bar

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
