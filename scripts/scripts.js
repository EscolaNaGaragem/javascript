function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 21;
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12){
        msg.innerHTML += ` Bom dia!`;
        img.src = './imagens/manha-250.png';
        document.body.style.background = '#d5bf85';
    }   else if(hora >= 12 && hora < 18){    
        msg.innerHTML += ` Boa tarde!`;
        img.src = './imagens/tarde-250.png';
        document.body.style.background = '#9291b2';
    }   else{
        msg.innerHTML += ` Boa noite!`;
        img.src = './imagens/noite-250.png';
    }   

}