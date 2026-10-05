export function consultarSaldo(conta, banco){
    const saldo = banco.buscarSaldo(conta);

    if (saldo < 0){
        return "Conta negativa"
    }

    return `Saldo: R$ ${saldo}`
    
}