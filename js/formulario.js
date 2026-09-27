// Controle de validação e envio do formulário

import {
    obterCadastros,
    salvarCadastro
} from "./storage.js";


function validarCampo(campo) {
    const grupo = campo.closest(".form-group");

    if (!grupo) {
        return true;
    }

    let mensagem = grupo.querySelector(".erro-campo");

    if (!mensagem) {
        mensagem = document.createElement("small");
        mensagem.className = "erro-campo";

        grupo.appendChild(mensagem);
    }


    if (campo.validity.valueMissing) {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");

        mensagem.textContent =
            "Este campo é obrigatório.";

        return false;
    }


    if (campo.validity.typeMismatch) {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");

        mensagem.textContent =
            "O formato informado não é válido.";

        return false;
    }


    if (campo.validity.patternMismatch) {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");

        mensagem.textContent =
            "Preencha no formato solicitado.";

        return false;
    }


    if (campo.validity.tooShort) {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");

        mensagem.textContent =
            "O conteúdo informado é muito curto.";

        return false;
    }


    campo.classList.remove("campo-invalido");
    campo.classList.add("campo-valido");

    mensagem.textContent = "";

    return true;
}


export function configurarValidacaoFormulario() {
    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }


    const campos =
        formulario.querySelectorAll("input");

    const mensagemFormulario =
        document.querySelector("#mensagem-form");

    const historico =
        document.querySelector("#historico-cadastros");


    /*
        Restaura informação do localStorage
        quando a tela de cadastro é aberta.
    */

    const cadastrosSalvos = obterCadastros();

    if (historico) {
        historico.textContent =
            `Cadastros armazenados neste navegador: ${cadastrosSalvos.length}`;
    }


    /*
        Validação em tempo real.
    */

    campos.forEach(function(campo) {
        campo.addEventListener(
            "input",
            function() {
                validarCampo(campo);
            }
        );
    });


    /*
        Envio do formulário.
    */

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let formularioValido = true;


            campos.forEach(function(campo) {
                if (!validarCampo(campo)) {
                    formularioValido = false;
                }
            });


            if (!formularioValido) {
                mensagemFormulario.textContent =
                    "Existem campos que precisam ser corrigidos.";

                mensagemFormulario.className =
                    "mensagem-erro";

                return;
            }


            /*
                Neste exercício salvamos apenas
                nome e e-mail no localStorage.

                CPF, endereço e outros dados pessoais
                permanecem apenas no formulário.
            */

            const cadastro = {
                nome:
                    formulario.querySelector("#nome").value,

                email:
                    formulario.querySelector("#email").value,

                data:
                    new Date().toISOString()
            };


            salvarCadastro(cadastro);


            mensagemFormulario.textContent =
                "Cadastro realizado com sucesso.";

            mensagemFormulario.className =
                "mensagem-sucesso";


            formulario.reset();


            campos.forEach(function(campo) {
                campo.classList.remove(
                    "campo-valido",
                    "campo-invalido"
                );
            });


            const mensagensErro =
                formulario.querySelectorAll(".erro-campo");

            mensagensErro.forEach(function(mensagem) {
                mensagem.textContent = "";
            });


            /*
                Atualiza o contador após
                salvar o cadastro.
            */

            const cadastrosAtualizados =
                obterCadastros();

            if (historico) {
                historico.textContent =
                    `Cadastros armazenados neste navegador: ${cadastrosAtualizados.length}`;
            }
        }
    );
}