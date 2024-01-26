// describe("function centsToDecimals", () => {
//   it("", () => {})
// })



describe("function centsToDecimals", function() {
  it("1. Deberia convertir el valor en centimos a euros", function() {
    expect( centsToDecimals(122) ).toBe(1.22);
    expect( centsToDecimals(0) ).toBe(0);
    expect( centsToDecimals(56) ).toBe(0.56);
  })

  it("2. Si recibe el valor como string, deberia returnar undefined", function() {
    expect( centsToDecimals("1.44 cents") ).toBe(undefined);
  })

  it("3. Si el valor no se recibe. Deberia retornar 0", function() {
    expect( centsToDecimals() ).toBe(0)
  })
} )