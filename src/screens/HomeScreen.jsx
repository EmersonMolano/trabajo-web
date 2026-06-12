import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityCard } from '../components/ActivityCard';
import { platformOptions } from '../data/homeOptions';
import { colors } from '../theme/design';

export function HomeScreen() {
  const navigation = useNavigation();
  const [mensaje, setMensaje] = useState('Presiona un boton para ver un cambio de texto.');
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [seleccion, setSeleccion] = useState('Android');

  const abrirDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const mostrarAlerta = () => {
    setMensaje('El boton de alerta actualizo este mensaje.');
    Alert.alert('Evento onPress', 'La interaccion funciona correctamente.');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.heroKicker}>React Native + Expo</Text>
          <Text style={styles.heroTitle}>Taller navegacion movil</Text>
        </View>

        <ActivityCard number="1" title="Uso de botones">
          <Text style={styles.message}>{mensaje}</Text>
          <View style={styles.buttonRow}>
            <Pressable style={styles.primaryButton} onPress={() => setMensaje('Boton principal presionado.')}>
              <Ionicons name="text-outline" size={20} color={colors.white} />
              <Text style={styles.primaryButtonText}>Cambiar texto</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={mostrarAlerta}>
              <Ionicons name="notifications-outline" size={20} color={colors.mintDark} />
              <Text style={styles.secondaryButtonText}>Alerta</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={() => router.push('/detalle')}>
              <Ionicons name="open-outline" size={20} color={colors.mintDark} />
              <Text style={styles.secondaryButtonText}>Detalle</Text>
            </Pressable>
          </View>
        </ActivityCard>

        <ActivityCard number="2" title="Dialog / Modal">
          <Text style={styles.cardText}>Mensaje informativo con apertura y cierre mediante botones.</Text>
          <Pressable style={styles.primaryButton} onPress={() => setModalVisible(true)}>
            <Ionicons name="albums-outline" size={20} color={colors.white} />
            <Text style={styles.primaryButtonText}>Abrir modal</Text>
          </Pressable>
        </ActivityCard>

        <ActivityCard number="3" title="Dropdown multiplataforma">
          <Pressable style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
            <Text style={styles.dropdownText}>{seleccion}</Text>
            <Ionicons name="chevron-down-outline" size={22} color={colors.mintDark} />
          </Pressable>
          <Text style={styles.selectedText}>Valor seleccionado: {seleccion}</Text>
        </ActivityCard>

        <ActivityCard number="6" title="Navegacion">
          <Text style={styles.cardText}>Accesos rapidos para evidenciar las rutas principales del taller.</Text>
          <Pressable style={styles.navButton} onPress={() => router.push('/detalle')}>
            <Ionicons name="layers-outline" size={22} color={colors.mintDark} />
            <Text style={styles.navButtonText}>Stack</Text>
          </Pressable>
          <Pressable style={styles.navButton} onPress={abrirDrawer}>
            <Ionicons name="menu-outline" size={22} color={colors.mintDark} />
            <Text style={styles.navButtonText}>Drawer</Text>
          </Pressable>
          <Link href="/calculadora" asChild>
            <Pressable style={styles.navButton}>
              <Ionicons name="calculator-outline" size={22} color={colors.mintDark} />
              <Text style={styles.navButtonText}>Tabs</Text>
            </Pressable>
          </Link>
        </ActivityCard>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Mensaje informativo</Text>
            <Text style={styles.cardText}>
              Este modal se abre y se cierra con botones, cumpliendo el requisito Dialog/Modal del taller.
            </Text>
            <Pressable style={styles.primaryButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.primaryButtonText}>Cerrar modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={dropdownVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.optionBox}>
            {platformOptions.map((opcion) => (
              <Pressable
                key={opcion}
                style={styles.option}
                onPress={() => {
                  setSeleccion(opcion);
                  setDropdownVisible(false);
                }}
              >
                <Text style={styles.optionText}>{opcion}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f4f7f8' },
  container: { gap: 18, padding: 18, paddingBottom: 34 },
  hero: {
    backgroundColor: colors.mintDark,
    borderRadius: 8,
    gap: 8,
    padding: 18,
  },
  heroKicker: { color: '#c7f2ec', fontSize: 12, fontWeight: '900', textTransform: 'uppercase' },
  heroTitle: { color: colors.white, fontSize: 29, fontWeight: '900' },
  cardText: { color: colors.muted, fontSize: 16, lineHeight: 24 },
  message: {
    backgroundColor: '#eaf4fb',
    borderColor: '#c9dcea',
    borderRadius: 8,
    borderWidth: 1,
    color: colors.ink,
    fontSize: 15,
    padding: 14,
  },
  buttonRow: { gap: 10 },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#1e7c9f',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 14,
  },
  primaryButtonText: { color: colors.white, fontSize: 16, fontWeight: '900' },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: '#eaf4fb',
    borderColor: '#c9dcea',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 14,
  },
  secondaryButtonText: { color: colors.mintDark, fontSize: 16, fontWeight: '900' },
  dropdown: {
    alignItems: 'center',
    backgroundColor: '#fff6df',
    borderColor: '#eadca7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 58,
    paddingHorizontal: 16,
  },
  dropdownText: { color: colors.ink, fontSize: 18, fontWeight: '900' },
  selectedText: { color: colors.muted, fontSize: 15, fontWeight: '800' },
  navButton: {
    alignItems: 'center',
    backgroundColor: '#eaf4fb',
    borderColor: '#c9dcea',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    minHeight: 58,
    paddingHorizontal: 16,
  },
  navButtonText: { color: colors.mintDark, fontSize: 17, fontWeight: '900' },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(23, 21, 31, 0.58)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: { backgroundColor: colors.white, borderRadius: 8, gap: 14, padding: 20, width: '100%' },
  modalTitle: { color: colors.ink, fontSize: 22, fontWeight: '900' },
  optionBox: { backgroundColor: colors.white, borderRadius: 8, overflow: 'hidden', width: '100%' },
  option: { borderBottomColor: '#e5edf0', borderBottomWidth: 1, padding: 18 },
  optionText: { color: colors.ink, fontSize: 17, fontWeight: '800' },
});
