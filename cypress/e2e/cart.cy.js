describe('/shop', () => {
    beforeEach(() => {
        cy.visit('/shop')
    })

    it.only('clicking on cart icon opens dropdown', () => {
        cy.get('[data-cy=cart]').click()
        cy.get('[data-cy=cart-dropdown]').contains("Your cart is empty")
    })

    it.only('navigates to /checkout on "go to checkout" button click', () => {
        cy.get('[data-cy=cart]').click()
        cy.get('[data-cy=checkout]').click()
        cy.url().should('include', '/checkout')
    })

    it.only('clicking on "add to cart" button adds item into cart', () => {
        cy.get('[data-cy=product1] > [data-cy=add]').invoke('show').click()
        cy.get('[data-cy=counter]').contains("1")
        cy.get('[data-cy=cart]').click()
        cy.get('[data-cy=cart-dropdown]').contains("Brown Brim")
    })
    
})