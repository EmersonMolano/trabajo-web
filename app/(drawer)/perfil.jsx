import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadow } from '../../constants/design';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={38} color={colors.paper} />
          </View>
          <Text style={styles.title}>Perfil del taller</Text>
          <Text style={styles.body}>
            Pantalla incluida en el Drawer Layout para demostrar navegacion entre vistas principales.
          </Text>
        </View>
        <View style={styles.statRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Tabs</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Drawer</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  container: { gap: 14, padding: 18 },
  profileCard: {
    backgroundColor: colors.ink,
    borderRadius: 8,
    gap: 12,
    padding: 20,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.mint,
    borderRadius: 8,
    height: 68,
    justifyContent: 'center',
    width: 68,
  },
  title: { color: colors.paper, fontSize: 28, fontWeight: '900' },
  body: { color: '#f5dfbd', fontSize: 16, lineHeight: 23 },
  statRow: { flexDirection: 'row', gap: 12 },
  stat: {
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 16,
    ...shadow,
  },
  statNumber: { color: colors.coral, fontSize: 30, fontWeight: '900' },
  statLabel: { color: colors.muted, fontWeight: '800', marginTop: 4 },
});
