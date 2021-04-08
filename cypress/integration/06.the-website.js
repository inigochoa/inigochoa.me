describe('Page - The website', () => {
  beforeEach(() => {
    cy.visit('/the-website/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('The website')
  })

  it('has content', () => {
    cy.get('.max-w-none > p').its('length').should('be.gt', 0)
  })
})
