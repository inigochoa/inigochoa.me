describe('Interface', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has a scroll to top button', () => {
    cy.get('#scrollTopButton').should('not.be.visible')
    cy.scrollTo('bottom')
    cy.get('#scrollTopButton').should('be.visible')
    cy.scrollTo('top')
    cy.get('#scrollTopButton').should('not.be.visible')
  })

  it('has a menu', () => {
    cy.get('nav ol > li').its('length').should('be.gt', 0)
  })
})
