// Função para abrir uma guia
function openTab(event, tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Exibir os títulos das subguias se a guia "Recomendações" for clicada
    if (tabName === "tab2") {
        var subtabtitles = document.getElementsByClassName("subtab");
        for (i = 0; i < subtabtitles.length; i++) {
            subtabtitles[i].style.display = "block";
        }
    }

    document.getElementById(tabName).style.display = "block";
}

// Função para abrir uma subguia
function openSubTab(subTabName) {
    var i, subtabcontent;
    subtabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";

    // Ocultar os títulos das subguias após abrir a subguia
    var subtabtitles = document.getElementsByClassName("subtab");
    for (i = 0; i < subtabtitles.length; i++) {
        subtabtitles[i].style.display = "none";
    }
}


function openSubTabFromHome(element) {
    console.log("openSubTabFromHome called");
    var subTabName = element.getAttribute("data-subtab");
    var subtabcontent = document.getElementsByClassName("subtabcontent");
    for (var i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    document.getElementById(subTabName).style.display = "block";

    // Ocultar os títulos das subguias após abrir a subguia
    var subtabtitles = document.getElementsByClassName("subtab");
    for (var j = 0; j < subtabtitles.length; j++) {
        subtabtitles[j].style.display = "none";
    }
}