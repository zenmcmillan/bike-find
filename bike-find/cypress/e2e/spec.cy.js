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
    cy.get('.card-container').first().contains('350 East 52nd Street, New York, NY 10022')
    cy.get('.card-container').last().contains('305-307 West 50th Street, New York, NY 10019')
  })
  it("should take user to a detail page when address is clicked, The UI should update when the location is saved or deleted and we should be able to navigate back to the home page", () => {
    
    cy.get('.card').contains('554 West 29th Street, New York, NY 10001').click()

    cy.get(".home-title").contains("BikeFind NYC");
    cy.get(".home").contains("Home");
    cy.get(".saved-locations").contains("Saved Locations");

    cy.get('.location-details-card').contains('Address: 554 West 29th Street, New York, NY 10001')
    cy.get('.location-details-card').contains('Zip Code: 10001')
    cy.get('.location-details-card').contains('Empty Slots: 12')
    cy.get(".location-details-card").contains('Available Bikes: 1')
    cy.get(".location-details-card").contains('Save Location').click()
    
    cy.get(".location-details-card").contains("Saved ✔");
    cy.get(".saved-locations").contains("Saved Locations").click()
    cy.get(".home").contains("Home").click()

    cy.get(".card").contains("143 W 40th Street").click()
    cy.get(".location-details-card").contains("Save Location").click()
    cy.get(".location-details-card").contains("Saved ✔")
    cy.get(".saved-locations").contains("Saved Locations").click()

    cy.get("h1").contains("Saved Locations")
    cy.get(".saved-card-container").children().should('have.length', 2)
    
    cy.get(".saved-locations-card").contains("143 W 40th Street").parent().find('.delete-button').click()

    cy.get(".saved-card-container").children().should("have.length", 1);

  })
})