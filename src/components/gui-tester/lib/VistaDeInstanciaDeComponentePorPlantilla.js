
window.VistaDeInstanciaDeComponentePorPlantilla = Castelog.metodos.un_componente_vue2("VistaDeInstanciaDeComponentePorPlantilla",
  "<div class=\"VistaDeInstanciaDeComponentePorPlantilla\">"
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
plantillaInicial:{ type:String,
required:true
},
logicaInicial:{ type:Function,
default:function() {try {
return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
};
} catch(error) {
console.log(error);
throw error;
}

}
},
estilosIniciales:{ type:String,
default:""
},
esElementoUnico:{ type:Boolean,
default:function() {try {
return false;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.data");
return { esta_mostrando_componente:true,
esta_ejecutando_test:false,
plantilla_de_componente:this.plantillaInicial,
logica_de_componente:this.logicaInicial,
estilos_de_componente:this.estilosIniciales,
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
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.methods.renderizar_con_dilacion");
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
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.methods.mostrar_error");
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
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.methods.compilar_componente_de_test");
let nombre_de_componente = this.nombreDeComponente;
this.esta_mostrando_componente = false;
const elementos_dom_html = this.plantilla_de_componente;
const logica_de_componente = this.logica_de_componente;
const estilos_de_componente = this.estilos_de_componente;
this.plantilla_resultado_interno = ( this.esElementoUnico ? elementos_dom_html : "<div>\n\n" + elementos_dom_html + "\n\n</div>" );
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
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.methods.descompilar_componente_de_test");
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
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.mounted");
this.compilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

},
unmounted() {try {
console.log('[DEBUG]', "VistaDeInstanciaDeComponentePorPlantilla.unmounted");
this.descompilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);