const form = document.querySelector("#geraZap");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputNumberZap = e.target.querySelector("#telefoneNumber");
  const inputMsgZap = e.target.querySelector("#msgZap");

  const numeroZap = inputNumberZap.value;
  const msgZap = inputMsgZap.value;

  if (!numeroZap) {
    setResultado(
      "<strong>Preencher campo do Número do WhatsApp</strong>",
      "warning"
    );
    return;
  }

  if (!msgZap) {
    setResultado(
      "<strong>Preencher campo da Mensagem do WhatsApp</strong>",
      "warning"
    );
    return;
  }

  let msg = criarUrlZap(numeroZap, msgZap);

  setResultado(msg, "ok");

  e.execCommand("copy");
});

function criarUrlZap(numeroZap, msgZap) {
  let numerZap = numeroZap.replace("(", "");
  numerZap = numerZap.replace(")", "");
  numerZap = numerZap.replace("-", "");
  numerZap = numerZap.replace(" ", "");

  let url = `https://wa.me/55${numerZap}?text=${msgZap}`;

  var copiaClipboard = `link gerado, está é a URL: </br> <p class="h3 p-3">${url}</p>`;

  return copiaClipboard;
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, tipo) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();
  let classResultado = "";

  switch (tipo) {
    case "ok":
      classResultado = "resultado-ok";
      break;
    case "warning":
      classResultado = "resultado-warning";
      break;
    case "fail":
      classResultado = "resultado-fail";
      break;
  }

  p.innerHTML = msg;
  p.classList.add(classResultado);
  resultado.appendChild(p);
}
