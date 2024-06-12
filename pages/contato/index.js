var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var mensagem = document.querySelector("#mensagem");

document
  .querySelector("#enviar")
  .addEventListener("click", function clickButton() {
    var corpoEmail = `
    <h1>Nome: ${nome.value} </h1>
    <h2>E-mail: ${email.value} </h2>
    <p>${mensagem.value} </p>
    `;

    const data = {
      // email da associação
      to: "luizg1717@gmail.com",
      subject: "Contato via WebSite",
      html: corpoEmail,
    };

    enviarEmail(data);
  });

async function enviarEmail(data) {
  const response = await fetch(
    "https://web-production-e061.up.railway.app/send/html",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  console.log(response);
  return response.json();
}
