import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen } from '../../ui/Screen';
import { colors, shadows } from '../../theme';

const datos = Array.from({ length: 24 }, (_, index) => ({
  id: String(index + 1),
  titulo: `Elemento ${index + 1}`,
  descripcion: 'Item de ejemplo para evidenciar desplazamiento vertical.',
}));

export default function ScrollLoadingActividad() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen title="Scroll Loading" subtitle="FlatList con indicador de carga visible al iniciar." scroll={false}>
      {cargando ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} size="large" />
          <Text style={styles.loadingText}>Cargando elementos...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={datos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="document-text-outline" size={20} color={colors.primary} />
              </View>
              <View style={styles.itemTextBox}>
                <Text style={styles.itemTitle}>{item.titulo}</Text>
                <Text style={styles.itemText}>{item.descripcion}</Text>
              </View>
            </View>
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 12,
    justifyContent: 'center',
    ...shadows.card,
  },
  loadingText: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '800',
  },
  list: {
    gap: 10,
    paddingBottom: 30,
  },
  item: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 14,
    ...shadows.card,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: colors.blueSoft,
    borderRadius: 8,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  itemTextBox: {
    flex: 1,
  },
  itemTitle: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '900',
  },
  itemText: {
    color: colors.muted,
    lineHeight: 20,
    marginTop: 2,
  },
});
