var valorTotal=[0,0]
var valorProduto = [100]
var qtd = [0]

function adicionarItem(item) {
    var qtde = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)
    qtd[item] +=1
    valorTotal[item] = Number.parseFloat(valorProduto[item]* qtd[item])
    qtde.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)    
}

function removerItem(item) {
    if(qtd[item] > 0) {
        qtd[item] -= 1;
        var qtde = document.getElementById('quantidade'+item)
        var total = document.getElementById('total'+item)
        valorTotal[item] = Number.parseFloat(valorProduto[item] * qtd[item]);
        qtde.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2)
    }
}

function valorCompra() {
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0
    for (var i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i]
    }
    valorTotalCompra.innerHTML = valor.toFixed(2)
}

function removerProduto() {
    var pai = document.getElementById('carrinho')
    var filho = document.getElementById('produto' + produto);
    if (confirm('Deseja excluir o produto')) {
        valorTotal[produto] -= valorProduto[produto] * qtd[produto]
        qtd[produto] = 0
        pai.removeChild(filho)
        valorCompra()
    }    
}