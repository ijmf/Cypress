describe('API - Auth', () => {

    context('Logar na aplicação e recuperar usuário logado', () => {

        it('Logar na aplicação', () => {
            cy.login(Cypress.env('email'), Cypress.env('senha'))
        });

        it('Selecionar o usuário Logado', () => {

            //const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMDFkMjllOWI0NmU4YjM4YWNhY2IxIn0sImlhdCI6MTcyOTU0MTAyNCwiZXhwIjoxNzI5NTQ0NjI0fQ.__o5PqAjFSWiDaeDnSCpvJV6LcGBHqkq-1rVn61g_NQ'; // Substitua pelo ID do usuário desejado
            const jwt2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTI4ZGQyNmRkYmM0NDA0Y2EyZDg1In0sImlhdCI6MTcyOTU5OTMxOSwiZXhwIjoxNzI5NjAyOTE5fQ.TGYRc7AmWZJT0CRGPrQTn-8GXOE2w99hiJpRb514Umw'; // Substitua pelo ID do usuário desejado
            //const iD = '67101d29e9b46e8b38acacb1'
            const iD2 = '671128dd26ddbc4404ca2d85'

            cy.request({
                url: `${Cypress.env('apiBaseUrl')}/api/auth`, // Incluindo o ID na URL
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Cookie': `jwt=${jwt2}` // Incluindo o JWT diretamente no cabeçalho
                }
            }).then(({ status, body }) => {
                expect(status, 'Status Code').to.eq(200); // Verifica se o status é 200
                expect(body._id, 'ID deve ser igual').to.eq(iD2); // Verifica se o ID no corpo da resposta é o mesmo que o ID pesquisado

            });
        });

    });
});