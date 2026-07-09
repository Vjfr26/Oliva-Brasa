# Oliva & Brasa — Site de restaurante

Landing page profissional para um restaurante de cozinha de autor, com design escuro elegante, imagens de alta qualidade e animações fluidas. Conteúdo em português de Portugal.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (paleta personalizada: tinta, dourado, creme)
- **Framer Motion** (parallax, reveals ao fazer scroll, carrossel, contadores)
- **Lucide React** (iconografia)

## Secções

| Secção | Destaque |
|---|---|
| Início (Hero) | Imagem em ecrã inteiro com zoom lento e parallax, entrada escalonada do título |
| Serviços | Grelha tipo *bento* com 6 cartões animados e tile de chamada à ação |
| Sobre Nós | Composição de imagens com parallax e contadores animados |
| Testemunhos | Carrossel com avanço automático e transições direcionais |
| Contacto | Formulário de reservas com estado de sucesso animado |

Extras: navbar translúcida com blur ao fazer scroll, menu móvel em ecrã inteiro, faixa *marquee* infinita, banda parallax com citação do chef e botão "voltar ao topo".

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # pré-visualizar o build
```
