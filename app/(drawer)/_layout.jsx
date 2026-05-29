import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: '#0f3f63' },
        headerTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#eaf4fb',
        drawerActiveTintColor: '#146c94',
        drawerInactiveTintColor: '#647084',
        drawerLabelStyle: { fontSize: 16, fontWeight: '800' },
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
