import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadow } from '../../constants/design';

const datos = Array.from({ length: 24 }, (_, index) => ({
  id: String(index + 1),
  titulo: `Registro ${index + 1}`,
  descripcion: 'Entrada de prueba para evidenciar desplazamiento vertical.',
}));

export default function ListaScreen() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
