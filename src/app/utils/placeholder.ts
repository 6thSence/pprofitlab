/**
 * Генерирует URL placeholder изображения
 * Используется для замены figma:asset импортов в продакшн билде
 */
export function getPlaceholderImage(name: string, size: string = '400x400'): string {
  // Генерируем цвет на основе имени для консистентности
  const colors = [
    'e0e7ff', // светло-голубой
    'dbeafe', // голубой
    'fce7f3', // розовый
    'fef3c7', // желтый
    'dcfce7', // зеленый
    'f3e8ff', // фиолетовый
    'ffe4e6', // красноватый
    'e0f2fe', // небесный
  ];

  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = colors[hash % colors.length];

  return `https://placehold.co/${size}/${color}/666?text=${encodeURIComponent(name.split(' ')[0])}`;
}
