# FoxbelMusic

## Correr aplicación de forma local
```bash
1- crear un archivo ".env.local"
2- crear una variable "VITE_API_URL"
3- agregar "https://deezer-proxy.onrender.com" a esa variable de entorno. 
4- importante: Este dominio me brinda una plataforma de alojamiento. Lo desarrollé con Node y Express para poder hacer
las peticiones a la API de Deezer, que por default tiene un bloque de CORS. Lo puedes encontrar el código fuente aquí.
[https://github.com/elmerjacobo97/deezer-proxy]
```
```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
```


## Live demo

[https://iridescent-naiad-726474.netlify.app/](https://iridescent-naiad-726474.netlify.app/)

## User flow

- Search by song, artist or album
- Play songs

## Built using

- [React](https://es.reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## Platform

Hosted through [Netlify](https://www.netlify.com/).

## Getting Started

First, run the development server:




Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
