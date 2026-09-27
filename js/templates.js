const logoWebp = new URL("../imagens/logo-ong.webp", import.meta.url).href;
const logoPng = new URL("../imagens/logo-ong.png", import.meta.url).href;

const voluntariadoWebp = new URL(
    "../imagens/voluntariado.webp",
    import.meta.url
).href;

const voluntariadoJpg = new URL(
    "../imagens/voluntariado.jpg",
    import.meta.url
).href;

const doacoesWebp = new URL(
    "../imagens/doacoes.webp",
    import.meta.url
).href;

const doacoesJpg = new URL(
    "../imagens/doacoes.jpg",
    import.meta.url
).href;


const projetos = [
    {
        titulo: "Voluntariado",
        descricao: "Participe das ações sociais desenvolvidas pela ONG.",
        categoria: "Voluntariado",
        imagemWebp: voluntariadoWebp,
        imagemFallback: voluntariadoJpg,
        alt: "Projeto de voluntariado da ONG Esperança"
    },

    {
        titulo: "Campanha de Doações",
        descricao: "Ajude a manter os projetos sociais da ONG Esperança.",
        categoria: "Doações",
        imagemWebp: doacoesWebp,
        imagemFallback: doacoesJpg,
        alt: "Campanha de doações da ONG Esperança"
    },

    {
        titulo: "Apoio à Comunidade",
        descricao: "Ações destinadas ao atendimento de famílias da comunidade.",
        categoria: "Projeto ativo",
        imagemWebp: null,
        imagemFallback: null,
        alt: ""
    }
];


export function criarCardsProjetos() {
    return projetos.map(function(projeto) {

        const imagemProjeto = projeto.imagemWebp
            ? `
                <picture>
                    <source
                        srcset="${projeto.imagemWebp}"
                        type="image/webp"
                    >

                    <img
                        src="${projeto.imagemFallback}"
                        alt="${projeto.alt}"
                        loading="lazy"
                    >
                </picture>
            `
            : "";

        return `
            <article class="projeto-card">

                ${imagemProjeto}

                <span class="badge badge-ativo">
                    ${projeto.categoria}
                </span>

                <h3>
                    ${projeto.titulo}
                </h3>

                <p>
                    ${projeto.descricao}
                </p>

            </article>
        `;
    }).join("");
}


export function criarPaginaInicio() {
    return `
        <section>

            <h2>
                Sobre a ONG
            </h2>

            <picture>

                <source
                    srcset="${logoWebp}"
                    type="image/webp"
                >

                <img
                    src="${logoPng}"
                    alt="Logotipo da ONG Esperança"
                >

            </picture>

            <p>
                A ONG Esperança desenvolve projetos sociais voltados
                à educação, inclusão e apoio à comunidade.
            </p>

        </section>


        <section>

            <h2>
                Contato
            </h2>

            <p>
                E-mail: contato@ongesperanca.org
            </p>

            <p>
                Telefone: (11) 99999-9999
            </p>

        </section>
    `;
}


export function criarPaginaProjetos() {
    return `
        <section>

            <h2>
                Nossos Projetos
            </h2>

            <p>
                Conheça algumas das ações desenvolvidas
                pela ONG Esperança.
            </p>

            <div class="projetos-container">
                ${criarCardsProjetos()}
            </div>

        </section>
    `;
}


export function criarPaginaCadastro() {
    return `
        <section>

            <h2>
                Cadastro de Voluntário
            </h2>

            <p id="historico-cadastros"></p>


            <form id="form-cadastro">


                <fieldset>

                    <legend>
                        Dados Pessoais
                    </legend>


                    <div class="form-group">

                        <label for="nome">
                            Nome:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            minlength="3"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="data-nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="data-nascimento"
                            name="data-nascimento"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                            required
                        >

                    </div>

                </fieldset>


                <fieldset>

                    <legend>
                        Contato e Endereço
                    </legend>


                    <div class="form-group">

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            pattern="\\(\\d{2}\\) \\d{5}-\\d{4}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="endereco">
                            Endereço:
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="estado">
                            Estado:
                        </label>

                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            pattern="\\d{5}-\\d{3}"
                            required
                        >

                    </div>

                </fieldset>


                <div class="form-actions">

                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        Enviar cadastro
                    </button>

                </div>


                <p id="mensagem-form"></p>


            </form>

        </section>
    `;
}