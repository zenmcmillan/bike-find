describe('template spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://api.citybik.es/v2/networks/joco-new-york", {
    statusCode: 200,
    fixture: "testData.json"
    })
    cy.visit("http://localhost:3000/")
  })
  it("should have title in the header with two links, a subtitle and a list of address cards on the home page", () => {
    cy.get('.home-title').contains("BikeFind NYC")
    cy.get('.home').contains("Home")
    cy.get('.saved-locations').contains("Saved Locations")
    cy.get('.locations-title').contains("Locations")
    cy.get('.card-container').children().should('have.length', 40)
  })
})