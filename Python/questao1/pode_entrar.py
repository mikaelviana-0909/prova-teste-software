def pode_entrar(idade, possui_ingresso):
    if idade < 0:
        raise ValueError("Idade invalida")

    if idade < 18:
        return False

    return possui_ingressso
