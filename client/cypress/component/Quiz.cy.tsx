import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', {
      fixture: 'questions.json',
    }).as('getQuestions');
  });

  it('should start the quiz when clicking the start button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('h2').should('contain', 'Question 1');
  });

  it('should display the next question when clicking an answer\'s button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('button').contains('1').click();
    cy.get('h2').should('contain', 'Question 2');
  });

  it('should display the score when completing the quiz', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('button').contains('1').click();
    cy.get('button').contains('1').click();
    cy.get('h2').should('contain', 'Quiz Completed');
    cy.get('.alert-success').should('contain', 'Your score:');
  });

  it('should allow starting a new quiz after the quiz is completed', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('button').contains('1').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('Take New Quiz').click();
    cy.get('h2').should('contain', 'Question 1');
  });
});