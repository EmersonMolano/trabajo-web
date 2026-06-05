import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadow } from '../../constants/design';

export default function ConfiguracionScreen() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [modo, setModo] = useState('Izquierda');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Mesa de control</Text>

        <View style={styles.row}>
          <View style={styles.rowIcon}>
            <Ionicons name="notifications-outline" size={22} color={colors.paper} />
          </View>
          <View style={styles.rowCopy}>
            <Text style={styles.label}>Notificaciones</Text>
            <Text style={styles.help}>Switch funcional de ejemplo.</Text>
          </View>
          <Switch
            thumbColor={notificaciones ? colors.paper : colors.white}
            trackColor={{ false: colors.line, true: colors.mint }}
            value={notificaciones}
            onValueChange={setNotificaciones}
          />
        </View>

        <View style={styles.segment}>
          {['Izquierda', 'Derecha'].map((item) => (
            <Pressable
              key={item}
              onPress={() => setModo(item)}
              style={[styles.segmentButton, modo === item && styles.segmentActive]}
            >
              <Text style={[styles.segmentText, modo === item && styles.segmentTextActive]}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  container: { gap: 18, padding: 18 },
  title: { color: colors.ink, fontSize: 28, fontWeight: '900' },
  row: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    padding: 16,
    ...shadow,
  },
  rowIcon: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 8,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  rowCopy: { flex: 1 },
  label: { color: colors.ink, fontSize: 17, fontWeight: '900' },
  help: { color: colors.muted, marginTop: 4 },
  segment: { backgroundColor: colors.paperAlt, borderRadius: 8, flexDirection: 'row', padding: 4 },
  segmentButton: { alignItems: 'center', borderRadius: 6, flex: 1, minHeight: 44, justifyContent: 'center' },
  segmentActive: { backgroundColor: colors.coral },
  segmentText: { color: colors.ink, fontWeight: '900' },
  segmentTextActive: { color: colors.white },
});
