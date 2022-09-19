var ul = document.getElementById("contatos")

async function load(){
var url = "https://randomuser.me/api/?results=10"
  var response = await fetch(url)
var contatos = await response.json()
contatos = contatos.results
  var i = 0
  while(i<10){
    var li = document.createElement("li")
    li.innerHTML = contatos[i].name.first+" "+ contatos[i].name.last
    var img = document.createElement("img")
    img.src = contatos[i].picture.medium
    li.appendChild(img)
    ul.appendChild(li)
    i++
  }
}