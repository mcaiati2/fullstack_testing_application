import React from 'react'
import { mount } from 'cypress/react18'
import Quiz from '../../src/components/Quiz'

import 'bootstrap/dist/css/bootstrap.min.css'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Quiz />)
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
    cy.get('button').contains('Take New Quiz').click();
  })
})