// Code here!
//1.
document.querySelector(".art-1").querySelector("h3").innerText =
  "Potato";

//2.
document.querySelectorAll("a")[0].innerText = "Start"
 
//3.
document.querySelectorAll("a")[2].innerText = "Mail us";

//4. Byt ut informationen om Sinus Hoodie - Fire.
document.querySelector(".art-2").querySelector("p").innerText = "Denna röda tröja är elegant passar till flera tillfällen."

//5.
document.querySelector(".art-3").querySelector("button").style.backgroundColor = "blue"

//6.
document.querySelector(".art-2").style.backgroundColor = "red"

//7.
document.querySelector("footer").querySelector("p").innerHTML = "longtidsvägen 74" 

//8.byt textfärg på samtliga articles/kort´s paragraf (<p>) text
//eftersom jag vill komma åt alla måste jag loopa genom alla för sig med foreach
const paragrafs = document.querySelector("main").querySelectorAll("p");

 paragrafs.forEach((paragraf =>{
    paragraf.style.color ="Blue"
 } ))

//9.
const btns = document.querySelectorAll("button")

btns.forEach((btn => {
    btn.innerHTML ="i want"
}))

//10. Lägg till classen active på menyalternativet home.
//Tips använd el.classList.add()

//11.Ta bort classen logo på logotypen.
//Tips använd el.classList.remove()

//12.Add Content

//13 Lägg till en ny produkt med följande info.
//