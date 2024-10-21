//const { get } = require("cypress/types/lodash");

describe('API - Profile', () => {

    context('Seleciona todos os perfis cadastrados no banco', () => {

        it('Todos os perfis', () => {
            cy.request({
                url: 'api/profile',
                method: 'GET'
            }).then(({ status, duration, body }) => {
                expect(status, 'Status Code').to.eq(200);
                expect(duration, 'Duração').to.be.lessThan(1000)
                expect(body[0].status, 'Cargo do Usuário').to.eq('QA Junior')
                expect(body[0].user.name, 'Nome do Usuário').to.eq('Igor Diga')
                expect(body[0].skills, 'Habilidades').to.have.lengthOf(3)
                expect(body[0].date, 'Campo de Data').to.not.be.null

            });
        });
    });

    context('Seleciona o perfil do usuário logado com base no ID informado no parâmetro de path', () => {
        it('Perfil identificado pelo ID', () => {
            const userId = '67101d29e9b46e8b38acacb1'; // Substitua pelo ID do usuário desejado

            cy.request({
                url: `api/profile/user/${userId}`, // Incluindo o ID na URL
                method: 'GET'
            }).then(({ status, duration, body }) => {
                expect(status, 'Status Code').to.eq(200); // Verifica se o status é 200
                expect(body.user, 'ID deve ser igual').to.have.property('_id', userId); // Verifica se o ID no corpo da resposta é o mesmo que o ID pesquisado
                expect(duration, 'Duração').to.be.lessThan(1000)
                // Adicione mais verificações conforme necessário
            });
        });
        it('Perfil não identificado pelo ID', () => {

            const invalidUserId = '999'; // ID que você sabe que não existe

            // Agora, faça a requisição com um ID inválido
            cy.request({
                url: `api/profile/user/${invalidUserId}`,
                method: 'GET',
                failOnStatusCode: false // Permitir que o teste continue mesmo em erro
            }).then(({ status, body }) => {
                expect(status, 'Status Code').to.eq(404); // Espera que o status seja 404 para um ID inválido
                expect(body.errors[0].msg, 'Mensagem de erro').to.eq('Perfil não encontrado')
            });
        });

    });

}); 
