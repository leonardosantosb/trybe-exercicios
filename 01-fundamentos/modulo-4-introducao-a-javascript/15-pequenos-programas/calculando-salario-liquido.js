let salarioBruto = 3000;
let aliquotaInss;
let impostoDeRenda;



if (salarioBruto <= 1556.94){
    aliquotaInss = (salarioBruto * 8) / 100;
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = (salarioBruto * 9) / 100;
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaInss = (salarioBruto * 11) / 100;
}else if (salarioBruto > 5189,82) {
    aliquotaInss = 570.88;
}else {
    console.log("Erro, conferir valores")
}

let salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
    impostoDeRenda = 0
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    impostoDeRenda = ((salarioBase * 7.5) / 100) - 142.80
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    impostoDeRenda = ((salarioBase * 15) / 100) - 354.80
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoDeRenda = ((salarioBase * 22.5) / 100) - 636.13
}else if (salarioBase > 4664.68) {
    impostoDeRenda = ((salarioBase * 27.5) / 100) - 869.36
}else {
    console.log("Erro, conferir valores")
}

console.log("Valor do salário líquido :" + (salarioBase - impostoDeRenda))