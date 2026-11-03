'use strict';

import * as presupuestoLogica from './gestionPresupuesto.js';
import * as presupuestoWeb from './gestionPresupuestoWeb.js';

//Actualizar presupuesto y mostrar
presupuestoLogica.actualizarPresupuesto(1500);
presupuestoWeb.mostrarDatoEnId('presupuesto', presupuestoLogica.mostrarPresupuesto());

// Crear los gastos
let g1 = new presupuestoLogica.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let g2 = new presupuestoLogica.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let g3 = new presupuestoLogica.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let g4 = new presupuestoLogica.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let g5 = new presupuestoLogica.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let g6 = new presupuestoLogica.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

//añadir gastos a lista
presupuestoLogica.anyadirGasto(g1);
presupuestoLogica.anyadirGasto(g2);
presupuestoLogica.anyadirGasto(g3);
presupuestoLogica.anyadirGasto(g4);
presupuestoLogica.anyadirGasto(g5);
presupuestoLogica.anyadirGasto(g6);