//fetch
var mensagem = document.querySelector("#mensagem");
var teste123 = document.querySelector("#nome");

document.querySelector("#enviar").addEventListener("click", function teste2() {
  teste(data);
  console.log(typeof teste123.value)
})

async function teste(data) {
  const response = await fetch("https://web-production-e061.up.railway.app/send/text", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  console.log(response)
  return response.json() 
}

const data = {
  "to": "eduardolealaruth@gmail.com",
  "subject": teste123.value,
  "text": mensagem.value
}
