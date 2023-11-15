const form = document.getElementById('contatos')
let linhas = ''

const tel = []

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if (tel.includes(inputTelefone.value)) {
        alert(`Telefone ${inputTelefone.value} já foi cadastrado!!!`)
    } else {
        tel.push(inputTelefone.value)
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>'
        linhas += linha
    }



    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody')

    tabela.innerHTML = linhas
}

