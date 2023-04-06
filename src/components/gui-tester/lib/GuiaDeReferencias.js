
window.ir_a_referencia = function() {
};
GuiaDeReferencias = Castelog.metodos.un_componente_vue2("GuiaDeReferencias",
  "<div>"
 + "        <div class=\"titulo_de_componente\"> 🪟 Documentación</div>"
 + "        <div style=\"padding-top:6px;padding-bottom:6px;text-align:right;\">"
 + "            <span> 🔗 </span>"
 + "            <span>"
 + "                <a href=\"https://github.com/allnulled/constructor-de-apps-de-castelog\" target=\"_blank\">"
 + "                    Abrir documentación del proyecto"
 + "                </a>"
 + "            </span>"
 + "        </div>"
 + "        <template v-if=\"referencia_abierta && Object.keys(referencias).length\">"
 + "            <hr />"
 + "            <div v-for=\"(referencia, referencia_index) in referencias\" v-bind:key=\"'referencia-numero-' + referencia_index\">"
 + "                <div v-if=\"referencia_abierta === referencia_index\">"
 + "                    <div class=\"horizontal_layout\" v-if=\"referencia_index !== 'Basica.html'\" style=\"padding-bottom: 4px; border-bottom:1px solid #333;\">"
 + "                        <button v-on:click=\"() => $window.ir_a_referencia('Basica.html')\">Volver</button>"
 + "                    </div>"
 + "                    <div class=\"guia_de_referencia\" style=\"padding:6px;\" v-html=\"referencia\"></div>"
 + "                </div>"
 + "            </div>"
 + "        </template>"
 + "        <template v-else>"
 + "            <div role=\"progressbar\" class=\"marquee\">"
 + "                <div style=\"width: 70%\"></div>"
 + "            </div>"
 + "        </template>"
 + "    </div>",
  function(component) {return { data() {try {
return { urls:[ "./components/gui-tester/lib/ReferenciaBasica.html",
"./components/gui-tester/lib/ReferenciaDeXhr2.html",
"./components/gui-tester/lib/ReferenciaDeAxios.html",
"./components/gui-tester/lib/ReferenciaDeEjs.html",
"./components/gui-tester/lib/ReferenciaDeJQuery.html",
"./components/gui-tester/lib/ReferenciaDeSortableJS.html",
"./components/gui-tester/lib/ReferenciaDeVueDraggable.html",
"./components/gui-tester/lib/ReferenciaDeI18Next.html",
"./components/gui-tester/lib/ReferenciaDeWin7Css.html",
"./components/gui-tester/lib/ReferenciaDeVue.html",
"./components/gui-tester/lib/ReferenciaDeVueRouter.html",
"./components/gui-tester/lib/ReferenciaDeVueI18Next.html",
"./components/gui-tester/lib/ReferenciaDeSimplestDB.html",
"./components/gui-tester/lib/ReferenciaDeRanasDB.html",
"./components/gui-tester/lib/ReferenciaDeRest.html",
"./components/gui-tester/lib/ReferenciaDeCastelog.html",
"./components/gui-tester/lib/ReferenciaDeHtml.html",
"./components/gui-tester/lib/ReferenciaDeCss.html",
"./components/gui-tester/lib/ReferenciaDeBrowserJs.html",
"./components/gui-tester/lib/ReferenciaDeNodeJs.html",
"./components/gui-tester/lib/ReferenciaDeSocketIO.html",
"./components/gui-tester/lib/ReferenciaDeShellver.html" ],
referencia_abierta:"Basica.html",
referencias:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
async mounted() {try {
for(let index = 0; index < this.urls.length; index++) {const url = this.urls[ index ];
const respuesta = (await Castelog.metodos.una_peticion_http(url, "GET", { 
}, { 
}, null, null));
const referencia_id = url.replace( "/components/gui-tester/lib/Referencia",
"" );
console.log(referencia_id);
this.referencias[ referencia_id ] = respuesta.data;}
window.ir_a_referencia = ( referencia ) => {try {
this.referencia_abierta = referencia;
console.log(this.referencia_abierta);
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

};
this.$forceUpdate( true );
} catch(error) {
console.log(error);}
}
};},
  null);