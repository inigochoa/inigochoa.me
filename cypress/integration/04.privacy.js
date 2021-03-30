describe('Page - Privacy Policy', () => {
  beforeEach(() => {
    cy.visit('/privacy-policy/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('Privacy policy')
  })

  it('has content', () => {
    cy.get('.max-w-none > h2').its('length').should('be.gt', 0)
    cy.get('.max-w-none > p').its('length').should('be.gt', 0)
  })
})
