let face = '' //cria um elemento vazio que sera preenchido com a seleção dos dados
let res = document.getElementById('res') 

//funções para os respectivos dados selecionados
function rollD6() {
    const dados = Math.random()
    window.alert('Rolando o D6...')
    face = dados * 5 + 1
    res.innerHTML = face.toFixed(0)
}

function rollD8() {
    const dados = Math.random()
    window.alert('Rolando o D8...')
    face = dados * 7 + 1
    res.innerHTML = face.toFixed(0)
}

function rollD10() {
    const dados = Math.random()
    window.alert('Rolando o D10...')
    face = dados * 9 + 1
    res.innerHTML = face.toFixed(0)
}

function rollD20() {
    const dados = Math.random()
    window.alert('Rolando o D20...')
    face = dados * 19 + 1
    res.innerHTML = face.toFixed(0)
}

function rollD50() {
    const dados = Math.random()
    window.alert('Rolando o D50...')
    face = dados * 49 + 1
    res.innerHTML = face.toFixed(0)
}

function rollD100() {
    const dados = Math.random()
    window.alert('Rolando o D100...')
    face = dados * 99 + 1
    res.innerHTML = face.toFixed(0)
}



//uma versão antiga que havia feito

// function rolar() {
//     let face = ''
//     const dados = Math.random()

//     let res = document.getElementById('res')

//     let select = document.getElementById('dados')
//     let value = select.options[select.selectedIndex].value

//     switch (select.value) {
//         case "D6":
//             window.alert('Rolando o D6...')
//             face = dados * 5 + 1
//             res.innerHTML = face.toFixed(0)
//             break;

//         case 'D8':
//             window.alert('Rolando o D8...')
//             face = dados * 7 + 1
//             res.innerHTML = face.toFixed(0)
//             break;

//         case 'D10':
//             window.alert('Rolando o D10...')
//             face = dados * 9 + 1
//             res.innerHTML = face.toFixed(0)
//             break;

//         case 'D20':
//             window.alert('Rolando o D20...')
//             face = dados * 19 + 1
//             res.innerHTML = face.toFixed(0)
//             break;

//         case 'D50':
//             window.alert('Rolando o D50...')
//             face = dados * 49 + 1
//             res.innerHTML = face.toFixed(0)
//             break;

//         case 'D100':
//             window.alert('Rolando o D100...')
//             face = dados * 99 + 1
//             res.innerHTML = face.toFixed(0)
//             break;
//         default:
//             break;
//     }

// }
