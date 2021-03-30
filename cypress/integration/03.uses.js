describe('Page - Uses', () => {
  beforeEach(() => {
    cy.visit('/uses/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('/uses')
  })

  it('has content', () => {
    cy.get('.max-w-none > h2').its('length').should('be.gt', 0)
    cy.get('.max-w-none > p').its('length').should('be.gt', 0)
    cy.get('.max-w-none > ul').its('length').should('be.gt', 0)
  })
})
