/** Enunciado
Crie um formulário que possua os seguintes dados:
Nome completo
E-mail
Telefone
Tipo de telefone
casa
trabalho
celular
Endereço
logradouro
cidade
estado
cep
país
 * 
O formulário deve ser preenchido com os valores padrões abaixo, via JavaScript:
 const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com,
    telefones: [
        { 
            numero: "(11) 99123-4567",
            tipo: "casa"
        }
    ],
    endereco: {
        logradouro: "Rua das programadoras",
        cidade: "Vale do silício",
        estado: "Codefornia",
        cep: "10100-100",
        pais: "Programaland"
    }
}
*/

const formRegister = document.querySelector('[name="register"]')

formRegister.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = {
        
    }

    console.log(data)

    // fazer um loop para apagar os campos

})






