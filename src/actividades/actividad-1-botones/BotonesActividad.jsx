import { Alert, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { AppButton } from '../../ui/AppButton';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

export function BotonesActividad() {
  const [mensaje, setMensaje] = useState('Listo para probar los eventos onPress.');
  const [contador, setContador] = useState(0);

  const mostrarAlerta = () => {
    setMensaje('El boton de alerta actualizo este mensaje.');
    Alert.alert('Evento onPress', 'La interaccion funciona correctamente.');
  };

  return (
    <ActivityCard kicker="Actividad 1" title="Uso de botones">
      <View style={styles.messageBox}>
        <Ionicons name="chatbubble-ellipses-outline" size={22} color={colors.green} />
        <Text style={styles.message}>{mensaje}</Text>
      </View>

      <View style={styles.grid}>
        <AppButton
          icon="refresh-outline"
          label="Cambiar texto"
          onPress={() => setMensaje('Boton principal presionado con exito.')}
        />
        <AppButton icon="add-circle-outline" label={`Contador ${contador}`} onPress={() => setContador(contador + 1)} />
        <AppButton icon="notifications-outline" label="Alerta" onPress={mostrarAlerta} tone="secondary" />
        <AppButton icon="open-outline" label="Detalle" onPress={() => router.push('/detalle')} tone="secondary" />
      </View>
    </ActivityCard>
  );
}

const styles = StyleSheet.create({
  messageBox: {
    alignItems: 'center',
    backgroundColor: colors.greenSoft,
    borderColor: '#cdece0',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 12,
  },
  message: {
    color: '#174438',
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
  },
  grid: {
    gap: 10,
  },
});
