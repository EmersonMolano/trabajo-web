import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadow } from '../constants/design';

export default function DetalleScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Ionicons name="git-branch-outline" size={34} color={colors.coral} />
          <Text style={styles.title}>Ruta de detalle</Text>
          <Text style={styles.body}>
            Esta pantalla pertenece al Stack Navigator. El boton de regreso del encabezado permite volver a Home.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  container: { gap: 12, padding: 18 },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 18,
    ...shadow,
  },
  title: { color: colors.ink, fontSize: 28, fontWeight: '900' },
  body: { color: colors.muted, fontSize: 16, lineHeight: 23 },
});
