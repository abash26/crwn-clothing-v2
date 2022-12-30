describe('/auth', () => {
    beforeEach(() => {
        cy.visit('/auth')
    })

    it('greets with Already have an account?', () => {
        cy.contains('h2', 'Already have an account?')
    });

    it('requires email', () => {
        cy.get('form').contains('Sign In').click()
        cy.get('[data-cy=email]:invalid').should('have.length', 1)
        cy.get('[data-cy=email]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill in this field.')
        })
    });

    it('requires password', () => {
        cy.get('[data-cy=email]').type('test@gmail.com{enter}')
        cy.get('[data-cy=password]:invalid').should('have.length', 1)
        cy.get('[data-cy=password]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill in this field.')
        })
    });

    it('navigates to / on successful login', () => {
        cy.get('[data-cy=email]').type('test@gmail.com')
        cy.get('[data-cy=password]').type('2323123{enter}')
        cy.url().should('eq', '/')
    });
})


