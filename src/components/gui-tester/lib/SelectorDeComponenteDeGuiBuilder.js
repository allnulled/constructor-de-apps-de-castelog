
window.SelectorDeComponenteDeGuiBuilder = Castelog.metodos.un_componente_vue2("SelectorDeComponenteDeGuiBuilder",
  "<div class=\"SelectorDeComponenteDeGuiBuilder\">"
 + "    <div class=\"panel_de_busqueda_de_componente\" :class=\"{posicion_absoluta:posicion==='absolute'}\">"
 + "      <div class=\"horizontal_layout\">"
 + "        <div class=\"w_100\">"
 + "          <input class=\"w_100\" type=\"text\" v-model=\"texto_de_busqueda_seleccionado\" :placeholder=\"mensajeDeRelleno\" ref=\"caja_buscar_componente\" />"
 + "        </div>"
 + "        <div style=\"padding-left:2px;\" v-if=\"false\">"
 + "          <button v-on:click=\"buscar_entre_componentes\" v-if=\"!esta_mostrando_componentes\">🔎</button>"
 + "          <button v-on:click=\"esconder_componentes\" v-else>✔</button>"
 + "        </div>"
 + "      </div>"
 + "      <template>"
 + "        <div v-if=\"componentes_filtrados && componentes_filtrados.length\">"
 + "          <div class=\"horizontal_layout\" style=\"position:relative;padding-top:2px;\">"
 + "            <div style=\"padding-right:2px;\">"
 + "              <button"
 + "                style=\"height:100%;\""
 + "                v-on:click=\"ir_a_pagina_anterior\""
 + "                :disabled=\"pagina_seleccionada === 0\">◀"
 + "              </button>"
 + "            </div>"
 + "            <div class=\"w_100\">"
 + "              <div class=\"vertical_layout\">"
 + "                <template v-for=\"componente_paginado, componente_paginado_index in componentes_paginados\">"
 + "                  <div class=\"horizontal_layout fila_de_boton\" :data-selector=\"this\" :data-elemento=\"componente_paginado\">"
 + "                    <button"
 + "                      class=\"w_100\""
 + "                      :style=\"componente_paginado_index !== 0 ? 'position:relative;margin-top:1px;' : ''\""
 + "                      v-bind:key=\"'componente-paginado-' + componente_paginado_index\""
 + "                      v-on:click=\"() => seleccionar_componente(componente_paginado)\">"
 + "                      {{ componente_paginado.nombre || componente_paginado.tag }}"
 + "                    </button>"
 + "                  </div>"
 + "                </template>"
 + "              </div>"
 + "            </div>"
 + "            <div style=\"padding-left:2px;\">"
 + "              <button"
 + "                style=\"height:100%;\""
 + "                v-on:click=\"ir_a_pagina_posterior\""
 + "                :disabled=\"pagina_seleccionada >= paginas_totales\">▶"
 + "              </button>"
 + "            </div>"
 + "          </div>"
 + "          <div style=\"text-align: center;padding-top:3px;\">Página {{ pagina_seleccionada }} de {{ paginas_totales }}</div>"
 + "        </div>"
 + "      </template>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ opciones:{ type:[ Array,
Object ],
required:true
},
posicion:{ type:String,
default:"absolute"
},
seleccionados:{ type:Array,
default:[  ]
},
mensajeDeRelleno:{ type:String,
default:'Buscar componente...'
},
accesoDeComponentesSeleccionados:{ type:Object,
default:function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
},
accesorDeComponentesSeleccionados:{ type:String,
default:function() {try {
return "valor";
} catch(error) {
console.log(error);
throw error;
}

}
},
accesoDeTextoABuscar:{ type:Object,
default:function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
},
accesorDeTextoABuscar:{ type:String,
default:function() {try {
return "valor";
} catch(error) {
console.log(error);
throw error;
}

}
},
modo:{ type:String,
default:"item"
},
desplegado:{ type:Boolean,
default:false
},
alSeleccionar:{ type:Function,
default:function() {
}
}
},
data() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.data");
return { esta_mostrando_componentes:true,
texto_de_busqueda_seleccionado:"",
pagina_seleccionada:0,
paginas_totales:0,
items_por_pagina_seleccionados:6,
componentes_sin_filtrar:[  ],
componentes_filtrados:[  ],
componentes_paginados:[  ],
componentes_seleccionados:( this.seleccionados && this.seleccionados.length ? this.seleccionados : undefined )
};
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.mounted");
this.componentes_sin_filtrar = ordenar_y_adaptar_elementos_soportados( this.opciones );
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ cargar_componentes() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.cargar_componentes");
this.componentes_sin_filtrar = ordenar_y_adaptar_elementos_soportados( this.opciones );
} catch(error) {
console.log(error);
throw error;
}

},
esconder_componentes() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.esconder_componentes");
this.esta_mostrando_componentes = false;
} catch(error) {
console.log(error);
throw error;
}

},
buscar_entre_componentes() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.buscar_entre_componentes");
this.esta_mostrando_componentes = true;
this.cargar_componentes(  );
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_componente( componente_seleccionado ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.seleccionar_componente");
if(this.modo === "item") {
const id = componente_seleccionado.nombre || componente_seleccionado.tag;
this.componentes_seleccionados = id;
}
else {
throw new Error( "Listas no soportadas" );
}
this.esta_mostrando_componentes = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_anterior() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.ir_a_pagina_anterior");
if(this.pagina_seleccionada <= 0) {
return;
}
this.pagina_seleccionada = this.pagina_seleccionada - 1;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_posterior() {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.methods.ir_a_pagina_posterior");
if(this.pagina_seleccionada > this.paginas_totales) {
return;
}
this.pagina_seleccionada = this.pagina_seleccionada + 1;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ esta_mostrando_componentes( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.esta_mostrando_componentes");
} catch(error) {
console.log(error);
throw error;
}

},
texto_de_busqueda_seleccionado( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.texto_de_busqueda_seleccionado");
this.accesoDeTextoABuscar[ this.accesorDeTextoABuscar ] = nuevo_valor;
this.pagina_seleccionada = 0;
this.buscar_entre_componentes(  );
} catch(error) {
console.log(error);
throw error;
}

},
pagina_seleccionada( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.pagina_seleccionada");
this.buscar_entre_componentes(  );
} catch(error) {
console.log(error);
throw error;
}

},
items_por_pagina_seleccionados( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.items_por_pagina_seleccionados");
this.buscar_entre_componentes(  );
} catch(error) {
console.log(error);
throw error;
}

},
componentes_sin_filtrar( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.componentes_sin_filtrar");
const texto_en_minusculas = this.texto_de_busqueda_seleccionado.toLowerCase(  ).trim(  );
this.componentes_filtrados = nuevo_valor.filter( ( item,
index ) => {try {
if(this.texto_de_busqueda_seleccionado.length === 0) {
return true;
}
const texto_base = ( JSON.stringify(item, null, 2) ).toLowerCase(  );
const posicion = texto_base.indexOf( texto_en_minusculas );
if(posicion === 0 - 1) {
return false;
}
return true;
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
componentes_filtrados( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.componentes_filtrados");
this.paginas_totales = Math.floor( this.componentes_filtrados.length / this.items_por_pagina_seleccionados );
const index_inicio = this.pagina_seleccionada * this.items_por_pagina_seleccionados;
const index_final = index_inicio + this.items_por_pagina_seleccionados;
this.componentes_paginados = nuevo_valor.filter( ( item,
index ) => {try {
if(( index >= index_inicio ) && ( index < index_final )) {
return true;
}
} catch(error) {
console.log(error);
throw error;
}

} );
if(this.$refs.caja_buscar_componente) {
this.$nextTick( (  ) => {try {
return this.$refs.caja_buscar_componente.focus(  );
} catch(error) {
console.log(error);
throw error;
}

} );
}
} catch(error) {
console.log(error);
throw error;
}

},
componentes_seleccionados( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeComponenteDeGuiBuilder.watch.componentes_seleccionados");
this.accesoDeComponentesSeleccionados[ this.accesorDeComponentesSeleccionados ] = nuevo_valor;
this.alSeleccionar( nuevo_valor,
this );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);