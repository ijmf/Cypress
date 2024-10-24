describe('Cabeçalho da página home', () => {

    const validarMenu = (seletor, href) => {
        cy.getElement(seletor)
            .should('have.attr', 'href', href)
            .and('not.have.attr', 'target');
    }

    context('Não logado', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        const menuItems = [
            { seletor: 'navbar-conexaoQA', href: '/' },
            { seletor: 'navbar-QAs', href: '/perfis' },
            { seletor: 'navbar-about', href: '/sobre' },
            { seletor: 'navbar-register', href: '/cadastrar' },
            { seletor: 'navbar-login', href: '/login' },
        ];

        menuItems.forEach(({ seletor, href }) => {

            it(`Valida menu ${seletor.replace('navbar-', '')}`, () => {
                validarMenu(seletor, href)
            });
        });
    });

    context('Logado', () => {
        beforeEach(() => {
            cy.login(Cypress.env('email'), Cypress.env('senha'))
            cy.visit('/dashboard')
        })
            ;
        const menu = [
            { seletor: 'navbar-conexaoQA', href: '/' },
            { seletor: 'navbar-QAs', href: '/perfis' },
            { seletor: 'navbar-posts', href: '/posts' },
            { seletor: 'navbar-dashboard', href: '/dashboard' },
            { seletor: 'navbar-about', href: '/sobre' },
            { seletor: 'navbar-logout', href: '/' },
        ]
        menu.forEach(({ seletor, href }) => {
            it(`Valida menu ${seletor.replace('navbar-', '')}`, () => {
                validarMenu(seletor, href)
            });
        });
    })
});
