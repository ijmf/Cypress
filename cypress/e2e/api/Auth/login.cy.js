describe('API - Auth', () => {

    context('Logar na aplicação e recuperar usuário logado', () => {

        it('Logar na aplicação', () => {
            cy.login(Cypress.env('email'), Cypress.env('senha'))
        });

        it('Selecionar o usuário Logado', () => {

            const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTI4ZGQyNmRkYmM0NDA0Y2EyZDg1In0sImlhdCI6MTcyOTUzNjQ4MywiZXhwIjoxNzI5NTQwMDgzfQ.RnlfBs7P9v0QlGwaEW9XRaiC6_uig4F5Utnqog8-2ME'; // Substitua pelo ID do usuário desejado
            const iD = '671128dd26ddbc4404ca2d85'

            cy.request({
                url: `${Cypress.env('apiBaseUrl')}/api/auth`, // Incluindo o ID na URL
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Cookie': `jwt=${jwt}` // Incluindo o JWT diretamente no cabeçalho
                }
            }).then(({ status, body }) => {
                expect(status, 'Status Code').to.eq(200); // Verifica se o status é 200
                expect(body._id, 'ID deve ser igual').to.eq(iD); // Verifica se o ID no corpo da resposta é o mesmo que o ID pesquisado

            });
        });

    });
});

