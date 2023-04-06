
window.EditorDeInstanciaDeComponente = Castelog.metodos.un_componente_vue2("EditorDeInstanciaDeComponente",
  "<div class=\"EditorDeInstanciaDeComponente\">"
 + "    <div>"
 + "      <div class=\"panel_de_elementos horizontal_layout\">"
 + "        <div class=\"lista_de_elementos_usados w_100\">"
 + "          <div>"
 + "            <draggable :list=\"elementos_usados\" handle=\".dragger\" tag=\"table\">"
 + "              <tbody class=\"w_100\" v-for=\"elemento_usado, elemento_usado_index in elementos_usados\" v-bind:key=\"'elemento-usado-barra-vistazo-' + elemento_usado.uuid\">"
 + "                <tr>"
 + "                  <td>"
 + "                    <table class=\"w_100\">"
 + "                      <tbody>"
 + "                        <tr>"
 + "                          <td v-if=\"false\">"
 + "                            <button class=\"boton_de_icono active dragger\">☰</button>"
 + "                          </td>"
 + "                          <td class=\"w_100\">"
 + "                            <button class=\"w_100 caja_de_componente\" :class=\"{active:elemento_usado.esta_editando}\" v-on:click=\"() => alternar_edicion_de_elemento_usado(elemento_usado_index)\">"
 + "                              {{ elemento_usado.nombre || elemento_usado.tag }}"
 + "                            </button>"
 + "                          </td>"
 + "                          <td>"
 + "                            <button class=\"boton_de_icono\" v-on:click=\"() => agregar_elemento_usado(elemento_usado_index)\" v-if=\"!esta_en_elemento_raiz\">"
 + "                            ➕"
 + "                            </button>"
 + "                          </td>"
 + "                          <td>"
 + "                            <button class=\"boton_de_icono\" v-on:click=\"() => eliminar_elemento_usado(elemento_usado_index)\">"
 + "                            ❌"
 + "                            </button>"
 + "                          </td>"
 + "                        </tr>"
 + "                      </tbody>"
 + "                    </table>"
 + "                  </td>"
 + "                </tr>"
 + "                <tr v-if=\"elemento_usado && elemento_usado.esta_editando\" v-bind:key=\"'elemento-usado-barra-esta_editando-' + (elemento_usado ? elemento_usado.uuid : elemento_usado_index)\">"
 + "                  <td colspan=\"1000\">"
 + "                    <div class=\"separacion_de_subelementos\">"
 + "                      <section class=\"tabs\">"
 + "                        <menu role=\"tablist\">"
 + "                          <div style=\"padding-bottom: 5px;white-space: nowrap;hidden;width:100%;padding-right: 2px;padding-left: 0;margin: 0;margin-left: 0px;padding-left: 2px;\">"
 + "                            <button style=\"border-radius:3pt;\" class=\"w_100\" v-on:click=\"() => agregar_componente_en_elemento_usado(elemento_usado_index)\">"
 + "                            ➕ <span class=\"texto_de_icono\">Elemento</span>"
 + "                            </button>"
 + "                          </div>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'busqueda'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'busqueda'\">"
 + "                            🔍 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'atributos'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'atributos'\">"
 + "                            📎 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'componentes'; actualizar_interfaz_de_usuario(); }\"  :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'componentes'\">"
 + "                            🌲 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'texto'; elemento_usado.esta_seleccionado_modo = 'texto'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'texto'\" :class=\"{disabled:elemento_usado.esta_seleccionado_modo !== 'texto'}\">"
 + "                            📝 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'atajos'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'atajos'\">"
 + "                            🌀 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre && tester.elemento_en_copia\" v-on:click=\"() => { pegar_elemento(elemento_usado) }\"><span class=\"texto_de_icono\">"
 + "                            📋 </span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre\" v-on:click=\"() => { cortar_elemento(elemento_usado) }\">"
 + "                            ✂️ <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre\" v-on:click=\"() => { copiar_elemento(elemento_usado) }\">"
 + "                            📃 <span class=\"texto_de_icono\"></span>"
 + "                          </button>"
 + "                        </menu>"
 + "                        <article class=\"nopad\" role=\"tabpanel\" v-if=\"elemento_usado.esta_seleccionada_pestania === 'componentes'\">"
 + "                          <EditorDeInstanciaDeComponente :tester=\"tester\" :elementos-iniciales=\"elemento_usado.componentes\" :elemento-padre=\"elemento_usado\" />"
 + "                        </article>"
 + "                        <article class=\"nopad\" role=\"tabpanel\" v-if=\"elemento_usado.esta_seleccionada_pestania === 'busqueda'\">"
 + "                          <div>"
 + "                            <SelectorDeComponenteDeGuiBuilder"
 + "                              :acceso-de-texto-de-busqueda=\"{}\""
 + "                              accesor-de-texto-de-busqueda=\"busqueda\""
 + "                              :acceso-de-componentes-seleccionados=\"elemento_usado\""
 + "                              accesor-de-componentes-seleccionados=\"tag\""
 + "                              :al-seleccionar=\"() => esconder_busqueda_de_componente(elemento_usado)\""
 + "                              :opciones=\"[].concat(elementos_soportados, tester.componentes)\""
 + "                              posicion=\"relative\""
 + "                              :desplegado=\"true\">"
 + "                            </SelectorDeComponenteDeGuiBuilder>"
 + "                          </div>"
 + "                        </article>"
 + "                        <article class=\"nopad\" role=\"tabpanel\" v-if=\"elemento_usado.esta_seleccionada_pestania === 'atajos'\">"
 + "                          <div>"
 + "                            <input class=\"w_100\" type=\"text\" placeholder=\"Buscar atajo...\" v-model=\"texto_de_atajo_seleccionado\" ref=\"caja_buscar_atajo\" />"
 + "                            <div class=\"horizontal_layout\" style=\"margin-top:2px;margin-bottom:2px;\">"
 + "                              <div>"
 + "                                <button"
 + "                                  style=\"height:100%;\""
 + "                                  v-on:click=\"() => ir_a_pagina_anterior_de_atajos(elemento_usado)\""
 + "                                  :disabled=\"pagina_de_atajo_seleccionada === 0\">◀"
 + "                                </button>"
 + "                              </div>"
 + "                              <div class=\"w_100\">"
 + "                                <table class=\"w_100\" v-if=\"atajos_paginados\">"
 + "                                  <tbody v-for=\"atajo, atajo_index in atajos_paginados\" v-bind:key=\"'atajo-index-' + atajo_index\">"
 + "                                    <tr>"
 + "                                      <td class=\"w_100\">"
 + "                                        <button class=\"w_100\" style=\"text-align:left;\" v-on:click=\"() => ejecutar_atajo(atajo, elemento_usado)\">"
 + "                                          <span style=\"overflow: clip; text-overflow: clip '...'; white-space: nowrap;position:relative;width:100%;height:100%;display:block;min-height:12px;\">"
 + "                                            <span style=\"position:absolute;left:0px;top:0px;display:inline-block;\">"
 + "                                              <span>▶⚡ </span>"
 + "                                              <span style=\"\">{{ atajo.nombre }}</span>"
 + "                                            </span>"
 + "                                          </span>"
 + "                                        </button>"
 + "                                      </td>"
 + "                                      <td class=\"w_auto\">"
 + "                                        <button :class=\"{active:atajos_seleccionados.indexOf(atajo.nombre) !== -1}\" v-on:click=\"() => alternar_seleccion_de_atajo(atajo.nombre)\">⚙️</button>"
 + "                                      </td>"
 + "                                    </tr>"
 + "                                    <tr v-if=\"atajos_seleccionados.indexOf(atajo.nombre) !== -1\">"
 + "                                      <td class=\"w_auto\" colspan=\"1000\">"
 + "                                        <div class=\"formulario_de_atajo\" style=\"position:relative;\">"
 + "                                          <div>"
 + "                                            <input type=\"text\" class=\"w_100 editor_de_codigo nombre_de_atajo\" :value=\"atajo.nombre\" placeholder=\"Nombre de atajo\" />"
 + "                                          </div>"
 + "                                          <div>"
 + "                                            <textarea class=\"w_100 editor_de_codigo contenido_de_atajo\" :value=\"atajo.contenido\" placeholder=\"Código en calo\"></textarea>"
 + "                                          </div>"
 + "                                          <div>"
 + "                                            <textarea class=\"w_100 metadatos_de_atajo\" v-model=\"atajo.metadatos\" placeholder=\"Metadatos del atajo\"></textarea>"
 + "                                          </div>"
 + "                                          <div style=\"position:absolute;right:0;top:0;\">"
 + "                                            <button style=\"min-height:15px;height:auto;margin-top:2px;\" v-on:click=\"(event) => guardar_atajos(atajo, atajo_index, false, event.target)\">✔</button>"
 + "                                            <button style=\"min-height:15px;height:auto;margin-top:2px;\" v-on:click=\"(event) => guardar_atajos(atajo, atajo_index, true, event.target)\">✔✔</button>"
 + "                                            <button style=\"min-height:15px;height:auto;margin-top:2px;\" v-on:click=\"(event) => abrir_dialogo_de_eliminar_atajo(atajo.nombre)\">❌</button>"
 + "                                          </div>"
 + "                                        </div>"
 + "                                      </td>"
 + "                                    </tr>"
 + "                                  </tbody>"
 + "                                </table>"
 + "                              </div>"
 + "                              <div>"
 + "                                <button"
 + "                                  style=\"height:100%;\""
 + "                                  v-on:click=\"() => ir_a_pagina_posterior_de_atajos(elemento_usado)\""
 + "                                  :disabled=\"pagina_de_atajo_seleccionada >= paginas_de_atajos_totales\">▶"
 + "                                </button>"
 + "                              </div>"
 + "                            </div>"
 + "                            <div>"
 + "                              <button class=\"w_100\" v-on:click=\"() => abrir_dialogo_de_crear_atajo()\">➕ Añadir atajo</button>"
 + "                            </div>"
 + "                            <div style=\"text-align: center;padding-top:3px;\">Página {{ pagina_de_atajo_seleccionada }} de {{ paginas_de_atajos_totales }}</div>"
 + "                          </div>"
 + "                        </article>"
 + "                        <article class=\"nopad\" role=\"tabpanel\" v-if=\"elemento_usado.esta_seleccionada_pestania === 'texto'\">"
 + "                          <div>"
 + "                            <textarea class=\"w_100\" v-model=\"elemento_usado.texto\" placeholder=\"Contenido...\"></textarea>"
 + "                          </div>"
 + "                        </article>"
 + "                        <article class=\"nopad\" role=\"tabpanel\" v-if=\"elemento_usado.esta_seleccionada_pestania === 'atributos'\">"
 + "                          <div>"
 + "                            <button class=\"w_100\" v-on:click=\"() => agregar_atributo_en_elemento_usado(elemento_usado_index)\">➕ Añadir atributo</button>"
 + "                            <draggable :list=\"elemento_usado.atributos\" handle=\".dragger_para_atributo\" tag=\"table\" class=\"w_100\">"
 + "                              <tbody v-for=\"atributo, atributo_index in elemento_usado.atributos\" v-bind:key=\"'elemento_usado_' + elemento_usado_index + '_atributo_' + atributo_index\">"
 + "                                <tr>"
 + "                                  <td>"
 + "                                    <table class=\"w_100\">"
 + "                                        <tr>"
 + "                                          <td>"
 + "                                            <button class=\"boton_de_icono active dragger_para_atributo \">☰</button>"
 + "                                          </td>"
 + "                                          <td class=\"w_100\">"
 + "                                            <input class=\"w_100\" type=\"text\" v-model=\"atributo.clave\"  placeholder=\"nombre-del-atributo\" />"
 + "                                          </td>"
 + "                                          <td>"
 + "                                            <button class=\"boton_de_icono\" v-on:click=\"() => alternar_edicion_de_atributo_en_elemento_usado(elemento_usado_index, atributo_index)\" :class=\"{active:atributo.esta_editando}\">⚙️</button>"
 + "                                          </td>"
 + "                                          <td>"
 + "                                            <button class=\"boton_de_icono\" v-on:click=\"() => agregar_atributo_en_elemento_usado(elemento_usado_index, atributo_index)\">➕</button>"
 + "                                          </td>"
 + "                                          <td>"
 + "                                            <button class=\"boton_de_icono\" v-on:click=\"() => eliminar_atributo_en_elemento_usado(elemento_usado_index, atributo_index)\">❌</button>"
 + "                                          </td>"
 + "                                        </tr>"
 + "                                        <tr v-if=\"atributo && atributo.esta_editando\">"
 + "                                          <td colspan=\"1000\">"
 + "                                            <div style=\"position:relative;\">"
 + "                                              <textarea class=\"w_100 editor_de_codigo\" v-model=\"atributo.valor\" placeholder=\"Valor del atributo\"></textarea>"
 + "                                              <div style=\"position:absolute;top:auto;bottom:3px;left:auto;right:3px;\">"
 + "                                                <button :class=\"{active:atributo.esta_en_calo}\" v-on:click=\"() => { $window.console.log(atributo); atributo.esta_en_calo = !atributo.esta_en_calo; $forceUpdate(true); }\">"
 + "                                                Calo"
 + "                                                </button>"
 + "                                              </div>"
 + "                                            </div>"
 + "                                          </td>"
 + "                                        </tr>"
 + "                                    </table>"
 + "                                  </td>"
 + "                                </tr>"
 + "                              </tbody>"
 + "                            </draggable>"
 + "                          </div>"
 + "                        </article>"
 + "                      </section>"
 + "                    </div>"
 + "                  </td>"
 + "                </tr>"
 + "              </tbody>"
 + "            </draggable>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(20, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
plantilla:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
},
tester:{ type:Object,
required:true
},
elementosIniciales:{ type:Array,
required:true
},
elementoPadre:{ type:Object,
default:null
},
esElementoRaiz:{ type:Boolean,
required:false
}
},
data() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.data");
let elementos_usados = this.elementosIniciales;
if(this.esElementoRaiz && elementos_usados.length === 0) {
elementos_usados.push(new Elemento_usado(  ))
}
return { esta_en_elemento_raiz:this.esElementoRaiz,
texto_de_atajo_seleccionado:"",
paginas_de_atajos_totales:0,
pagina_de_atajo_seleccionada:0,
items_por_pagina_de_atajo_seleccionada:6,
atajos_brutos:[  ],
atajos_filtrados:[  ],
atajos_paginados:[  ],
elementos_soportados,
elementos_usados,
atajos_seleccionados:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.mostrar_error");
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_atajo:async function() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.abrir_dialogo_de_crear_atajo");
(await this.tester.abrir_dialogo_de_crear_atajo(  ));
(await this.cargar_atajos(  ));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ejecutar_atajo:async function( atajo,
elemento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.ejecutar_atajo");
const codigo_original = atajo.contenido;
const codigo_js = Castelog_parser.parse( atajo.contenido );
const codigo_atajo = `(async (elemento) => {\n  try {\n    ${codigo_js}\n  } catch(error) {\n    throw error;\n  }\n}).call(this, elemento)`;
console.log("Evaluando código: " + codigo_atajo);
const resultado = (await eval( codigo_atajo ));
console.log(resultado);
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.mostrar_error( error );
throw error;}
},
abrir_dialogo_de_eliminar_atajo:async function( nombre_de_atajo ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.abrir_dialogo_de_eliminar_atajo");
(await this.tester.abrir_dialogo_de_eliminar_atajo( nombre_de_atajo ));
(await this.cargar_atajos(  ));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
guardar_atajos:function( atajo,
atajo_index,
tambien_cerrar = false,
elemento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.guardar_atajos");
this.tester.guardar_atajos(  );
if((!(atajo))) {
return;
}
const nuevo_nombre = elemento.closest( ".formulario_de_atajo" ).querySelector( "input.nombre_de_atajo" ).value;
const nuevo_contenido = elemento.closest( ".formulario_de_atajo" ).querySelector( "textarea.contenido_de_atajo" ).value;
const nuevo_metadatos = elemento.closest( ".formulario_de_atajo" ).querySelector( "textarea.metadatos_de_atajo" ).value;
Object.assign(atajo, { nombre:nuevo_nombre,
contenido:nuevo_contenido,
metadatos:nuevo_metadatos
} );
const atajo_nombre = atajo.nombre;
if(tambien_cerrar === true) {
if(((item, list) => list.indexOf(item) !== -1)(atajo_nombre, this.atajos_seleccionados)) {
this.atajos_seleccionados.splice( this.atajos_seleccionados.indexOf( atajo_nombre ),
1 );
}
}
this.tester.guardar_atajos(  );
this.cargar_atajos(  );
if(tambien_cerrar) {
this.$forceUpdate( true );
}
} catch(error) {
console.log(error);
throw error;
}

},
cargar_atajos:function(  ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.cargar_atajos");
this.tester.cargar_atajos(  );
this.atajos_brutos = [  ].concat( this.tester.atajos );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_seleccion_de_atajo:function( nombre ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.alternar_seleccion_de_atajo");
if((!(this.atajos_seleccionados.indexOf(nombre) !== -1))) {
this.atajos_seleccionados.push(nombre)
}
else {
this.atajos_seleccionados.splice( this.atajos_seleccionados.indexOf( nombre ),
1 );
}
} catch(error) {
console.log(error);
throw error;
}

},
alternar_busqueda_de_componente:function( elemento_usado,
evento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.alternar_busqueda_de_componente");
elemento_usado.esta_seleccionada_busqueda_de_componente = (!(elemento_usado.esta_seleccionada_busqueda_de_componente));
evento.target.blur(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
esconder_busqueda_de_componente:function( elemento_usado,
evento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.esconder_busqueda_de_componente");
elemento_usado.esta_seleccionada_busqueda_de_componente = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
pegar_elemento:function( elemento_destino ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.pegar_elemento");
if(this.tester.elemento_en_copia_modo === "cortar") {
console.log(this.tester.elemento_en_copia_padre);
this.tester.elemento_en_copia_padre.componentes.splice( this.tester.elemento_en_copia_padre.componentes.indexOf( this.tester.elemento_en_copia ),
1 );
}
console.log(this.tester.elemento_en_copia);
console.log(this.tester.elemento_en_copia_modo);
console.log(elemento_destino);
Object.assign(elemento_destino, this.tester.elemento_en_copia, { uuid:Castelog.metodos.un_texto_aleatorio(10, undefined)
} );
this.tester.elemento_en_copia = undefined;
this.tester.elemento_en_copia_padre = undefined;
this.tester.elemento_en_copia_modo = undefined;
this.guardar_estado(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
cortar_elemento:function( elemento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.cortar_elemento");
this.tester.elemento_en_copia = elemento;
this.tester.elemento_en_copia_padre = this.elementoPadre;
this.tester.elemento_en_copia_modo = "cortar";
} catch(error) {
console.log(error);
throw error;
}

},
copiar_elemento:function( elemento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.copiar_elemento");
this.tester.elemento_en_copia = elemento;
this.tester.elemento_en_copia_padre = this.elementoPadre;
this.tester.elemento_en_copia_modo = "copiar";
} catch(error) {
console.log(error);
throw error;
}

},
guardar_estado:function() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.guardar_estado");
this.tester.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_elemento_usado:function( indice_elemento ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.agregar_elemento_usado");
if(typeof indice_elemento === 'undefined') {
this.elementos_usados.push(new Elemento_usado(  ))
}
else {
this.elementos_usados.splice( indice_elemento,
0,
new Elemento_usado(  ) );
}
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_elemento_usado:function( indice ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.eliminar_elemento_usado");
this.elementos_usados.splice( indice,
1 );
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_edicion_de_elemento_usado:function( indice ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.alternar_edicion_de_elemento_usado");
this.elementos_usados[ indice ].esta_editando = (!(this.elementos_usados[ indice ].esta_editando));
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_atributo_en_elemento_usado:function( indice_elemento,
indice_atributo ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.agregar_atributo_en_elemento_usado");
if(typeof indice_atributo === 'undefined') {
this.elementos_usados[ indice_elemento ].atributos.push(new Atributo_de_elemento_usado(  ))
}
else {
this.elementos_usados[ indice_elemento ].atributos.splice( indice_atributo,
0,
new Atributo_de_elemento_usado(  ) );
}
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
alternar_edicion_de_atributo_en_elemento_usado:function( indice_elemento,
indice_atributo ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.alternar_edicion_de_atributo_en_elemento_usado");
this.elementos_usados[ indice_elemento ].atributos[ indice_atributo ].esta_editando = (!(this.elementos_usados[ indice_elemento ].atributos[ indice_atributo ].esta_editando));
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_atributo_en_elemento_usado:function( indice_elemento,
indice_atributo ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.eliminar_atributo_en_elemento_usado");
this.elementos_usados[ indice_elemento ].atributos.splice( indice_atributo,
1 );
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_componente_en_elemento_usado:function( indice_elemento,
indice_componente ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.agregar_componente_en_elemento_usado");
if(typeof indice_componente === 'undefined') {
this.elementos_usados[ indice_elemento ].componentes.push(new Elemento_usado(  ))
}
else {
this.elementos_usados[ indice_elemento ].componentes.splice( indice_componente,
0,
new Elemento_usado(  ) );
}
this.actualizar_interfaz_de_usuario(  );
} catch(error) {
console.log(error);
throw error;
}

},
actualizar_interfaz_de_usuario:function() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.actualizar_interfaz_de_usuario");
this.guardar_estado(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_anterior_de_atajos:function(  ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.ir_a_pagina_anterior_de_atajos");
this.pagina_de_atajo_seleccionada -= 1;
this.cargar_atajos(  );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_pagina_posterior_de_atajos:function(  ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.methods.ir_a_pagina_posterior_de_atajos");
this.pagina_de_atajo_seleccionada += 1;
this.cargar_atajos(  );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ texto_de_atajo_seleccionado:function() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.watch.texto_de_atajo_seleccionado");
this.cargar_atajos(  );
} catch(error) {
console.log(error);
throw error;
}

},
atajos_brutos:function( valor ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.watch.atajos_brutos");
this.atajos_filtrados = valor.filter( ( item ) => {try {
if(this.texto_de_atajo_seleccionado.length === 0) {
return true;
}
return (!(( JSON.stringify(item, null, 2) ).toLowerCase(  ).indexOf( this.texto_de_atajo_seleccionado.toLowerCase(  ) ) === 0 - 1));
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
atajos_filtrados:function( valor ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.watch.atajos_filtrados");
this.paginas_de_atajos_totales = Math.floor( valor.length / this.items_por_pagina_de_atajo_seleccionada );
const index_inicio = this.pagina_de_atajo_seleccionada * this.items_por_pagina_de_atajo_seleccionada;
const index_final = index_inicio + this.items_por_pagina_de_atajo_seleccionada;
this.atajos_paginados = valor.filter( ( item,
index ) => {try {
if(( index >= index_inicio ) && ( index < index_final )) {
return true;
}
} catch(error) {
console.log(error);
throw error;
}

} );
if(this.$refs.caja_buscar_atajo) {
this.$nextTick( (  ) => {try {
if(this.$refs.caja_buscar_atajo) {
return this.$refs.caja_buscar_atajo[ 0 ].focus(  );
}
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
atajos_paginados:function( valor ) {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.watch.atajos_paginados");
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.mounted");
this.cargar_atajos(  );
} catch(error) {
console.log(error);
throw error;
}

},
unmounted() {try {
console.log('[DEBUG]', "EditorDeInstanciaDeComponente.unmounted");
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);