describe('Página Dashboard', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('/dashboard')
    })

    it('Válida o título do cabeçalho', () => {

        cy.getElement('navbar-conexaoQA') // pega a seleção do elemento
            .should('have.text', ' ConexãoQA') // Substitua 'Título Esperado' pelo texto que você espera
        //.and('have.class', 'x-large') // Verifica se o título está visível

    });

    it('Válida o título do formulário', () => {
        cy.get('h1.large.text-primary') // Seleciona o <h1> com as classes 'large' e 'text-primary'
            .should('have.text', 'Dashboard') // Verifica se o texto é 'Cadastrar'
            .and('be.visible'); // Verifica se o título está visível
    });

    it('Válida o subtítulo do formulário', () => {
        cy.get('p.lead') // pega a seleção do elemento
            .should('be.visible')
            .and('contain', ' Bem-vindo ');
    });
})