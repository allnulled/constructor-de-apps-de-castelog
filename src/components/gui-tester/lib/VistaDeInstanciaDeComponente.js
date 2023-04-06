
window.VistaDeInstanciaDeComponente = Castelog.metodos.un_componente_vue2("VistaDeInstanciaDeComponente",
  "<div class=\"VistaDeInstanciaDeComponente\">"
 + "    <div v-if=\"esta_mostrando_componente\">"
 + "      <component v-bind:is=\"'GuiTesterTesterItem' + uuid\"></component>"
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
tester:{ type:Object,
required:true
},
elementosIniciales:{ type:Array,
required:true
}
},
data() {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.data");
return { esta_mostrando_componente:true,
esta_ejecutando_test:false,
elementos_usados:this.elementosIniciales,
plantilla_calo_interna:"",
plantilla_js_interna:"",
plantilla_resultado_interno:"",
renderizar_dilator_id:undefined,
renderizar_dilator_milisegundos:3 * 1000,
cerrar_error_dilator_id:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ renderizar_con_dilacion:function(  ) {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.methods.renderizar_con_dilacion");
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
mostrar_error:async function( error ) {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.methods.mostrar_error");
clearTimeout( this.cerrar_error_dilator_id );
this.error = error;
this.cerrar_error_dilator_id = setTimeout( () => {try {
this.error = undefined;
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
compilar_componente_de_test:async function(  ) {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.methods.compilar_componente_de_test");
let nombre_de_componente = false;
if(this.tester.esta_editando_pestania) {
nombre_de_componente = this.tester.esta_editando_pestania;
}
this.esta_mostrando_componente = false;
const elementos_dom_abstractos = this.elementos_usados;
const es_singular = elementos_dom_abstractos.length === 1;
const elementos_dom_html = this.tester.reducir_dom_abstracto_a_html( elementos_dom_abstractos );
const logica_de_componente = this.tester.reducir_logica_a_funcion_de_componente(  );
const estilos_de_componente = this.tester.reducir_estilos_a_texto(  );
this.plantilla_resultado_interno = ( es_singular ? elementos_dom_html : "<div>\n\n" + elementos_dom_html + "\n\n</div>" );
/////////////////////////
// Ignorado por Castelog:
// const codigo_calo = this.plantilla_resultado_interno;
// this.plantilla_js_interna = Castelog_parser.parse( "retorno un código en html con {" + codigo_calo + "}." );
// const codigo_js = "(function(){" + this.plantilla_js_interna + "})()";
// this.plantilla_resultado_interno = this.$window.eval( codigo_js );

if(nombre_de_componente) {
console.log("[+] Componente: " + nombre_de_componente);
}
else {
console.log("[+] Componente no especificado...");
}
console.log("[+] Componente: " + 'GuiTesterTesterItem' + this.uuid);
console.log("   [+] Plantilla final:");
console.log(this.plantilla_resultado_interno);
console.log("   [+] Lógica final:");
console.log(logica_de_componente);
console.log("   [+] Estilo final:");
console.log(estilos_de_componente);
const componente_configuracion = Object.assign(logica_de_componente(  ), { template:this.plantilla_resultado_interno,
style:estilos_de_componente,
style_scoped:true
} );
if(nombre_de_componente) {
vue.component( nombre_de_componente,
componente_configuracion );
}
vue.component( 'GuiTesterTesterItem' + this.uuid,
componente_configuracion );
this.esta_mostrando_componente = true;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
this.esta_mostrando_componente = true;
this.mostrar_error( error );}
},
descompilar_componente_de_test:function(  ) {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.methods.descompilar_componente_de_test");
delete vue.options.components[ 'GuiTesterTesterItem' + this.uuid ];
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
mounted() {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.mounted");
this.compilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

},
unmounted() {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponente.unmounted");
this.descompilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);