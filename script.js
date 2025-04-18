let nome_ref = document.querySelector(".nome");
let preco_ref = document.querySelector(".preco");
let quantidade_ref = document.querySelector(".quantidade");
let resultado_ref = document.querySelector(".resultado");

function calcular() {
  let nome = nome_ref.value;
  let preco = parseFloat(preco_ref.value);
  let quantidade = parseFloat(quantidade_ref.value);
  let desconto_ref = 0;

  // console.log("Batata");

  if (quantidade < 10) {
    desconto = 0;
  } else if (quantidade < 10 && quantidade >= 20) {
    desconto = 0.05;
  } else {
    desconto = 0.1;
  }

  if (!isNaN(preco)) {
    let desconto_temporario = preco * quantidade * desconto;
    let resultado = preco * quantidade - desconto_temporario;
    console.log(desconto);
    console.log(resultado);
    resultado_ref.innerHTML =
      "Cliente: " +
      nome +
      "<br> Quantidade: " +
      quantidade +
      "<br> Preço Unitário: " +
      preco.toFixed(2) +
      "<br> Desconto aplicado: " +
      desconto * 100 +
      "%" +
      "<br> Total com desconto: R$" +
      resultado.toFixed(2);
    resultado_ref.classList.remove("sumir");
  }
}
