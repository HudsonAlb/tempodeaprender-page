# Status do Projeto: Tempo de Aprender

Este documento serve como um registro do progresso atual da reestruturação do site institucional da escola Tempo de Aprender, detalhando as melhorias implementadas até o momento e o roteiro de próximos passos.

---

## ✅ O que foi feito até agora

### 1. Estrutura e Fundação Tecnológica
- **Migração para Multi-page**: Arquitetura de site institucional completo com React Router — rotas para Início, Sobre Nós, Equipe, Diferenciais, Depoimentos e Contato.
- **Configuração TypeScript**: Código totalmente tipado para maior estabilidade.

### 2. Design System e Identidade
- **Paleta de Cores**: Cores da marca definidas no Tailwind (`brand-sky`, `brand-navy`, `brand-green`, `brand-orange`).
- **Sistema de Animações (Scroll Reveal)**: Hook customizado (`useReveal` e `useStaggerReveal`) com IntersectionObserver, fade-up, scale e slide lateral, com respeito ao `prefers-reduced-motion`.
- **Navbar inteligente**: Fundo transparente no topo que se torna sólido ao rolar; menu mobile funcional; botão de matrícula em destaque.

### 3. Páginas Internas — Conteúdo e Polimento Visual ✅ *Concluído*
- **Sobre Nós (`/sobre`)**: Seção About com Missão/Visão/Valores e galeria de fotos; timeline animada com marcos históricos (2003–2024); strip de estatísticas (20+ anos, fundação, avaliação); CTA dark navy ao final.
- **Diferenciais (`/diferenciais`)**: Seção de destaques (Metodologia Ativa, Comunidade, Excelência) antes do BentoGrid; CTA dark navy ao final — todos com animações reveal.
- **Depoimentos (`/depoimentos`)**: Expandido de 3 para **6 depoimentos** de famílias; strip de estatísticas (300+ famílias, 5★, 20+ anos); CTA dark navy ao final.
- **Equipe (`/equipe`)**: Cards de direção, corpo docente e colaboradores com avatares coloridos e bios; layout responsivo com card de destaque para a Diretora.

### 4. Página de Contato (`/contato`) ✅ *Concluído*
- Formulário funcional com validação nativa (nome, e-mail, WhatsApp, segmento, mensagem) e estado de sucesso com feedback visual.
- **Botões de ação rápida** em destaque: WhatsApp (verde #25D366) e Instagram (gradiente) com animações slide-in.
- **Mapa embed** do Google Maps com a localização em Escada-PE, card de endereço e horários de atendimento.
- Animações reveal no sidebar e no formulário.

### 5. Acessibilidade ✅ *Auditoria e Correções Concluídas*
- **Contrastes corrigidos** (WCAG AA):
  - `brand-orange` escurecido de `#C85A00` → `#A84800` (5.84:1 em branco ✓)
  - `brand-sky-mid` escurecido de `#3498DB` → `#2471A3` (5.29:1 em branco ✓)
  - Botões primários migrados de `bg-brand-sky` para `bg-brand-sky-mid` (branco: 5.29:1 ✓)
  - `opacity-80/85` removido do texto de corpo no BentoGrid
- **Alt texts**: todos os `<img>` possuem `alt` descritivo ou `alt=""` + `aria-hidden` para decorativos.
- **Teclado / Foco**: `:focus-visible` global implementado; skip-link "pular para conteúdo"; mobile menu com `aria-expanded` / `aria-controls`.
- **ARIA**: landmark regions, `aria-label` em todos os elementos interativos, `role="alert" aria-live="polite"` no formulário.
- **Semântica**: `<section>`, `<article>`, `<nav>`, `<address>`, hierarquia de headings h1→h2→h3 consistente.

### 6. Responsividade ✅ *Revisão e Correções Concluídas*
- **Hero**: H1 reduzido de `text-4xl` para `text-3xl` na base mobile.
- **PageHero**: Títulos de `text-3xl` → `text-2xl` na base mobile.
- **About**: Grade de fotos migrada para `grid-cols-1 sm:grid-cols-2`; gap do layout `gap-20` → `gap-10 lg:gap-20`.
- **ContactForm**: Gap do layout `gap-16` → `gap-10 lg:gap-16`.
- **Testimonials**: Padding dos cards `p-8` → `p-5 sm:p-8`.
- **SobrePage stats strip**: Migrado para `grid-cols-1 sm:grid-cols-3` com `divide-y sm:divide-y-0 sm:divide-x` — empilha verticalmente no mobile com divisores horizontais.
- **Footer**: Gap `gap-10` → `gap-6 lg:gap-10`.
- **HomePage, DiferenciaisPage, DepoimentosPage**: Gaps e `py-*` ajustados para mobile (`gap-6 md:gap-10`, `py-12 sm:py-20`).
- Header, botões, formulários e imagens já eram responsivos — confirmado e mantido.

---

## 🚀 O que ainda precisa ser feito

### Fase 1: Conteúdo Real da Escola *(Depende da diretoria)*
- [ ] **Dados reais da Equipe (`/equipe`)**: Substituir nomes genéricos ("Professora 1", "A definir") pelos nomes, fotos e bios reais da diretora, professores e colaboradores. Os cards já estão prontos para receber os dados.
- [ ] **Revisão de copy completa**: Revisar todos os textos com a diretoria — bios, depoimentos, datas da timeline, descrições de diferenciais e mensagem da home. Confirmar que o WhatsApp (`whats.link/escolatempodeaprender`) e o Instagram (`@escolatempodeaprender24`) estão corretos.
- [ ] **Fotos reais**: Substituir as imagens do Unsplash por fotos reais da escola, das salas de aula, dos eventos e dos alunos (com autorização dos responsáveis).

### Fase 2: SEO Local *(Crucial para conversão orgânica)*
- [ ] **Meta Tags**: Configurar `<title>`, `<meta description>` e Open Graph (preview para WhatsApp/redes sociais) em cada rota — otimizados para pesquisas como "escola infantil em Escada PE" e "matrícula fundamental Escada".
- [ ] **Favicon e ícones PWA**: Adicionar favicon real e ícones para tela inicial de celular.
- [ ] **`sitemap.xml` e `robots.txt`**: Configurar para indexação correta pelo Google.

### Fase 3: Build e Deploy *(Lançamento)*
- [ ] **Teste em dispositivos reais**: Confirmar experiência em iPhone, Android e tablets físicos além da simulação por código.
- [ ] **Build de produção**: Rodar `npm run build` e validar que não há erros ou warnings críticos.
- [ ] **Deploy**: Publicar na plataforma definitiva (Vercel ou Netlify recomendados — integração direta com o repositório Git).
- [ ] **Domínio personalizado**: Configurar domínio próprio (ex: `escolatempodeaprender.com.br`) apontando para o deploy.
- [ ] **Analytics**: Adicionar Google Analytics ou Plausible para acompanhar visitas e conversões de matrícula após o lançamento.
