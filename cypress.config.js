const { defineConfig } = require("cypress");
//const mongoose = require('mongoose')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // URL padrão
    env: {
      apiBaseUrl: 'http://localhost:5000' // Nova variável de ambiente
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: {
      runMode: 0,
      openMode: 2,
    },
    video: false,
    defaultCommandTimeout: 4000,
    projectId: 'chadnd',
    "watchForFileChanges": false,

    // eslint-disable-next-line
    setupNodeEvents(on, config) {

      on('task', {

        msgConsole() {
          console.log('Mensagem do console.log dentro do NodeJs')

          return null
        },

        lerPasta(caminho) {
          return fs.readdirSync(caminho).length
        },

        conectarMongo() {

          // criar a conexão
          try {
            mongoose.connect(config.env.enderecoBanco, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            })

            console.log('Conexão estabelecida com o banco de dados')
          } catch (err) {
            console.log(err)
          }

          return null
        },
      })
    },
  },
});