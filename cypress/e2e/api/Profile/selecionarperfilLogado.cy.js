describe('Profile', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Selecionar o perfil do usuário logado', () => {

        const jwt = Cypress.env('jwt'); // Verifique se o JWT está corretamente definido

        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/api/profile/me`, // Incluindo o postId na URL
            headers: {
                'accept': 'application/json',
                'Cookie': `jwt=${jwt}` // Usando o JWT como cookie, Necessário sempre atualizar o jwt, ele vence com o tempo.
            },

        }).then(({ status, body }) => {
            expect(status).to.eq(200); // Verifica se o status é 201

        });
    });

});