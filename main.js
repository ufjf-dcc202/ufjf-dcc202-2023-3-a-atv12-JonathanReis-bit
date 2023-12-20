//main.js

import {getEstoque,transacao} from "./estoque.js";


document.entrada.addEventListener('submit', leFormulario);
document.entrada.reset();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonLimparLista').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});

//leFormulario();

const olJoao = document.querySelector("#olJoao");
const olMaria = document.querySelector("#olMaria");


atualizaTela();

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);
    
    transacaoNoEstoque(origem, destino, quantidade, fruta)
    atualizaTela()
    
}

function atualizaTela() {
   const estoque = getEstoque();
   preencheListaPessoa(estoque['joao'], olJoao);
   preencheListaPessoa(estoque['maria'], olMaria);
    }

function preencheListaPessoa(pessoa,lista) {
    lista.innerHTML = "";
     for(let i = 0; i < pessoa.length; i++){
        const monte = pessoa[i];
        const eLi = document.createElement('li');
        eLi.innerText = `${monte.tipo}: ${monte.qtd}`;
        lista.append(eLi);
    }

}
