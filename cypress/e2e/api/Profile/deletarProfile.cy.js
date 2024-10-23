describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Deleta um Post identificado pelo Token', () => {

        //const postId = '6717efd8bfd52117e89b7217'; // Comentei pois não queria apagar o comentário.
        //const jwt = Cypress.env('jwt'); // Deixei comentado pois não queria apagar o jwt no momento.

        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiBaseUrl')}/api/profile`, // Incluindo o postId na URL
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