// const fs = require('fs')

describe('testando o cypress.config.js', () => {

    it('mostrar mensagens no console', () => {
        cy.log('Mensagem do console do Cypress')
        console.log('Mensagem do console.log dentro do browser')
        cy.task('msgConsole')
    })

    it('conta o total de arquivos da pasta UI', () => {
        // cy.log(`Número de arquivos: ${fs.readdirSync('cypress/e2e/ui').length}`)
        cy.task('lerPasta', 'cypress/e2e/ui2')
            .then((totalArquivos) => {
                cy.log(`Número de arquivos: ${totalArquivos}`)
                expect(totalArquivos).to.eq(6)
            })
    })

    it.only('conectar no banco', () => {
        cy.task('conectarMongo')
    })

    // conectar no banco
    // fazer o select
    /**
     * task (executarSelect)
     *  .then((retornoSelecao) => {
     *      
     * 
     *      // API
     *      cy.reques({
     *          method: 'GET'
     *          url: '/api/usuarios
     *      }).then(retornoAPI => {
     *          // comparação
     *          expect(retornoSelecao.usuario).to.eq(retornoAPI.body.usario)
     *      })     
     * 
     *      // ler arquivo
     *      cy.readFile(arquivoCSV)
     *          .then(retornoCSV => {
     *              // comparaçãoi
     *              expect(retornoSelecao.nome).to.eq(retornoCSV.nome)
     *          })    
     *  })
     */
})