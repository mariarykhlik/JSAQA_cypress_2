const { admin, notAdmin } = require('../fixtures/users');
const selectors = require('../fixtures/selectors');

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://qamid.tmweb.ru/admin');
  });
  
  it('Should login', () => {
    cy.login(admin.email, admin.password);
    cy.contains('Управление залами').should('be.visible');
  });
  
  it('Should not login for invalid data', () => {
    cy.login(notAdmin.email, notAdmin.password);
    cy.contains('Ошибка авторизации!').should('be.visible');
  });
  
  it('Should not login for empty email', () => {
    cy.login('', admin.password);
    cy.get(selectors.emailField).then(($el)=> $el[0].checkValidity()).should('be.false');
    cy.get(selectors.emailField).then(($el) => $el[0].validationMessage).should('contain', 'Заполните это поле.');
  });
  
  it('Should not login for empty password', () => {
    cy.login(admin.email);
    cy.get(selectors.passwordField).then(($el) => $el[0].checkValidity()).should('be.false');
    cy.get(selectors.passwordField).then(($el) => $el[0].validationMessage).should('contain', 'Заполните это поле.');
  });
})