var express = require('express');
var router = express.Router();
require('dotenv').config();

const apiKey = process.env.API_KEY;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Isso pode ser externalizado, encapsulado, futuramente e se for necessário (talvez pra deixar tudo menos verboso?)
router.get('/tools', async function (req, res) {

  console.log('Conexão iniciada');
  // Verificando chaves de API...
  if (!apiKey) {
    return res.status(500).json({ error: 'API key não configurada.' });
  }
  // Entenda que, [search] se trata de um termo genérico, que é embutido como parâmetro na URL de busca da API externa
  // Nome do Parâmetro: Você apenas mudou o nome do parâmetro na URL de search para busca. O conceito é o mesmo; o que importa é que você deve usar o mesmo nome na URL e ao acessar os dados no seu código.
  const query = req.query.search;

  if (!query) {
    return res.status(400).json({ message: "Preencha algo no campo de busca antes..." });
  }

  // Para testes: https://api.rawg.io/api/games?key=959d88c71a27478a9db3ad289f4ec6c1&search=zelda
  // Funcionando!

  try {
    // Tentando comunicação com a API externa
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${query}`);
    const data = await response.json();
    console.log(data);

    // Se a resposta for OK, então seguimos coletando os dados recebidos, conforme [data.results]
    if (response.ok) {
      return res.json(data.results);
    } else {
      return res.status(response.status).json({ error: data }); // Do contrário, retornamos um erro
    }

    // Se a comunicação com a API falhar, vamos informar desde o começo, por isso, usamos funções assíncronas + try/catch, pois não sabemos a real resposta do serviço almejado
  } catch (error) {
    console.log(`Houve algum erro ao buscar os jogos. Query: ${query}`, error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }

})

module.exports = router;
