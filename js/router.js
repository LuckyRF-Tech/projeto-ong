// Controle de rotas da SPA

import {
    criarPaginaInicio,
    criarPaginaProjetos,
    criarPaginaCadastro
} from "./templates.js";

import {
    configurarValidacaoFormulario
} from "./formulario.js";


const app = document.querySelector("#app");


function obterRotaAtual() {
    const hash =
        window.location.hash.replace("#", "");

    return hash || "inicio";
}


export function renderizarPagina(rota) {
    if (!app) {
        return;
    }


    if (rota === "projetos") {
        app.innerHTML = criarPaginaProjetos();
    }

    else if (rota === "cadastro") {
        app.innerHTML = criarPaginaCadastro();

        configurarValidacaoFormulario();
    }

    else {
        app.innerHTML = criarPaginaInicio();
    }
}


function configurarLinksNavegacao() {
    const links =
        document.querySelectorAll("[data-rota]");


    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                const rota =
                    link.dataset.rota;


                /*
                    Se já estivermos nesta rota,
                    renderizamos novamente.
                */

                if (
                    window.location.hash ===
                    `#${rota}`
                ) {
                    renderizarPagina(rota);
                }

                else {
                    window.location.hash = rota;
                }
            }
        );
    });
}


export function iniciarRouter() {
    configurarLinksNavegacao();


    /*
        Permite que voltar/avançar do navegador
        também altere o conteúdo da SPA.
    */

    window.addEventListener(
        "hashchange",
        function() {
            renderizarPagina(
                obterRotaAtual()
            );
        }
    );


    /*
        Primeira renderização.
    */

    renderizarPagina(
        obterRotaAtual()
    );
}