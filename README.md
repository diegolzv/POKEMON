
<img src="https://todasgamers.com/wp-content/uploads/2019/09/Banner.png" alt="mundo pokemon">
<a>🌟 Aplicación Pokemon creada en nestjs</a>


<a>Conceptos a destacar: </a>
<stronge>
- Manejo de errores con throw y NotFoundException
- Uso de pipes para validacion parametros de entrada
- Uso de dtos, componente y modulos segun las buenas practica de la comunidad nestjs
- Patrones de diseño en nestjs como inyeccion de dependencias
- Configuracion similando estar en diferentes ambientes .env .stag.env .prod.env
- Documentacion con swagger y partialType con open api
 </stronge>



<p></p>
1.- Consultar pokemon por su tipo. GET:
http://localhost:3000/pokemones/Bicho

2.- Crear un maestro pokemon. POST:
http://localhost:3000/maestro/

{
    "name": "Juan lopez",
    "age": "12"
}

3.- Asociar pokemon con entrenador. PUT:
http://localhost:3000/pokemones/20

{

    "name": "Raticate",
    "type": "Normal",
    "image": "https://static.wikia.nocookie.net/espokemon/images/d/d6/Raticate.png/revision/latest?cb=20080723091809",
    "maestro": 1
}


4.- Filtrar pokemones de un entrenador. GET: 

http://localhost:3000/maestro/1

