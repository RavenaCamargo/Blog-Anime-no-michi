// Função para abrir uma guia
function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
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

//Função para abrir a página direto na Home
function openSubTabFromHome(element) {
    console.log("openSubTabFromHome called"); 
    const subTabName = element.getAttribute("data-subtab");
    const subtabcontent = document.getElementsByClassName("subtabcontent");
    for (let i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";
}