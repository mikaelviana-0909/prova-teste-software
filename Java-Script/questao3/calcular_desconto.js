export function calcularDesconto(valor, cliente){

    if (valor <= 0){
        throw new Error("Valor inválido");
    }

    if (cliente === "vip" && valor >= 300){
        return valor * 0.20;
    }

    if (valor >= 500){
        return valor * 0.10;
    }

    return 0;

}
