import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createRecords } from '../data/records';
import { colors, shadow } from '../theme/design';

export function ListScreen() {
  const [cargando, setCargando] = useState(true);
  const [cargandoMas, setCargandoMas] = useState(false);
  const [datos, setDatos] = useState(() => createRecords(0));

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const cargarMas = () => {
    if (cargandoMas) return;
    setCargandoMas(true);
    setTimeout(() => {
      setDatos((prev) => [...prev, ...createRecords(prev.length)]);
      setCargandoMas(false);
    }, 600);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>FlatList</Text>
        <Text style={styles.title}>Cuaderno de registros</Text>
        <Text style={styles.subtitle}>Carga inicial con indicador y una lista comoda para desplazarse.</Text>
      </View>

      {cargando ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.coral} size="large" />
          <Text style={styles.loadingText}>Preparando registros...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={datos}
          keyExtractor={(item) => item.id}
          onEndReached={cargarMas}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            cargandoMas ? (
              <View style={styles.footer}>
                <ActivityIndicator color={colors.coral} size="large" />
              </View>
            ) : null
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemIcon}>
                <Ionicons name="bookmark-outline" size={18} color={colors.paper} />
              </View>
              <View style={styles.itemCopy}>
                <Text style={styles.itemTitle}>{item.titulo}</Text>
                <Text style={styles.itemText}>{item.descripcion}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  header: { padding: 18, paddingBottom: 8 },
  eyebrow: { color: colors.coral, fontSize: 12, fontWeight: '900', textTransform: 'uppercase' },
  title: { color: colors.ink, fontSize: 27, fontWeight: '900', marginTop: 4 },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 22, marginTop: 6 },
  loading: { alignItems: 'center', flex: 1, gap: 12, justifyContent: 'center' },
  loadingText: { color: colors.ink, fontSize: 16, fontWeight: '800' },
  list: { gap: 10, padding: 18, paddingBottom: 30 },
  footer: { alignItems: 'center', gap: 12, paddingVertical: 24 },
  item: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    ...shadow,
  },
  itemIcon: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 8,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  itemCopy: { flex: 1 },
  itemTitle: { color: colors.ink, fontSize: 18, fontWeight: '900' },
  itemText: { color: colors.muted, marginTop: 4 },
});
