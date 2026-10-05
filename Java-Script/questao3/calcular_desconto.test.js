import { test, expect } from "vitest";
import { calcularDesconto } from "./calcular_desconto.js";

test("Valor invalido", () => {
  expect(() => calcularDesconto(-1, "vip")).toThrow("Valor inválido");
});

test("Cliente VIP com valor de R$300", () => {
  const resultado = calcularDesconto(300, "vip");
  expect(resultado).toBe(60); 
});

test("Cliente VIP com valor abaixo de 300", () => {
  const resultado = calcularDesconto(200, "vip");
  expect(resultado).toBe(0); 
});

test("Cliente comum com valor de 500", () => {
  const resultado = calcularDesconto(500, "comum");
  expect(resultado).toBe(50); 
});

test("Cliente comum com valor abaixo de 500", () => {
  const resultado = calcularDesconto(400, "comum");
  expect(resultado).toBe(0); 
});