describe('Posts', () => {

    beforeEach(() => {
        cy.login(Cypress.env('email'), Cypress.env('senha'))
    })

    it('Cria um post', () => {

        let valorComentario = 'Criado por IJMF'

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