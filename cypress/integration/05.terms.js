describe('Page - Terms & Conditions', () => {
  beforeEach(() => {
    cy.visit('/terms-and-conditions/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('Terms and Conditions')
  })

  it('has content', () => {
    cy.get('.max-w-none > h2').its('length').should('be.gt', 0)
    cy.get('.max-w-none > p').its('length').should('be.gt', 0)
  })
})
