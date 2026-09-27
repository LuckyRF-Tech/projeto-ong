export function obterCadastros() {
    const dadosSalvos = localStorage.getItem("cadastros");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return [];
}

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
}