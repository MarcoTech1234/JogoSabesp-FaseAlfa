const perg = document.querySelector('.personagem');
const bug = document.querySelector('.bug');
const score = document.querySelector('.score');
const local = document.querySelector('.game-board');
let vida = true;
var number =  4;
var left = 0;
var and = false;
let pontos = 0;

console.log(vida)

// Caida da cachoeirra (em Preparo) 
const map = setInterval(() => {
    local.classList.add('noite');
    local.classList.remove('dia');
    setTimeout(() => {
        local.classList.remove('noite');
        local.classList.add('dia');
    }, 10000)
}, 20000);

setInterval(()=> {
    const bugleft = bug.offsetLeft;
    const pergleft = perg.offsetLeft;
    //console.log(bugleft)
    //console.log(pergleft)
}, 1000)
const loop = setInterval(() => {

    /*console.log(loop)*/

    const bugPosition = parseInt(+window.getComputedStyle(bug).bottom.replace('px', ''));
    const pergPosition = parseInt(+window.getComputedStyle(perg).height.replace('px', ''));
    const pergwidth = parseInt(+window.getComputedStyle(bug).width.replace('px', ''));
    const bugleft = bug.offsetLeft;
    const pergleft = perg.offsetLeft;
    const bugwidth = parseInt(+window.getComputedStyle(bug).width.replace('px', ''));
    //console.log(bugwidth)

    // Calculo se o personagems pegou o objeto
    const valor = parseInt(pergleft-bugleft);


    // Chamada do Game Over
    if(bugPosition < 10) {
        mortefinal()
    }
    console.log(valor)
    // Pegou o Lixo/Ponto (Verifica se o personagens pegou o item)
    if (bugPosition <= pergPosition && pergwidth <= bugwidth && valor <= 50 && valor > -160  ) {
        pontos++;
        console.log(valor)
        spaw()
    }

    
    score.innerHTML = `Score : ${pontos}`;
    

}, 10);


// Codigo de Game Over (Fase Teste)
const mortefinal = () => {
    const bugPosition = parseInt(+window.getComputedStyle(bug).bottom.replace('px', ''));
    bug.style.animation = 'none';
    bug.style.left = `${bugPosition}px`;
    vida = false;
    $("#exampleModalCenter").modal();
    
}

// Reinicia o inimigo e randomiza  de onde ele vai cair e vai aumentado sua velocidade
const spaw = () => {
    bug.style.animation = 'none'
    var leftIni = Math.floor(Math.random() * 1058 + 1);
    bug.style.left = `${leftIni}px`;

    if( pontos%5 == 0){
        number = number-0.2;
    }
    setTimeout(() => {
        bug.style.animation = '';
        bug.style.animationDuration = `${number}s`;
        console.log(number)
        //console.log(number)
        
    }, 100);
}

// Codigo de Movimento do Carro
    document.addEventListener("keydown", (e) => {
        // Ir para direita
        if ((e.keyCode === '39') | (e.code === "KeyA")) {
            if(vida == true) {
                Esq(); 
            }            
        }
        // Ir para Direita
        if ((e.keyCode === '39') | (e.code === "KeyD")) {
            if(vida == true) {
            Dir();
            }
        }
    });

    const Dir = () => {
        left = left+10;
        perg.style.left = `${left}px`;
        perg.classList.remove('esquerda');
        perg.classList.add('direita');
    }

    const Esq = () => {
        left = left-10;
        perg.style.left = `${left}px`;
        perg.classList.remove('direita');
        perg.classList.add('esquerda');
    }