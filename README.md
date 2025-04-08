# Estrutura_de_site_React_TS
Exemplo de estrutura de web padrao para aprendizado

## ✨ Funcionalidades Implementadas

*   **Estrutura de Layout:**
    *   Componente `Layout` reutilizável que envolve todas as páginas.
    *   `Header` fixo com navegação principal.
    *   `Footer` com informações e links úteis.
*   **Roteamento:**
    *   Configuração de rotas usando `react-router-dom` no arquivo `src/routes/index.tsx`.
    *   Navegação entre as páginas Home, Sobre e uma página 404 (NotFound).
*   **Páginas:**
    *   **Home (`/`)**: Página inicial de boas-vindas com alguns cards de exemplo.
    *   **Sobre (`/about`)**: Página com informações sobre o projeto/equipe (exemplo).
    *   **NotFound (`*`)**: Página exibida quando uma rota inválida é acessada.
*   **Estilização com Tailwind CSS:**
    *   Aplicação de classes utilitárias para estilizar todos os componentes e páginas.
    *   Design responsivo que se adapta a diferentes tamanhos de tela.
    *   Configuração de um tema básico no `tailwind.config.js` (cores primárias, fontes).
*   **TypeScript:**
    *   Tipagem estrita para props (`interface`) e componentes (`FC`).
    *   Uso de tipos definidos em `src/types` (exemplo).
    *   Funções utilitárias tipadas em `src/utils` (exemplo).

## 📁 Estrutura de Pastas

O projeto segue uma estrutura de pastas modular:
src/
├── assets/ # Recursos estáticos (imagens, fontes)
├── components/ # Componentes reutilizáveis (Header, Footer, Layout, Button)
├── contexts/ # (Opcional) Contextos React
├── hooks/ # (Opcional) Custom Hooks
├── pages/ # Componentes que representam páginas completas (Home, About, NotFound)
├── routes/ # Configuração do roteamento
├── services/ # (Opcional) Lógica de chamadas API
├── styles/ # Arquivos de estilo globais (ex: global.css)
├── types/ # Definições de tipos TypeScript globais
├── utils/ # Funções utilitárias
├── App.tsx # Componente raiz da aplicação
└── main.tsx # Ponto de entrada da aplicação (renderiza o App)
