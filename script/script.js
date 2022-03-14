let link = document.getElementById('link')

document.addEventListener('DOMContentLoaded', ()=>{
    let iconoDos = document.querySelector('.DOS');
    iconoDos.style.color='transparent';

    let iconoTres = document.querySelector('.TRES');
    iconoTres.style.color='transparent';
})
//---------------------------------calculadora----------------------------------//

function setResult(value) {
    document.getElementById('result').innerHTML = value;
}

//-------//
function getResult() {

    return (document.getElementById('result').innerHTML);

}

function add(key) {
    console.log(key);
    let result = getResult();
    console.log(result);
    if (result != '0' || isNaN(key)) {
        setResult(result + key);
    }
    else {
        setResult(key);
    }
}


function calc() {
    let result = eval(getResult());
    setResult(result.toFixed(7));
}

//------// resetear la pantalla
function del() {
    setResult(0);
}


//--------------------------------------temas-------------------------------//
let theme = document.getElementById('theme');
let themeDos = document.getElementById('themeDos');
let themeTres = document.getElementById('themeTres');

theme.addEventListener('click', () => {

    let iconoUNO = document.querySelector('.UNO');
    iconoUNO.style.color='rgb(209, 58, 38)';
    
    let iconoDos = document.querySelector('.DOS');
    iconoDos.style.color='transparent';

    let iconoTres = document.querySelector('.TRES');
    iconoTres.style.color='transparent';
    

    themaUno();
})

themeDos.addEventListener('click', () => {

    let iconoDos = document.querySelector('.DOS');
    iconoDos.style.color='rgb(211, 90, 34)';

    let iconoUNO = document.querySelector('.UNO');
    iconoUNO.style.color='transparent';

    let iconoTres = document.querySelector('.TRES');
    iconoTres.style.color='transparent';

    

    themaDos()

})

themeTres.addEventListener('click', () => {
    let iconoUNO = document.querySelector('.UNO');
    iconoUNO.style.color='transparent';

    let iconoDOS = document.querySelector('.DOS');
    iconoDOS.style.color='transparent';

    let iconoTres = document.querySelector('.TRES');
    iconoTres.style.color='rgb(66, 213, 233)'
    
    
    themaTres()

})




function themaUno() {
    link.setAttribute('href', './style/style.css')
}

function themaDos() {
    link.setAttribute('href', './style/styleDos.css')
}

function themaTres() {
    link.setAttribute('href', './style/styleTres.css')
}