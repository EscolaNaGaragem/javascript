function calcular() {
  let numero = Number(document.getElementById('num').value);
    document.getElementById('res').innerHTML = parimpar(numero);
    
}
function limpar() {
  document.getElementById('num').value = '';
  document.getElementById('res').innerHTML = 'Calculando....';
}
function parimpar(n){
    if (n % 2 == 0) {
        return `${n} é um número par`;
        }else{
        return `${n} é um número impar`;
        }
}