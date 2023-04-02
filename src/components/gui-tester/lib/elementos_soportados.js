
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