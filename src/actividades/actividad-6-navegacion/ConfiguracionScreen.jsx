import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import { Screen } from '../../ui/Screen';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

export default function ConfiguracionScreen() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [modo, setModo] = useState('Claro');

  return (
    <Screen title="Configuracion" subtitle="Controles funcionales dentro del Drawer Layout.">
      <ActivityCard kicker="Drawer" title="Preferencias">
        <View style={styles.row}>
          <View style={styles.copy}>
            <Text style={styles.label}>Notificaciones</Text>
            <Text style={styles.help}>Switch funcional de ejemplo.</Text>
          </View>
          <Switch
            thumbColor={notificaciones ? colors.green : '#f4f4f5'}
            trackColor={{ false: '#cbd5e1', true: '#a7e4cf' }}
            value={notificaciones}
            onValueChange={setNotificaciones}
          />
        </View>

        <View style={styles.segment}>
          {['Claro', 'Oscuro'].map((item) => (
            <Pressable
              key={item}
              onPress={() => setModo(item)}
              style={({ pressed }) => [
                styles.segmentButton,
                modo === item && styles.segmentActive,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.segmentText, modo === item && styles.segmentTextActive]}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </ActivityCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: colors.greenSoft,
    borderColor: '#cdece0',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },
  copy: {
    flex: 1,
    paddingRight: 12,
  },
  label: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '900',
  },
  help: {
    color: colors.muted,
    marginTop: 4,
  },
  segment: {
    backgroundColor: colors.border,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 4,
  },
  segmentButton: {
    alignItems: 'center',
    borderRadius: 6,
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  segmentText: {
    color: colors.ink,
    fontWeight: '900',
  },
  segmentTextActive: {
    color: '#ffffff',
  },
});
