document.addEventListener("DOMContentLoaded", function () {
    // Seu código JavaScript aqui
});

// Função para abrir uma guia
function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Exibir os títulos das subguias se a guia "Recomendações" for selecionada
    if (tabName === "tab2") {
        const subtabtitles = document.getElementsByClassName("subtab");
        for (let i = 0; i < subtabtitles.length; i++) {
            subtabtitles[i].style.display = "block";
        }
    }

    document.getElementById(tabName).style.display = "block";
}

// Função para abrir uma subguia
function openSubTab(subTabName) {
    const subtabcontent = document.getElementsByClassName("subtabcontent");
    for (let i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";

    // Ocultar os títulos das subguias após abrir a subguia
    const subtabtitles = document.getElementsByClassName("subtab");
    for (let j = 0; j < subtabtitles.length; j++) {
        subtabtitles[j].style.display = "none";
    }
}

function openSubTabFromHome(element) {
    console.log("openSubTabFromHome called"); // Adicione este log
    const subTabName = element.getAttribute("data-subtab");
    const subtabcontent = document.getElementsByClassName("subtabcontent");
    for (let i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";

    // Ocultar os títulos das subguias após abrir a subguia
    const subtabtitles = document.getElementsByClassName("subtab");
    for (let j = 0; j < subtabtitles.length; j++) {
        subtabtitles[j].style.display = "none";
    }
}

// Adicione um evento de clique a todos os elementos da guia Home
const tab1GridItems = document.querySelectorAll("#tab1 .grid-item");

tab1GridItems.forEach(function (element) {
    element.addEventListener("click", function () {
        openSubTabFromHome(element);
    });
});
