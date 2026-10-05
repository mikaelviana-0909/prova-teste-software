import unittest
from unittest.mock import Mock

from pode_entrar import pode_entrar


class TestPodeEntrar(unittest.TestCase):

    def test_menor_de_18(self):
        self.assertFalse(pode_entrar(17, True))
        self.assertFalse(pode_entrar(17, False))
    
    def test_maior_de_18_com_ingresso(self):
        self.assertTrue(pode_entrar(18, True))
        self.assertTrue(pode_entrar(25, True))

    def test_maior_18_sem_ingresso(self):
        self.assertFalse(pode_entrar(18, False))
        self.assertFalse(pode_entrar(30, False))

    def test_idade_invalida(self):
        with self.assertRaises(ValueError):
            pode_entrar(-1, True)

if __name__ == "__main__":
    unittest.main()



















