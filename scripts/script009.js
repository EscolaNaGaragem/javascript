function calcular() {
  var selecao = document.getElementById('tabuada');
  var valor1 = selecao.options[selecao.selectedIndex].value;
  var resultado = document.getElementById('resultado');
  
  if(valor1 == 0 || valor1 == "") {
      resultado.innerHTML = "Selecione um número";
    }
    else {
        resultado.innerHTML = "";
        for(var i=1; i<=10; i++) {
            resultado.innerHTML += valor1 + " x " + i + " = " + (valor1 * i) + "<br>";
        }   
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('tabuada').selectedIndex = 0;
}
