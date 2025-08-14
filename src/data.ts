// src/data.ts
export type SignalType =
  | "Preventivas"
  | "Reglamentarias o Prescriptivas (Prohibicion)"
  | "Informativas"
  | "Reglamentarias o Prescriptivas (Restriccion)"
  | "Caracteristicas de la via"
  | "Fin de la prescripcion"
  | "Fin de la prevencion"
  | "Prioridad"
  | "Advertencia de maximo peligro"
  | "Nomenclatura vial y urbana"
  | "Transitorias";

export type Question = {
  image: string;
  answer: string;
  type: SignalType;
};

export const questions: Question[] = [
  // ---------------------------
  // Preventivas
  // ---------------------------
  {
    image: "/signals/curva-comun.png",
    answer: "Curva Común",
    type: "Preventivas",
  },
  {
    image: "/signals/curva-y-contracurva.png",
    answer: "Curva y Contracurva",
    type: "Preventivas",
  },
  {
    image: "/signals/curva-en-s.png",
    answer: "Curva en S",
    type: "Preventivas",
  },
  {
    image: "/signals/camino-sinuoso.png",
    answer: "Camino Sinuoso",
    type: "Preventivas",
  },
  {
    image: "/signals/pendiente-ascendente.png",
    answer: "Pendiente Ascendente",
    type: "Preventivas",
  },
  {
    image: "/signals/pendiente-descendente.png",
    answer: "Pendiente Descendente",
    type: "Preventivas",
  },
  {
    image: "/signals/estrechamiento-dos-manos.png",
    answer: "Estrechamiento en las Dos Manos",
    type: "Preventivas",
  },
  {
    image: "/signals/estrechamiento-una-mano.png",
    answer: "Estrechamiento en una Sola Mano",
    type: "Preventivas",
  },
  {
    image: "/signals/perfil-irregular.png",
    answer: "Perfil Irregular",
    type: "Preventivas",
  },
  {
    image: "/signals/calzada-resbaladiza.png",
    answer: "Calzada Resbaladiza",
    type: "Preventivas",
  },
  {
    image: "/signals/proyeccion-de-piedras.png",
    answer: "Proyección de Piedras (Ripio)",
    type: "Preventivas",
  },
  { image: "/signals/derrumbes.png", answer: "Derrumbes", type: "Preventivas" },
  { image: "/signals/tunel.png", answer: "Túnel", type: "Preventivas" },
  {
    image: "/signals/puente-angosto.png",
    answer: "Puente Angosto",
    type: "Preventivas",
  },
  {
    image: "/signals/puente-movil.png",
    answer: "Puente Móvil",
    type: "Preventivas",
  },
  {
    image: "/signals/altura-limitada.png",
    answer: "Altura Limitada",
    type: "Preventivas",
  },
  {
    image: "/signals/ancho-limitado.png",
    answer: "Ancho Limitado",
    type: "Preventivas",
  },
  {
    image: "/signals/calzada-dividida.png",
    answer: "Calzada Dividida",
    type: "Preventivas",
  },
  { image: "/signals/rotonda.png", answer: "Rotonda", type: "Preventivas" },
  {
    image: "/signals/incorporacion-transito-lateral.png",
    answer: "Incorporación de Tránsito Lateral",
    type: "Preventivas",
  },
  {
    image: "/signals/inicio-doble-circulacion.png",
    answer: "Inicio de Doble Circulación",
    type: "Preventivas",
  },
  {
    image: "/signals/encrucijada-cruce.png",
    answer: "Encrucijada (Cruce)",
    type: "Preventivas",
  },
  {
    image: "/signals/encrucijada-empalme.png",
    answer: "Encrucijada (Empalme)",
    type: "Preventivas",
  },
  {
    image: "/signals/encrucijada-bifurcacion.png",
    answer: "Encrucijada (Bifurcación)",
    type: "Preventivas",
  },
  { image: "/signals/escolares.png", answer: "Escolares", type: "Preventivas" },
  { image: "/signals/ninos.png", answer: "Niños", type: "Preventivas" },
  { image: "/signals/ciclistas.png", answer: "Ciclistas", type: "Preventivas" },
  { image: "/signals/jinetes.png", answer: "Jinetes", type: "Preventivas" },
  {
    image: "/signals/animales-sueltos.png",
    answer: "Animales Sueltos",
    type: "Preventivas",
  },
  {
    image: "/signals/corredor-aereo.png",
    answer: "Corredor Aéreo",
    type: "Preventivas",
  },
  {
    image: "/signals/presencia-tranvia.png",
    answer: "Presencia de vehiculo extraño (tranvía)",
    type: "Preventivas",
  },
  {
    image: "/signals/presencia-tractor.png",
    answer: "Presencia de vehiculo extraño (tractor)",
    type: "Preventivas",
  },
  {
    image: "/signals/presencia-ambulancia.png",
    answer: "Presencia de vehiculo extraño (ambulancia)",
    type: "Preventivas",
  },
  {
    image: "/signals/vientos-fuertes.png",
    answer: "Vientos Fuertes Laterales",
    type: "Preventivas",
  },
  {
    image: "/signals/proximidad-prohibido-transito-pesado.png",
    answer: "Proximidad de Señal Restrictiva (Prohibido transito Pesado)",
    type: "Preventivas",
  },
  {
    image: "/signals/proximidad-pare.png",
    answer: "Proximidad de Señal Restrictiva (Pare)",
    type: "Preventivas",
  },
  {
    image: "/signals/proximidad-ceda-el-paso.png",
    answer: "Proximidad de Señal Restrictiva (Ceda el Paso)",
    type: "Preventivas",
  },
  {
    image: "/signals/proximidad-semaforo.png",
    answer: "Proximidad de Semáforo",
    type: "Preventivas",
  },
  {
    image: "/signals/paso-nivel-sin-barreras.png",
    answer: "Paso a Nivel sin Barreras",
    type: "Preventivas",
  },
  {
    image: "/signals/paso-nivel-con-barreras.png",
    answer: "Paso a Nivel con Barreras",
    type: "Preventivas",
  },
  {
    image: "/signals/flecha-direccional-izquierda.png",
    answer: "Flecha Direccional (Sentido Izquierdo)",
    type: "Preventivas",
  },
  {
    image: "/signals/flecha-direccional-ambos.png",
    answer: "Flecha Direccional (Ambos Sentidos)",
    type: "Preventivas",
  },
  {
    image: "/signals/perfil-irregular-lomada.png",
    answer: "Perfil Irregular (Lomada)",
    type: "Preventivas",
  },
  {
    image: "/signals/perfil-irregular-baden.png",
    answer: "Perfil Irregular (Badén)",
    type: "Preventivas",
  },
  // ---------------------------
  // Reglamentarias o Prescriptivas (Prohibición)
  // ---------------------------
  {
    image: "/signals/no-avanzar.png",
    answer: "No Avanzar",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/contramano.png",
    answer: "Contramano",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-automoviles.png",
    answer: "Prohibido Circular Automóviles",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-motocicletas.png",
    answer: "Prohibido Circular Motocicletas",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-bicicletas.png",
    answer: "Prohibido Circular Bicicletas",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-camiones.png",
    answer: "Prohibido Circular Camiones",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-acoplados.png",
    answer: "Prohibido Circular Acoplados",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-peatones.png",
    answer: "Prohibido Circular Peatones",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-carro-traccion-animal.png",
    answer: "Prohibido Circular Carro Tracción Animal",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-traccion-sangre.png",
    answer: "Prohibido Circular Tracción a Sangre",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-carro-mano.png",
    answer: "Prohibido Circular Carro de Mano",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-tractores.png",
    answer: "Prohibido Circular Tractores",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-girar-izquierda.png",
    answer: "Prohibido Girar a la Izquierda",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-girar-derecha.png",
    answer: "Prohibido Girar a la Derecha",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/no-girar-en-u.png",
    answer: "No Girar en U (Retomar)",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-adelantar.png",
    answer: "Prohibido Adelantar",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/no-ruidos-molestos.png",
    answer: "No Ruidos Molestos",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/no-estacionar.png",
    answer: "No Estacionar",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/no-estacionar-ni-detenerse.png",
    answer: "No Estacionar ni Detenerse",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  {
    image: "/signals/prohibido-cambiar-carril.png",
    answer: "Prohibido Cambiar de Carril",
    type: "Reglamentarias o Prescriptivas (Prohibicion)",
  },
  // ---------------------------
  // Informativas
  // ---------------------------
  {
    image: "/signals/puesto-sanitario.png",
    answer: "Puesto Sanitario",
    type: "Informativas",
  },
  {
    image: "/signals/servicio-telefonico.png",
    answer: "Servicio Telefónico",
    type: "Informativas",
  },
  {
    image: "/signals/estacion-servicio.png",
    answer: "Estación de Servicio",
    type: "Informativas",
  },
  {
    image: "/signals/teleferico.png",
    answer: "Teleférico",
    type: "Informativas",
  },
  {
    image: "/signals/servicio-mecanico.png",
    answer: "Servicio Mecánico",
    type: "Informativas",
  },
  { image: "/signals/playa.png", answer: "Playa", type: "Informativas" },
  {
    image: "/signals/balneario.png",
    answer: "Balneario",
    type: "Informativas",
  },
  {
    image: "/signals/lugar-recreacion.png",
    answer: "Lugar de Recreación y Descanso",
    type: "Informativas",
  },
  { image: "/signals/hotel.png", answer: "Hotel", type: "Informativas" },
  { image: "/signals/bar.png", answer: "Bar", type: "Informativas" },
  {
    image: "/signals/campamento.png",
    answer: "Campamento",
    type: "Informativas",
  },
  {
    image: "/signals/restaurante.png",
    answer: "Restaurante",
    type: "Informativas",
  },
  {
    image: "/signals/aeropuerto.png",
    answer: "Aeropuerto",
    type: "Informativas",
  },
  { image: "/signals/gomeria.png", answer: "Gomería", type: "Informativas" },
  {
    image: "/signals/estacionamiento.png",
    answer: "Estacionamiento",
    type: "Informativas",
  },
  { image: "/signals/policia.png", answer: "Policía", type: "Informativas" },
  {
    image: "/signals/detencion-transporte-pasajeros.png",
    answer: "Detención Transporte de Pasajeros",
    type: "Informativas",
  },
  { image: "/signals/taxi.png", answer: "Taxi", type: "Informativas" },
  {
    image: "/signals/terminal-omnibus.png",
    answer: "Terminal de Ómnibus",
    type: "Informativas",
  },
  {
    image: "/signals/terminal-ferrocarril.png",
    answer: "Terminal de Ferrocarril",
    type: "Informativas",
  },
  {
    image: "/signals/punto-panoramico.png",
    answer: "Punto Panorámico",
    type: "Informativas",
  },
  { image: "/signals/plaza.png", answer: "Plaza", type: "Informativas" },
  { image: "/signals/correo.png", answer: "Correo", type: "Informativas" },
  { image: "/signals/museo.png", answer: "Museo", type: "Informativas" },
  {
    image: "/signals/estacionamiento-casas-rodantes.png",
    answer: "Estacionamiento de Casas Rodantes",
    type: "Informativas",
  },
  // ---------------------------
  // Reglamentarias o Prescriptivas (Restricción)
  // ---------------------------
  {
    image: "/signals/limitacion-peso-4tns.png",
    answer: "Limitación de Peso",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/limitacion-peso-2tns.png",
    answer: "Limitación de Peso",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/limitacion-altura.png",
    answer: "Limitación de Altura",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/limitacion-ancho.png",
    answer: "Limitación de Ancho",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/limitacion-largo.png",
    answer: "Limitación de Largo",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/velocidad-maxima.png",
    answer: "Límite de Velocidad Máxima",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/velocidad-minima.png",
    answer: "Límite de Velocidad Mínima",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/estacionamiento-exclusivo.png",
    answer: "Estacionamiento Exclusivo",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/circulacion-exclusiva-transporte-pasajeros.png",
    answer: "Circulación Exclusiva (Transporte de Pasajeros)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/circulacion-exclusiva-motocicletas.png",
    answer: "Circulación Exclusiva (Motocicletas)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/circulacion-exclusiva-bicicletas.png",
    answer: "Circulación Exclusiva (Bicicletas)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/circulacion-exclusiva-jinetes.png",
    answer: "Circulación Exclusiva (Jinetes)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/circulacion-exclusiva-peatones.png",
    answer: "Circulación Exclusiva (Peatones)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/uso-de-cadenas.png",
    answer: "Uso de Cadenas para Nieve",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/giro-obligatorio-derecha.png",
    answer: "Giro Obligatorio Derecha",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/giro-obligatorio-izquierda.png",
    answer: "Giro Obligatorio Izquierda",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/paso-obligatorio-derecha.png",
    answer: "Paso Obligatorio Derecha",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/paso-obligatorio-izquierda.png",
    answer: "Paso Obligatorio Izquierda",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/sentido-circulacion-izquierda.png",
    answer: "Sentido de Circulación (Izquierda)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/transito-pesado-derecha.png",
    answer: "Tránsito Pesado a la Derecha",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/peatones-por-izquierda.png",
    answer: "Peatones por la Izquierda",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/puesto-control.png",
    answer: "Puesto de Control",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/comienzo-doble-mano.png",
    answer: "Comienzo de Doble Mano",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/sentido-circulacion-derecha.png",
    answer: "Sentido de Circulación (Derecha)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/sentido-circulacion-comienzo.png",
    answer: "Sentido de Circulación (Comienzo)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  {
    image: "/signals/sentido-circulacion-alternativo.png",
    answer: "Sentido de Circulación (Alternativo)",
    type: "Reglamentarias o Prescriptivas (Restriccion)",
  },
  // ---------------------------
  // Características de la Vía
  // ---------------------------
  {
    image: "/signals/comienzo-autopista.png",
    answer: "Comienzo de Autopista",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/fin-autopista.png",
    answer: "Fin de Autopista",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/utilizacion-carriles.png",
    answer: "Indicadora de Utilización de Carriles",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/calle-sin-salida.png",
    answer: "Camino o Calle sin Salida",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/camino-transitable.png",
    answer: "Camino o Paso Transitable",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/velocidades-maximas-permitidas.png",
    answer: "Velocidades Máximas Permitidas",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/esquema-recorrido.png",
    answer: "Esquema de Recorrido",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/desvio-cambio-sentido.png",
    answer: "Desvío por Cambio de Sentido",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/estacionamiento-permitido.png",
    answer: "Estacionamiento Permitido",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/permitido-girar-izquierda.png",
    answer: "Permitido Girar (Izquierda)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-ambas.png",
    answer: "Direcciones Permitidas (Ambas Direcciones)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-izquierda.png",
    answer: "Direcciones Permitidas (Izquierda)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-derecha.png",
    answer: "Direcciones Permitidas (Derecha)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-bifurcacion.png",
    answer: "Direcciones Permitidas (Bifurcación)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-sentido-derecha.png",
    answer: "Direcciones Permitidas (Sentido o Derecha)",
    type: "Caracteristicas de la via",
  },
  {
    image: "/signals/direcciones-permitidas-sentido-izquierda.png",
    answer: "Direcciones Permitidas (Sentido o Izquierda)",
    type: "Caracteristicas de la via",
  },
  // ---------------------------
  // Fin de la Prescripción
  // ---------------------------
  {
    image: "/signals/fin-velocidad-minima.png",
    answer: "Fin de la Velocidad Mínima",
    type: "Fin de la prescripcion",
  },
  {
    image: "/signals/fin-prohibicion-adelantarse.png",
    answer: "Fin de la Prohibición de Adelantarse",
    type: "Fin de la prescripcion",
  },
  // ---------------------------
  // Fin de la Prevención
  // ---------------------------
  {
    image: "/signals/fin-zona-derrumbre.png",
    answer: "Fin de Zona de Derrumbe",
    type: "Fin de la prevencion",
  },
  {
    image: "/signals/fin-calzada-resbaladiza.png",
    answer: "Fin de la Calzada Resbaladiza",
    type: "Fin de la prevencion",
  },
  // ---------------------------
  // Prioridad
  // ---------------------------
  {
    image: "/signals/ceda-el-paso.png",
    answer: "Ceda el Paso",
    type: "Prioridad",
  },
  { image: "/signals/pare.png", answer: "Pare", type: "Prioridad" },
  {
    image: "/signals/prioridad-avance.png",
    answer: "Prioridad de Avance",
    type: "Prioridad",
  },
  {
    image: "/signals/barreras-ferroviarias.png",
    answer: "Barreras Ferroviarias",
    type: "Prioridad",
  },
  // ---------------------------
  // Advertencia De Máximo Peligro
  // ---------------------------
  {
    image: "/signals/cruce-ferroviario.png",
    answer: "Cruce Ferroviario",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/panel-prevencion-aproximacion.png",
    answer: "Paneles de Prevención (Aproximación)",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/panel-prevencion-objeto-rigido.png",
    answer: "Paneles de Prevención (Objeto Rígido)",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/panel-prevencion-curva.png",
    answer: "Paneles de Prevención (Curva)",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/cruz-san-andres.png",
    answer: "Cruz de San Andrés",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/atencion-peligro.png",
    answer: "Atención (Peligro)",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/curva-cerrada.png",
    answer: "Curva Cerrada",
    type: "Advertencia de maximo peligro",
  },
  {
    image: "/signals/cruce-peatones.png",
    answer: "Cruce de Peatones",
    type: "Advertencia de maximo peligro",
  },
  // ---------------------------
  // Nomenclatura Vial y Urbana
  // ---------------------------
  {
    image: "/signals/ruta-panamericana.png",
    answer: "Ruta Panamericana",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/ruta-nacional.png",
    answer: "Ruta Nacional",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/ruta-provincial.png",
    answer: "Ruta Provincial",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/nomenclatura-urbana1.png",
    answer: "Nomenclatura Urbana",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/nomenclatura-urbana2.png",
    answer: "Nomenclatura Urbana",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/orientacion-caminos-primarios.png",
    answer: "Orientación en Caminos Primarios",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/orientacion-caminos-secundarios.png",
    answer: "Orientación en Caminos Secundarios",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/identificacion-region-localidad.png",
    answer: "Identificación de Región y Localidad",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/comienzo-fin-zona-urbana.png",
    answer: "Comienzo o Fin de Zona Urbana Identificación de Jurisdicción",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/mojon-kilometrico.png",
    answer: "Mojón Kilométrico",
    type: "Nomenclatura vial y urbana",
  },
  {
    image: "/signals/nomenclatura-autopista.png",
    answer: "Nomenclatura de Autopista",
    type: "Nomenclatura vial y urbana",
  },
  // ---------------------------
  // Transitorias
  // ---------------------------
  {
    image: "/signals/estrechamiento-calzada.png",
    answer: "Estrechamiento de Calzada",
    type: "Transitorias",
  },
  {
    image: "/signals/equipo-pesado-via.png",
    answer: "Equipo Pesado en la Vía",
    type: "Transitorias",
  },
  {
    image: "/signals/trabajos-banquina.png",
    answer: "Trabajos en Banquina",
    type: "Transitorias",
  },
  {
    image: "/signals/hombres-trabajando.png",
    answer: "Hombres Trabajando",
    type: "Transitorias",
  },
  {
    image: "/signals/banderillero.png",
    answer: "Banderillero",
    type: "Transitorias",
  },
  {
    image: "/signals/fin-construccion.png",
    answer: "Fin de Construcción",
    type: "Transitorias",
  },
  {
    image: "/signals/calle-cerrada.png",
    answer: "Calle o Carretera en Construcción o Cerrada",
    type: "Transitorias",
  },
  {
    image: "/signals/desvio.png",
    answer: "Desvío",
    type: "Transitorias",
  },
  {
    image: "/signals/carretera-un-carril.png",
    answer: "Carretera de un Solo Carril",
    type: "Transitorias",
  },
  {
    image: "/signals/zona-explosivos.png",
    answer: "Zona de Explosivos",
    type: "Transitorias",
  },
  {
    image: "/signals/longitud-construccion.png",
    answer: "Longitud de la Construcción",
    type: "Transitorias",
  },
  {
    image: "/signals/vallas-tipo-i.png",
    answer: "Vallas Tipo I",
    type: "Transitorias",
  },
  {
    image: "/signals/vallas-tipo-ii.png",
    answer: "Vallas Tipo II",
    type: "Transitorias",
  },
  {
    image: "/signals/vallas-tipo-iii.png",
    answer: "Vallas Tipo III",
    type: "Transitorias",
  },
  { image: "/signals/tambores.png", answer: "Tambores", type: "Transitorias" },
  {
    image: "/signals/delineadores.png",
    answer: "Delineadores",
    type: "Transitorias",
  },
  { image: "/signals/conos.png", answer: "Conos", type: "Transitorias" },
  {
    image: "/signals/barandas-canalizadoras.png",
    answer: "Barandas Canalizadoras de Tránsito",
    type: "Transitorias",
  },
];

// Helper function to get questions by type
export const getQuestionsByType = (type: SignalType): Question[] => {
  return questions.filter((q) => q.type === type);
};

// Helper function to get all available types
export const getAvailableTypes = (): SignalType[] => {
  const types = [...new Set(questions.map((q) => q.type))];
  return types.sort();
};
