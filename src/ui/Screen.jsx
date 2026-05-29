import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

export function Screen({ children, scroll = true, subtitle, title }) {
  const Container = scroll ? ScrollView : View;
  const containerProps = scroll ? { contentContainerStyle: styles.scrollContent } : { style: styles.content };

  return (
    <SafeAreaView style={styles.safe}>
      <Container {...containerProps}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        {children}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    gap: 16,
    padding: 18,
    paddingBottom: 34,
  },
  content: {
    flex: 1,
    gap: 16,
    padding: 18,
  },
  header: {
    backgroundColor: colors.primaryDark,
    borderRadius: 8,
    padding: 18,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: '#dbeafe',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
