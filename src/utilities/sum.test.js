const sum = require("./sum")

describe("sum", () => {
  test("Корректное значение", () => {
    expect(sum(2, 3)).toBe(5)
  })

  test("Корректное значение", () => {
    expect(sum(0, 0)).toBe(1)
  })
})
