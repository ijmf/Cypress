describe('Página inicial', () => {

    beforeEach(() => {
        cy.visit('/') // Visita a página inicial
    })

    it('Válida o título central da página inicial ', () => {
        cy.getElement('landing-title')
            .should('have.text', 'Conectando QAs ...') // Substitua 'Título Esperado' pelo texto que você espera
            .and('have.class', 'x-large') // Verifica se o título está visível

    });

    it('Válida o título da página inicial', () => {

        cy.getElement('navbar-conexaoQA') // pega a seleção do elemento
            .should('have.text', ' ConexãoQA') // Substitua 'Título Esperado' pelo texto que você espera
        //.and('have.class', 'x-large') // Verifica se o título está visível

    });

    it('Válida o título secundário da página inicial', () => {
        cy.getElement('landing-subtitle') // pega a seleção do elemento
            .should('have.text', 'Crie um perfil/portfolio, compartilhe posts e obtenha ajuda da comunidade de QA') // Substitua 'Título Esperado' pelo texto que você espera
        //.and('have.class', 'x-large') // Verifica se o título está visível

    });

    it('Valida Botões e Propriedade CSS', () => {
        cy.getElement('landing-register')
            .should('have.text', 'Cadastrar')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.getElement('landing-login')
            .should('have.text', 'Login')
            .should('have.css', 'color', 'rgb(51, 51, 51)')
    })

    // it('Seleciona elemento utilizando o Filter ou Eq', () => {
    //     //Filtrar utilizando o comando filter
    //     cy.get('a')
    //         .filter('.btn-primary')
    //         .should('have.text', 'Cadastrar')

    //     //Filtrar utilizando o comando eq
    //     cy.get('a')
    //         .eq(6)
    //         .should('have.text', 'Login')
    // })

    // it('Seleciona um elemento com o CONTAINS', () => {
    //     cy.contains('h1', 'QAs')
    //         .should('have.text', 'Conectando QAs ...')
    // })

});
