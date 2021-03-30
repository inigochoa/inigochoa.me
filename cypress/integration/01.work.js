describe('Page - Work', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct headline', () => {
    cy.get('h1').contains('Some of my projects')
  })

  it('has a list of projects', () => {
    cy.get('.py-8 > li').its('length').should('be.gt', 0)
  })
})
