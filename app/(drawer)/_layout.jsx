import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { DrawerContent } from '../../src/navigation/DrawerContent';
import { colors } from '../../src/theme/design';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: colors.ink },
        headerTintColor: colors.paper,
        drawerActiveBackgroundColor: colors.paperAlt,
        drawerActiveTintColor: colors.coral,
        drawerInactiveTintColor: colors.ink,
        drawerLabelStyle: { fontSize: 16, fontWeight: '800' },
        drawerStyle: { backgroundColor: colors.paper },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          drawerIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="configuracion"
        options={{
          title: 'Configuracion',
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
