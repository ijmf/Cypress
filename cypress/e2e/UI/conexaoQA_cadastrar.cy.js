describe('Página de Cadastrar', () => {

    beforeEach(() => {
        cy.visit('/cadastrar')
    })

    it('Válida o título do cabeçalho', () => {

        cy.getElement('navbar-conexaoQA') // pega a seleção do elemento
            .should('have.text', ' ConexãoQA') // Substitua 'Título Esperado' pelo texto que você espera
        //.and('have.class', 'x-large') // Verifica se o título está visível

    });
    it('Válida o título do formulário', () => {
        cy.get('h1.large.text-primary') // Seleciona o <h1> com as classes 'large' e 'text-primary'
            .should('have.text', 'Cadastrar') // Verifica se o texto é 'Cadastrar'
            .and('be.visible'); // Verifica se o título está visível
    });

    it('Válida o subtítulo do formulário', () => {
        cy.get('p.lead') // pega a seleção do elemento
            .should('have.text', ' Criar Sua Conta') // Substitua 'Título Esperado' pelo texto que você espera
            .and('be.visible'); // Verifica se o título está visível
    });

    it('Verifica a mensagem sobre Gravatar', () => {
        cy.get('small.form-text') // Verifica o elemento small
            .should('be.visible')
            .and('contain', 'Este site usa Gravatar');
    });

    it('Válida o rótulo do campo Nome', () => {
        cy.get('label.MuiFormLabel-root')
            .eq(0)
            .should('be.visible') // Verifica se o rótulo está visível
            .and('contain.text', 'Nome'); // Verifica se contém "Nome" (não se importa com o asterisco)
    });

    it('Válida o rótulo do campo Email', () => {
        cy.get('label.MuiFormLabel-root')
            .eq(1)
            .should('be.visible') // Verifica se o rótulo está visível
            .and('contain.text', 'Email'); // Verifica se contém "Nome" (não se importa com o asterisco)
    });

    it('Válida o rótulo do campo Senha', () => {
        cy.get('label.MuiFormLabel-root')
            .eq(2)
            .should('be.visible') // Verifica se o rótulo está visível
            .and('contain.text', 'Senha'); // Verifica se contém "Nome" (não se importa com o asterisco)
    });

    it('Válida o rótulo do campo Confirmação', () => {
        cy.get('label.MuiFormLabel-root')
            .eq(3)
            .should('be.visible') // Verifica se o rótulo está visível
            .and('contain.text', 'Confirmar Senha'); // Verifica se contém "Nome" (não se importa com o asterisco)
    });

    it('Valida Botão Cadastrar e Propriedade CSS', () => {
        cy.getElement('register-submit')
            .should('have.value', 'Cadastrar') // Verifica o valor do botão
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.css', 'background').and('include', 'rgb(23, 162, 184)');
    });

    it('Verifica o parágrafo e o link', () => {
        cy.get('p.my-1') // Verifica o parágrafo
            .should('be.visible')
            .and('contain', 'Já tem uma conta?');

        cy.get('[data-test=register-login]') // Verifica o link
            .should('have.text', 'Login')
            .and('have.attr', 'href', '/login');
    });

    it('Faz o Cadastro', () => {

        //Espionar APIs
        //cy.intercept('GET', '/api/profile/me')
        //.as('apiLogin')

        //Preenche o Nome
        cy.getElement('register-name')
            .type('Ivan Ferreira4')
        //Preenche o Email
        cy.getElement('register-email')
            .type('ivanjf4@yahoo.com.br')
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