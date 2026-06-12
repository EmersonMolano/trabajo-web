import { useMemo, useState } from 'react';
import {
  InputAccessoryView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, shadow } from '../../../constants/design';

const inputAccessoryViewID = 'calculatorDoneToolbar';

const operaciones = [
  { label: '+', nombre: 'Suma' },
  { label: '-', nombre: 'Resta' },
  { label: 'x', nombre: 'Multiplicacion' },
  { label: '/', nombre: 'Division' },
];

export default function CalculadoraScreen() {
  const [numeroUno, setNumeroUno] = useState('');
  const [numeroDos, setNumeroDos] = useState('');
  const [operacion, setOperacion] = useState('+');

  const resultado = useMemo(() => {
    const a = Number(numeroUno.replace(',', '.'));
    const b = Number(numeroDos.replace(',', '.'));

    if (numeroUno.trim() === '' || numeroDos.trim() === '' || Number.isNaN(a) || Number.isNaN(b)) {
      return 'Ingresa dos numeros validos';
    }

    if (operacion === '/' && b === 0) {
      return 'No se puede dividir entre cero';
    }

    const calculos = {
      '+': a + b,
      '-': a - b,
      x: a * b,
      '/': a / b,
    };

    return `Resultado: ${calculos[operacion]}`;
  }, [numeroUno, numeroDos, operacion]);

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.keyboardView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <View style={styles.iconBox}>
                <Ionicons name="calculator-outline" size={26} color={colors.paper} />
              </View>
              <View style={styles.headerCopy}>
                <Text style={styles.title}>Calculadora de bolsillo</Text>
                <Text style={styles.subtitle}>Opera dos valores y valida entradas al instante.</Text>
              </View>
            </View>

            <View style={styles.card}>
              <TextInput
                inputAccessoryViewID={inputAccessoryViewID}
                keyboardType="decimal-pad"
                onChangeText={setNumeroUno}
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Primer numero"
                placeholderTextColor={colors.muted}
                returnKeyType="done"
                style={styles.input}
                value={numeroUno}
              />
              <TextInput
                inputAccessoryViewID={inputAccessoryViewID}
                keyboardType="decimal-pad"
                onChangeText={setNumeroDos}
                onSubmitEditing={Keyboard.dismiss}
                placeholder="Segundo numero"
                placeholderTextColor={colors.muted}
                returnKeyType="done"
                style={styles.input}
                value={numeroDos}
              />

              <View style={styles.operations}>
                {operaciones.map((item) => (
                  <Pressable
                    key={item.label}
                    accessibilityLabel={item.nombre}
                    onPress={() => {
                      Keyboard.dismiss();
                      setOperacion(item.label);
                    }}
                    style={[styles.operationButton, operacion === item.label && styles.operationActive]}
                  >
                    <Text style={[styles.operationText, operacion === item.label && styles.operationTextActive]}>
                      {item.label}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Salida</Text>
                <Text style={styles.resultText}>{resultado}</Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {Platform.OS === 'ios' ? (
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View style={styles.keyboardToolbar}>
            <Pressable onPress={Keyboard.dismiss} style={styles.doneButton}>
              <Text style={styles.doneButtonText}>Listo</Text>
            </Pressable>
          </View>
        </InputAccessoryView>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.paper },
  keyboardView: { flex: 1 },
  container: { flexGrow: 1, gap: 16, padding: 18, paddingBottom: 32 },
  header: { alignItems: 'center', flexDirection: 'row', gap: 12 },
  iconBox: {
    alignItems: 'center',
    backgroundColor: colors.coral,
    borderRadius: 8,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  headerCopy: { flex: 1 },
  title: { color: colors.ink, fontSize: 27, fontWeight: '900' },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 22, marginTop: 4 },
  card: {
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 16,
    ...shadow,
  },
  input: {
    backgroundColor: colors.paperAlt,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.ink,
    fontSize: 18,
    minHeight: 54,
    paddingHorizontal: 14,
  },
  operations: { flexDirection: 'row', gap: 10 },
  operationButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    height: 54,
    justifyContent: 'center',
  },
  operationActive: { backgroundColor: colors.mintDark, borderColor: colors.mintDark },
  operationText: { color: colors.ink, fontSize: 22, fontWeight: '900' },
  operationTextActive: { color: colors.white },
  resultBox: {
    backgroundColor: colors.ink,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 18,
  },
  resultLabel: { color: colors.amber, fontSize: 12, fontWeight: '900', marginBottom: 6, textTransform: 'uppercase' },
  resultText: { color: colors.paper, fontSize: 20, fontWeight: '900' },
  keyboardToolbar: {
    alignItems: 'flex-end',
    backgroundColor: '#f4f4f4',
    borderTopColor: '#d1d1d1',
    borderTopWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  doneButton: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  doneButtonText: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '900',
  },
});
