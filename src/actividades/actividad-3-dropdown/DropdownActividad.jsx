import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

const opciones = ['Android', 'iOS', 'React Native', 'Expo'];

export function DropdownActividad() {
  const [visible, setVisible] = useState(false);
  const [seleccion, setSeleccion] = useState('Selecciona una opcion');

  return (
    <ActivityCard kicker="Actividad 3" title="Dropdown multiplataforma">
      <Pressable style={styles.dropdown} onPress={() => setVisible(true)}>
        <Text style={styles.dropdownText}>{seleccion}</Text>
        <Ionicons name="chevron-down-outline" size={20} color={colors.primaryDark} />
      </Pressable>
      <Text style={styles.result}>Valor seleccionado: {seleccion}</Text>

      <Modal visible={visible} transparent animationType="slide" onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.optionBox}>
            {opciones.map((opcion) => (
              <Pressable
                key={opcion}
                style={styles.option}
                onPress={() => {
                  setSeleccion(opcion);
                  setVisible(false);
                }}
              >
                <Text style={styles.optionText}>{opcion}</Text>
                {seleccion === opcion ? <Ionicons name="checkmark-circle" size={22} color={colors.green} /> : null}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </ActivityCard>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    alignItems: 'center',
    backgroundColor: colors.amberSoft,
    borderColor: '#f0cf95',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 52,
    paddingHorizontal: 14,
  },
  dropdownText: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '800',
  },
  result: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
  },
  overlay: {
    backgroundColor: 'rgba(23, 32, 51, 0.52)',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  optionBox: {
    backgroundColor: colors.surface,
    borderRadius: 8,
    overflow: 'hidden',
  },
  option: {
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 58,
    paddingHorizontal: 18,
  },
  optionText: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '800',
  },
});
