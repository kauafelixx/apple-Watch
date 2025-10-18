# ⌚ Apple Watch

Uma recriação interativa e responsiva da experiência de compra de um relógio Apple Watch, implementada puramente com as tecnologias web fundamentais (HTML, CSS e JavaScript).

# ✨ Funcionalidades Implementadas

Customização,🎨 Seleção de Cor,"Altera a imagem principal, o nome da pulseira e as miniaturas de visualização."

Customização,📏 Escolha de Tamanho,"Permite alternar entre os tamanhos de caixa 41 mm e 45 mm, aplicando uma animação de escala (zoom) na imagem principal para simular o produto maior/menor."

Visualização,🖼️ Troca de Imagem,O usuário pode selecionar entre diferentes ângulos do produto (miniaturas) para visualizar na imagem principal.

Interface,🛒 Informações de Compra,"Exibe preços, parcelamento e detalhes de entrega em um layout fiel ao design da Apple."


# 💻 Tecnologias Utilizadas
O projeto foi desenvolvido para praticar manipulação do DOM e estruturação de código, utilizando:

HTML5: Estrutura semântica da página, incluindo a navegação global (simulada), visualização do produto e formulários de opção.

CSS3: Estilização baseada no design system da Apple, com uso de flexbox, grid e CSS Nesting (aninhamento), além de transições e transformações (transform: scale) para o efeito de troca de tamanho.

JavaScript (Puro):

Manipulação do DOM: Responsável por ouvir eventos (onclick) e atualizar dinamicamente:

O src (source) da imagem principal.

O conteúdo de texto (textContent) do título e nome da cor.

Classes (classList.add/remove) para aplicar o efeito de escala no tamanho da caixa.


# 📁 Estrutura de Arquivos (Base)
O projeto segue uma estrutura básica e clara:

/apple-Watch

├── index.html          # Estrutura principal da página

├── style.css           # Todos os estilos CSS

├── index.js            # Lógica de interatividade (Troca de cor, tamanho e imagem)

└── /imagens            # Diretório com os assets (cores, ícones, selo, etc.)

# 🚀 Para Visualizar o Projeto
Basta clonar o repositório e abrir o arquivo index.html em seu navegador.
