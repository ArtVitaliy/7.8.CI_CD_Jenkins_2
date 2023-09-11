import adminData from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/adminData";
import selector from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/selectors";

describe('admin login verification', () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it('admin login verification valid', () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.contains(selector.deskForEqual).should("be.visible");
  });
});