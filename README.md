# DH Tecnologia - Site Corporativo

Site moderno e responsivo para a DH Tecnologia, inspirado no design da DynastyAI mas adaptado com as cores e branding da DH Tecnologia (preto e laranja).

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **React Hot Toast** - Notificações
- **React Intersection Observer** - Animações baseadas em scroll

## 🎨 Design System

### Cores
- **Primária**: Laranja (#f97316)
- **Secundária**: Laranja escuro (#ea580c)
- **Fundo**: Preto (#0f172a, #1e293b)
- **Texto**: Branco e cinza

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd dh-tecnologia-site
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🏗️ Estrutura do Projeto

```
dh-tecnologia-site/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Hero.tsx             # Seção hero principal
│   ├── Services.tsx         # Seção de serviços
│   ├── Process.tsx          # Seção de processo
│   └── Footer.tsx           # Rodapé
├── public/                  # Arquivos estáticos
├── tailwind.config.js       # Configuração do Tailwind
├── next.config.js           # Configuração do Next.js
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

## 🎯 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo para todos os dispositivos
- [x] Animações suaves com Framer Motion
- [x] Navegação suave entre seções
- [x] Menu mobile responsivo
- [x] Efeitos de hover e interação
- [x] Gradientes e efeitos visuais
- [x] SEO otimizado
- [x] Performance otimizada
- [x] Acessibilidade básica

### 🔄 Próximas Implementações
- [ ] Formulário de contato funcional
- [ ] Integração com calendário (Calendly)
- [ ] Blog integrado
- [ ] Sistema de analytics
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados

## 🎨 Personalização

### Alterando Cores
As cores podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#f97316', // Laranja principal
    600: '#ea580c', // Laranja escuro
  },
  dark: {
    950: '#020617', // Preto principal
  }
}
```

### Alterando Conteúdo
O conteúdo pode ser facilmente alterado editando os componentes em `components/`:

- **Header**: Navegação e logo
- **Hero**: Título principal e CTA
- **Services**: Serviços oferecidos
- **Process**: Processo de trabalho
- **Footer**: Links e informações de contato

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte nativo
- **DigitalOcean App Platform**: Deploy simples

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📊 Performance

O site está otimizado para performance:
- ⚡ Lazy loading de imagens
- 🎯 Code splitting automático
- 📦 Bundle otimizado
- 🖼️ Imagens otimizadas
- 🎨 CSS purged

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:
- 📧 Email: contato@dhtecnologia.com.br
- 🌐 Website: https://dhtecnologia.com.br
- 📱 WhatsApp: +55 (11) 99999-9999

---

**Desenvolvido com ❤️ pela DH Tecnologia**
