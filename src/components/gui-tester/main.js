
// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Atributo_de_elemento_usado.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Atributo_de_elemento_usado.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.Atributo_de_elemento_usado = class { constructor(){ console.log('[DEBUG]', "Atributo_de_elemento_usado.constructor");
this.uuid = Castelog.metodos.un_texto_aleatorio(10, undefined);
this.clave = "";
this.valor = "";
this.esta_editando = false; }
};
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Atributo_de_elemento_usado.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Atributo_de_elemento_usado.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Elemento_usado.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Elemento_usado.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Elemento_usado.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Elemento_usado.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/elementos_soportados.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/elementos_soportados.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.quitar_claves_rombo = function( clave ) {try {
console.log('[DEBUG]', "quitar_claves_rombo");
return clave.replace( new RegExp( "<",
"g" ),
"" ).replace( new RegExp( ">",
"g" ),
"" );
} catch(error) {
console.log(error);
throw error;
}

};
window.ordenar_y_adaptar_elementos_soportados = function( objeto ) {try {
console.log('[DEBUG]', "ordenar_y_adaptar_elementos_soportados");
const claves_base = ( Array.isArray(objeto) ? objeto.map( function( item ) {try {
return item.tag || item.nombre;
} catch(error) {
console.log(error);
throw error;
}

} ) : Object.keys( objeto ) );
const claves_ordenadas = ( claves_base ).sort( function( a,
b ) {try {
const a_starts_as_elem = a.startsWith( "<" );
const b_starts_as_elem = b.startsWith( "<" );
if(a_starts_as_elem && (!(b_starts_as_elem))) {
return 1;
}
else if((!(a_starts_as_elem)) && b_starts_as_elem) {
return 0 - 1;
}
const a_id = a.toLowerCase(  );
const b_id = b.toLowerCase(  );
if(a_id < b_id) {
return 0 - 1;
}
else if(b_id < a_id) {
return 1;
}
return 0;
} catch(error) {
console.log(error);
throw error;
}

} );
const salida = { 
};
ordenar: {
for(let index = 0; index < claves_ordenadas.length; index++) {const clave_ordenada = claves_ordenadas[ index ];
const valor_ordenado = objeto[ clave_ordenada ];
salida[ clave_ordenada ] = valor_ordenado;}}

const salida_final = [  ];
adaptar: {
for(let index = 0; index < claves_ordenadas.length; index++) {const clave = claves_ordenadas[ index ];
const valor = salida[ clave ];
const elemento = new Elemento_usado(  );
elemento.tag = clave;
elemento.nombre = clave;
salida_final.push(elemento)}}

return salida_final;
} catch(error) {
console.log(error);
throw error;
}

};
window.elementos_soportados = ordenar_y_adaptar_elementos_soportados( { "<address>":0,
"<article>":0,
"<aside>":0,
"<footer>":0,
"<header>":0,
"<h1>":0,
"<h2>":0,
"<h3>":0,
"<h4>":0,
"<h5>":0,
"<h6>":0,
"<main>":0,
"<nav>":0,
"<section>":0,
"<blockquote>":0,
"<dd>":0,
"<div>":0,
"<dl>":0,
"<dt>":0,
"<figcaption>":0,
"<figure>":0,
"<hr>":0,
"<li>":0,
"<menu>":0,
"<ol>":0,
"<p>":0,
"<pre>":0,
"<ul>":0,
"<a>":0,
"<abbr>":0,
"<b>":0,
"<bdi>":0,
"<bdo>":0,
"<br>":0,
"<cite>":0,
"<code>":0,
"<data>":0,
"<dfn>":0,
"<em>":0,
"<i>":0,
"<kbd>":0,
"<mark>":0,
"<q>":0,
"<rp>":0,
"<rt>":0,
"<ruby>":0,
"<s>":0,
"<samp>":0,
"<small>":0,
"<span>":0,
"<strong>":0,
"<sub>":0,
"<sup>":0,
"<time>":0,
"<u>":0,
"<var>":0,
"<wbr>":0,
"<area>":0,
"<audio>":0,
"<img>":0,
"<map>":0,
"<track>":0,
"<video>":0,
"<embed>":0,
"<iframe>":0,
"<object>":0,
"<picture>":0,
"<portal>":0,
"<source>":0,
"<svg>":0,
"<math>":0,
"<canvas>":0,
"<noscript>":0,
"<script>":0,
"<del>":0,
"<ins>":0,
"<caption>":0,
"<col>":0,
"<colgroup>":0,
"<table>":0,
"<tbody>":0,
"<td>":0,
"<tfoot>":0,
"<th>":0,
"<thead>":0,
"<tr>":0,
"<button>":0,
"<datalist>":0,
"<fieldset>":0,
"<form>":0,
"<input>":0,
"<label>":0,
"<legend>":0,
"<meter>":0,
"<optgroup>":0,
"<option>":0,
"<output>":0,
"<progress>":0,
"<select>":0,
"<textarea>":0,
"<details>":0,
"<dialog>":0,
"<summary>":0,
"<slot>":0,
"<template>":0,
"<component>":0
} );
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/elementos_soportados.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/elementos_soportados.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Fichero_de_componente.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Fichero_de_componente.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.Fichero_de_componente = class { constructor( componente ){ console.log('[DEBUG]', "Fichero_de_componente.constructor");
this.uuid = Castelog.metodos.un_texto_aleatorio(10, undefined);
this.nombre = componente;
this.plantilla = [  ];
this.logica = { 
};
this.estilos = ""; }
};
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Fichero_de_componente.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/Fichero_de_componente.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EditorDeInstanciaDeComponente.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EditorDeInstanciaDeComponente.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.EditorDeInstanciaDeComponente = Castelog.metodos.un_componente_vue2("EditorDeInstanciaDeComponente",
  "<div class=\"EditorDeInstanciaDeComponente\">"
 + "    <div>"
 + "      <div class=\"panel_de_elementos horizontal_layout\">"
 + "        <div class=\"lista_de_elementos_usados w_100\">"
 + "          <div v-if=\"!esta_en_elemento_raiz\">"
 + "            <button class=\"w_100\" v-on:click=\"() => agregar_elemento_usado()\">➕ Añadir elemento</button>"
 + "          </div>"
 + "          <div>"
 + "            <draggable :list=\"elementos_usados\" handle=\".dragger\" tag=\"table\">"
 + "              <tbody class=\"w_100\" v-for=\"elemento_usado, elemento_usado_index in elementos_usados\" v-bind:key=\"'elemento-usado-barra-vistazo-' + elemento_usado.uuid\">"
 + "                <tr>"
 + "                  <td>"
 + "                    <table class=\"w_100\">"
 + "                      <tbody>"
 + "                        <tr>"
 + "                          <td v-if=\"!esta_en_elemento_raiz\">"
 + "                            <button class=\"boton_de_icono active dragger\">☰</button>"
 + "                          </td>"
 + "                          <td class=\"w_100\">"
 + "                            <button class=\"w_100 caja_de_componente\" :class=\"{active:elemento_usado.esta_editando}\" v-on:click=\"() => alternar_edicion_de_elemento_usado(elemento_usado_index)\">"
 + "                              {{ elemento_usado.nombre || elemento_usado.tag }}"
 + "                            </button>"
 + "                          </td>"
 + "                          <td>"
 + "                            <button class=\"boton_de_icono\" :class=\"{active:elemento_usado.esta_seleccionada_busqueda_de_componente}\" v-on:click=\"(evento) => alternar_busqueda_de_componente(elemento_usado, evento)\">"
 + "                            🔍"
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
 + "                <tr v-if=\"elemento_usado.esta_seleccionada_busqueda_de_componente\">"
 + "                  <td colspan=\"1000\">"
 + "                    <SelectorDeComponenteDeGuiBuilder"
 + "                      :acceso-de-texto-de-busqueda=\"{}\""
 + "                      accesor-de-texto-de-busqueda=\"busqueda\""
 + "                      :acceso-de-componentes-seleccionados=\"elemento_usado\""
 + "                      accesor-de-componentes-seleccionados=\"tag\""
 + "                      :al-seleccionar=\"() => esconder_busqueda_de_componente(elemento_usado)\""
 + "                      :opciones=\"[].concat(elementos_soportados, tester.componentes)\""
 + "                      posicion=\"relative\""
 + "                      :desplegado=\"true\">"
 + "                    </SelectorDeComponenteDeGuiBuilder>"
 + "                  </td>"
 + "                </tr>"
 + "                <tr v-if=\"elemento_usado && elemento_usado.esta_editando\" v-bind:key=\"'elemento-usado-barra-esta_editando-' + (elemento_usado ? elemento_usado.uuid : elemento_usado_index)\">"
 + "                  <td colspan=\"1000\">"
 + "                    <div class=\"separacion_de_subelementos\">"
 + "                      <section class=\"tabs\">"
 + "                        <menu role=\"tablist\">"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'atributos'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'atributos'\"><span class=\"texto_de_icono\">"
 + "                          📎 </span></button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'componentes'; elemento_usado.esta_seleccionado_modo = 'componentes'; actualizar_interfaz_de_usuario(); }\"  :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'componentes'\" :class=\"{disabled:elemento_usado.esta_seleccionado_modo !== 'componentes'}\">"
 + "                          🌲 <span class=\"texto_de_icono\"></span></button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'texto'; elemento_usado.esta_seleccionado_modo = 'texto'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'texto'\" :class=\"{disabled:elemento_usado.esta_seleccionado_modo !== 'texto'}\">"
 + "                          📝 <span class=\"texto_de_icono\"></span></button>"
 + "                          <button role=\"tab\" style=\"visibility:hidden;width:100%;\"></button>"
 + "                          <button role=\"tab\" v-on:click=\"() => { elemento_usado.esta_seleccionada_pestania = 'atajos'; actualizar_interfaz_de_usuario(); }\" :aria-selected=\"elemento_usado.esta_seleccionada_pestania === 'atajos'\"><span class=\"texto_de_icono\">"
 + "                          🌀 </span></button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre && tester.elemento_en_copia\" v-on:click=\"() => { pegar_elemento(elemento_usado) }\"><span class=\"texto_de_icono\">"
 + "                          📋 </span></button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre\" v-on:click=\"() => { cortar_elemento(elemento_usado) }\">"
 + "                          ✂️ <span class=\"texto_de_icono\"></span></button>"
 + "                          <button role=\"tab\" v-if=\"elementoPadre\" v-on:click=\"() => { copiar_elemento(elemento_usado) }\">"
 + "                          📃 <span class=\"texto_de_icono\"></span></button>"
 + "                        </menu>"
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
 + "                        <article class=\"nopad\" role=\"tabpanel\"  v-if=\"elemento_usado.esta_seleccionada_pestania === 'componentes'\">"
 + "                          <EditorDeInstanciaDeComponente :tester=\"tester\" :elementos-iniciales=\"elemento_usado.componentes\" :elemento-padre=\"elemento_usado\" />"
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EditorDeInstanciaDeComponente.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EditorDeInstanciaDeComponente.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/SelectorDeComponenteDeGuiBuilder.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/SelectorDeComponenteDeGuiBuilder.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/SelectorDeComponenteDeGuiBuilder.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/SelectorDeComponenteDeGuiBuilder.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/VistaDeInstanciaDeComponente.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV1.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV1.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.EstiloShellverGuiConsoleSpecificationV1 = Castelog.metodos.una_insercion_de_estilos_en_cascada("shellver-gui-console-specification-v1", ( ".GuiTester textarea {\n        text-shadow: 0 0 2px white;\n        resize: vertical;\n    }\n    .GuiTester input[type=\"range\"] {\n      border: none;\n    }\n    .win7 table {\n        background-color: #ffffff;\n        color: black;\n        border-collapse: collapse;\n    }\n    .win7 table td {\n\n    }\n    .win7 table td.active {\n        border: 3px solid #111;\n    }\n    .win7 table td,\n    .win7 table {\n        border: 1px solid #d8d8e8;\n    }\n    .win7 div[role=\"progressbar\"] > div {\n      transition: width .2s;\n    }\n    .text_align_center { text-align: center; }\n    .GuiTester .roadmap_list {\n      list-style-type: none;\n      margin: 0px;\n      padding: 0px;\n      \n    }\n    .GuiTester .roadmap_list .roadmap_item {\n      margin-bottom:10px;\n      position: relative;\n    }\n    .GuiTester .roadmap_list .roadmap_item_bar_container {\n      display: block;\n      position: relative;\n      z-index: 1000;\n    }\n    .GuiTester .roadmap_list .roadmap_item_bar {\n      position: absolute;\n      top: 9px;\n      left: 6px;\n      right: 0px;\n      height: 100%;\n      width: 3px;\n      background-color: #EFEFEF;\n    }\n    .GuiTester .roadmap_list .field-row {\n      display: block;\n      position: relative;\n      z-index: 2000;\n    }\n    .GuiTester .roadmap_list .roadmap_item.active .roadmap_item_bar {\n      background-color: #196590;\n    }\n    .GuiTester .roadmap_list .roadmap_item.active.selected .field-row input[type=\"radio\"]:checked + label::after {\n      background: #0F8 !important;\n      box-shadow: inset -1px -1px 0 .5px #0F8, inset -1px -1px 0 1px #0F8 !important;\n      opacity: 1;\n    }\n    .win7.GuiTester .roadmap_list input[type=\"radio\"]:disabled + label {\n      opacity: 1;\n    }\n" ));
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV1.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV1.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV2.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV2.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.EstiloShellverGuiConsoleSpecificationV2 = Castelog.metodos.una_insercion_de_estilos_en_cascada("shellver-gui-tester-specification-v2", ( ".GuiTester .panel_de_elementos {\n      position: relative;\n    }\n    .GuiTester .lista_de_elementos_soportados {\n    }\n    .GuiTester .lista_de_elementos_usados {\n      \n    }\n    .GuiTester .horizontal_layout {\n      display: flex;\n      flex-direction: row;\n    }\n    .GuiTester ul,li {\n    }\n    .GuiTester .w_100 {\n      width: 100%;\n    }\n    .GuiTester .w_auto {\n      min-width: 8px;\n      width: auto;\n    }\n    .GuiTester table {\n      border-collapse: collapse;\n    }\n    .GuiTester td {\n      vertical-align: top;\n    }\n    .GuiTester th {\n      text-align: left;\n      background-color: #333;\n      color: white;\n      padding: 8px;\n      border-left: 3px solid #CCC;\n      min-width: 30px;\n    }\n    .GuiTester textarea {\n      background-color: default;\n      color: default;\n    }\n    .GuiTester .nopad {\n      padding: 1px;\n    }\n    .GuiTester .noshow {\n      display: none;\n    }\n    .GuiTester .nowrap {\n      white-space: nowrap;\n    }\n    .win7 select {\n      padding: 3px !important;\n    }\n    .win7 .draggable {\n      cursor: grab;\n    }\n    .win7.GuiTester td,\n    .win7.GuiTester table {\n      border: 0px none #333 !important;\n    }\n    .win7 [role=\"tabpanel\"] {\n      border: 1px solid #8e8f8f;\n      box-shadow: 0 0 3px black;\n      padding: 2px;\n    }\n    win7 [role=\"button\"].disabled, .win7 button.disabled {\n      background: #f4f4f4;\n      border-color: #aeb2b5;\n      border-color: #aeb2b5;\n    }\n    .win7 menu[role=\"tablist\"] button.disabled {\n      opacity: 0.6;\n    }\n    .EditorDeInstanciaDeComponente table {\n      width: 100%;\n\n    }\n    .EditorDeInstanciaDeComponente button,\n     select {\n      font-size: 10px !important;\n    }\n    .win7.GuiTester button,\n    .win7.GuiTester textarea,\n    .win7.GuiTester input,\n    .win7.GuiTester select {\n      min-width: 20px;\n      min-height: 20px;\n      height: auto;\n      font-size: 9px !important;\n      padding: 2px;\n    }\n    .win7 [role=\"tabpanel\"] {\n      margin-bottom: 0px;\n    }\n    .win7 span.texto_de_icono {\n      font-size: 9px;\n    }\n    .win7.GuiTester textarea.editor_de_codigo {\n      min-height: 160px !important;\n    }\n    .win7.GuiTester a {\n      color: blue !important;\n      text-decoration: underline !important;\n      cursor: pointer !important;\n    }\n    .win7 .dialog_window {\n      position: absolute;\n      top: 4px;\n      z-index: 9999;\n      left: 4px;\n      bottom: auto;\n      right: 4px;\n    }\n    .win7 .dialog_window > .window-body {\n      overflow: scroll;\n    }\n    .mensaje_de_error {\n      color: #900;\n      font-size: 9px !important;\n    }\n    .win7 .separacion_de_subelementos {\n      border-left: 0px solid #333;\n      margin-left: 0px;\n      padding-left: 0px;\n      margin-top: 0px;\n      padding-top:1px;\n    }\n    .win7 .texto_pequenio {\n      font-size: 10px !important;\n    }\n    .win7.GuiTester .boton_de_roadmap {\n      z-index:9999;\n    }\n    .win7 .disabled {\n      user-select : none;\n      -moz-user-select : none;\n      -webkit-user-select : none;\n      color: gray;\n      cursor: pointer;\n    }\n    .win7 .titulo_de_componente {\n      background-color: #333;\n      color: white;\n      padding: 8px;\n      font-size: 9px;\n      margin-bottom: 3px; \n       background: rgb(2,0,36);\n       background: linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(57,70,108,1) 5%, rgba(139,175,217,1) 67%); \n       box-shadow: inset 1px 0px 0px #333, inset 0px 1px 0px #333,inset -1px 0px 0px #333, inset 0px -1px 0px #333;\n    }\n    .win7 .caja_de_componente {\n      \n    }\n    .win7 .caja_de_componente.selected {\n      \n    }\n    .win7 .window footer, .win7 .window-footer{\n      padding: 4px;\n    }\n    .win7 .title-bar .title-bar-text,\n    .win7 .window-body {\n      font-size: 9px;\n    }\n    .win7 {\n      font-size: 9px;\n    }\n    .win7 ul.tree-view {\n      font-size: 9px;\n    }\n    .win7 .panel_de_busqueda_de_componente {\n      background: #FFFC;\n      padding: 1px;\n      box-shadow: 0 0 4px black;\n      border: 1px solid #DDD;\n      border-radius: 2pt;\n      overflow: hidden;\n    }\n    .win7 .panel_de_busqueda_de_componente.posicion_absoluta {\n      position: absolute;\n      top: auto;\n      z-index: 9999;\n      right: 0;\n      left: 0;\n      background: #FFFC;\n      padding: 1px;\n      box-shadow: 0 0 4px black;\n      border: 1px solid #DDD;\n      border-radius: 2pt;\n      overflow: hidden;\n    }\n    .win7 details > summary {\n      margin-left:15px;\n    }\n    .win7 ul.tree-view {\n      padding: 0px;\n    }\n    .win7 ul.tree-view ul {\n      padding-left: 10px;\n    }\n    .win7 .window.error_window {\n      opacity: 1;\n    }\n    .win7 .window.error_window::before,\n    .win7 .window.error_window .title-bar {\n      background: linear-gradient(90deg, hsla(0, 0%, 100%, .4), rgba(0, 0, 0, .1), hsla(0, 0%, 100%, .2)), linear-gradient(55deg, transparent, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, .1) 50%, transparent 53%), #660404;\n    }\n    .win7 .window.error_window .window-body {\n      background-color: #181c41;\n      color: yellow;\n      text-shadow: 0.2px 0.2px 1px black;\n      padding: 2px;\n    }\n    .win7 .window.error_window .window-body .codigo {\n      font-family: monospace;\n      font-size:7px;\n      color: #0F0;\n      padding-top:10px;\n      padding-bottom:10px;\n      padding:2px;\n      background-color:#111;\n      border: 1px solid silver;\n      white-space: pre-wrap;\n      white-space: -moz-pre-wrap;\n      white-space: -pre-wrap;\n      white-space: -o-pre-wrap;\n      word-wrap: break-word;\n    }\n    .win7 .item_de_error {\n      padding:5px;\n    }\n    .win7 .error_window_box {\n      position: relative;\n    }\n    .win7 .error_window_box .error_window {\n      position: fixed;\n      top: auto;\n      left: 4px;\n      right: 4px;\n      bottom: 4px;\n      z-index:9999;\n      opacity: 0.9;\n    }\n    .win7 .error_window_box .error_window:hover {\n      opacity: 1;\n    }\n    .win7 .guia_de_referencia h1,\n    .win7 .guia_de_referencia h2,\n    .win7 .guia_de_referencia h3,\n    .win7 .guia_de_referencia h4,\n    .win7 .guia_de_referencia h5,\n    .win7 .guia_de_referencia h6 {\n      font-size: 10px;\n    }\n    .win7 .guia_de_referencia pre {\n      background-color: #333;\n      color: white;\n    }\n    .win7 ul.tree-view.has-container,\n    .win7 table,\n    .win7 .window-body,\n    .win7 [role=\"tabpanel\"] {\n      \n    }\n\n\n\n\n\n" ));
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV2.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/EstiloShellverGuiConsoleSpecificationV2.js");


// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/GuiaDeReferencias.js
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/GuiaDeReferencias.js:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
        
window.ir_a_referencia = function() {
};
GuiaDeReferencias = Castelog.metodos.un_componente_vue2("GuiaDeReferencias",
  "<div>"
 + "        <div class=\"titulo_de_componente\"> 🪟 Documentación</div>"
 + "        <template v-if=\"referencia_abierta && Object.keys(referencias).length\">"
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
return { urls:[ "/components/gui-tester/lib/ReferenciaBasica.html",
"/components/gui-tester/lib/ReferenciaDeXhr2.html",
"/components/gui-tester/lib/ReferenciaDeAxios.html",
"/components/gui-tester/lib/ReferenciaDeEjs.html",
"/components/gui-tester/lib/ReferenciaDeJQuery.html",
"/components/gui-tester/lib/ReferenciaDeSortableJS.html",
"/components/gui-tester/lib/ReferenciaDeVueDraggable.html",
"/components/gui-tester/lib/ReferenciaDeI18Next.html",
"/components/gui-tester/lib/ReferenciaDeWin7Css.html",
"/components/gui-tester/lib/ReferenciaDeVue.html",
"/components/gui-tester/lib/ReferenciaDeVueRouter.html",
"/components/gui-tester/lib/ReferenciaDeVueI18Next.html",
"/components/gui-tester/lib/ReferenciaDeSimplestDB.html",
"/components/gui-tester/lib/ReferenciaDeRanasDB.html",
"/components/gui-tester/lib/ReferenciaDeRest.html",
"/components/gui-tester/lib/ReferenciaDeCastelog.html",
"/components/gui-tester/lib/ReferenciaDeHtml.html",
"/components/gui-tester/lib/ReferenciaDeCss.html",
"/components/gui-tester/lib/ReferenciaDeBrowserJs.html",
"/components/gui-tester/lib/ReferenciaDeNodeJs.html",
"/components/gui-tester/lib/ReferenciaDeSocketIO.html",
"/components/gui-tester/lib/ReferenciaDeShellver.html" ],
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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/GuiaDeReferencias.js" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/lib/GuiaDeReferencias.js");

// [castelog:modulo] [origen:] /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/GuiTester.calo
(function(factory_original, filename, metadata) {
    try {
        const require_ = (typeof require === "function") ? require : function(id) { return ((typeof(require) === 'function') ? require : (...args) => {
    return Castelog.metodos.un_modulo_importado(id, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www");
})(id);
};
        const module_ = (typeof module !== "undefined") ? module : { exports:undefined };
        const __filename_ = filename;
        const fileparts = filename.split("/");
        fileparts.pop();
        const __dirname_ = fileparts.join("/");
        const factory = (require_, module_, ...others) => {
            const output1 = factory_original(require_, module_, ...others);
            const output2 = module_.exports;
            const output = (typeof(output1) !== "undefined") ? output1 : output2;
            const name = module_.__castelog_module_name__ ? module_.__castelog_module_name__ : filename;
            return { output, name };
        };
        const { output, name } = factory(require_, module_, __dirname_, __filename_);
        const envs = [];
        if(typeof window !== "undefined") {
            window[name] = output;
            envs.push("window[" + JSON.stringify(name) + "]"); 
        }
        if(typeof global !== "undefined") {
            global[name] = output;
            envs.push("global[" + JSON.stringify(name) + "]"); 
        }
        if((typeof(Castelog) !== "undefined")
        && (typeof(Castelog.metodos) !== "undefined")
        && (typeof(Castelog.metodos.un_modulo_exportado) === "function")) {
            Castelog.metodos.un_modulo_exportado(name, output, factory, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester", "/home/carlos/Escritorio/Nuevo2/semillas/semillas-grow-barato.items/www" );
            envs.push("Castelog.modulos[" + JSON.stringify(name) + "].value"); 
        }
        // console.log("Exportado módulo calo " + JSON.stringify(name) + " en:\n  - " + envs.join("\n  - "));
    } catch(error) {
        console.error("Error en la exportación del módulo /home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/GuiTester.calo:", error);
        throw error;
    }
})(function(require, module, __filename, __dirname) {
    try {
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
 + "          <div style=\"padding:2px;padding-top:4px;\">"
 + "            <section class=\"tabs\">"
 + "              <menu role=\"tablist\">"
 + "                <button :class=\"{disabled: typeof esta_seleccionada_pestania_de_componente === 'string'}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_componente === 0\" v-on:click=\"() => { seleccionar_pestania_de_componente(0); }\">"
 + "                  ✱ <span class=\"texto_de_icono\"></span>"
 + "                </button>"
 + "                <button :class=\"{disabled: typeof esta_seleccionada_pestania_de_componente === 'string'}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_componente === 2\" v-on:click=\"() => { seleccionar_pestania_de_componente(2); }\">"
 + "                  📂 <span class=\"texto_de_icono\"></span>"
 + "                </button>"
 + "                <button :class=\"{disabled: typeof esta_seleccionada_pestania_de_componente === 'string'}\" role=\"tab\" :aria-selected=\"esta_seleccionada_pestania_de_componente === 1\" v-on:click=\"() => { seleccionar_pestania_de_componente(1); }\">"
 + "                  ❓ <span class=\"texto_de_icono\"></span>"
 + "                </button>"
 + "                <button role=\"tab\" :aria-selected=\"typeof esta_seleccionada_pestania_de_componente === 'string'\" v-if=\"typeof esta_editando_pestania === 'string'\" style=\"max-width:80px;overflow:hidden;\" :title=\"esta_editando_pestania\" v-on:click=\"() => { seleccionar_pestania_de_componente(esta_editando_pestania) }\">"
 + "                  <span class=\"texto_de_icono\" style=\"display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:'...';max-width:70px;text-align:center;width:100%;\">{{ esta_editando_pestania }}</span>"
 + "                </button>"
 + "              </menu>"
 + "            </section>"
 + "            <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_componente === 1\">"
 + "              <GuiaDeReferencias ref=\"guia_de_referencias\" />"
 + "            </article>"
 + "            <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_componente === 0\">"
 + "              <div class=\"titulo_de_componente\">Disponibles: <b>{{ componentes.length }}</b></div>"
 + "              <div class=\"horizontal_layout\" style=\"justify-content: space-between;margin-bottom:1px;\">"
 + "                <button class=\"nowrap\" style=\"flex-grow: 1;\" v-on:click=\"() => abrir_dialogo_de_crear_componente()\"><span style=\"font-size:7px;\"></span>📄 Nuevo</button>"
 + "                <button class=\"nowrap\" style=\"flex-grow: 1; margin-left:2px;\" v-on:click=\"() => abrir_dialogo_de_crear_componente_por_prototipo()\"><span style=\"font-size:7px;\"></span>📄»📄 Prototipo</button>"
 + "                <button class=\"nowrap\" style=\"flex-grow: 1; margin-left:2px;\" v-on:click=\"() => abrir_dialogo_de_crear_componente_por_url()\"><span style=\"font-size:7px;\"></span>🌐»📄 URL</button>"
 + "                <button class=\"nowrap\" style=\"flex-grow: 1; margin-left:2px;\" v-on:click=\"() => abrir_dialogo_de_crear_componente_por_fichero()\"><span style=\"font-size:7px;\"></span>💻»📄 Fichero</button>"
 + "              </div>"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente disponible\" v-model=\"filtro_de_componentes\" style=\"margin-bottom:1px;\"/>"
 + "              <div class=\"horizontal_layout\" v-for=\"componente, componente_index in componentes_filtrados\" v-bind:key=\"'componente_disponible_' + componente_index\">"
 + "                <template v-if=\"componente.nombre\">"
 + "                  <button class=\"w_100 nopad\" v-on:click=\"() => seleccionar_pestania_de_componente(componente.nombre)\">{{ componente.nombre }}</button>"
 + "                  <button class=\"w_auto nopad nowrap\" style=\"margin-left:2px;\" v-on:click=\"() => abrir_dialogo_de_eliminar_componente(componente.nombre)\">"
 + "                    ❌ <span>Eliminar</span>"
 + "                  </button>"
 + "                </template>"
 + "              </div>"
 + "            </article>"
 + "            <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania_de_componente === 2\">"
 + "              <div class=\"titulo_de_componente\">Abiertos: <b>{{ componentes_abiertos.length }}</b></div>"
 + "              <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente abierto\" v-model=\"filtro_de_componentes_abiertos\" />"
 + "              <table class=\"w_100\">"
 + "                <tbody v-for=\"componente_nombre, componente_index in componentes_abiertos_filtrados\" v-bind:key=\"'componente_abierto_' + componente_index\">"
 + "                  <tr v-if=\"componente_nombre\">"
 + "                    <td class=\"w_100\">"
 + "                      <button class=\"w_100 nopad\" v-on:click=\"() => seleccionar_pestania_de_componente(componente_nombre)\">"
 + "                        {{ componente_nombre }}"
 + "                      </button>"
 + "                    </td>"
 + "                    <td class=\"w_auto\">"
 + "                      <button class=\"w_auto nopad nowrap\" v-on:click=\"() => cerrar_pestania_de_componente(componente_nombre)\">"
 + "                        ❌ <span>Cerrar</span>"
 + "                      </button>"
 + "                    </td>"
 + "                  </tr>"
 + "                </tbody>"
 + "              </table>"
 + "            </article>"
 + "            <article role=\"tabpanel\" class=\"nopad\" v-if=\"typeof esta_seleccionada_pestania_de_componente === 'string'\">"
 + "              <div class=\"titulo_de_componente\">Editando: <b>{{ esta_editando_pestania }}</b></div>"
 + "              <section class=\"tabs\">"
 + "                <menu role=\"tablist\">"
 + "                  <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'vista'\" v-on:click=\"() => { esta_seleccionada_pestania = 'vista'; $forceUpdate(true); }\">🖥 <span class=\"texto_de_icono\">Vista</span></button>"
 + "                  <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'plantilla'\" v-on:click=\"() => { esta_seleccionada_pestania = 'plantilla'; $forceUpdate(true); }\">⭐ <span class=\"texto_de_icono\">Plantilla</span></button>"
 + "                  <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'logica'\" v-on:click=\"() => { esta_seleccionada_pestania = 'logica'; $forceUpdate(true); }\">💡 <span class=\"texto_de_icono\">Lógica</span></button>"
 + "                  <button role=\"tab\" :aria-selected=\"esta_seleccionada_pestania === 'estilos'\" v-on:click=\"() => { esta_seleccionada_pestania = 'estilos'; $forceUpdate(true); }\">🎨 <span class=\"texto_de_icono\">Estilos</span></button>"
 + "                </menu>"
 + "                <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'plantilla'\">"
 + "                  <ul class=\"tree-view \">"
 + "                    <li>"
 + "                      <details open>"
 + "                        <summary>"
 + "                          <span>En vista:</span>"
 + "                        </summary>"
 + "                        <div>"
 + "                          <EditorDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos\" :es-elemento-raiz=\"true\" />"
 + "                        </div>"
 + "                      </details>"
 + "                    </li>"
 + "                    <li>"
 + "                      <details>"
 + "                        <summary>"
 + "                          <span>En formulario:</span>"
 + "                        </summary>"
 + "                        <div>"
 + "                          <EditorDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos_de_formulario\" :es-elemento-raiz=\"true\" />"
 + "                        </div>"
 + "                      </details>"
 + "                    </li>"
 + "                    <li>"
 + "                      <details>"
 + "                        <summary>"
 + "                          <span>En test:</span>"
 + "                        </summary>"
 + "                        <div>"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"test_de_componente\" :placeholder=\"placeholder_de_test_de_componente\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                    </li>"
 + "                    <li>"
 + "                      <details>"
 + "                        <summary>"
 + "                          <span>En documentación:</span>"
 + "                        </summary>"
 + "                        <div style=\"position:relative;\" v-if=\"esta_editando_documentacion\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"documentacion_de_componente\" placeholder=\"Texto de documentación\"></textarea>"
 + "                          <div style=\"position:absolute;bottom:auto;right:4px;left:auto;top:4px;\">"
 + "                            <button v-on:click=\"alternar_editando_documentacion\">Ver</button>"
 + "                          </div>"
 + "                        </div>"
 + "                        <div v-else style=\"position:relative;min-height:162px;border:3px double #333;\">"
 + "                          <div style=\"padding:4px;\">"
 + "                            <VistaDeInstanciaDeComponentePorPlantilla :tester=\"this\" :plantilla-inicial=\"documentacion_de_componente\" />"
 + "                          </div>"
 + "                          <div style=\"position:absolute;bottom:auto;right:4px;left:auto;top:4px;\">"
 + "                            <button v-on:click=\"alternar_editando_documentacion\">Editar</button>"
 + "                          </div>"
 + "                        </div>"
 + "                      </details>"
 + "                    </li>"
 + "                  </ul>"
 + "                </article>"
 + "                <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'vista'\">"
 + "                  <div>"
 + "                    <div class=\"titulo_de_componente\">Panel de control:</div>"
 + "                    <button class=\"\" v-on:click=\"alternar_vista\" :class=\"{active:esta_mostrando_vista}\">Componente</button>"
 + "                    <button class=\"\" v-on:click=\"alternar_formulario\" :class=\"{active:esta_mostrando_formulario}\">Formulario</button>"
 + "                    <button class=\"\" v-on:click=\"iniciar_test\" :disabled=\"esta_ejecutando_test\">Test</button>"
 + "                    <button class=\"\" v-on:click=\"exportar_componente\">Exportar</button>"
 + "                  </div>"
 + "                  <div v-if=\"esta_cargando_vista\">"
 + "                    <hr/>"
 + "                    <div role=\"progressbar\" class=\"animate\" style=\"position:relative;\">"
 + "                      <div :style=\"'width:' + esta_cargada_vista_en_porcentaje + '%'\"></div>"
 + "                      <span style=\"font-size:10px;color: white;text-shadow:0 0 1px white;position:absolute;top:0;left:0;right:0;text-align:center;\">Cargando componente de «{{ esta_editando_pestania }}»</span>"
 + "                    </div>"
 + "                  </div>"
 + "                  <div v-else-if=\"esta_mostrando_vista\">"
 + "                    <hr/>"
 + "                    <div class=\"titulo_de_componente\">Vista de componente:</div>"
 + "                    <VistaDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos\" />"
 + "                  </div>"
 + "                  <div v-if=\"esta_mostrando_formulario\">"
 + "                    <hr/>"
 + "                    <div class=\"titulo_de_componente\">Formulario de componente:</div>"
 + "                    <div v-if=\"esta_cargando_formulario\">"
 + "                      <div role=\"progressbar\" class=\"animate\" style=\"position:relative;\">"
 + "                        <div :style=\"'width:' + esta_cargando_formulario_en_porcentaje + '%'\"></div>"
 + "                        <span style=\"font-size:10px;color: white;text-shadow:0 0 1px white;position:absolute;top:0;left:0;right:0;text-align:center;\">Cargando formulario de «{{ esta_editando_pestania }}»</span>"
 + "                      </div>"
 + "                    </div>"
 + "                    <VistaDeInstanciaDeComponente :tester=\"this\" :elementos-iniciales=\"elementos_de_formulario\" v-else />"
 + "                  </div>"
 + "                  <div v-if=\"esta_ejecutando_test\">"
 + "                    <hr/>"
 + "                    <div class=\"titulo_de_componente\">Test de componente:</div>"
 + "                    <textarea class=\"w_100\" disabled v-model=\"salida_de_test_de_componente\"></textarea>"
 + "                  </div>"
 + "                </article>"
 + "                <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'estilos'\">"
 + "                  <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_estilo\" placeholder=\".mi_clase { color: blue; }\"></textarea>"
 + "                </article>"
 + "                <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'logica'\">"
 + "                  <ul class=\"tree-view has-container\">"
 + "                    <li>"
 + "                      <details :open=\"esta_seleccionado_en_pre_cargar\">"
 + "                        <summary>En pre-cargar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_precargar\" placeholder=\"hago asíncronamente this.cargar_datos().\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_propiedades\">"
 + "                        <summary>En propiedades:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_props\" :placeholder=\"placeholder_de_script_de_props\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_metodos\">"
 + "                        <summary>En métodos:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_methods\" :placeholder=\"placeholder_de_script_de_methods\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_datos\">"
 + "                        <summary>En datos:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_data\" :placeholder=\"placeholder_de_script_de_data\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_datos_observados\">"
 + "                        <summary>En datos observados:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_watch\" :placeholder=\"placeholder_de_script_de_watch\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_datos_computados\">"
 + "                        <summary>En datos computados:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_computed\" :placeholder=\"placeholder_de_script_de_computed\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_pre_crear\">"
 + "                        <summary>En pre-crear:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeCreate\" :placeholder=\"placeholder_de_script_de_beforeCreate\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_post_crear\">"
 + "                        <summary>En post-crear:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_created\" :placeholder=\"placeholder_de_script_de_created\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_pre_montar\">"
 + "                        <summary>En pre-montar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeMount\" :placeholder=\"placeholder_de_script_de_beforeMount\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_post_montar\">"
 + "                        <summary>En post-montar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_mounted\" :placeholder=\"placeholder_de_script_de_mounted\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_pre_actualizar\">"
 + "                        <summary>En pre-actualizar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeUpdate\" :placeholder=\"placeholder_de_script_de_beforeUpdate\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_post_actualizar\">"
 + "                        <summary>En post-actualizar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_updated\" :placeholder=\"placeholder_de_script_de_updated\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_pre_desmontar\">"
 + "                        <summary>En pre-desmontar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_beforeUnmount\" :placeholder=\"placeholder_de_script_de_beforeUnmount\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                      <details :open=\"esta_seleccionado_en_post_desmontar\">"
 + "                        <summary>En post-desmontar:</summary>"
 + "                        <div style=\"position:relative;\">"
 + "                          <textarea class=\"w_100 editor_de_codigo\" v-model=\"script_de_unmounted\" :placeholder=\"placeholder_de_script_de_unmounted\"></textarea>"
 + "                        </div>"
 + "                      </details>"
 + "                    </li>"
 + "                  </ul>"
 + "                </article>"
 + "                <article role=\"tabpanel\" class=\"nopad\" v-if=\"esta_seleccionada_pestania === 'componentes'\">"
 + "                  <table class=\"w_100\">"
 + "                    <tbody>"
 + "                      <tr>"
 + "                        <td class=\"w_100\">"
 + "                          <input class=\"w_100\" type=\"text\" placeholder=\"Buscar componente...\"/>"
 + "                        </td>"
 + "                        <td class=\"w_auto\">"
 + "                          <button class=\"boton_de_icono\">🔎</button>"
 + "                        </td>"
 + "                      </tr>"
 + "                    </tbody>"
 + "                  </table>"
 + "                  <div v-if=\"componentes && componentes.length\">"
 + "                    <table class=\"w_100\">"
 + "                      <thead>"
 + "                        <tr>"
 + "                          <th>Orden</th>"
 + "                          <th>Nombre</th>"
 + "                        </tr>"
 + "                      </thead>"
 + "                      <tbody>"
 + "                        <tr>"
 + "                          <td class=\"w_auto nowrap text_align_center\">1</td>"
 + "                          <td class=\"w_100 nowrap\">Raíz</td>"
 + "                        </tr>"
 + "                      </tbody>"
 + "                      <tbody>"
 + "                        <tr>"
 + "                          <td class=\"w_auto nowrap text_align_center\">2</td>"
 + "                          <td class=\"w_100 nowrap\">Subir</td>"
 + "                        </tr>"
 + "                      </tbody>"
 + "                      <tbody v-for=\"(componente, componente_index) in componentes\" v-bind:key=\"'componente-de-componente-' + componente_index\">"
 + "                        <tr>"
 + "                          <td class=\"w_auto nowrap text_align_center\">"
 + "                            {{ componente_index + 1 + 2 }}"
 + "                          </td>"
 + "                          <td class=\"w_100 nowrap\">"
 + "                            {{ componente.nombre }}"
 + "                          </td>"
 + "                        </tr>"
 + "                      </tbody>"
 + "                    </table>"
 + "                  </div>"
 + "                  <div v-else>"
 + "                    <p style=\"text-align: center;\">No se encontraton componentes actualmente.</p>"
 + "                  </div>"
 + "                  <footer>"
 + "                    "
 + "                  </footer>"
 + "                </article>"
 + "              </section>"
 + "            </article>"
 + "          </div>"
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
exportar_componente:function() {try {
this.$window.alert( "No disponible todavia" );
} catch(error) {
console.log(error);
throw error;
}

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
    } catch(error) {
        console.error('Hubo errores al cargar el fichero ' + "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/GuiTester.calo" + ':', error);
        throw error;
    }
}, "/home/carlos/Escritorio/Nuevo2/gui-builder/src/components/gui-tester/GuiTester.calo");