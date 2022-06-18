var vetor = [],
  vetorordenado = [],
  vetorinvertido = [];
var saida = document.getElementById('res');
var selecao = document.getElementById('selecao');
var opcao;

function adicionar() {
  let n = Number(document.getElementById('num').value);
  if (n == 0 || isNaN(n) || n < 0) {
    saida.innerHTML = `<p>Número inválido!</p> <br>`;
  } else {
    if (incluirnoVetor(n)) {
      var opcao = document.createElement('option');
      opcao.value = n;
      opcao.id=n;
      opcao.innerHTML = `O valor ${n} foi adicionado ao vetor`;
      selecao.appendChild(opcao);
      exibir();
    } else {
      saida.innerHTML = `<p>Número já existe no vetor!</p> <br>`;
    }
  }
}

function incluirnoVetor(i) {
  if (vetor.indexOf(i) == -1) {
    vetor.push(i);
    return true;
  } else {
    return false;
  }
}

function exibir() {
    saida.innerHTML = `<p>Vetor: ${vetor}</p> <br>`;
}

function finalizar() {
  let saida = document.getElementById('res');
  let soma = 0;
  if (vetor.length == 0) {
    saida.innerHTML = `<p>Vetor vazio!</p> <br>`;
  } else {
    for (let no in vetor) {
      soma += vetor[no];
    }
    saida.innerHTML = `<p>Vetor: ${vetor}</p>`;
    vetorordenado = vetor;
    vetorinvertido = vetor;
    saida.innerHTML += `<p>Vetor ordenado: ${vetorordenado.sort(
      (a, b) => Number(a) - Number(b)
    )}</p>`;

    saida.innerHTML += `<p>Vetor invertido: ${vetorinvertido.reverse()}</p>`;
    saida.innerHTML += `<p>Número de elementos do Vetor: ${vetor.length}</p>`;

    saida.innerHTML += `<p>O Maior elemento do Vetor: ${
      vetor[vetor.length - 1]
    }</p>`;
    saida.innerHTML += `<p>O Menor elemento do Vetor: ${vetor[0]}</p>`;
    saida.innerHTML += `<p>A soma dos elementos do Vetor: ${soma}</p>`;
    saida.innerHTML += `<p>A média dos elementos do Vetor: ${
      soma / vetor.length
    }</p>`;
  }
}
