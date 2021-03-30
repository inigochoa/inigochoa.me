describe('Page - About', () => {
  beforeEach(() => {
    cy.visit('/about/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('About me')
  })

  it('has content', () => {
    cy.get('.max-w-none > p').its('length').should('be.gt', 0)
  })
})
