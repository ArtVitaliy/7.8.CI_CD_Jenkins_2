import selector from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/selectors";

describe('home page', () => {
  it('checking the correct display of the main page', () => {
    cy.visit('http://qamid.tmweb.ru');
    cy.get(selector.title).should("contain.text", "Идёмвкино");
    cy.get(selector.weekday).should("have.length", 7);
    cy.get(selector.movieSection).should("be.visible");
  });
});