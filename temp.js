// tijdelijke clickevent voor het navigeren naar de productdetailpagina
// de <a> fuckete mijn design op! :/

let productCards = document.getElementsByClassName("productCard");

for(i = 0; i < productCards.length; i++){
    productCards[i].addEventListener("click", () => window.location.href = "productdetail.html");
}