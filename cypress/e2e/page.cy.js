const selectors = require('../fixtures/selectors');

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru');
  });
  
  it('Should show correct week', () => {
    cy.get(selectors.day).should('have.length', 7);
    cy.get(selectors.day).first().should('match', selectors.today).and('match', selectors.chosen);
  });

  
  it('Should show movies info', () => {
    cy.get(selectors.movie).should('not.have.length', 0).and('be.visible');
    cy.get(selectors.info).should('be.visible');
    cy.get(selectors.poster).should('be.visible');
  });

  it('Should show movie seances', () => {
    cy.get(selectors.hallSeances).should('not.have.length', 0).and('be.visible');
  });

  it('Should go to hall plan by click available seance', () => {
    cy.get(selectors.availableSeance).first().click();
    cy.url().should('include', '/hall.php');
  });
})
