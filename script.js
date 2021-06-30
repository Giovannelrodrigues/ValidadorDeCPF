document.querySelector(".btn").addEventListener('click', validarCPF)
document.querySelector("#cpf").addEventListener('keyup', validadorText)

function detecta(event){
    let tecla = event.key;
    if(tecla == 'Backspace'){
        let cpf = document.querySelector('#cpf').value
        let tamanho = cpf.length
        cpf = cpf.substring(0, tamanho - 1)
    }
}

function validadorText(event){
    let cpf = document.querySelector('#cpf')
    let tecla = event.key;

    if(tecla == 'Backspace'){
    }
    else if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += '.'
    }
    else if(cpf.value.length == 11){
            cpf.value += '-'
    }

    
}

function validarCPF(){
    let cpf = document.querySelector('#cpf').value
    let numbersCPF = cpf.split("")
    let listNova = []
    for(let value of numbersCPF){
        let TorF = isNaN(value)
        if(TorF == false){
            listNova.push(value)
        }
    }

    if(listNova.length != 11){
        window.alert('CPF Invalido, por favor digite novamente')
    }
    if(cpf.length < 14){
        window.alert('CPF Invalido, por favor digite novamente')
    }else{
        let total = 0;
        let listNumber = cpf.split('').map(item => Number(item))
        let primeroDigito = primeiroValor(listNumber)
        let segundoDigito = segundoValor(listNumber)
        let digitoDaConta = `${primeroDigito}${segundoDigito}`
        let digitoCPF = `${listNumber[12]}${listNumber[13]}`
        let result = document.querySelector(".result")
        if(digitoDaConta === digitoCPF){
            result.innerHTML = `CPF: Valido`
            result.style.color = 'green'
        }else{
            result.innerHTML = `CPF: Invalido`
            result.style.color = 'red'
        }
        
    } 
}

function primeiroValor(listNumber){
    let total = 0;
    total += listNumber[0] * 10
    total += listNumber[1] * 9
    total += listNumber[2] * 8
    total += listNumber[4] * 7
    total += listNumber[5] * 6
    total += listNumber[6] * 5
    total += listNumber[8] * 4
    total += listNumber[9] * 3
    total += listNumber[10] * 2
    let digito = 11 - (total % 11)
    if(digito > 9){
        digito = 0
    }
    return digito
}

function segundoValor(listNumber){
    let total = 0;
    total += listNumber[0] * 11
    total += listNumber[1] * 10
    total += listNumber[2] * 9
    total += listNumber[4] * 8
    total += listNumber[5] * 7
    total += listNumber[6] * 6
    total += listNumber[8] * 5
    total += listNumber[9] * 4
    total += listNumber[10] * 3
    total += listNumber[12] * 2
    let digito = 11 - (total % 11)
    if(digito > 9){
        digito = 0
    }
    return digito
}


//poderia usar a logica de ao inves de transformar
//a string em uma lista e tirar o ponto e hifen
//use o comando let cpfLimpo = cpf.replace(/\D+/g, '')
//esse comando tirar tudo que nao for numero e retorna uma string