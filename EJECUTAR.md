# Guia para ejecutar el proyecto

Aplicacion movil hecha con Expo SDK 54, React Native y Expo Router para el taller de navegacion movil.

## Requisitos

- Node.js 20.19.x o superior compatible con Expo SDK 54.
- npm.
- Expo Go instalado en el celular Android o iOS.
- El celular y el computador en la misma red Wi-Fi si se usa modo LAN.

## Instalacion

Desde la carpeta del proyecto:

```bash
npm install
```

## Ejecutar en Expo Go

```bash
npm start
```

Escanea el codigo QR con Expo Go.

Si Expo Go no conecta por la red local, usa tunel:

```bash
npm run start:tunnel
```

## Ejecutar en Android

Con Expo Go instalado y un dispositivo/emulador Android disponible:

```bash
npm run android
```

Tambien existe este alias por si se escribe el comando con el typo:

```bash
npm run andord
```

## Ejecutar en web

```bash
npm run web
```

## Verificar el codigo

```bash
npm run lint
```

## Estructura importante

- `app/_layout.jsx`: navegacion principal Stack.
- `app/(drawer)/_layout.jsx`: menu lateral Drawer.
- `app/(tabs)/_layout.jsx`: menu inferior Bottom Tabs.
- `app/(tabs)/index.jsx`: pantalla Inicio con botones, modal, dropdown y accesos de navegacion.
- `app/(tabs)/calculadora.jsx`: calculadora basica.
- `app/(tabs)/lista.jsx`: Scroll Loading con `FlatList`.
- `app/(drawer)/perfil.jsx`: pantalla Perfil.
- `app/(drawer)/configuracion.jsx`: pantalla Configuracion.
- `app/detalle.jsx`: pantalla Detalle del Stack.
- `constants/design.js`: colores y sombra compartidos.
- `assets/images`: iconos, splash y favicon usados por Expo.

## Nota sobre Android

La barra inferior usa `react-native-safe-area-context` para respetar los botones de navegacion del celular y evitar que los tabs queden pegados o tapados.
