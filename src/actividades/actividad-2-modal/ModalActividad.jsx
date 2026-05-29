import { Modal, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AppButton } from '../../ui/AppButton';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

export function ModalActividad() {
  const [visible, setVisible] = useState(false);

  return (
    <ActivityCard kicker="Actividad 2" title="Dialog o Modal">
      <Text style={styles.body}>Abre una ventana informativa y cierrala con un boton.</Text>
      <AppButton icon="albums-outline" label="Abrir modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <View style={styles.iconBox}>
              <Ionicons name="information-circle-outline" size={34} color={colors.primary} />
            </View>
            <Text style={styles.modalTitle}>Mensaje informativo</Text>
            <Text style={styles.body}>
              Este modal demuestra apertura, cierre y un diseno visual funcional en React Native.
            </Text>
            <AppButton icon="close-circle-outline" label="Cerrar modal" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </ActivityCard>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(23, 32, 51, 0.52)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 8,
    gap: 14,
    padding: 22,
    width: '100%',
  },
  iconBox: {
    alignItems: 'center',
    backgroundColor: colors.blueSoft,
    borderRadius: 8,
    height: 58,
    justifyContent: 'center',
    width: 58,
  },
  modalTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: '900',
  },
});
