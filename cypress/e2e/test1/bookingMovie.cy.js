import adminData from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/adminData";
import selector from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/selectors";
import seats from "C:/Users/User/Desktop/Netology/7.8_Cypress/cypress/fixtures/seats";

describe("Booking a movie", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Booking a movie with the title from the admin panel", () => {
    cy.login(adminData.validEmail, adminData.validPassword);
    cy.get(selector.sessionGrid)
      .eq(4)
      .then(($title) => {
        cy.visit("/client");
        cy.get(selector.dayOfWeek).click();
        cy.get(selector.movieSection)
          .contains($title.text())
          .parent()
          .parent()
          .next()
          .next()
          .contains("16:00")
          .click();
        cy.choiceSeats(seats);
        cy.get(selector.bookButton).click();
        cy.contains("Вы выбрали билеты:").should("be.visible");
        // cy.get(selector.bookButton).click();
        // cy.get(selector.qrCode).should("be.visible");
      });
  });
});
