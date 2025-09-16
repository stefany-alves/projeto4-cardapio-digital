
let prato1 = parseInt(prompt(`
    Cardápio Digital:
(1) Hambúrguer = R$ 20
(2) Pizza = R$ 35
(3) Refrigerante = R$ 5
(4) Batata Frita = R$ 12
(Digite o número equivalente ao seu pedido para adicioná-lo ao carrinho ou digite 5 para sair do programa)
    `))

let prato2 = parseInt(prompt(`
    Cardápio Digital:
(1) Hambúrguer = R$ 20
(2) Pizza = R$ 35
(3) Refrigerante = R$ 5
(4) Batata Frita = R$ 12
(Digite o número equivalente ao seu pedido para adicioná-lo ao carrinho ou digite 5 para sair do programa)
    `))

let prato3 = parseInt(prompt(`
    Cardápio Digital:
(1) Hambúrguer = R$ 20
(2) Pizza = R$ 35
(3) Refrigerante = R$ 5
(4) Batata Frita = R$ 12
(Digite o número equivalente ao seu pedido para adicioná-lo ao carrinho ou digite 5 para sair do programa)
    `))

switch (prato1) {
    case 1:
        item1 = "Hámburguer"
        precoItem1 = 20
        alert(` Prato 1: Hámburguer`)
        break
    case 2:
        item1 = "Pizza"
        precoItem1 = 35
        alert(` Prato 1: Pizza`) 
        break
    case 3:
        item1 = "Refrigerante"
        precoItem1 = 5
        alert(` Prato 1: Refrigerante`) 
        break
    case 4:
        item1 = "Batata frita"
        precoItem1 = 12
        alert(` Prato 1: Batata frita`) 
        break
    case 5:
        alert(`Fechando o programa`)
        break
    default:
        break
}
switch (prato2) {
    case 1:
        item2 = "Hámburguer"
        precoItem2 = 20
        alert(` Prato 2: Hámburguer`)
        break
    case 2:
        item2 = "Pizza"
        precoItem2 = 35
        alert(` Prato 2: Pizza`) 
        break
    case 3:
        item2 = "Refrigerante"
        precoItem2= 5
        alert(` Prato 2: Refrigerante`) 
        break
    case 4:
        item2 = "Batata frita"
        precoItem2 = 12
        alert(` Prato 2: Batata frita`) 
        break
    case 5:
        alert(`Fechando o programa`)
        break
    default:
        alert(`Número inválido, fechando menu...`)
        break;
}
switch (prato3) {
    case 1:
        item3 = "Hámburguer"
        precoItem3 = 20
        alert(` Prato 3: Hámburguer`)
        break
    case 2:
        item3 = "Pizza"
        precoItem3 = 35
        alert(` Prato 3: Pizza`) 
        break
    case 3:
        item3 = "Refrigerante"
        precoItem3 = 5
        alert(` Prato 3 Refrigerante`) 
        break
    case 4:
        item3 = "Batata frita"
        precoItem3 = 12
        alert(` Prato 3: Batata frita`) 
        break
    case 5:
        alert(`Fechando o programa`)
        break
    default:
        alert(`Número inválido, fechando menu...`)
        break;
}

let total = precoItem1 + precoItem2 + precoItem3

let estudante = prompt(`Você é estudante? s/n`)

if(estudante == "s" ) {
    let totalEstudante = total - 10 * total / 100
    alert (`O total foi de R$${totalEstudante}`)
} else if (totalEstudante >= 50) {
    let totalEstudanteDesconto = totalEstudante - 5 * totalEstudante / 100
    alert (`O total foi de R$${totalEstudanteDesconto}`)
} else {
alert (`O total foi de R$${total}`)
}





