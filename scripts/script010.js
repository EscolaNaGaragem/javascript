function calcular() {
  var num = document.getElementById('numero').value;
  if (num == '') {
    alert('Por favor, digite um número');
  } else {
    var selecao = document.createElement('select');
    selecao.setAttribute('id', 'selecao');
    selecao.setAttribute('size', '10');
    var opcao;

    for (var i = 1; i <= 10; i++) {
      opcao = document.createElement('option');
      opcao.setAttribute('value', i);
      opcao.innerHTML = num + ' x ' + i + ' = ' + num * i + '👈';
      selecao.appendChild(opcao);
        
    }  
    document.getElementById('resultado').appendChild(selecao);
  }
}
function limpar() {
  document.getElementById('numero').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}
