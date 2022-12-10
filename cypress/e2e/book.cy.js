const { admin } = require('../fixtures/users');
const selectors = require('../fixtures/selectors');

describe('Book', () => {
  it('Should book', () => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.login(admin.email, admin.password);
    cy.get(selectors.movieAdminName).first().invoke('text').then((text) => {
      cy.visit('http://qamid.tmweb.ru');
      cy.get(selectors.tomorrow).click();
      cy.get(selectors.movieName).contains(text).get(selectors.availableSeance).first().click();
    });
    cy.get(selectors.vacantStandartSeat).first().click();
    cy.get(selectors.vacantStandartSeat).first().click();
    cy.get(selectors.button).click();
    cy.contains('Вы выбрали билеты:').should('be.visible');
    cy.get(selectors.button).click();
    cy.contains('Электронный билет').should('be.visible');
  })
})