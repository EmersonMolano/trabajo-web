import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Screen } from '../../ui/Screen';
import { colors, shadows } from '../../theme';

const operaciones = [
  { label: '+', nombre: 'Suma' },
  { label: '-', nombre: 'Resta' },
  { label: 'x', nombre: 'Multiplicacion' },
  { label: '/', nombre: 'Division' },
];

export default function CalculadoraActividad() {
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

    return String(calculos[operacion]);
  }, [numeroUno, numeroDos, operacion]);

  return (
    <Screen title="Calculadora basica" subtitle="Suma, resta, multiplicacion y division con validacion simple.">
      <View style={styles.panel}>
        <Text style={styles.resultLabel}>Resultado</Text>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          keyboardType="decimal-pad"
          onChangeText={setNumeroUno}
          placeholder="Primer numero"
          placeholderTextColor="#8a97aa"
          style={styles.input}
          value={numeroUno}
        />
        <TextInput
          keyboardType="decimal-pad"
          onChangeText={setNumeroDos}
          placeholder="Segundo numero"
          placeholderTextColor="#8a97aa"
          style={styles.input}
          value={numeroDos}
        />
      </View>

      <View style={styles.operations}>
        {operaciones.map((item) => (
          <Pressable
            key={item.label}
            accessibilityLabel={item.nombre}
            onPress={() => setOperacion(item.label)}
            style={({ pressed }) => [
              styles.operationButton,
              operacion === item.label && styles.operationActive,
              pressed && styles.pressed,
            ]}
          >
            <Text style={[styles.operationText, operacion === item.label && styles.operationTextActive]}>
              {item.label}
            </Text>
            <Text style={[styles.operationName, operacion === item.label && styles.operationTextActive]}>
              {item.nombre}
            </Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.primaryDark,
    borderRadius: 8,
    minHeight: 112,
    justifyContent: 'center',
    padding: 18,
  },
  resultLabel: {
    color: '#b9d9ee',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  resultText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 6,
  },
  form: {
    gap: 12,
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.ink,
    fontSize: 18,
    minHeight: 56,
    paddingHorizontal: 14,
    ...shadows.card,
  },
  operations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  operationButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: '47%',
    flexGrow: 1,
    minHeight: 78,
    justifyContent: 'center',
  },
  operationActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  pressed: {
    opacity: 0.8,
  },
  operationText: {
    color: colors.ink,
    fontSize: 25,
    fontWeight: '900',
  },
  operationName: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 4,
  },
  operationTextActive: {
    color: '#ffffff',
  },
});
