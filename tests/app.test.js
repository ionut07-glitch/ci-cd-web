import { greet } from "../src/app.js";

test("greet retorna el nom", () => {
  expect(greet("Mn")).toBe("Hola Mn");
});
