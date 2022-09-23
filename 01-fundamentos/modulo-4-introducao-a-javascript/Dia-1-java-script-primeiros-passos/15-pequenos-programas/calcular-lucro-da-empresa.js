const custo = 6;
const venda = 20;
const quantidadeDeVendas = 1000;
const custoComImposto = ((custo * 20) / 100)+custo

if (custo < 0 || venda < 0) {
    console.log("Valores errados")
}else {
    console.log((quantidadeDeVendas * venda) - custoComImposto * quantidadeDeVendas)
} 

