//fetch
var mensagem = document.querySelector("#mensagem")
document.querySelector("#enviar").addEventListener("click", function teste2() {
  teste(data);
})

async function teste(data) {
  const response = await fetch("http://localhost:4652/send/text", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  console.log(response)
  return response.json() 
}

const data = {
  "to": "eduardolealaruth@gmail.com",
  "subject": "Assunto do email",
  "text": mensagem.value
}