import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Restaurante do Zé',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Cardápio', link: '#cardapio' },
      { text: 'Reserva', link: '#reserva' },
      { text: 'Contato', link: '#Footer' }
    ],
  },
})
