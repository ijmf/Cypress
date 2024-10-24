Cypress.Commands.add('login', (email, password) => {

    cy.session([email, password], () => {
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email,
                password
            }
        })
    }, { cacheAcrossSpecs: true })
})

//Seleciona um elemento pelo atributo data-test
Cypress.Commands.add('getElement', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})