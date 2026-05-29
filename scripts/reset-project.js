#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const root = process.cwd();
const oldDirs = ['app'];
const exampleDir = 'app-example';
const newAppDir = 'app';
const exampleDirPath = path.join(root, exampleDir);

const indexContent = `import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text>Edita app/index.jsx para modificar esta pantalla.</Text>
    </View>
  );
}
`;

const layoutContent = `import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack />;
}
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function resetProject(userInput) {
  try {
    if (userInput === 'y') {
      await fs.promises.mkdir(exampleDirPath, { recursive: true });
      console.log(`/${exampleDir} creado.`);
    }

    for (const dir of oldDirs) {
      const oldDirPath = path.join(root, dir);
      if (!fs.existsSync(oldDirPath)) {
        console.log(`/${dir} no existe, se omite.`);
        continue;
      }

      if (userInput === 'y') {
        const newDirPath = path.join(root, exampleDir, dir);
        await fs.promises.rename(oldDirPath, newDirPath);
        console.log(`/${dir} movido a /${exampleDir}/${dir}.`);
      } else {
        await fs.promises.rm(oldDirPath, { recursive: true, force: true });
        console.log(`/${dir} eliminado.`);
      }
    }

    const newAppDirPath = path.join(root, newAppDir);
    await fs.promises.mkdir(newAppDirPath, { recursive: true });
    await fs.promises.writeFile(path.join(newAppDirPath, 'index.jsx'), indexContent);
    await fs.promises.writeFile(path.join(newAppDirPath, '_layout.jsx'), layoutContent);

    console.log('\nProyecto reiniciado en JavaScript.');
  } catch (error) {
    console.error(`Error durante el reinicio: ${error.message}`);
  }
}

rl.question('Mover la carpeta app actual a /app-example en vez de eliminarla? (Y/n): ', (answer) => {
  const userInput = answer.trim().toLowerCase() || 'y';

  if (userInput !== 'y' && userInput !== 'n') {
    console.log("Respuesta invalida. Usa 'Y' o 'N'.");
    rl.close();
    return;
  }

  resetProject(userInput).finally(() => rl.close());
});
