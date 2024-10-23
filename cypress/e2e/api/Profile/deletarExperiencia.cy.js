describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Deleta um Post identificado pelo Token', () => {

        const expID = '6718f7edf4a9953dc8da05a5'; // Comentei pois não queria apagar o comentário.
        const jwt = Cypress.env('jwt'); // Verifique se o JWT está corretamente definido

        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiBaseUrl')}/api/profile/experience/${expID}`, // Incluindo o postId na URL
            headers: {
                'accept': 'application/json',
                'Cookie': `jwt=${jwt}` // Usando o JWT como cookie, Necessário sempre atualizar o jwt, ele vence com o tempo.
            },
            //failOnStatusCode: false // Para depuração, pode ser removido depois
        }).then(({ status, body }) => {
            expect(status).to.eq(200); // Verifica se o status é 201
            //expect(body.user).to.eq('671128dd26ddbc4404ca2d85');
            //expect(body[0].text).to.eq(valorComentario); // Verifica se o texto do comentário é o mesmo que foi enviado
        });
    });


});