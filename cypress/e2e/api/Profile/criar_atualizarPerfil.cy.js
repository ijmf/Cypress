describe('Profile', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha')); // Certifique-se de que o login está funcionando corretamente
    });

    it('Criar/Atualizar perfil', () => {
        // Certifique-se de que o JWT está sendo obtido corretamente
        const jwt = Cypress.env('jwt'); // Verifique se o JWT está corretamente definido

        //cy.log('JWT:', jwt); // Para depuração

        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/api/profile`, // Incluindo o postId na URL
            body: {
                "company": "BLUE",
                "status": "ATIVO",
                "location": "Taguatinga",
                "website": "TesteIJFM",
                "skills": "QA",
                "bio": "Aprendizado",
                "githubusername": "ijmf",
                "youtube": "",
                "twitter": "",
                "facebook": "",
                "linkedin": "",
                "instagram": "",
                "medium": ""
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
