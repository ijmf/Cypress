describe('Página inicial', () => {

    beforeEach(() => {
        cy.visit('/') // Visita a página inicial
    })

    it('Válida o título da página inicial com GET', () => {
        cy.get('[data-test=landing-title]') // pega a seleção do elemento
            .should('have.text', 'Conectando QAs ...') // Substitua 'Título Esperado' pelo texto que você espera
            .and('have.class', 'x-large') // Verifica se o título está visível

    });

    it('Seleciona um elemento com o CONTAINS', () => {
        cy.contains('h1', 'QAs')
            .should('have.text', 'Conectando QAs ...')
    })

    it('Valida propriedade CSS', () => {
        cy.get('[data-test=landing-register]')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-test=landing-login]')
            .should('have.css', 'color', 'rgb(51, 51, 51)')
    })

    it('Seleciona elemento utilizando o Filter', () => {
        //Filtrar utilizando o comando filter
        cy.get('a')
            .filter('.btn-primary')
            .should('have.text', 'Cadastrar')

        //Filtrar utilizando o comando eq
        cy.get('a')
            .eq(6)
            .should('have.text', 'Login')
    })
});
