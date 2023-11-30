var valorTotal=[0,0]
var valorProduto = [100]
var qtd = [0]

function adicionarItem(item) {
    var qtde = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)
    qtd[item] +=1
    valorTotal[0] = Number.parseFloat(valorProduto[item]* qtd[item])
    qtde.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)
    
    
}