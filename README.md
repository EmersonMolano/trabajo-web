# Trabajo navegacion movil

Aplicacion en Expo SDK 54 y React Native hecha en JavaScript para el taller de navegacion movil.

## Actividades implementadas

- Actividad 1: botones con eventos `onPress` y cambio de mensajes.
- Actividad 2: Dialog/Modal con apertura y cierre.
- Actividad 3: Dropdown compatible con Android e iOS.
- Actividad 4: calculadora basica.
- Actividad 5: Scroll Loading con `FlatList` y `ActivityIndicator`.
- Actividad 6: navegacion con Stack, Bottom Tabs y Drawer.


## Ejecucion: Guia para ejecutar el proyecto

Aplicacion movil hecha con Expo SDK 54, React Native y Expo Router para el taller de navegacion movil.

## Requisitos

- Node.js 20.19.x o superior compatible con Expo SDK 54.
- npm.
- Expo Go instalado en el celular Android o iOS.
- El celular y el computador en la misma red Wi-Fi si se usa modo LAN.

Las instrucciones completas estan en [EJECUTAR.md](./EJECUTAR.md).

Comandos principales:

```bash
npm install
npm install -g @expo/ngrok
npx expo start --tunnel
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
