import { defineConfig } from 'vitepress'
import dados from '../../var.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: dados.title || 'Nome da empresa',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: dados.TitleLink1 || 'link1', link: '#cardapio' },
      { text: dados.TitleLink2 || 'link2', link: '#reserva' },
      { text: dados.TitleLink3 || 'link3', link: '#Footer' }
    ],
  },
})
