'use strict';

function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = valor;
    }
}

function mostrarGastoWeb(idElemento, gasto) {
    let contenedor = document.getElementById(idElemento);
    if (!contenedor) return;

    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');

    let divDesc = document.createElement('div');
    divDesc.classList.add('gasto-descripcion');
    divDesc.textContent = gasto.descripcion;

    let divFecha = document.createElement('div');
    divFecha.classList.add('gasto-fecha');
    divFecha.textContent = new Date(gasto.fecha).toLocaleString();

    let divValor = document.createElement('div');
    divValor.classList.add('gasto-valor');
    divValor.textContent = gasto.valor;

    let divEtiquetas = document.createElement('div');
    divEtiquetas.classList.add('gasto-etiquetas');

    for (let etiqueta of gasto.etiquetas) {
        let spanEtiqueta = document.createElement('span');
        spanEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        spanEtiqueta.textContent = etiqueta;
        divEtiquetas.append(spanEtiqueta);
    }

    divGasto.append(divDesc, divFecha, divValor, divEtiquetas);
    contenedor.append(divGasto);
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
};