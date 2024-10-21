describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })

    it('Cria um post', () => {

        let valorComentario = 'Criado por Ivan Ferreira'

        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201)
            expect(body.text).to.eq(valorComentario)
        })

    });

    it('Cria outro post', () => {

        let valorComentario = 'Outro Comentário feito por Ivan Ferreira'

        cy.request({
            method: 'POST',
            url: '/api/posts',
            body: {
                text: valorComentario
            }
        }).then(({ status, body }) => {
            expect(status).to.eq(201)
            expect(body.text).to.eq(valorComentario)
        })

    });


});