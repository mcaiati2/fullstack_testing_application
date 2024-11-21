describe('Site Tests', () => {
  it('passes', () => {
    cy.visit('http://127.0.1:3000');

  cy.get('button').contains('Start Quiz').click();
  cy.get('button').contains('1').click();
  cy.get('button').contains('2').click();
  cy.get('button').contains('3').click();
  cy.get('button').contains('4').click();
  cy.get('button').contains('1').click();
  cy.get('button').contains('2').click();
  cy.get('button').contains('3').click();
  cy.get('button').contains('4').click();
  cy.get('button').contains('1').click();
  cy.get('button').contains('2').click();

  })
})