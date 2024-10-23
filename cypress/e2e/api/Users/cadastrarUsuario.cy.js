describe('Profile', () => {

    let jwt; // Variável para armazenar o JWT

    it('Criar um novo usuário e obter o JWT', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/api/users`, // URL para criar o usuário
            body: {
                "name": "Teste 3",
                "email": "Teste2@gmail.com",
                "password": "123456"
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201); // Verifica se o status é 201
            //expect(body).to.have.property('id'); // Verifica se a resposta contém um ID
        });
    });

});
