
const mx5 = function( arg1 ) {try {
return arg1 * 5;
} catch(error) {
console.log(error);
throw error;
}

};
const dx2 = function( arg1 ) {try {
return arg1 / 2;
} catch(error) {
console.log(error);
throw error;
}

};
const resultado1 = Castelog.metodos.pasandole(mx5, [ 20,
30,
40 ]);
const resultado2 = Castelog.metodos.pasado_por([ 20,
30,
40 ], mx5);
const resultado3 = Castelog.metodos.pasandole([ mx5,
dx2 ], [ 20,
30,
40 ]);
const resultado4 = Castelog.metodos.pasado_por([ 20,
30,
40 ], [ mx5,
dx2 ]);
if(!(resultado1 === 100)) throw new Error("Error en fichero [-] en posición [329-371=6:55-7:42] cuando: " + "compruebo que resultado1 es igual que 100");
if(!(resultado2 === 100)) throw new Error("Error en fichero [-] en posición [372-414=7:43-8:42] cuando: " + "compruebo que resultado2 es igual que 100");
if(!(resultado3 === 50)) throw new Error("Error en fichero [-] en posición [415-456=8:43-9:41] cuando: " + "compruebo que resultado3 es igual que 50");
if(!(resultado4 === 50)) throw new Error("Error en fichero [-] en posición [457-498=9:42-10:41] cuando: " + "compruebo que resultado4 es igual que 50");
Castelog.metodos.pasandole(function( a,
b ) {try {
return a + b;
} catch(error) {
console.log(error);
throw error;
}

}, [ 5,
5 ]);
Castelog.metodos.un_testeo(1 * 1000, "Componente xxx", [ "Componente xxx tiene titulo" ], undefined, undefined);
Castelog.metodos.un_test("Componente xxx tiene titulo", async () => {
if(!(Castelog.metodos.una_seleccion_del_primer_elemento_del_dom(( ".titulo_de_componente_xxx" ), document.body).classList.has( "titulo" ))) throw new Error("Error en fichero [-] en posición [750-863=19:5-19:118] cuando: " + "compruebo que una selección del primer elemento del dom con (\".titulo_de_componente_xxx\").classList.has(\"titulo\")");
}, undefined, undefined, undefined);