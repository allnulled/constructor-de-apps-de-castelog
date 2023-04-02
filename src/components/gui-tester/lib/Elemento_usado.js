
window.Elemento_usado = class { constructor(){ console.log('[DEBUG]', "Elemento_usado.constructor");
this.uuid = Castelog.metodos.un_texto_aleatorio(10, undefined);
this.tag = "<div>";
this.atributos = [  ];
this.componentes = [  ];
this.texto = "";
this.esta_editando = false;
this.esta_seleccionado_modo = "componentes";
this.esta_seleccionada_pestania = "componentes";
this.esta_seleccionada_busqueda_de_componente = false; }
};