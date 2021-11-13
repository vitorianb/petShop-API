const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
conexao.conect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        const app = customExpress()
        app.listen(3000, ()=> console.log('servidor rodando na porta 3000'))
    } 
})
