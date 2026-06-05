import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/design';

const drawerItems = [
  { label: 'Home', icon: 'home-outline', href: '/', routeName: '(tabs)' },
  { label: 'Perfil', icon: 'person-outline', href: '/perfil', routeName: 'perfil' },
  { label: 'Configuracion', icon: 'settings-outline', href: '/configuracion', routeName: 'configuracion' },
];

function DrawerContent({ navigation }) {
  const pathname = usePathname();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const openRoute = (href) => {
    closeDrawer();
    router.push(href);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Drawer Layout</Text>
        <Pressable accessibilityLabel="Cerrar drawer" onPress={closeDrawer} style={styles.closeButton}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.ink} />
        </Pressable>
      </View>
      <View style={styles.titleLine} />

      <View style={styles.drawerList}>
        {drawerItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === '/' && pathname === '/') ||
            (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Pressable
              key={item.label}
              accessibilityRole="button"
              onPress={() => openRoute(item.href)}
              style={[styles.drawerItem, active && styles.drawerItemActive]}
            >
              <Ionicons name={item.icon} size={23} color={active ? colors.coral : colors.ink} />
              <Text style={[styles.drawerLabel, active && styles.drawerLabelActive]}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

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
          title: 'Configuración',
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: colors.white,
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 34,
  },
  drawerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drawerTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: '#e2e8ee',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  titleLine: {
    backgroundColor: '#858585',
    borderRadius: 8,
    height: 8,
    marginBottom: 18,
    marginTop: 12,
    opacity: 0.85,
    width: '94%',
  },
  drawerList: {
    gap: 16,
  },
  drawerItem: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 14,
    minHeight: 42,
    paddingHorizontal: 10,
  },
  drawerItemActive: {
    backgroundColor: colors.paperAlt,
  },
  drawerLabel: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },
  drawerLabelActive: {
    color: colors.coral,
  },
});
