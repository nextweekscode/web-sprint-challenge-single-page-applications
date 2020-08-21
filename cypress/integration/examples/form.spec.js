describe ('Input and add user button', () => {
    it('Navigate to the site ', ()=> {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('Name Input ',()=>{
        cy.get('input[name="username"]')
        .type('ashton')
        .should('have.value','ashton')
    })
    it('Address Input',()=>{
        cy.get('input[name="address"]')
        .type('address')
        .should('have.value','address')
    })
    it('Size choose',()=>{
        cy.get('select[name="size"]')
        cy.get('select').select('small')
        .should("have.value", "small")
    })
    it('check that checkbox', () =>{
        cy.get('[type="checkbox"]').check()
        .should('have.value','on')
    })
    it('the submit button is not disabled any more', () => {
        cy.get('#submitBtn').should('not.be.disabled')
      })

})
