import unittest
from unittest.mock import Mock
from enviar_boas_vindas import Usuario, enviar_boas_vindas


class TestEnviarBoasVindas(unittest.TestCase):
    
    def test_enviar_boas_vindas(self):
        usuario = Usuario("example@email.com")
        
        email_service_mock = Mock()
        
        resultado = enviar_boas_vindas(usuario, email_service_mock)
        
        self.assertEqual(resultado, "Enviado")
        
        email_service_mock.enviar.assert_called_once_with(
            "example@email.com", 
            "Bem-vindo ao sistema!"
        )