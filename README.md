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

Comandos principales:

```bash
npm install
npm install -g @expo/ngrok
npx expo start --tunnel
```

## Estructura importante

- `app/_layout.jsx`: ruta principal con Stack Navigator.
- `app/(drawer)/_layout.jsx`: ruta del menu lateral Drawer.
- `app/(drawer)/(tabs)/_layout.jsx`: ruta del menu inferior Bottom Tabs.
- `app/(drawer)/(tabs)/index.jsx`: adaptador de ruta para Inicio.
- `app/(drawer)/(tabs)/calculadora.jsx`: adaptador de ruta para Calculadora.
- `app/(drawer)/(tabs)/lista.jsx`: adaptador de ruta para Scroll Loading.
- `app/(drawer)/perfil.jsx`: adaptador de ruta para Perfil.
- `app/(drawer)/configuracion.jsx`: adaptador de ruta para Configuracion.
- `app/detalle.jsx`: adaptador de ruta para Detalle.
- `src/screens`: pantallas reales de la aplicacion.
- `src/components`: componentes reutilizables de interfaz.
- `src/navigation`: componentes y configuracion de navegacion reutilizable.
- `src/features`: logica de una funcionalidad especifica, como la calculadora.
- `src/data`: datos y generadores de datos usados por las pantallas.
- `src/theme`: colores, sombras y estilos compartidos.
- `constants/design.js`: compatibilidad con imports antiguos; reexporta desde `src/theme/design.js`.
- `assets/images`: iconos, splash y favicon usados por Expo.

## Arquitectura usada

Se uso una **arquitectura por capas con separacion por responsabilidad**, adaptada a Expo Router.

La idea principal es que cada carpeta tenga una responsabilidad clara:

- `app`: solo define rutas y layouts de navegacion. No contiene la logica principal de las pantallas.
- `src/screens`: contiene las vistas completas que ve el usuario.
- `src/components`: guarda piezas reutilizables de UI.
- `src/navigation`: concentra elementos propios de la navegacion, como el contenido personalizado del Drawer.
- `src/features`: agrupa logica de negocio o reglas de una funcionalidad. Por ejemplo, `src/features/calculator/calculator.js` calcula el resultado sin depender de React Native.
- `src/data`: separa listas, opciones y datos de prueba.
- `src/theme`: centraliza colores y estilos compartidos para evitar repetir valores en muchas pantallas.

Se eligio esta arquitectura porque el proyecto es una aplicacion movil pequena de taller, pero ya tiene varias pantallas, navegacion Stack/Drawer/Tabs, estilos compartidos y logica de UI. Una arquitectura por capas mejora el orden de los archivos, facilita encontrar cada parte y evita que las rutas de Expo Router queden llenas de codigo mezclado.

## Nota sobre Android

La barra inferior usa `react-native-safe-area-context` para respetar los botones de navegacion del celular y evitar que los tabs queden pegados o tapados.
