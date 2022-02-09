# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

## Algoritmo

1. Recorro cada linea del archivo csv
1. Guardo los elementos importantes en un objeto
1. En ese objeto, las keys serán los ids de cada producto
1. Luego, cuando ya todos los productos están en el objeto, escribo todo en el archivo csv
1. Mientras lo escribo, calculo el CTR

Decidí que los datos leidos se guardaran en un objeto ya que de esta manera cada producto tendría solo una key en dicho objeto. Esto permite rellenar el objeto con mayor facilidad, ya que no hace falta revisar que sea unico.
También puse el calculo de ctr en la parte de escritura, ya que si lo ponía en la parte de lectura, ese calculo se habría efectuado más veces de las necesarias.