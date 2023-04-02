[ ] En Componentes......

[x] Rehacer las páginas principales para matchear la nueva navegación
[x] Gestión de errores por badges (no windows)
[x] Los placeholders de las secciones de lógica de componente (calo y calogens)
[x] Diálogo de nuevo componente prototípico que despliegue selector de componente
[x] Diálogo de nuevo componente basado en URL (apuntaría a un JSON o directamente a un calo)
[ ] Botón de VER o EDITAR abajo derecha en componente > editar > plantilla > documentación.
[ ] Incorporar estilos en el método del ciclo de vida "pre-cargar" o "beforeMount" 
    [ ] que se inyecte como tag pero solo 1 vez
[ ] Que test inicie un mensaje por el textarea, y que reciba el elemento para poder:
    [ ] imprimir más.
    [ ] liberar el botón.
[ ] Fase 2 del Formulario: "Formulario compilado"
    [ ] Nuevo título/sección
    [ ] Nuevo componente generado por el objeto (entonces árbol dom) o string (entonces texto de marcado) devuelto por el método 'obtener_formulario()"

--- y daríamos por acabado el COMPONENTES ---

[ ] pestaña de conexiones a bd:
    [ ] lista de botones de todas las apps
        [ ] cada una con botón de configurar para editar nombre
        [ ] cada una con botón de eliminar
        [ ] al final 1 botón de añadir
        [ ] cuando clicas a eliminar, salta un diálogo
        [ ] cuando clicas a configurar, salta un diálogo
        [ ] cuando clicas al elemento de la lista, te lleva a la estructura
[ ] pestaña de estructura de bd:
    [ ] árbol donde:
        [ ] listo propiedades globales
        [ ] listo procedimientos (queries + código)
        [ ] listo tablas
        [ ] cuando clicas en la tabla, te lleva a la información de esa tabla
            [ ] listo propiedades de tabla
            [ ] listo columnas de tabla
                [ ] listo propiedades de columna de tabla
[ ] pestaña de información de tabla de bd:
    [ ] árbol donde:
        [ ] buscador + filtros + orden + paginación
        [ ] tabla con resultados
        [ ] widget de paginación


[ ] En Lógica que marque los métodos y propiedades editados
    [ ] Con un tipo badget tipicamente

[ ] En Apps......
[ ] Que funcione el roadmap bien
    [ ] Con otra propiedad accesible que marque hasta donde te puedes mover
[ ] Que la página de Rutas:
    [ ] permita mapear propiedades de ruta (incluido componente) a lista en configuraciones.apps[app]
    [ ] y las vaya listando configurablemente
[ ] Que la página de Traducciones:
    [ ] permita mapear fichero json (por texto o por fichero) a strings de i18next
    [ ] permita visualizar las traducciones absorvidas
[ ] Que la página de Componentes:
    [ ] liste los componentes en uso detectados (recursivamente averiguado)
[ ] Que la página de Ficheros:
    [ ] permita subir ficheros y ponerles un nombre
    [ ] al JSZip
    [ ] para empaquetar luego
[ ] Que la página de Descargas:
    [ ] permita descargar un ZIP mediante JSZip
        [ ] para entorno 100% web
        [ ] para entorno shellver desktop app
            [ ] permite empaquetar .exe usando pkg
            [ ] no hace npm install (pero instalaría el shellver y el pkg)
            [ ] no hace npm compile (pero buildearía el .exe)

Cuando todo esto esté, empezaremos a testear la aplicación creando aplicaciones de ejemplo.
Sobre todo: no server apps. Desktop apps y tipo shellver solamente.
