import { mount } from 'cypress/react18'
import Quiz from '../../src/components/Quiz'
import questions from '../fixtures/questions.json'
import 'bootstrap/dist/css/bootstrap.min.css'

describe('<Quiz />', () => {
  it('should start the quiz and display multiple choice questions', () => {
   
    mount(<Quiz />)

    cy.window().then((win) => {
      win.eval(`window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function (renderer) {
        const originalMount = renderer.Mount;
        renderer.Mount = function (element, container, callback) {
          if (element.type.name === 'Quiz') {
            element.props.questions = ${JSON.stringify(questions)};
          }
          return originalMount(element, container, callback);
        };
      };`);
    });
    
    cy.get('button').contains('Start Quiz').should('be.visible')

    cy.get('button').contains('Start Quiz').click()
  
    cy.get('button').contains('1').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
    cy.get('button').contains('4').should('be.visible').click()
    cy.get('button').contains('1').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
    cy.get('button').contains('4').should('be.visible').click()
    cy.get('button').contains('2').should('be.visible').click()
    cy.get('button').contains('3').should('be.visible').click()
  })
})