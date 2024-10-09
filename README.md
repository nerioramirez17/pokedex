# Pokedex App

Este proyecto es una aplicación web que utiliza **React.js** para consumir la API de PokeAPI y mostrar una lista de los primeros 151 pokemones, además de detalles adicionales como estadísticas de combate.

## Características

- **Consumo de API**: Usa la API de [PokeAPI](https://pokeapi.co) para obtener información de los pokemones.
- **Tecnologías utilizadas**:
  - **React.js**: Para construir la interfaz de usuario.
  - **Axios**: Para realizar las solicitudes HTTP a la API.
  - **Styled Components**: Para manejar los estilos de los componentes de manera dinámica.
  - **Redux Toolkit**: Para gestionar el estado global de la aplicación.
  - **Material UI**: Usado para algunos componentes, como el `LinearProgress` en las estadísticas de los pokemones.
- **Despliegue**: La aplicación está desplegada en [Vercel](https://vercel.com/).
  - Puedes verla en vivo [aquí](https://pokedex-iota-lac.vercel.app/).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Optimiza la construcción para mejor rendimiento y minimización.

## Instalación

Para clonar el repositorio y ejecutar la aplicación localmente, sigue estos pasos:

```bash
git clone https://github.com/nerioramirez17/pokedex.git
cd pokedex
npm install
npm start
```
