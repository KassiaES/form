const dados = {
    nome: "Ada Lovelace",
    email: "ada@email.com",
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

const formRegister = document.querySelector('[name="register"]')


formRegister.append('name', dados.nome)
formRegister.append('email', dados.email)
formRegister.append('phoneNumber', dados.telefones[0].numero)
formRegister.append('phoneType', true)
formRegister.append('publicPlace', dados.endereco.logradouro)
formRegister.append('city', dados.endereco.cidade)
formRegister.append('state', dados.endereco.estado)
formRegister.append('postalCode', dados.endereco.cep)
formRegister.append('country', dados.endereco.pais)

console.log(formRegister)

document.getElementById('name').addEventListener('change', () =>  {
    
    let input = document.querySelector("#name")

    formRegister.append('name', input.value)
       
    console.log(formRegister)

})






