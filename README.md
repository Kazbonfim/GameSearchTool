# GameSearchTool
Uma ferramenta simples, demonstrando o consumo, e uso de dados vindos de uma API externa - pode ser necessário criar um arquivo .env com sua própria chave de API do RAWG, API utilizada para fins de testes dessa aplicação. Comentários estão o mais claros possíveis, é realmente material de estudo, apoio e de reutilização futura.

Pra utilizar em seu ambiente de desenvolvimento, só clonar e instalar as dependências - padrão de nodejs; pra instalar, abra o CMD na raíz do projeto que você acabou de clonar, e escreva a seguinte linha: ``npm install``
Em seguida, ele vai baixar todas as dependências - que não são muitas, tenha calma moreno -, e você pode inicializar e testar por conta usando ``npm run dev``.

Ah! Abra o site do RAWG e crie sua própria chave de API, é bem fácil, não terá dificuldades; em seguida, crie um arquivo ``.env`` na raíz, e crie uma variável chamada ``API_KEY=SUACHAVESEMASPAS``, isso vai garantir que o back-end pegue sua chave, e utilize, sem passar informações sensíveis pro front-end, dando mais segurança em tudo - se for usar como está, instale o Helmet, ele vai ajudar a evitar alguns tipos de ataques mais rústicos.

Façam um bom uso, qualquer dúvida é só abrir uma PR 🥰
