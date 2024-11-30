import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

// Crear un tema personalizado
const customTheme = create({
  base: 'dark', // Puedes elegir entre 'light' o 'dark'

  // Colores
  colorPrimary: '#1877F2', // Color primario (botones, acentos)
  colorSecondary: '#1877F2', // Color secundario (para acciones como hover, focus)

  // Marca (branding)
  brandTitle: 'Wow Design system',
  brandUrl: '',
  // brandImage: '/logo.jpg', // Logo personalizado para Storybook
  brandTarget: '_blank',
  // Tipografía
  fontBase: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
});

// Aplicar el tema personalizado
addons.setConfig({
  theme: customTheme,
});
