describe('Profile', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Adicionar formação acadêmica', () => {
        // Certifique-se de que o JWT está sendo obtido corretamente
        const jwt = Cypress.env('jwt'); // Verifique se o JWT está corretamente definido

        //cy.log('JWT:', jwt); // Para depuração

        cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiBaseUrl')}/api/profile/education`, // Incluindo o postId na URL
            body: {
                "school": "Mauá",
                "degree": "string",
                "fieldofstudy": "string",
                "from": "2025-10-23",
                "to": "2025-10-23",
                "current": false,
                "description": "string"
            },
            headers: {
                'accept': 'application/json',
                'Cookie': `jwt=${jwt}` // Usando o JWT como cookie, Necessário sempre atualizar o jwt, ele vence com o tempo.
            },
            failOnStatusCode: false // Para depuração, pode ser removido depois
        }).then(({ status, body }) => {
            expect(status).to.eq(200); // Verifica se o status é 201
            //expect(body[0].text).to.eq(valorComentario); // Verifica se o texto do comentário é o mesmo que foi enviado
        });
    });

});
