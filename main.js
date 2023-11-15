const form = document.getElementById('contatos')
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += '</tr>'
    linhas += linha
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody')

    tabela.innerHTML = linhas
}