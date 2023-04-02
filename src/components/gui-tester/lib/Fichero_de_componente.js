
window.Fichero_de_componente = class { constructor( componente ){ console.log('[DEBUG]', "Fichero_de_componente.constructor");
this.uuid = Castelog.metodos.un_texto_aleatorio(10, undefined);
this.nombre = componente;
this.plantilla = [  ];
this.logica = { 
};
this.estilos = ""; }
};