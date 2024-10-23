describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Selecionar post pelo ID', () => {

        const userId = '67101d29e9b46e8b38acacb1'; // ID do post, necessário sempre alterar esse postId, ele vence com o tempo.

        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/api/profile/user/${userId}`

        }).then(({ status, body }) => {
            expect(status).to.eq(200); // Verifica se o status é 201

        });
    });

});