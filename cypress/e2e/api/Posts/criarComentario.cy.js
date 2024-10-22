describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Cria um comentário', () => {
        const valorComentario = 'Comentário feito em Post IJMF v2';
        const postId = '6717a342bfd52117e89b718f'; // ID do post

        // Certifique-se de que o JWT está sendo obtido corretamente
        const jwt = Cypress.env('jwt'); // Verifique se o JWT está corretamente definido

        //cy.log('JWT:', jwt); // Para depuração

        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/api/posts/comment/${postId}`, // Incluindo o postId na URL
            body: {
                text: valorComentario
            },
            headers: {
                'accept': 'application/json',
                'Cookie': `jwt=${jwt}` // Usando o JWT como cookie
            },
            failOnStatusCode: false // Para depuração, pode ser removido depois
        }).then(({ status, body }) => {
            cy.log('Status:', status);
            cy.log('Body:', body);
            expect(status).to.eq(201); // Verifica se o status é 201
            expect(body[0].text).to.eq(valorComentario); // Verifica se o texto do comentário é o mesmo que foi enviado
        });
    });

});
