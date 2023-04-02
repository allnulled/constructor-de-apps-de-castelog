// [castelog:compilables] "./lib/Atributo_de_elemento_usado.calo"
// [castelog:compilables] "./lib/Elemento_usado.calo"
// [castelog:compilables] "./lib/elementos_soportados.calo"
// [castelog:compilables] "./lib/Fichero_de_componente.calo"
// [castelog:compilables] "./lib/EditorDeInstanciaDeComponente.calo"
// [castelog:compilables] "./lib/SelectorDeComponenteDeGuiBuilder.calo"
// [castelog:compilables] "./lib/VistaDeInstanciaDeComponente.calo"
// [castelog:compilables] "./lib/VistaDeInstanciaDeComponente.calo"
// [castelog:compilables] "./lib/EstiloShellverGuiConsoleSpecificationV1.calo"
// [castelog:compilables] "./lib/EstiloShellverGuiConsoleSpecificationV2.calo"
// [castelog:compilables] "./lib/GuiaDeReferencias.calo"

// [castelog:empaquetables] "./lib/Atributo_de_elemento_usado.js"

// [castelog:empaquetables] "./lib/Elemento_usado.js"

// [castelog:empaquetables] "./lib/elementos_soportados.js"

// [castelog:empaquetables] "./lib/Fichero_de_componente.js"

// [castelog:empaquetables] "./lib/EditorDeInstanciaDeComponente.js"

// [castelog:empaquetables] "./lib/SelectorDeComponenteDeGuiBuilder.js"

// [castelog:empaquetables] "./lib/VistaDeInstanciaDeComponente.js"

// [castelog:empaquetables] "./lib/VistaDeInstanciaDeComponente.js"

// [castelog:empaquetables] "./lib/EstiloShellverGuiConsoleSpecificationV1.js"

// [castelog:empaquetables] "./lib/EstiloShellverGuiConsoleSpecificationV2.js"

// [castelog:empaquetables] "./lib/GuiaDeReferencias.js"

const GuiTester = Castelog.metodos.un_componente_vue2("GuiTester",
  "<div class=\"GuiTester win7\">"
 + "    <div class=\"window glass\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">"
 + "          <span style=\"color:#0F0;\">●</span><span> Constructor de apps de calo</span>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"window-body\" style=\"padding: 4px;\">"
 + "        <div style=\"position:relative;\">"
 + "          <section class=\"tabs\">"
 + "            <menu role=\"tablist\">"
 + "              <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'inicio'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('inicio') }\">"
 + "                🪟"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'apps'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('apps'); }\">"
 + "                ⚡ <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'componentes'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('componentes'); }\">"
 + "                🧩 <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'datos'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('datos') }\">"
 + "                🔴 <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'traducciones'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('traducciones'); }\">"
 + "                ㊍ <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'rutas'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('rutas'); }\">"
 + "                🏁 <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'ficheros'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('ficheros'); }\">"
 + "                🗄 <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "              <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_navegacion_1 === 'descargas'\" v-on:click=\"() => { seleccionar_pestania_de_navegacion_1('descargas'); }\">"
 + "                🌟 <span class=\"texto_de_icono\"></span>"
 + "              </button>"
 + "            </menu>"
 + "          </section>"
 + "          <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'inicio'\">"
 + "            <GuiaDeReferencias ref=\"guia_de_referencias\" />"
 + "          </article>"
 + "          <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'datos'\">"
 + "            <div class=\"titulo_de_componente\">🔴 Datos</div>"
 + "            <div style=\"padding:2px;padding-top:4px;\">"
 + "              <section class=\"tabs\">"
 + "                <menu role=\"tablist\">"
 + "                  <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_bd === 1\" v-on:click=\"() => { seleccionar_pestania_de_bd(1); }\">"
 + "                    🔗 <span class=\"texto_de_icono\"></span>"
 + "                  </button>"
 + "                  <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_bd === 2\" v-on:click=\"() => { seleccionar_pestania_de_bd(2); }\">"
 + "                    ⭕ <span class=\"texto_de_icono\"></span>"
 + "                  </button>"
 + "                  <button :class=\"{disabled: false}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_bd === 3\" v-on:click=\"() => { seleccionar_pestania_de_bd(3); }\">"
 + "                    🔴 <span class=\"texto_de_icono\"></span>"
 + "                  </button>"
 + "                </menu>"
 + "              </section>"
 + "              <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_bd === 1\">"
 + "                <div class=\"titulo_de_componente\">🔗 Conexión a base de datos</div>"
 + "                <p>No hay ninguna base de datos ahora mismo.</p>"
 + "                <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_crear_conexion_de_base_de_datos\"> ➕ Crear conexión</button>"
 + "              </article>"
 + "              <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_bd === 2\">"
 + "                <div class=\"titulo_de_componente\">⭕ Estructura de los datos</div>"
 + "                <p>No hay ninguna tabla ahora mismo.</p>"
 + "                <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_crear_tabla_de_base_de_datos\"> ➕ Crear tabla</button>"
 + "              </article>"
 + "              <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_bd === 3\">"
 + "                <div class=\"titulo_de_componente\">🔴 Información</div>"
 + "                <p>No hay ninguna fila ahora mismo.</p>"
 + "                <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_crear_fila_de_base_de_datos\"> ➕ Crear fila</button>"
 + "              </article>"
 + "            </div>"
 + "          </article>"
 + "          <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'apps'\">"
 + "            <div class=\"titulo_de_componente\">⚡ Aplicación</div>"
 + "            <div class=\"\" v-if=\"apps && apps.length\">"
 + "              <ul>"
 + "                <li v-for=\"app, app_index in apps\" v-bind:key=\"'apps-list-item-' + app_index\">"
 + "                  <div class=\"horizontal_layout\">"
 + "                    <button>"
 + "                      {{ app }}"
 + "                    </button>"
 + "                    <button>"
 + "                      ❌ <span></span>"
 + "                    </button>"
 + "                    <button>"
 + "                      ❌ <span>Eliminar</span>"
 + "                    </button>"
 + "                  </div>"
 + "                </li>"
 + "              </ul>"
 + "            </div>"
 + "            <p v-else>No hay ninguna aplicación ahora mismo.</p>"
 + "            <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_crear_app\"> ➕ Crear app</button>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'traducciones'\">"
 + "            <div class=\"titulo_de_componente\">㊍ Traducciones</div>"
 + "            <p>No hay ningún fichero de traducciones ahora mismo.</p>"
 + "            <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_subir_traducciones\"> 📁 Subir traducciones</button>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'rutas'\">"
 + "            <div class=\"titulo_de_componente\">🏁 Rutas</div>"
 + "            <p>No hay ningún fichero de rutas ahora mismo.</p>"
 + "            <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_anyadir_rutas\"> ➕ Añadir ruta</button>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'ficheros'\">"
 + "            <div class=\"titulo_de_componente\">🗄 Ficheros</div>"
 + "            <p>No hay ningún fichero ahora mismo.</p>"
 + "            <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_anyadir_fichero\"> 📁 Añadir fichero</button>"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'descargas'\">"
 + "            <div class=\"titulo_de_componente\">🌟 Descargas</div>"
 + "            <p>Comprueba que todo esté en orden:</p>"
 + "            <ul>"
 + "              <li>nombre de aplicación</li>"
 + "              <li>package de aplicación</li>"
 + "              <li>componente de aplicación</li>"
 + "              <li>fichero html base de aplicación</li>"
 + "              <li>base de datos de aplicación</li>"
 + "              <li>traducciones de aplicación</li>"
 + "              <li>rutas de aplicación</li>"
 + "              <li>ficheros de aplicación</li>"
 + "              <li>opciones de descarga de aplicación</li>"
 + "            </ul>"
 + "            <button class=\"w_100\" v-on:click=\"abrir_dialogo_de_descargar_app\"> ✔ Todo ok, descargar</button>"
 + "          </article>"
 + "          <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_navegacion_1 === 'componentes'\">"
 + "            <div class=\"titulo_de_componente\">🧩 Componentes</div>"
 + "            <div style=\"padding:2px;padding-top:4px;\">"
 + "              <section class=\"tabs\">"
 + "                <menu role=\"tablist\">"
 + "                  <button :class=\"{disabled: typeof esta_seleccionada_pestania_de_componente === 'string'}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_componente === 0\" v-on:click=\"() => { seleccionar_pestania_de_componente(0); }\">"
 + "                    ✱ <span class=\"texto_de_icono\"></span>"
 + "                  </button>"
 + "                  <button :class=\"{disabled: typeof esta_seleccionada_pestania_de_componente === 'string'}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_componente === 2\" v-on:click=\"() => { seleccionar_pestania_de_componente(2); }\">"
 + "                    📂 <span class=\"texto_de_icono\"></span>"
 + "                  </button>"
 + "                  <button role=\"tab\" :aria-selected=\"typeof esta_seleccionada_pestania_de_componente === 'string'\" v-if=\"typeof esta_editando_pestania === 'string'\" style=\"max-width:80px;overflow:hidden;\" :title=\"esta_editando_pestania\" v-on:click=\"() => { seleccionar_pestania_de_componente(esta_editando_pestania) }\">"
 + "                    <span class=\"texto_de_icono\" style=\"display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:'...';max-width:70px;text-align:center;width:100%;\">{{ esta_editando_pestania }}</span>"
 + "                  </button>"
 + "                </menu>"
 + "              </section>"
 + "              <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_componente === 0\">"
 + "                <div class=\"titulo_de_componente\"><b>Componentes disponibles</b>: {{ componentes.length }}</div>"
 + "                <div class=\"horizontal_layout\" style=\"justify-content: space-between;margin-bottom:1px;\">"
 + "                  <button class=\"nowrap\" style=\"flex-grow: 1;\" v-on:click=\"() => abrir_dialogo_de_crear_componente()\"><span style=\"font-size:7px;\"></span>📄 Nuevo</button>"
 + "                  <button class=\"nowrap\" style=\"margin-left: 4px; flex-grow: 1; margin-top:2px;\" v-on:click=\"() => abrir_dialogo_de_crear_componente_por_prototipo()\"><span style=\"font-size:7px;\"></span>📄»📄 Prototipo</button>"
 + "                  <button class=\"nowrap\" style=\"margin-left: 4px; flex-grow: 1; margin-top:2px;\" v-on:click=\"() => abrir_dialogo_de_crear_componente_por_url()\"><span style=\"font-size:7px;\"></span>🌐»📄 URL</button>"
 + "                </div>"
 + "                <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente disponible\" v-model=\"filtro_de_componentes\" />"
 + "                <table class=\"w_100\">"
 + "                  <tbody v-for=\"componente, componente_index in componentes_filtrados\" v-bind:key=\"'componente_disponible_' + componente_index\">"
 + "                    <tr v-if=\"componente.nombre\">"
 + "                      <td class=\"w_100\">"
 + "                        <button class=\"w_100 nopad\" v-on:click=\"() => seleccionar_pestania_de_componente(componente.nombre)\">{{ componente.nombre }}</button>"
 + "                      </td>"
 + "                      <td class=\"w_auto\">"
 + "                        <button class=\"w_auto nopad nowrap\" v-on:click=\"() => abrir_dialogo_de_eliminar_componente(componente.nombre)\">"
 + "                          ❌ <span>Eliminar</span>"
 + "                        </button>"
 + "                      </td>"
 + "                    </tr>"
 + "                  </tbody>"
 + "                </table>"
 + "              </article>"
 + "              <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_componente === 2\">"
 + "                <div class=\"titulo_de_componente\"><b>Componentes abiertos</b>: {{ componentes_abiertos.length }}</div>"
 + "                <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente abierto\" v-model=\"filtro_de_componentes_abiertos\" />"
 + "                <table class=\"w_100\">"
 + "                  <tbody v-for=\"componente_nombre, componente_index in componentes_abiertos_filtrados\" v-bind:key=\"'componente_abierto_' + componente_index\">"
 + "                    <tr v-if=\"componente_nombre\">"
 + "                      <td class=\"w_100\">"
 + "                        <button class=\"w_100 nopad\" v-on:click=\"() => seleccionar_pestania_de_componente(componente_nombre)\">"
 + "                          {{ componente_nombre }}"
 + "                        </button>"
 + "                      </td>"
 + "                      <td class=\"w_auto\">"
 + "                        <button class=\"w_auto nopad nowrap\" v-on:click=\"() => cerrar_pestania_de_componente(componente_nombre)\">"
 + "                          ❌ <span>Cerrar</span>"
 + "                        </button>"
 + "                      </td>"
 + "                    </tr>"
 + "                  </tbody>"
 + "                </table>"
 + "              </article>"
 + "              <article role=\"tabpanel\" class=\"nopad\" v-if=\"typeof esta_seleccionada_pestania_de_componente === 'string'\">"
 + "                <div class=\"titulo_de_componente\"><b>Componente</b>: {{ esta_editando_pestania }}</div>"
 + "                <section class=\"tabs\">"
 + "                  <menu role=\"tablist\">"
 + "                    <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'vista'\" v-on:click=\"() => { esta_seleccionada_pestania = 'vista'; $forceUpdate(true); }\">🖥 <span class=\"texto_de_icono\">Vista</span></button>"
 + "                    <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'plantilla'\" v-on:click=\"() => { esta_seleccionada_pestania = 'plantilla'; $forceUpdate(true); }\">⭐ <span class=\"texto_de_icono\">Plantilla</span></button>"
 + "                    <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'logica'\" v-on:click=\"() => { esta_seleccionada_pestania = 'logica'; $forceUpdate(true); }\">💡 <span class=\"texto_de_icono\">Lógica</span></button>"
 + "                    <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'estilos'\" v-on:click=\"() => { esta_seleccionada_pestania = 'estilos'; $forceUpdate(true); }\">🎨 <span class=\"texto_de_icono\">Estilos</span></button>"
 + "                  </menu>"
 + "                  <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'plantilla'\">"
 + "                    <ul class=\"tree-view \">"
 + "                      <li>"
 + "                        <details open>"
 + "                          <summary>"
 + "                            <span>En vista:</span>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <EditorDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos\" :es-elemento-raiz=\"true\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <span>En formulario:</span>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <EditorDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos_de_formulario\" :es-elemento-raiz=\"true\" />"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <span>En test:</span>"
 + "                          </summary>"
 + "                          <div>"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"test_de_componente\" :placeholder=\"placeholder_de_test_de_componente\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                      <li>"
 + "                        <details>"
 + "                          <summary>"
 + "                            <span>En documentación:</span>"
 + "                          </summary>"
 + "                          <div style=\"position:relative;\" v-if=\"esta_editando_documentacion\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"documentacion_de_componente\" placeholder=\"Texto de documentación\"></textarea>"
 + "                            <div style=\"position:absolute;bottom:auto;right:4px;left:auto;top:4px;\">"
 + "                              <button v-on:click=\"alternar_editando_documentacion\">Ver</button>"
 + "                            </div>"
 + "                          </div>"
 + "                          <div v-else style=\"position:relative;min-height:162px;border:3px double #333;\">"
 + "                            <div style=\"padding:4px;\" v-html=\"documentacion_de_componente\"></div>"
 + "                            <div style=\"position:absolute;bottom:auto;right:4px;left:auto;top:4px;\">"
 + "                              <button v-on:click=\"alternar_editando_documentacion\">Editar</button>"
 + "                            </div>"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                    </ul>"
 + "                  </article>"
 + "                  <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'vista'\">"
 + "                    <div style=\"text-align:right;\">"
 + "                      <div class=\"titulo_de_componente\">Panel de control:</div>"
 + "                      <button class=\"\" v-on:click=\"alternar_vista\" :class=\"{active:esta_mostrando_vista}\">Componente</button>"
 + "                      <button class=\"\" v-on:click=\"alternar_formulario\" :class=\"{active:esta_mostrando_formulario}\">Formulario</button>"
 + "                      <button class=\"\" v-on:click=\"iniciar_test\" :disabled=\"esta_ejecutando_test\">Test</button>"
 + "                      <hr/>"
 + "                    </div>"
 + "                    <div v-if=\"esta_cargando_vista\">"
 + "                      <div role=\"progressbar\" class=\"animate\" style=\"position:relative;\">"
 + "                        <div :style=\"'width:' + esta_cargada_vista_en_porcentaje + '%'\"></div>"
 + "                        <span style=\"font-size:10px;color: white;text-shadow:0 0 1px white;position:absolute;top:0;left:0;right:0;text-align:center;\">Cargando componente de «{{ esta_editando_pestania }}»</span>"
 + "                      </div>"
 + "                    </div>"
 + "                    <div v-else-if=\"esta_mostrando_vista\">"
 + "                      <div class=\"titulo_de_componente\">Vista de componente:</div>"
 + "                      <VistaDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos\" />"
 + "                    </div>"
 + "                    <div v-if=\"esta_mostrando_formulario\">"
 + "                      <hr/>"
 + "                      <div class=\"titulo_de_componente\">Formulario de componente:</div>"
 + "                      <div v-if=\"esta_cargando_formulario\">"
 + "                        <div role=\"progressbar\" class=\"animate\" style=\"position:relative;\">"
 + "                          <div :style=\"'width:' + esta_cargando_formulario_en_porcentaje + '%'\"></div>"
 + "                          <span style=\"font-size:10px;color: white;text-shadow:0 0 1px white;position:absolute;top:0;left:0;right:0;text-align:center;\">Cargando formulario de «{{ esta_editando_pestania }}»</span>"
 + "                        </div>"
 + "                      </div>"
 + "                      <VistaDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos_de_formulario\" v-else />"
 + "                    </div>"
 + "                    <div v-if=\"esta_ejecutando_test\">"
 + "                      <hr/>"
 + "                      <div class=\"titulo_de_componente\">Test de componente:</div>"
 + "                      <textarea class=\"w_100\" disabled v-model=\"salida_de_test_de_componente\"></textarea>"
 + "                    </div>"
 + "                  </article>"
 + "                  <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'estilos'\">"
 + "                    <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_estilo\" placeholder=\".mi_clase { color: blue; }\"></textarea>"
 + "                  </article>"
 + "                  <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'logica'\">"
 + "                    <ul class=\"tree-view has-container\">"
 + "                      <li>"
 + "                        <details :open=\"esta_seleccionado_en_pre_cargar\">"
 + "                          <summary>En pre-cargar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_precargar\" placeholder=\"hago asíncronamente this.cargar_datos().\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_propiedades\">"
 + "                          <summary>En propiedades:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_props\" :placeholder=\"placeholder_de_script_de_props\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_metodos\">"
 + "                          <summary>En métodos:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_methods\" :placeholder=\"placeholder_de_script_de_methods\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_datos\">"
 + "                          <summary>En datos:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_data\" :placeholder=\"placeholder_de_script_de_data\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_datos_observados\">"
 + "                          <summary>En datos observados:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_watch\" :placeholder=\"placeholder_de_script_de_watch\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_datos_computados\">"
 + "                          <summary>En datos computados:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_computed\" :placeholder=\"placeholder_de_script_de_computed\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_pre_crear\">"
 + "                          <summary>En pre-crear:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeCreate\" :placeholder=\"placeholder_de_script_de_beforeCreate\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_post_crear\">"
 + "                          <summary>En post-crear:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_created\" :placeholder=\"placeholder_de_script_de_created\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_pre_montar\">"
 + "                          <summary>En pre-montar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeMount\" :placeholder=\"placeholder_de_script_de_beforeMount\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_post_montar\">"
 + "                          <summary>En post-montar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_mounted\" :placeholder=\"placeholder_de_script_de_mounted\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_pre_actualizar\">"
 + "                          <summary>En pre-actualizar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeUpdate\" :placeholder=\"placeholder_de_script_de_beforeUpdate\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_post_actualizar\">"
 + "                          <summary>En post-actualizar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_updated\" :placeholder=\"placeholder_de_script_de_updated\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_pre_desmontar\">"
 + "                          <summary>En pre-desmontar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeUnmount\" :placeholder=\"placeholder_de_script_de_beforeUnmount\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                        <details :open=\"esta_seleccionado_en_post_desmontar\">"
 + "                          <summary>En post-desmontar:</summary>"
 + "                          <div style=\"position:relative;\">"
 + "                            <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_unmounted\" :placeholder=\"placeholder_de_script_de_unmounted\"></textarea>"
 + "                          </div>"
 + "                        </details>"
 + "                      </li>"
 + "                    </ul>"
 + "                  </article>"
 + "                  <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'componentes'\">"
 + "                    <table class=\"w_100\">"
 + "                      <tbody>"
 + "                        <tr>"
 + "                          <td class=\"w_100\">"
 + "                            <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente...\"/>"
 + "                          </td>"
 + "                          <td class=\"w_auto\">"
 + "                            <button class=\"boton_de_icono\">🔎</button>"
 + "                          </td>"
 + "                        </tr>"
 + "                      </tbody>"
 + "                    </table>"
 + "                    <div v-if=\"componentes && componentes.length\">"
 + "                      <table class=\"w_100\">"
 + "                        <thead>"
 + "                          <tr>"
 + "                            <th>Orden</th>"
 + "                            <th>Nombre</th>"
 + "                          </tr>"
 + "                        </thead>"
 + "                        <tbody>"
 + "                          <tr>"
 + "                            <td class=\"w_auto nowrap text_align_center\">1</td>"
 + "                            <td class=\"w_100 nowrap\">Raíz</td>"
 + "                          </tr>"
 + "                        </tbody>"
 + "                        <tbody>"
 + "                          <tr>"
 + "                            <td class=\"w_auto nowrap text_align_center\">2</td>"
 + "                            <td class=\"w_100 nowrap\">Subir</td>"
 + "                          </tr>"
 + "                        </tbody>"
 + "                        <tbody v-for=\"(componente, componente_index) in componentes\" v-bind:key=\"'componente-de-componente-' + componente_index\">"
 + "                          <tr>"
 + "                            <td class=\"w_auto nowrap text_align_center\">"
 + "                              {{ componente_index + 1 + 2 }}"
 + "                            </td>"
 + "                            <td class=\"w_100 nowrap\">"
 + "                              {{ componente.nombre }}"
 + "                            </td>"
 + "                          </tr>"
 + "                        </tbody>"
 + "                      </table>"
 + "                    </div>"
 + "                    <div v-else>"
 + "                      <p style=\"text-align: center;\">No se encontraton componentes actualmente.</p>"
 + "                    </div>"
 + "                    <footer>"
 + "                      "
 + "                    </footer>"
 + "                  </article>"
 + "                </section>"
 + "              </article>"
 + "            </div>"
 + "          </article>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_eliminar_componente\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Eliminar componente</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_eliminar_componente\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <div>¿Seguro que quieres eliminar componente «<b>{{ componente_a_eliminar }}</b>»?</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"() => confirmar_dialogo_de_eliminar_componente()\">⚠ Sí, eliminar</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_eliminar_componente()\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_componente\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear componente</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_nuevo_componente\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"ComponenteVue\" v-model=\"nombre_de_nuevo_componente\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_nuevo_componente === 'string'\">{{ mensaje_de_error_de_nuevo_componente }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button v-on:click=\"() => resolver_dialogo_de_nuevo_componente(nombre_de_nuevo_componente)\">➕ Crear componente</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_nuevo_componente()\">❌ Salir</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_componente_por_prototipo\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear componente por prototipo</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_nuevo_componente_por_prototipo\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <div style=\"padding-bottom:4px;\">"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"nombre_de_nuevo_componente_por_prototipo\" placeholder=\"ComponenteVue\" />"
 + "              </div>"
 + "              <div style=\"padding-bottom:4px;\">"
 + "                <input class=\"w_100\" type=\"text\" v-model=\"nombre_de_viejo_componente_por_prototipo\" placeholder=\"PrototipoVue\" disabled=\"true\" />"
 + "              </div>"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_nuevo_componente_por_prototipo === 'string'\">{{ mensaje_de_error_de_nuevo_componente_por_prototipo }}</div>"
 + "              <SelectorDeComponenteDeGuiBuilder :opciones=\"componentes\" :seleccionados=\"nombre_de_viejo_componente_por_prototipo ? [nombre_de_viejo_componente_por_prototipo] : []\" posicion=\"relative\" :al-seleccionar=\"v => { nombre_de_viejo_componente_por_prototipo = v; $forceUpdate(true); }\" />"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button v-on:click=\"() => resolver_dialogo_de_nuevo_componente_por_prototipo([nombre_de_nuevo_componente_por_prototipo, nombre_de_viejo_componente_por_prototipo])\">➕ Crear componente</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_nuevo_componente_por_prototipo()\">❌ Salir</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_componente_por_url\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear componente por URL</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_nuevo_componente_por_url\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"http://github.com/allnulled/componentes-vue/path/to/item.calo\" v-model=\"nombre_de_nuevo_componente_por_url\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_nuevo_componente_por_url === 'string'\">{{ mensaje_de_error_de_nuevo_componente_por_url }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button v-on:click=\"() => resolver_dialogo_de_nuevo_componente_por_url(nombre_de_nuevo_componente_por_url)\">➕ Crear componente</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_nuevo_componente_por_url()\">❌ Salir</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_atajo\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear atajo</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_crear_atajo\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Nombre del atajo...\" v-model=\"nombre_de_crear_atajo\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_atajo === 'string'\">{{ mensaje_de_error_de_crear_atajo }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"() => confirmar_dialogo_de_crear_atajo(nombre_de_crear_atajo)\">➕ Crear atajo</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_crear_atajo()\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_eliminar_atajo\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Eliminar atajo</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_eliminar_atajo\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <div>¿Seguro que quieres eliminar atajo «<b>{{ atajo_a_eliminar }}</b>»?</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"() => confirmar_dialogo_de_eliminar_atajo()\">⚠ Sí, eliminar</button>"
 + "              <button v-on:click=\"() => cancelar_dialogo_de_eliminar_atajo()\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_app\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear app</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_crear_app\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Nombre del app...\" v-model=\"nombre_de_crear_app\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Sí, eliminar</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "                <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_subir_traducciones\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Subir traducciones</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_subir_traducciones\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_anyadir_rutas\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Anyadir rutas</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_anyadir_rutas\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_anyadir_fichero\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Anyadir fichero</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_anyadir_fichero\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_descargar_app\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Descargar app</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_descargar_app\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_conexion_de_base_de_datos\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear conexión de base de datos</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_crear_conexion_de_base_de_datos\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_tabla_de_base_de_datos\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear tabla de base de datos</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_crear_tabla_de_base_de_datos\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "          <div class=\"window active is-bright dialog_window\" v-if=\"esta_abierto_dialogo_de_crear_fila_de_base_de_datos\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">Crear fila de base de datos</div>"
 + "              <div class=\"title-bar-controls\">"
 + "                <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"cancelar_dialogo_de_crear_fila_de_base_de_datos\"></button>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"window-body has-space\">"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Parámetro indeterminado...\" v-model=\"parametro_indeterminado\" />"
 + "              <div class=\"mensaje_de_error\" v-if=\"typeof mensaje_de_error_de_crear_app === 'string'\">{{ mensaje_de_error_de_crear_app }}</div>"
 + "            </div>"
 + "            <footer style=\"text-align: right\">"
 + "              <button style=\"background-color: #900;\" v-on:click=\"confirmar_dialogo_de_crear_app\">⚠ Proceder</button>"
 + "              <button v-on:click=\"cancelar_dialogo_de_crear_app\">❌ Cancelar</button>"
 + "            </footer>"
 + "          </div>"
 + "        </div>"
 + "        <div class=\"error_window_box\" v-if=\"errores_mostrados && errores_mostrados.length\">"
 + "          <div class=\"window error_window\">"
 + "            <div class=\"title-bar\">"
 + "              <div class=\"title-bar-text\">"
 + "                <span>Error emergente</span>"
 + "                <span v-if=\"errores_mostrados.length !== 1\">(+ {{ errores_mostrados.length - 1 }} errores más)</span>"
 + "              </div>"
 + "              <div class=\"title-bar-controls\">"
 + "                  <button class=\"boton_de_icono\" aria-label=\"Close\" v-on:click=\"mostrar_siguiente_error\"></button>"
 + "                </div>"
 + "            </div>"
 + "            <div class=\"window-body\" :style=\"'height:' + altura_de_caja_de_error + 'px;'\" style=\"height:100px;overflow:scroll;border: 1px solid silver;resize:vertical;\">"
 + "              <div v-if=\"errores_mostrados[0].name !== 'SyntaxError'\">"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Nombre de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ errores_mostrados[0].name }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\" v-if=\"errores_mostrados[0].details\">"
 + "                  <span class=\"etiqueta_de_item\">Detalles de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].details) }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Mensaje de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ errores_mostrados[0].message }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Pila de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].stack) }}</div>"
 + "                </div>"
 + "              </div>"
 + "              <div v-else>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Nombre de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ errores_mostrados[0].name }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\" v-if=\"errores_mostrados[0].details\">"
 + "                  <span class=\"etiqueta_de_item\">Detalles de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].details) }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Localización de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].location, null, 2) }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Encuentro de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].found, null, 2) }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Mensaje de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ errores_mostrados[0].message }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Sugerencias de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].expected, null, 2) }}</div>"
 + "                </div>"
 + "                <div class=\"item_de_error\">"
 + "                  <span class=\"etiqueta_de_item\">Pila de error: </span>"
 + "                  <div class=\"valor_de_item codigo\">{{ JSON.stringify(errores_mostrados[0].stack) }}</div>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"\" style=\"position:fixed;right:20px;bottom:10px;\">"
 + "              <div class=\"\">"
 + "                <span class=\"\" style=\"font-size:8px;max-width: 300px;max-height:10px;\">"
 + "                  <input type=\"range\" min=\"50\" max=\"500\" value=\"25\" v-model=\"altura_de_caja_de_error\" />"
 + "                </span>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
required:true
}
},
watch:{ elementos( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.elementos");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
elementos_de_formulario( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.elementos_de_formulario");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionada_pestania_de_navegacion_1( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionada_pestania_de_navegacion_1");
if((!(valor === "componentes"))) {
this.esta_cargando_vista = true;
this.esta_cargada_vista_en_porcentaje = 0;
if(this.esta_seleccionada_pestania === "vista") {
this.esta_seleccionada_pestania = undefined;
}
}
else {
if(typeof this.esta_seleccionada_pestania === 'undefined') {
this.esta_seleccionada_pestania = "vista";
}
}
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionada_pestania_de_componente( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionada_pestania_de_componente");
if((!(typeof valor === 'string'))) {
this.esta_cargando_vista = true;
this.esta_cargada_vista_en_porcentaje = 0;
this.esta_seleccionada_pestania = undefined;
}
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionada_pestania( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionada_pestania");
if(valor === "vista") {
this.esta_mostrando_formulario = false;
clearTimeout( this.esta_cargando_vista_timeout_id );
this.esta_cargando_vista_timeout_id = setTimeout( () => {try {
this.esta_cargando_vista = false;
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 0.28 );
this.guardar_configuraciones_de_componente(  );
this.esta_cargada_vista_en_porcentaje = 0;
setTimeout( () => {try {
this.esta_cargada_vista_en_porcentaje = 100;
} catch(error) {
console.log(error);
throw error;
}

},
20 );
}
else {
this.esta_cargando_vista = true;
this.esta_cargada_vista_en_porcentaje = 0;
}
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_pre_cargar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_pre_cargar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_propiedades( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_propiedades");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_metodos( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_metodos");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_datos( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_datos");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_datos_observados( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_datos_observados");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_datos_computados( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_datos_computados");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_pre_crear( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_pre_crear");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_post_crear( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_post_crear");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_pre_montar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_pre_montar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_post_montar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_post_montar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_pre_actualizar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_pre_actualizar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_post_actualizar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_post_actualizar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_pre_desmontar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_pre_desmontar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
esta_seleccionado_en_post_desmontar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.esta_seleccionado_en_post_desmontar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_estilo( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_estilo");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_precargar( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_precargar");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_props( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_props");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_data( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_data");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_methods( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_methods");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_data( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_data");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_watch( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_watch");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_computed( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_computed");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_beforeCreate( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_beforeCreate");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_created( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_created");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_beforeMount( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_beforeMount");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_mounted( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_mounted");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_beforeUpdate( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_beforeUpdate");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_updated( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_updated");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_beforeUnmount( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_beforeUnmount");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
script_de_unmounted( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.script_de_unmounted");
this.guardar_configuraciones_de_componente(  );
} catch(error) {
console.log(error);
throw error;
}

},
componentes( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.componentes");
this.filtrar_componentes( valor );
} catch(error) {
console.log(error);
throw error;
}

},
componentes_abiertos( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.componentes_abiertos");
this.filtrar_componentes_abiertos( valor );
} catch(error) {
console.log(error);
throw error;
}

},
filtro_de_componentes( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.filtro_de_componentes");
this.filtrar_componentes( this.componentes );
} catch(error) {
console.log(error);
throw error;
}

},
filtro_de_componentes_abiertos( valor ) {try {
console.log('[DEBUG]', "GuiTester.watch.filtro_de_componentes_abiertos");
this.filtrar_componentes_abiertos( this.componentes_abiertos );
} catch(error) {
console.log(error);
throw error;
}

}
},
data() {try {
console.log('[DEBUG]', "GuiTester.data");
return { apps:[  ],
atajos:[  ],
componentes:[  ],
componentes_abiertos:[  ],
nombre_de_nuevo_componente:"",
nombre_de_nuevo_componente_por_prototipo:"",
nombre_de_viejo_componente_por_prototipo:"",
nombre_de_nuevo_componente_por_url:"",
documentacion_de_componente:"",
errores_mostrados:[  ],
esta_mostrando_errores:[  ],
esta_editando_documentacion:false,
test_de_componente:"",
placeholder_de_test_de_componente:"\nhago un testeo llamado 'x' que en menos de 0.999 segundos pase los tests [\n  'Test de feature 1',\n  'Test de feature 2'\n].\nhago un test llamado 'Test de feature 1' donde {\n  compruebo que 1 es igual que 1.  \n}.\nhago un test llamado 'Test de feature 2' donde {\n  compruebo que 2 es igual que 2.\n}.\n        ".trim(  ),
salida_de_test_de_componente:"",
elementos:[  ],
elementos_de_formulario:[  ],
elemento_en_copia:undefined,
elemento_en_copia_padre:undefined,
elemento_en_copia_modo:undefined,
filtro_de_componentes:"",
filtro_de_componentes_abiertos:"",
componentes_filtrados:[  ],
componentes_abiertos_filtrados:[  ],
esta_ejecutando_test:false,
esta_seleccionada_pestania_de_bd:1,
esta_seleccionada_pestania_de_app:1,
esta_en_roadmap_app:2,
esta_cargando_vista:true,
esta_cargada_vista_en_porcentaje:0,
esta_cargando_vista_timeout_id:false,
esta_seleccionada_pestania_de_componente:0,
esta_seleccionada_pestania_de_navegacion_1:'componentes',
esta_editando_pestania:undefined,
esta_seleccionada_pestania:"plantilla",
esta_seleccionado_en_pre_cargar:false,
esta_seleccionado_en_propiedades:false,
esta_seleccionado_en_metodos:false,
esta_seleccionado_en_datos:false,
esta_seleccionado_en_datos_observados:false,
esta_seleccionado_en_datos_computados:false,
esta_seleccionado_en_pre_crear:false,
esta_seleccionado_en_post_crear:false,
esta_seleccionado_en_pre_montar:false,
esta_seleccionado_en_post_montar:false,
esta_seleccionado_en_pre_actualizar:false,
esta_seleccionado_en_post_actualizar:false,
esta_seleccionado_en_pre_desmontar:false,
esta_seleccionado_en_post_desmontar:false,
esta_abierto_dialogo_de_crear_componente:false,
esta_abierto_dialogo_de_crear_componente_por_prototipo:false,
esta_abierto_dialogo_de_crear_componente_por_url:false,
esta_abierto_dialogo_de_crear_app:false,
esta_abierto_dialogo_de_subir_traducciones:false,
esta_abierto_dialogo_de_anyadir_rutas:false,
esta_abierto_dialogo_de_anyadir_fichero:false,
esta_abierto_dialogo_de_descargar_app:false,
esta_abierto_dialogo_de_crear_conexion_de_base_de_datos:false,
esta_abierto_dialogo_de_crear_tabla_de_base_de_datos:false,
esta_abierto_dialogo_de_crear_fila_de_base_de_datos:false,
script_de_estilo:"",
script_de_precargar:"",
script_de_props:"",
script_de_data:"",
script_de_methods:"",
script_de_data:"",
script_de_watch:"",
script_de_computed:"",
script_de_beforeCreate:"",
script_de_created:"",
script_de_beforeMount:"",
script_de_mounted:"",
script_de_beforeUpdate:"",
script_de_updated:"",
script_de_beforeUnmount:"",
script_de_unmounted:"",
tiempo_de_error:1000 * 6,
placeholder_de_script_de_props:this.sanitizar_salida_generativa_calo( "{\n  atributoUno: {\n    propiedad type como String.\n    propiedad default como una función donde retorno un texto aleatorio de 10 caracteres.\n  },\n  atributoDos: {\n    propiedad type como [Object, Array].\n    propiedad default como una función donde retorno {}.\n  }\n}" ).trim(  ),
placeholder_de_script_de_methods:this.sanitizar_salida_generativa_calo( "{\n  cargar_datos: una función asíncrona donde {\n\n  }\n}" ).trim(  ),
placeholder_de_script_de_data:"\nretorno {\n  propiedad_1: 0,\n  propiedad_2: 0,\n  propiedad_3: 0\n}.\n        ".trim(  ),
placeholder_de_script_de_watch:this.sanitizar_salida_generativa_calo( "{\n  propiedad_1: una función con (valor) donde {\n    asigno this.propiedad_2 como valor + \".1\".\n  },\n  propiedad_2: una función con (valor) donde {\n    asigno this.propiedad_3 como valor + \".2\".\n  },\n  propiedad_3: una función con (valor) donde {\n    imprimo valor.\n  }\n}" ).trim(  ),
placeholder_de_script_de_computed:this.sanitizar_salida_generativa_calo( "{\n  propiedad_4: una función donde retorno this.propiedad_1 + \".4\"\n}" ).trim(  ),
placeholder_de_script_de_beforeCreate:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_created:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_beforeMount:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_mounted:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_beforeUpdate:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_updated:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_beforeUnmount:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
placeholder_de_script_de_unmounted:this.sanitizar_salida_generativa_calo( "una función con () {\n  @POR-HACER\n}" ).trim(  ),
renderizar_dilator_id:undefined,
renderizar_dilator_milisegundos:3 * 1000,
cerrar_error_dilator_id:undefined,
resolver_dialogo_de_nuevo_componente:function() {
},
resolver_dialogo_de_nuevo_componente_por_prototipo:function() {
},
resolver_dialogo_de_nuevo_componente_por_url:function() {
},
cancelar_dialogo_de_nuevo_componente:function() {
},
cancelar_dialogo_de_nuevo_componente_por_prototipo:function() {
},
cancelar_dialogo_de_nuevo_componente_por_url:function() {
},
cancelar_dialogo_de_crear_atajo:function() {
},
cancelar_dialogo_de_eliminar_componente:function() {
},
cancelar_dialogo_de_eliminar_atajo:function() {
},
mensaje_de_error_de_nuevo_componente:undefined,
mensaje_de_error_de_nuevo_componente_por_prototipo:undefined,
mensaje_de_error_de_nuevo_componente_por_url:undefined,
componente_a_eliminar:"",
esta_abierto_dialogo_de_eliminar_componente:false,
esta_abierto_dialogo_de_eliminar_atajo:false,
esta_abierto_dialogo_de_crear_atajo:false,
nombre_de_crear_atajo:"",
mensaje_de_error_de_crear_atajo:undefined,
confirmar_dialogo_de_crear_atajo:function() {
},
confirmar_dialogo_de_eliminar_componente:function() {
},
confirmar_dialogo_de_eliminar_atajo:function() {
},
nombre_de_crear_app:undefined,
mensaje_de_error_de_crear_app:undefined,
esta_mostrando_vista:false,
esta_cargando_vista:0,
esta_cargando_vista_timeout_id:0,
esta_mostrando_formulario:false,
esta_cargando_formulario:0,
esta_cargando_formulario_timeout_id:0,
altura_de_caja_de_error:100,
roadmap_pasos:{ Aplicacion:{ nombre:"⚡ Aplicación",
descripcion:"Configura parámetros generales de la aplicación."
},
Componentes:{ nombre:"🧩 Componentes",
descripcion:"Comprueba que están todos los componentes que esperas dentro de la aplicación."
},
Traducciones:{ nombre:"🌐 Traducciones",
descripcion:"Establece traducciones vía fichero o texto."
},
Rutas:{ nombre:"🏁 Rutas",
descripcion:"Vincula componentes y rutas de aplicación accesibles vía parámetros."
},
Eventos:{ nombre:"📡 Eventos",
descripcion:"Agrega funciones en los eventos típicos de la aplicación."
},
Ficheros:{ nombre:"🗄 Ficheros",
descripcion:"Empaqueta ficheros externos a la aplicación, como imágenes u otros."
},
Descargas:{ nombre:"🌟 Descargas",
descripcion:"Finalmente, descárgate tu aplicación personalizada."
}
}
};
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {try {
console.log('[DEBUG]', "GuiTester.mounted");
this.componentes = this.cargar_componentes(  );
this.atajos = this.cargar_atajos(  );
this.apps = this.cargar_apps(  );
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ alternar_editando_documentacion:function() {try {
console.log('[DEBUG]', "GuiTester.methods.alternar_editando_documentacion");
this.esta_editando_documentacion = (!(this.esta_editando_documentacion));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_siguiente_error:function() {try {
console.log('[DEBUG]', "GuiTester.methods.mostrar_siguiente_error");
if(this.errores_mostrados.length === 0) {
this.esta_mostrando_errores = false;
}
this.errores_mostrados.shift(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_error:function( error ) {try {
console.log('[DEBUG]', "GuiTester.methods.mostrar_error");
this.errores_mostrados.push(error)
if(this.esta_mostrando_errores) {
return;
}
return this.mostrar_siguiente_error(  );
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_app");
this.esta_abierto_dialogo_de_crear_app = !!!this.esta_abierto_dialogo_de_crear_app;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_subir_traducciones:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_subir_traducciones");
this.esta_abierto_dialogo_de_subir_traducciones = !!!this.esta_abierto_dialogo_de_subir_traducciones;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_anyadir_rutas:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_anyadir_rutas");
this.esta_abierto_dialogo_de_anyadir_rutas = !!!this.esta_abierto_dialogo_de_anyadir_rutas;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_anyadir_fichero:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_anyadir_fichero");
this.esta_abierto_dialogo_de_anyadir_fichero = !!!this.esta_abierto_dialogo_de_anyadir_fichero;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_descargar_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_descargar_app");
this.esta_abierto_dialogo_de_descargar_app = !!!this.esta_abierto_dialogo_de_descargar_app;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_conexion_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_conexion_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_tabla_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_tabla_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_fila_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_fila_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_crear_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_crear_app");
this.esta_abierto_dialogo_de_crear_app = !!!this.esta_abierto_dialogo_de_crear_app;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_subir_traducciones:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_subir_traducciones");
this.esta_abierto_dialogo_de_subir_traducciones = !!!this.esta_abierto_dialogo_de_subir_traducciones;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_anyadir_rutas:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_anyadir_rutas");
this.esta_abierto_dialogo_de_anyadir_rutas = !!!this.esta_abierto_dialogo_de_anyadir_rutas;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_anyadir_fichero:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_anyadir_fichero");
this.esta_abierto_dialogo_de_anyadir_fichero = !!!this.esta_abierto_dialogo_de_anyadir_fichero;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_descargar_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_descargar_app");
this.esta_abierto_dialogo_de_descargar_app = !!!this.esta_abierto_dialogo_de_descargar_app;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_crear_conexion_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_crear_conexion_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_crear_tabla_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_crear_tabla_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
confirmar_dialogo_de_crear_fila_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.confirmar_dialogo_de_crear_fila_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_crear_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_crear_app");
this.esta_abierto_dialogo_de_crear_app = !!!this.esta_abierto_dialogo_de_crear_app;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_subir_traducciones:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_subir_traducciones");
this.esta_abierto_dialogo_de_subir_traducciones = !!!this.esta_abierto_dialogo_de_subir_traducciones;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_anyadir_rutas:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_anyadir_rutas");
this.esta_abierto_dialogo_de_anyadir_rutas = !!!this.esta_abierto_dialogo_de_anyadir_rutas;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_anyadir_fichero:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_anyadir_fichero");
this.esta_abierto_dialogo_de_anyadir_fichero = !!!this.esta_abierto_dialogo_de_anyadir_fichero;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_descargar_app:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_descargar_app");
this.esta_abierto_dialogo_de_descargar_app = !!!this.esta_abierto_dialogo_de_descargar_app;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_crear_conexion_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_crear_conexion_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_conexion_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_crear_tabla_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_crear_tabla_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_tabla_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
cancelar_dialogo_de_crear_fila_de_base_de_datos:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.cancelar_dialogo_de_crear_fila_de_base_de_datos");
this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos = !!!this.esta_abierto_dialogo_de_crear_fila_de_base_de_datos;
} catch(error) {
console.log(error);
throw error;
}

},
iniciar_test:async function() {try {
console.log('[DEBUG]', "GuiTester.methods.iniciar_test");
this.esta_ejecutando_test = (!(this.esta_ejecutando_test));
const codigo_original = this.test_de_componente;
const codigo_js = this.parseo_bloque_calo( `(async() {\n  try {\n    ${codigo_original}\n  } catch(error) {\n    this.mostrar_error(error, 'Error al «GuiTester.methods.iniciar_test»');\n  })()`,
"GuiTester.methods.iniciar_test():this.test_de_componente" );
const resultado = (await eval( codigo_js ));
this.$forceUpdate( true );
} catch(error) {
this.mostrar_error( error );}
},
filtrar_componentes:function( valor ) {try {
console.log('[DEBUG]', "GuiTester.methods.filtrar_componentes");
this.componentes_filtrados = Castelog.metodos.un_filtrado_por(valor, ( item ) => {try {
if(this.filtro_de_componentes.length === 0) {
return true;
}
return (!(( JSON.stringify(item, null, 2) ).toLowerCase(  ).indexOf( this.filtro_de_componentes.toLowerCase(  ) ) === 0 - 1));
} catch(error) {
console.log(error);
throw error;
}

}, null, null);
} catch(error) {
console.log(error);
throw error;
}

},
filtrar_componentes_abiertos:function( valor ) {try {
console.log('[DEBUG]', "GuiTester.methods.filtrar_componentes_abiertos");
this.componentes_abiertos_filtrados = Castelog.metodos.un_filtrado_por(valor, ( item ) => {try {
if(this.filtro_de_componentes_abiertos.length === 0) {
return true;
}
return (!(( JSON.stringify(item, null, 2) ).toLowerCase(  ).indexOf( this.filtro_de_componentes_abiertos.toLowerCase(  ) ) === 0 - 1));
} catch(error) {
console.log(error);
throw error;
}

}, null, null);
} catch(error) {
console.log(error);
throw error;
}

},
alternar_vista:function() {try {
console.log('[DEBUG]', "GuiTester.methods.alternar_vista");
this.esta_cargando_vista = true;
this.esta_mostrando_vista = (!(this.esta_mostrando_vista));
if(this.esta_mostrando_vista === true) {
clearTimeout( this.esta_cargando_vista_timeout_id );
this.esta_cargando_vista_timeout_id = setTimeout( () => {try {
this.esta_cargando_vista = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 0.28 );
this.esta_cargando_vista_en_porcentaje = 0;
setTimeout( () => {try {
this.esta_cargando_vista_en_porcentaje = 100;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
20 );
}
else {
this.esta_cargando_vista = true;
this.esta_cargando_vista_en_porcentaje = 0;
}
} catch(error) {
console.log(error);
throw error;
}

},
alternar_formulario:function() {try {
console.log('[DEBUG]', "GuiTester.methods.alternar_formulario");
this.esta_cargando_formulario = true;
this.esta_mostrando_formulario = (!(this.esta_mostrando_formulario));
if(this.esta_mostrando_formulario === true) {
clearTimeout( this.esta_cargando_formulario_timeout_id );
this.esta_cargando_formulario_timeout_id = setTimeout( () => {try {
this.esta_cargando_formulario = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 0.28 );
this.esta_cargando_formulario_en_porcentaje = 0;
setTimeout( () => {try {
this.esta_cargando_formulario_en_porcentaje = 100;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
20 );
}
else {
this.esta_cargando_formulario = true;
this.esta_cargando_formulario_en_porcentaje = 0;
}
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_pestania_de_bd:function( pestania_seleccionada ) {try {
console.log('[DEBUG]', "GuiTester.methods.seleccionar_pestania_de_bd");
this.esta_seleccionada_pestania_de_bd = pestania_seleccionada;
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_pestania_de_app:function( pestania_seleccionada ) {try {
console.log('[DEBUG]', "GuiTester.methods.seleccionar_pestania_de_app");
this.esta_seleccionada_pestania_de_app = pestania_seleccionada;
} catch(error) {
console.log(error);
throw error;
}

},
sanitizar_atributo:function( entrada ) {try {
console.log('[DEBUG]', "GuiTester.methods.sanitizar_atributo");
return entrada.replace( new RegExp( '\n',
"g" ),
"" ).replace( new RegExp( '"',
"g" ),
"&quot;" );
} catch(error) {
console.log(error);
throw error;
}

},
sanitizar_salida_generativa_calo:function( entrada ) {try {
console.log('[DEBUG]', "GuiTester.methods.sanitizar_salida_generativa_calo");
return entrada.replace( new RegExp( '^[\t\n\r ]*return ',
"g" ),
"" ).replace( new RegExp( ';[\t\n\r ]*$',
"g" ),
"" );
} catch(error) {
console.log(error);
throw error;
}

},
reducir_dom_abstracto_a_html:function( elementos_dom_abstractos ) {try {
console.log('[DEBUG]', "GuiTester.methods.reducir_dom_abstracto_a_html");
let elementos_dom_html = "";
for(let index = 0; index < elementos_dom_abstractos.length; index++) {const elemento_dom_abstracto = elementos_dom_abstractos[ index ];
const { tag, nombre, atributos, esta_seleccionado_modo, componentes, texto
} = elemento_dom_abstracto;
const tag_original = ( tag || nombre );
const tag_oficial = ( tag_original.startsWith( "<" ) ? tag_original.substr( 1,
tag_original.length - 2 ) : tag_original );
let elemento_dom_html = "";
elemento_dom_html += "<";
elemento_dom_html += tag_oficial;
for(let index_atributo = 0; index_atributo < atributos.length; index_atributo++) {const atributo = atributos[ index_atributo ];
const { clave, valor
} = atributo;
if(clave) {
elemento_dom_html += " ";
elemento_dom_html += clave;
elemento_dom_html += "=";
let valor_final = valor;
if(atributo.esta_en_calo) {
try {
valor_final = this.parseo_generativa_calo( valor );
} catch(error) {
console.log(error);
throw error;
}

}
else {
valor_final = valor;
}
elemento_dom_html += JSON.stringify( this.sanitizar_atributo( valor_final ) );
}}
elemento_dom_html += ">\n";
if(esta_seleccionado_modo === "texto") {
elemento_dom_html += texto;
}
else if(esta_seleccionado_modo === "componentes") {
elemento_dom_html += this.reducir_dom_abstracto_a_html( componentes );
}
elemento_dom_html += "\n</";
elemento_dom_html += tag_oficial;
elemento_dom_html += ">\n";
elementos_dom_html += elemento_dom_html;}
return elementos_dom_html;
} catch(error) {
console.log(error);
throw error;
}

},
parseo_bloque_calo:( bloque,
id ) => {try {
ultima_evaluacion = id;
return Castelog_parser.parse( bloque ).trim(  );
} catch(error) {
error.details = { id
};
throw error;}
},
parseo_generativa_calo:( bloque,
id ) => {try {
const retorno_token = new RegExp( "^[\r\t\n ]*return |;[\r\t\n ]*$",
"g" );
ultima_evaluacion = id;
return Castelog_parser.parse( "retorno " + bloque + "." ).trim(  ).replace( retorno_token,
"" );
} catch(error) {
error.details = { id
};
throw error;}
},
reducir_logica_a_funcion_de_componente:function() {try {
console.log('[DEBUG]', "GuiTester.methods.reducir_logica_a_funcion_de_componente");
let logica_source = "";
let sanitizado_script_de_precargar = this.parseo_bloque_calo( this.script_de_precargar,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(this.script_de_precargar)" );
let sanitizado_script_de_data = this.parseo_bloque_calo( this.script_de_data,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(this.script_de_data)" );
let ultima_evaluacion = undefined;
let sanitizado_script_de_props = ( this.script_de_props.length ? this.parseo_generativa_calo( this.script_de_props,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(props)" ) : "" );
let sanitizado_script_de_methods = ( this.script_de_methods.length ? this.parseo_generativa_calo( this.script_de_methods,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(methods)" ) : "" );
let sanitizado_script_de_watch = ( this.script_de_watch.length ? this.parseo_generativa_calo( this.script_de_watch,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(watch)" ) : "" );
let sanitizado_script_de_computed = ( this.script_de_computed.length ? this.parseo_generativa_calo( this.script_de_computed,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(computed)" ) : "" );
let sanitizado_script_de_beforeCreate = ( this.script_de_beforeCreate ? this.parseo_generativa_calo( this.script_de_beforeCreate,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(beforeCreate)" ) : "() => {}" );
let sanitizado_script_de_created = ( this.script_de_created ? this.parseo_generativa_calo( this.script_de_created,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(created)" ) : "() => {}" );
let sanitizado_script_de_beforeMount = ( this.script_de_beforeMount ? this.parseo_generativa_calo( this.script_de_beforeMount,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(beforeMount)" ) : "() => {}" );
let sanitizado_script_de_mounted = ( this.script_de_mounted ? this.parseo_generativa_calo( this.script_de_mounted,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(mounted)" ) : "() => {}" );
let sanitizado_script_de_beforeUpdate = ( this.script_de_beforeUpdate ? this.parseo_generativa_calo( this.script_de_beforeUpdate,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(beforeUpdate)" ) : "() => {}" );
let sanitizado_script_de_updated = ( this.script_de_updated ? this.parseo_generativa_calo( this.script_de_updated,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(updated)" ) : "() => {}" );
let sanitizado_script_de_beforeUnmount = ( this.script_de_beforeUnmount ? this.parseo_generativa_calo( this.script_de_beforeUnmount,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(beforeUnmount)" ) : "() => {}" );
let sanitizado_script_de_unmounted = ( this.script_de_unmounted ? this.parseo_generativa_calo( this.script_de_unmounted,
"GuiTester.methods.reducir_logica_a_funcion_de_componente(unmounted)" ) : "() => {}" );
if((!(sanitizado_script_de_precargar.length))) {
sanitizado_script_de_precargar = "";
}
if((!(sanitizado_script_de_props.length))) {
sanitizado_script_de_props = "{}";
}
if((!(sanitizado_script_de_data.length))) {
sanitizado_script_de_data = "return {}";
}
if((!(sanitizado_script_de_methods.length))) {
sanitizado_script_de_methods = "{}";
}
if((!(sanitizado_script_de_watch.length))) {
sanitizado_script_de_watch = "{}";
}
if((!(sanitizado_script_de_computed.length))) {
sanitizado_script_de_computed = "{}";
}
if((!(sanitizado_script_de_beforeCreate.length))) {
sanitizado_script_de_beforeCreate = "";
}
if((!(sanitizado_script_de_created.length))) {
sanitizado_script_de_created = "";
}
if((!(sanitizado_script_de_beforeMount.length))) {
sanitizado_script_de_beforeMount = "";
}
if((!(sanitizado_script_de_mounted.length))) {
sanitizado_script_de_mounted = "";
}
if((!(sanitizado_script_de_beforeUpdate.length))) {
sanitizado_script_de_beforeUpdate = "";
}
if((!(sanitizado_script_de_updated.length))) {
sanitizado_script_de_updated = "";
}
if((!(sanitizado_script_de_beforeUnmount.length))) {
sanitizado_script_de_beforeUnmount = "";
}
if((!(sanitizado_script_de_unmounted.length))) {
sanitizado_script_de_unmounted = "";
}
logica_source += sanitizado_script_de_precargar;
logica_source += "\nreturn {";
logica_source += "\n  props: ";
logica_source += sanitizado_script_de_props;
logica_source += ",\n  data: function() {";
logica_source += sanitizado_script_de_data;
logica_source += "\n  }";
logica_source += ",\n  methods: ";
logica_source += sanitizado_script_de_methods;
logica_source += ",\n  watch: ";
logica_source += sanitizado_script_de_watch;
logica_source += ",\n  computed: ";
logica_source += sanitizado_script_de_computed;
logica_source += ",\n  beforeCreate: ";
logica_source += sanitizado_script_de_beforeCreate;
logica_source += ",\n  created: ";
logica_source += sanitizado_script_de_created;
logica_source += ",\n  beforeMount: ";
logica_source += sanitizado_script_de_beforeMount;
logica_source += ",\n  mounted: ";
logica_source += sanitizado_script_de_mounted;
logica_source += ",\n  beforeUpdate: ";
logica_source += sanitizado_script_de_beforeUpdate;
logica_source += ",\n  updated: ";
logica_source += sanitizado_script_de_updated;
logica_source += ",\n  beforeUnmount: ";
logica_source += sanitizado_script_de_beforeUnmount;
logica_source += ",\n  unmounted: ";
logica_source += sanitizado_script_de_unmounted;
logica_source += "\n};";
console.log(logica_source);
const logica_funcion = new Function( logica_source );
return logica_funcion;
} catch(error) {
this.mostrar_error( error );}
},
reducir_estilos_a_texto:function() {try {
console.log('[DEBUG]', "GuiTester.methods.reducir_estilos_a_texto");
let estilos = undefined;
estilos = this.script_de_estilo;
return estilos;
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_pestania_de_navegacion_1:function( nuevo_estado ) {try {
console.log('[DEBUG]', "GuiTester.methods.seleccionar_pestania_de_navegacion_1");
this.esta_seleccionada_pestania_de_navegacion_1 = nuevo_estado;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_pestania_de_componente:function( nombre ) {try {
console.log('[DEBUG]', "GuiTester.methods.seleccionar_pestania_de_componente");
if(typeof nombre === 'string') {
if(this.componentes_abiertos.indexOf( nombre ) === 0 - 1) {
this.componentes_abiertos.push(nombre)
}
this.esta_editando_pestania = nombre;
}
this.esta_seleccionada_pestania_de_componente = nombre;
this.esta_seleccionada_pestania = "plantilla";
this.cargar_configuraciones_de_componente(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
cerrar_pestania_de_componente:function( nombre ) {try {
console.log('[DEBUG]', "GuiTester.methods.cerrar_pestania_de_componente");
const posicion_componente = this.componentes_abiertos.indexOf( nombre );
this.componentes_abiertos.splice( posicion_componente,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
renderizar_con_dilacion:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.renderizar_con_dilacion");
clearTimeout( this.renderizar_dilator_id );
this.renderizar_dilator_id = setTimeout( () => {try {
this.compilar_componente_de_test(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
this.renderizar_dilator_milisegundos );
} catch(error) {
console.log(error);
throw error;
}

},
abrir_dialogo_de_crear_atajo:async function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_atajo");
this.esta_abierto_dialogo_de_crear_atajo = true;
let nuevo_nombre = undefined;
let es_nombre_valido = false;
this.mensaje_de_error_de_crear_atajo = undefined;
while(!(es_nombre_valido)) {
this.nombre_de_crear_atajo = "";
const promesa_de_nombre = new Promise(( ok,
fail ) => {
try {
this.confirmar_dialogo_de_crear_atajo = ok;
this.cancelar_dialogo_de_crear_atajo = fail;
} catch(error) {
console.log(error);
throw error;
}
});
this.$forceUpdate( true );
nuevo_nombre = (await promesa_de_nombre);
const nombres_usados = this.atajos.map( function( item ) {try {
return item.nombre;
} catch(error) {
console.log(error);
throw error;
}

} );
if((!(nombres_usados.indexOf(nuevo_nombre) !== -1))) {
es_nombre_valido = true;
}
else {
this.mensaje_de_error_de_crear_atajo = "El nombre «" + nuevo_nombre + "» no está disponible como atajo.";
}
}
this.atajos.push({ nombre:nuevo_nombre,
contenido:""
})
this.esta_abierto_dialogo_de_crear_atajo = false;
this.guardar_atajos(  );
this.atajos = this.cargar_atajos(  );
this.$forceUpdate( true );
return nuevo_nombre;
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_crear_atajo = false;
this.mostrar_error( error );
this.$forceUpdate( true );}
},
abrir_dialogo_de_eliminar_componente:async function( nombre_de_componente ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_eliminar_componente");
let confirmacion = false;
this.componente_a_eliminar = nombre_de_componente;
this.esta_abierto_dialogo_de_eliminar_componente = true;
const promesa_de_confirmacion = new Promise(( ok,
fail ) => {
try {
this.confirmar_dialogo_de_eliminar_componente = ok;
this.cancelar_dialogo_de_eliminar_componente = fail;
} catch(error) {
console.log(error);
throw error;
}
});
confirmacion = (await promesa_de_confirmacion);
this.esta_abierto_dialogo_de_eliminar_componente = false;
let posicion_de_componente = 0 - 1;
for(let index = 0; index < this.componentes.length; index++) {const componente = this.componentes[ index ];
if(componente.nombre === this.componente_a_eliminar) {
posicion_de_componente = index;
}}
this.componentes.splice( posicion_de_componente,
1 );
this.guardar_componentes(  );
this.componentes = this.cargar_componentes(  );
this.mostrar_error( error );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_eliminar_componente = false;
this.$forceUpdate( true );}
},
abrir_dialogo_de_eliminar_atajo:async function( nombre_de_atajo ) {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_eliminar_atajo");
let confirmacion = false;
this.atajo_a_eliminar = nombre_de_atajo;
this.esta_abierto_dialogo_de_eliminar_atajo = true;
const promesa_de_confirmacion = new Promise(( ok,
fail ) => {
try {
this.confirmar_dialogo_de_eliminar_atajo = ok;
this.cancelar_dialogo_de_eliminar_atajo = fail;
} catch(error) {
console.log(error);
throw error;
}
});
confirmacion = (await promesa_de_confirmacion);
this.esta_abierto_dialogo_de_eliminar_atajo = false;
let posicion_de_atajo = 0 - 1;
for(let index = 0; index < this.atajos.length; index++) {const atajo = this.atajos[ index ];
if(atajo.nombre === this.atajo_a_eliminar) {
posicion_de_atajo = index;
}}
this.atajos.splice( posicion_de_atajo,
1 );
this.guardar_atajos(  );
this.atajos = this.cargar_atajos(  );
this.$forceUpdate( true );
return true;
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_eliminar_atajo = false;
this.mostrar_error( error );
this.$forceUpdate( true );
return false;}
},
abrir_dialogo_de_crear_componente:async function() {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_componente");
this.esta_abierto_dialogo_de_crear_componente = true;
let nuevo_nombre = undefined;
let es_nombre_valido = false;
this.mensaje_de_error_de_nuevo_componente = undefined;
recopilar_datos:
while(!(es_nombre_valido)) {
this.nombre_de_nuevo_componente = "";
const promesa_de_nombre = new Promise(( ok,
fail ) => {
try {
this.resolver_dialogo_de_nuevo_componente = ok;
this.cancelar_dialogo_de_nuevo_componente = fail;
} catch(error) {
console.log(error);
throw error;
}
});
this.$forceUpdate( true );
nuevo_nombre = (await promesa_de_nombre);
const nombres_usados = this.componentes.map( function( item ) {try {
return item.nombre;
} catch(error) {
console.log(error);
throw error;
}

} );
if(( (!(typeof nuevo_nombre === 'string')) ) || ( nuevo_nombre === "" )) {
this.mensaje_de_error_de_nuevo_componente = "El nombre del componente no puede estar vacío.";
continue recopilar_datos;
}
else if(nombres_usados.indexOf(nuevo_nombre) !== -1) {
this.mensaje_de_error_de_nuevo_componente = "El nombre «" + nuevo_nombre + "» no está disponible.";
continue recopilar_datos;
}
else {
es_nombre_valido = true;
}
}
this.componentes.push(new Fichero_de_componente( nuevo_nombre ))
this.esta_abierto_dialogo_de_crear_componente = false;
this.guardar_componentes(  );
this.componentes = this.cargar_componentes(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_crear_componente = false;
if((!(typeof error === 'undefined'))) {
this.mostrar_error( error );
}
this.$forceUpdate( true );}
},
abrir_dialogo_de_crear_componente_por_prototipo:async function() {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_componente_por_prototipo");
this.esta_abierto_dialogo_de_crear_componente_por_prototipo = true;
let nuevo_nombre = undefined;
let viejo_prototipo = undefined;
let es_nombre_valido = false;
let es_prototipo_valido = false;
this.mensaje_de_error_de_nuevo_componente = undefined;
this.nombre_de_viejo_componente_por_prototipo = "";
recopilar_datos:
while(!(es_nombre_valido && es_prototipo_valido)) {
this.nombre_de_nuevo_componente_por_prototipo = "";
const promesa_de_nombre_y_prototipo = new Promise(( ok,
fail ) => {
try {
this.resolver_dialogo_de_nuevo_componente_por_prototipo = ok;
this.cancelar_dialogo_de_nuevo_componente_por_prototipo = fail;
} catch(error) {
console.log(error);
throw error;
}
});
nombre_y_prototipo = (await promesa_de_nombre_y_prototipo);
nuevo_nombre = nombre_y_prototipo[ 0 ];
viejo_prototipo = nombre_y_prototipo[ 1 ];
const nombres_usados = this.componentes.map( function( item ) {try {
return item.nombre;
} catch(error) {
console.log(error);
throw error;
}

} );
if(( (!(typeof nuevo_nombre === 'string')) ) || ( nuevo_nombre === "" )) {
this.mensaje_de_error_de_nuevo_componente_por_prototipo = "El nombre del componente no puede estar vacío.";
continue recopilar_datos;
}
else if(nombres_usados.indexOf(nuevo_nombre) !== -1) {
this.mensaje_de_error_de_nuevo_componente_por_prototipo = "El nombre de componente «" + nuevo_nombre + "» no está disponible.";
continue recopilar_datos;
}
else {
es_nombre_valido = true;
}
if(( (!(typeof viejo_prototipo === 'string')) ) || ( viejo_prototipo === "" )) {
this.mensaje_de_error_de_nuevo_componente_por_prototipo = "El prototipo no puede estar vacío.";
continue recopilar_datos;
}
else if((!(nombres_usados.indexOf(viejo_prototipo) !== -1))) {
this.mensaje_de_error_de_nuevo_componente_por_prototipo = "El prototipo «" + viejo_prototipo + "» no está identificado.";
continue recopilar_datos;
}
else {
es_prototipo_valido = true;
}
}
const componente_por_prototipo = new Fichero_de_componente( nuevo_nombre );
const componente_original = Object.assign({ 
}, this.componentes.filter( ( item ) => {try {
return item.nombre === viejo_prototipo;
} catch(error) {
console.log(error);
throw error;
}

} )[ 0 ] );
const componente_copia = Object.assign({ 
}, componente_original || JSON.parse(JSON.stringify({ 
}, null, 2)) );
delete componente_copia.uuid;
Object.assign(componente_por_prototipo, componente_copia );
componente_por_prototipo.nombre = nuevo_nombre;
this.componentes.push(componente_por_prototipo)
this.esta_abierto_dialogo_de_crear_componente_por_prototipo = false;
this.guardar_componentes(  );
this.componentes = this.cargar_componentes(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_crear_componente_por_prototipo = false;
if((!(typeof error === 'undefined'))) {
this.mostrar_error( error );
}
this.$forceUpdate( true );}
},
abrir_dialogo_de_crear_componente_por_url:async function() {try {
console.log('[DEBUG]', "GuiTester.methods.abrir_dialogo_de_crear_componente");
this.esta_abierto_dialogo_de_crear_componente_por_url = true;
let url_objetivo = undefined;
this.mensaje_de_error_de_nuevo_componente_por_url = undefined;
this.nombre_de_nuevo_componente_por_url = "";
const promesa_de_nombre = new Promise(( ok,
fail ) => {
try {
this.resolver_dialogo_de_nuevo_componente_por_url = ok;
this.cancelar_dialogo_de_nuevo_componente_por_url = fail;
} catch(error) {
console.log(error);
throw error;
}
});
this.$forceUpdate( true );
url_objetivo = (await promesa_de_nombre);
this.esta_abierto_dialogo_de_crear_componente_por_url = false;
this.guardar_componentes(  );
this.componentes = this.cargar_componentes(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.esta_abierto_dialogo_de_crear_componente_por_url = false;
if((!(typeof error === 'undefined'))) {
this.mostrar_error( error );
}
this.$forceUpdate( true );}
},
guardar_componentes:function() {try {
console.log('[DEBUG]', "GuiTester.methods.guardar_componentes");
const almacen_uuid = 'gui_tester_componentes_' + this.uuid;
const componentes_json = JSON.stringify(this.componentes, null, 2);
localStorage[ almacen_uuid ] = componentes_json;
return componentes_json;
} catch(error) {
console.log(error);
throw error;
}

},
cargar_componentes:function() {try {
console.log('[DEBUG]', "GuiTester.methods.cargar_componentes");
const almacen_uuid = 'gui_tester_componentes_' + this.uuid;
const componentes = ( () => {
try {
return JSON.parse( localStorage[ almacen_uuid ] );
} catch(error) {
this.mostrar_error( error );
this.guardar_componentes(  );
return JSON.parse( localStorage[ almacen_uuid ] );}})();
return componentes;
} catch(error) {
console.log(error);
throw error;
}

},
guardar_apps:function() {try {
console.log('[DEBUG]', "GuiTester.methods.guardar_apps");
const almacen_uuid = 'gui_tester_apps_' + this.uuid;
const apps_json = JSON.stringify(this.apps, null, 2);
localStorage[ almacen_uuid ] = apps_json;
return apps_json;
} catch(error) {
console.log(error);
throw error;
}

},
cargar_apps:function() {try {
console.log('[DEBUG]', "GuiTester.methods.cargar_apps");
const almacen_uuid = 'gui_tester_apps_' + this.uuid;
const apps = ( () => {
try {
return JSON.parse( localStorage[ almacen_uuid ] );
} catch(error) {
this.mostrar_error( error );
this.guardar_apps(  );
return JSON.parse( localStorage[ almacen_uuid ] );}})();
return apps;
} catch(error) {
console.log(error);
throw error;
}

},
guardar_atajos:function() {try {
console.log('[DEBUG]', "GuiTester.methods.guardar_atajos");
const almacen_uuid = 'gui_tester_atajos_' + this.uuid;
const atajos_json = JSON.stringify(this.atajos, null, 2);
localStorage[ almacen_uuid ] = atajos_json;
return atajos_json;
} catch(error) {
console.log(error);
throw error;
}

},
cargar_atajos:function() {try {
console.log('[DEBUG]', "GuiTester.methods.cargar_atajos");
const almacen_uuid = 'gui_tester_atajos_' + this.uuid;
const atajos = ( () => {
try {
return JSON.parse( localStorage[ almacen_uuid ] );
} catch(error) {
this.mostrar_error( error );
this.guardar_atajos(  );
return JSON.parse( localStorage[ almacen_uuid ] );}})();
return atajos;
} catch(error) {
console.log(error);
throw error;
}

},
guardar_configuraciones_de_componente:function(  ) {try {
console.log('[DEBUG]', "GuiTester.methods.guardar_configuraciones_de_componente");
const configuraciones = { elementos:this.elementos,
documentacion_de_componente:this.documentacion_de_componente,
elementos_de_formulario:this.elementos_de_formulario,
esta_seleccionado_en_pre_cargar:this.esta_seleccionado_en_pre_cargar,
esta_seleccionado_en_propiedades:this.esta_seleccionado_en_propiedades,
esta_seleccionado_en_metodos:this.esta_seleccionado_en_metodos,
esta_seleccionado_en_datos:this.esta_seleccionado_en_datos,
esta_seleccionado_en_datos_observados:this.esta_seleccionado_en_datos_observados,
esta_seleccionado_en_datos_computados:this.esta_seleccionado_en_datos_computados,
esta_seleccionado_en_pre_crear:this.esta_seleccionado_en_pre_crear,
esta_seleccionado_en_post_crear:this.esta_seleccionado_en_post_crear,
esta_seleccionado_en_pre_montar:this.esta_seleccionado_en_pre_montar,
esta_seleccionado_en_post_montar:this.esta_seleccionado_en_post_montar,
esta_seleccionado_en_pre_actualizar:this.esta_seleccionado_en_pre_actualizar,
esta_seleccionado_en_post_actualizar:this.esta_seleccionado_en_post_actualizar,
esta_seleccionado_en_pre_desmontar:this.esta_seleccionado_en_pre_desmontar,
esta_seleccionado_en_post_desmontar:this.esta_seleccionado_en_post_desmontar,
script_de_estilo:this.script_de_estilo,
script_de_precargar:this.script_de_precargar,
script_de_data:this.script_de_data,
script_de_methods:this.script_de_methods,
script_de_data:this.script_de_data,
script_de_watch:this.script_de_watch,
script_de_computed:this.script_de_computed,
script_de_beforeCreate:this.script_de_beforeCreate,
script_de_created:this.script_de_created,
script_de_beforeMount:this.script_de_beforeMount,
script_de_mounted:this.script_de_mounted,
script_de_beforeUpdate:this.script_de_beforeUpdate,
script_de_updated:this.script_de_updated,
script_de_beforeUnmount:this.script_de_beforeUnmount,
script_de_unmounted:this.script_de_unmounted
};
const almacen_uuid = 'gui_tester_componentes_' + this.uuid;
const componentes = ( () => {
try {
return JSON.parse( localStorage[ almacen_uuid ] );
} catch(error) {
this.mostrar_error( error );
this.guardar_configuraciones_de_componente(  );
return JSON.parse( localStorage[ almacen_uuid ] );}})();
for(let index = 0; index < componentes.length; index++) {if(componentes[ index ].nombre === this.esta_seleccionada_pestania_de_componente) {
Object.assign(componentes[ index ], { configuraciones
} );
const compo = componentes[ index ];
Castelog.metodos.un_componente_vue2(compo.nombre,
  "compo.plantilla",
  null,
  null);
}}
const componentes_json = JSON.stringify(componentes, null, 2);
localStorage[ almacen_uuid ] = componentes_json;
} catch(error) {
console.log(error);
throw error;
}

},
cargar_configuraciones_de_componente:function() {try {
console.log('[DEBUG]', "GuiTester.methods.cargar_configuraciones_de_componente");
const almacen_uuid = 'gui_tester_componentes_' + this.uuid;
const componentes = ( () => {
try {
return JSON.parse( localStorage[ almacen_uuid ] );
} catch(error) {
this.mostrar_error( error );
this.guardar_configuraciones_de_componente(  );
return JSON.parse( localStorage[ almacen_uuid ] );}})();
let componente = { configuraciones:{ 
}
};
for(let index = 0; index < componentes.length; index++) {if(componentes[ index ].nombre === this.esta_seleccionada_pestania_de_componente) {
componente = componentes[ index ];
Object.assign(this, componente.configuraciones );
this.$forceUpdate( true );
}}
return componente.configuraciones;
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);