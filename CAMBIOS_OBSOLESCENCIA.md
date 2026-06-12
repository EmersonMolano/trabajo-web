# Cambios por APIs obsoletas

## Cambio aplicado en el codigo de la app

Se reemplazo `SafeAreaView` importado desde `react-native` por `SafeAreaView` importado desde `react-native-safe-area-context`.

Archivos actualizados:

- `app/detalle.jsx`
- `app/(drawer)/perfil.jsx`
- `app/(drawer)/configuracion.jsx`
- `app/(drawer)/(tabs)/index.jsx`
- `app/(drawer)/(tabs)/lista.jsx`
- `app/(drawer)/(tabs)/calculadora.jsx`

### Para que sirve

`SafeAreaView` de `react-native` esta obsoleto en React Native moderno. La libreria recomendada para manejar zonas seguras de pantalla es `react-native-safe-area-context`, especialmente en apps Expo y React Navigation.

Este cambio mantiene el mismo comportamiento visual, pero usa la API compatible a futuro.

## Advertencias de npm revisadas

Las advertencias de npm mencionan estos paquetes:

- `inflight@1.0.6`
- `rimraf@3.0.2`
- `glob@7.2.3`
- `uuid@7.0.3`
- `uuid@3.4.0`

Estos paquetes no se usan directamente en el codigo de la app. No aparecen como dependencias directas en `package.json` ni como imports en `app/`.

Segun `npm ls inflight rimraf glob uuid`, llegan por dependencias internas:

- `inflight`, `glob@7` y `rimraf@3` llegan desde herramientas internas de `react-native@0.81.5` y `@expo/cli@54`.
- `uuid@7` llega desde `xcode@3.0.1`, usado por `@expo/config-plugins@54`.

### Por que no se reemplazaron con `lru-cache`, `rimraf@latest`, `glob@latest` o `uuid@latest`

La recomendacion de `lru-cache` aplica a quien usa directamente `inflight` en su codigo. Esta app no lo usa. Forzar esa sustitucion con `overrides` podria romper herramientas internas de Expo o React Native.

Lo mismo aplica para `rimraf`, `glob` y `uuid`: son dependencias transitivas. La correccion estable es actualizar los paquetes raiz que las traen, principalmente Expo SDK y React Native, usando la herramienta oficial de Expo.

## Siguiente cambio recomendado

Para eliminar esas advertencias desde la raiz, se debe migrar el proyecto de Expo SDK 54 a una version mas nueva compatible con sus paquetes:

```bash
npx expo install expo@latest
```

Despues de esa migracion se deben revisar y ajustar las versiones de `expo-*`, `react`, `react-native`, `expo-router` y librerias de navegacion segun indique Expo.
