describe('Página de Cadastrar', () => {

    beforeEach(() => {
        cy.visit('/cadastrar')
    })
    it('Faz o Cadastro', () => {

        //Espionar APIs
        //cy.intercept('GET', '/api/profile/me')
        //.as('apiLogin')

        //Preenche o Nome
        cy.getElement('register-name')
            .type('Ivan Ferreira2')
        //Preenche o Email
        cy.getElement('register-email')
            .type('ivanjf2@yahoo.com.br')
        //Preenche a Senha
        cy.getElement('register-password')
            .type('123456')
        //Confirma a Senha
        cy.getElement('register-password2')
            .type('123456')
        //Clica em Login
        cy.getElement('register-submit')
            .click()

        //Espera a API para dar sequência na execução.    
        //.wait('@apiLogin')

        //Valida se o usuário está logado
        cy.getElement('dashboard-welcome')
            .should('be.visible')
            .and('contain.text', 'Bem-vindo')
    })
})