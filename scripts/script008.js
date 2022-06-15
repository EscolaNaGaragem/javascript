function calcular(){
  var valor1 = document.getElementById("inicio").value;
  var valor2 = document.getElementById("fim").value;
  var valor3 = document.getElementById("passo").value;
  var resultado = document.getElementById("resultado");
  if (valor1 == "" || valor2 == "" || valor3 == "") {
    resultado.innerHTML = "Impossível calcular";
  } else {  
    var i = Number(valor1);
    var f = Number(valor2);
    var p = Number(valor3);
    if (i < f) {
      var r = "";
      while (i <= f) {
        r += i + " ";
        i += p;
      }
      resultado.innerHTML = r;
    } else {  
      var r = "";
      while (i >= f) {
        r += i + " ";
        i -= p;
      }
      resultado.innerHTML = r;
    }
  }
}

function limpar(){
  document.getElementById("inicio").value = "";
  document.getElementById("fim").value = "";
  document.getElementById("passo").value = "";
  document.getElementById("resultado").innerHTML = "";
}
