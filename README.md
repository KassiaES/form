# form
#### Building a form using Javascript, HTML and CSS

<!-- #### Elements studied in this work: -->

Enunciado
<br>
Crie um formulário que possua os seguintes dados:

* Nome completo
* E-mail
* Telefone
* Tipo de telefone
* casa
* trabalho
* celular
* Endereço
* logradouro
* cidade
* estado
* cep
* país
<p>

O formulário deve ser preenchido com os valores padrões abaixo, via JavaScript:

```
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
```
Ao ser digitado um novo nome, o valor padrão (dados) deve ser alterado e retornado no console.
