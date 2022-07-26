var display = document.getElementById('display')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var iniciar = document.getElementById('iniciar')

var cronometroSeg
var minAtual
var segAtual
var interval

for(let i=0; i<=60;i++){
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'
}
for(let i=1; i<=60;i++){
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>'
}

iniciar.addEventListener('click',function(){
    minAtual = minutos.value
    segAtual = segundos.value

    display.childNodes[1].innerHTML = minAtual+ ":"+segAtual

    interval = setInterval(() => {
        segAtual --
        if(segAtual <= 0){
            if(minAtual > 0){
                minAtual --
                segAtual = 59
            }else{
                document.getElementById('sound').play()
                alert('tempo esgotado!')
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minAtual+ ":"+segAtual
    }, 1000);
})