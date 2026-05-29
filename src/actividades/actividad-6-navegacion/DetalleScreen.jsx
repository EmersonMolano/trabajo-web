import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '../../ui/Screen';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

export default function DetalleScreen() {
  return (
    <Screen title="Detalle" subtitle="Pantalla abierta desde el Stack Navigator.">
      <ActivityCard kicker="Stack" title="Ruta de detalle">
        <View style={styles.badge}>
          <Ionicons name="arrow-back-circle-outline" size={28} color={colors.coral} />
          <Text style={styles.badgeText}>Usa el regreso del encabezado para volver.</Text>
        </View>
        <Text style={styles.body}>
          Esta pantalla comprueba navegacion hacia una vista secundaria y retorno entre vistas.
        </Text>
      </ActivityCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: colors.coralSoft,
    borderColor: '#f2cac5',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 12,
  },
  badgeText: {
    color: colors.ink,
    flex: 1,
    fontWeight: '800',
    lineHeight: 20,
  },
  body: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
