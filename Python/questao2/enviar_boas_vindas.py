class Usuario:
    def __init__(self, email):
        self.email = email

def enviar_boas_vindas(usuario, email_service):
    mensagem = "Bem-vindo ao sistema!"

    email_service.enviar(
        usuario.email,
        mensagem
    )

    return "Enviado"