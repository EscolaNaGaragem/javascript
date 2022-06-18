function calcular(){
  var valor1 = document.getElementById("inicio").value;
  var valor2 = document.getElementById("fim").value;
  var valor3 = document.getElementById("passo").value;
  var resultado = document.getElementById("resultado");
  if (valor1 == "" || valor2 == "" || valor3 == "") {
    resultado.innerHTML = "Impossível calcular";
  } else {  
    var r = "", i = Number(valor1), f = Number(valor2), p = Number(valor3); 

    if ((i<=f && p>0)) {
      for (var c = i; c <= f; c += p) {
        r += c + '👈 ';
      }
    } else if ((i<=f && p<0)) {
      for (var c = f; c >= i; c += p) {
        r += c + '👈 ';
      }
    }else if(i>f && p>0) {
      for (var c = f; c <= i; c += p) {
        r += c + '👈 ';
       }
     } else if(i>f && p<0) {
      for (var c = i; c >= f; c += p) {
        r += c + '👈 ';
       }
     }
    resultado.innerHTML = r + '🚩';
  }
}

function limpar(){
  document.getElementById("inicio").value = "";
  document.getElementById("fim").value = "";
  document.getElementById("passo").value = "";
  document.getElementById("resultado").innerHTML = "";
}
