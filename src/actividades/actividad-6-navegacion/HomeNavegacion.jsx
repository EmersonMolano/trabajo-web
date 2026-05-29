import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../ui/Screen';
import { ActivityCard } from '../../ui/ActivityCard';
import { BotonesActividad } from '../actividad-1-botones/BotonesActividad';
import { ModalActividad } from '../actividad-2-modal/ModalActividad';
import { DropdownActividad } from '../actividad-3-dropdown/DropdownActividad';
import { colors } from '../../theme';

const evidencias = [
  { icon: 'layers-outline', label: 'Stack', route: '/detalle' },
  { icon: 'menu-outline', label: 'Drawer', route: '/perfil' },
  { icon: 'calculator-outline', label: 'Tabs', route: '/calculadora' },
];

export default function HomeNavegacion() {
  return (
    <Screen
      title="Taller navegacion movil"
      subtitle="Actividades organizadas por carpetas y conectadas con Stack, Bottom Tabs y Drawer."
    >
      <BotonesActividad />
      <ModalActividad />
      <DropdownActividad />

      <ActivityCard kicker="Actividad 6" title="Navegacion">
        <Text style={styles.body}>Accesos rapidos para evidenciar las rutas principales del taller.</Text>
        <View style={styles.links}>
          {evidencias.map((item) => (
            <Link key={item.route} href={item.route} style={styles.link}>
              <View style={styles.linkContent}>
                <Ionicons name={item.icon} size={22} color={colors.primary} />
                <Text style={styles.linkText}>{item.label}</Text>
              </View>
            </Link>
          ))}
        </View>
      </ActivityCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  links: {
    gap: 10,
  },
  link: {
    backgroundColor: colors.blueSoft,
    borderColor: '#c7ddec',
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
  },
  linkContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  linkText: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: '900',
  },
});
