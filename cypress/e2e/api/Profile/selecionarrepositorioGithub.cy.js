describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Selecionar post pelo ID', () => {

        const gitHub = 'ijmf';

        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiBaseUrl')}/api/profile/github/${gitHub}`

        }).then(({ status, body }) => {
            expect(status).to.eq(200); // Verifica se o status é 201

        });
    });

});