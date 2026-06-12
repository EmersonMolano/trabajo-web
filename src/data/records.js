export const createRecords = (from, amount = 24) =>
  Array.from({ length: amount }, (_, index) => ({
    id: String(from + index + 1),
    titulo: `Registro ${from + index + 1}`,
    descripcion: 'Entrada de prueba para evidenciar desplazamiento vertical.',
  }));
