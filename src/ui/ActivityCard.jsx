import { StyleSheet, Text, View } from 'react-native';
import { colors, shadows } from '../theme';

export function ActivityCard({ children, kicker, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.kicker}>{kicker}</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    ...shadows.card,
  },
  kicker: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
  },
  content: {
    gap: 12,
    marginTop: 14,
  },
});
