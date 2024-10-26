describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })
    it('Valida o Login válido', () => {

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

    it('Válida login com email inválido', () => {

        //Preenche o Email errado
        cy.getElement('login-email')
            .type('Jaqueline')

        //Preenche a Senha
        cy.getElement('login-password')
            .type('120012')

        //Valida a msg de email inválido
        cy.contains('p', 'Digite um email válido')
            .should('be.visible')
    })

    it('Valida login com senha Inválida', () => {

        //Espionar APIs
        cy.intercept('POST', '/api/auth')
            .as('apiLogin')

        //Preenche o Email
        cy.getElement('login-email')
            .type(Cypress.env('email'))
        //Preenche a Senha
        cy.getElement('login-password')
            .type('120012')
        //Clica em Login
        cy.getElement('login-submit')
            .click()

            //Esperar API
            .wait('@apiLogin')
            .then(({ response }) => {
                expect(response.statusCode).to.eq(401)
            })

        //Valida se o usuário está logado
        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')
    })

    it.only('valida o alerta de credencial inválida', { tags: ['@smoke', '@login'] }, () => {

        // faz o spy na hora
        cy.clock()

        cy.intercept('POST', '/api/auth')
            .as('login')

        // visita a página de login
        cy.visit('/login')

        // prencher um email aleatório
        cy.getElement('login-email')
            .type('usuarioAleatorio@teste.com')

        // preencher uma senha aleatória
        cy.getElement('login-password')
            .type('123456')

        // clicar no botão Login
        cy.getElement('login-submit')
            .click()

        cy.wait('@login')

        // validar o alerta de credencial inválido
        cy.getElement('alert')
            .should('have.text', 'Credenciais inválidas')

        // cy.wait(10000)

        // cy.get('[data-test=alert]', { timeout: 10000 })
        //     .should('not.exist')

        // adiantar o tempo da nossa aplicação em 10 segundos
        cy.tick(10000)

        cy.getElement('alert')
            .should('not.exist')
    })


})