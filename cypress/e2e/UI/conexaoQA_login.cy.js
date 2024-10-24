describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })
    it('Faz o Login', () => {

        //Espionar APIs
        cy.intercept('GET', '/api/profile/me')
            .as('apiLogin')

        //Preenche o Email
        cy.getElement('login-email')
            .type(Cypress.env('email'))
        //Preenche a Senha
        cy.getElement('login-password')
            .type(Cypress.env('senha'))
        //Clica em Login
        cy.getElement('login-submit')
            .click()

            //Espera a API para dar sequência na execução.    
            .wait('@apiLogin')

        //Valida se o usuário está logado
        cy.getElement('dashboard-welcome')
            .should('be.visible')
            .and('contain.text', 'Bem-vindo Teste')
    })
})