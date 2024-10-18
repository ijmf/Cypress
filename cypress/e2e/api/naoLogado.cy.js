//const { get } = require("cypress/types/lodash");

describe('API - Profile', () => {

    context('valida a API de perfis', () => {
        it('todos os perfis', () => {
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
}); 
