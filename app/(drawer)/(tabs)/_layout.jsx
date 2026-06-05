import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../constants/design';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const bottomSpace = Math.max(insets.bottom, 14);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.coral,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.paper,
          borderTopColor: colors.line,
          height: 58 + bottomSpace,
          paddingBottom: bottomSpace,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="planet-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculadora"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color, size }) => <Ionicons name="calculator-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lista"
        options={{
          title: 'Scroll',
          tabBarIcon: ({ color, size }) => <Ionicons name="reader-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
