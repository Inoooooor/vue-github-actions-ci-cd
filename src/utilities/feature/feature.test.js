const minus = require("./feature")

describe("minus", () => {
  test("Корректное значение", () => {
    expect(minus(2, 3)).toBe(-1)
  })

  test("Корректное значение", () => {
    expect(minus(0, 0)).toBe(0)
  })
})
