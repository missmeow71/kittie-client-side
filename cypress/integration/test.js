describe('End to end tests!!', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.get('.enter').click()
  })
  it('displays cat cards', () => {
    cy.get('.card').should('have.length.gt', 0)
  })
  it('it takes you to donate page', () => {
  cy.get('#root > div.header > div > button:nth-child(2) > a').click()
    })

})
