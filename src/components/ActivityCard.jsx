import { StyleSheet, Text, View } from 'react-native';
import { colors, shadow } from '../theme/design';

export function ActivityCard({ number, title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.activity}>ACTIVIDAD {number}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderColor: '#d6dee2',
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 18,
    ...shadow,
  },
  activity: { color: colors.mintDark, fontSize: 13, fontWeight: '900', textTransform: 'uppercase' },
  cardTitle: { color: colors.ink, fontSize: 23, fontWeight: '900' },
});
