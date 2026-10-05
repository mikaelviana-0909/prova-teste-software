import { test, expect, vi } from "vitest";
import { consultarSaldo } from "./consultar_saldo.js";

test("Simulando Conta Negativa", () => {
  const banco = {
    buscarSaldo: vi.fn()
  };
  expect(consultarSaldo(123, banco(-50))).toBe("Conta negativa");
});

test("Simulando Saldo Positivo", () => {
  const bancoMock = {
    buscarSaldo: vi.fn()
  };
  expect(consultarSaldo(123, banco)).toBe("Saldo: R$ 750"); 
});