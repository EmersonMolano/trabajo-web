import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from '../../ui/Screen';
import { ActivityCard } from '../../ui/ActivityCard';
import { colors } from '../../theme';

export default function PerfilScreen() {
  return (
    <Screen title="Perfil" subtitle="Pantalla principal incluida en el Drawer Layout.">
      <ActivityCard kicker="Drawer" title="Datos del aprendiz">
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={42} color={colors.primary} />
        </View>
        <Text style={styles.name}>Aprendiz React Native</Text>
        <Text style={styles.body}>
          Esta vista demuestra navegacion lateral y separa la informacion de perfil en su propia pantalla.
        </Text>
      </ActivityCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.blueSoft,
    borderRadius: 8,
    height: 76,
    justifyContent: 'center',
    width: 76,
  },
  name: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: '900',
  },
  body: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
