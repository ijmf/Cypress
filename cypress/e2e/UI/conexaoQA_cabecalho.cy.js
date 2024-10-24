describe('Cabeçalho da página home', () => {
    const menuItems = [
        { testId: 'navbar-conexaoQA', href: '/' },
        { testId: 'navbar-QAs', href: '/perfis' },
        { testId: 'navbar-about', href: '/sobre' },
        { testId: 'navbar-register', href: '/cadastrar' },
        { testId: 'navbar-login', href: '/login' },
    ];

    context('Não logado', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        menuItems.forEach(({ testId, href }) => {

            it(`Valida menu ${testId.replace('navbar-', '')}`, () => {
                cy.get(`[data-test=${testId}]`)
                    .should('have.attr', 'href', href)
                    .and('not.have.attr', 'target');
            });
        });
    });

    context('Logado', () => {
        // Adicione os testes para a situação "Logado" aqui
    });
});
