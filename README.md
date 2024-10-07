🌟 Performance Testing with K6

Este repositório contém um conjunto de scripts de teste de performance utilizando o K6, uma ferramenta de código aberto e extensível para testes de carga.

🚀 O que é o K6?
O K6 é uma ferramenta de automação de testes de carga e performance, voltada para desenvolvedores e engenheiros de qualidade. Ele permite simular múltiplos usuários simultâneos interagindo com sua aplicação, medindo o desempenho sob diversas condições.

🛠️ Tecnologias Utilizadas
K6: Ferramenta de testes de carga.
JavaScript: Linguagem usada para escrever os scripts de teste.
Grafana: Integração opcional para visualização de métricas e dashboards.

🚧 Pré-requisitos
Certifique-se de ter o K6 instalado em sua máquina. Você pode instalá-lo facilmente seguindo as instruções abaixo:

# Para Linux/macOS usando Homebrew:
brew install k6

# Para Windows, use o Chocolatey:
choco install k6

Para maiores detalhes de instalação, visite a documentação oficial do K6.  https://k6.io/docs/


Aqui está um exemplo de um README para um projeto usando o K6, com um design limpo e atrativo. Esse modelo pode ser ajustado conforme o foco do seu projeto:

🌟 Performance Testing with K6

Este repositório contém um conjunto de scripts de teste de performance utilizando o K6, uma ferramenta de código aberto e extensível para testes de carga.

🚀 O que é o K6?
O K6 é uma ferramenta de automação de testes de carga e performance, voltada para desenvolvedores e engenheiros de qualidade. Ele permite simular múltiplos usuários simultâneos interagindo com sua aplicação, medindo o desempenho sob diversas condições.

📂 Estrutura do Projeto
ex:
Copiar código
├── scripts/
│   ├── test_script_1.js    # Script de teste 1
│   ├── test_script_2.js    # Script de teste 2
├── results/
│   ├── result_YYYY-MM-DD.json    # Resultados dos testes de carga
├── dashboard/
│   ├── grafana_dashboard.json    # Exemplo de dashboard Grafana para visualizar resultados
└── README.md

🛠️ Tecnologias Utilizadas
VsCode: IDE
K6: Ferramenta de testes de carga.
JavaScript: Linguagem usada para escrever os scripts de teste.
Grafana: Integração opcional para visualização de métricas e dashboards.
InfluxDB: Para armazenar os dados de resultados (opcional).

🚧 Pré-requisitos
Certifique-se de ter o K6 instalado em sua máquina. Você pode instalá-lo facilmente seguindo as instruções abaixo:

bash
Copiar código
# Para Linux/macOS usando Homebrew:
brew install k6

# Para Windows, use o Chocolatey:
choco install k6
Para maiores detalhes de instalação, visite a documentação oficial do K6.

🔥 Como Rodar os Testes
Executar um teste básico
1-Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2-Execute o teste de carga com o comando abaixo:
ex:
k6 run scripts/test_script_1.js

3-Executar um teste com relatórios
Para obter relatórios detalhados com saída em JSON: k6 run --out json=results/test_results.json scripts/test_script_1.js

🖥️ Exemplo de Script de Teste
Aqui está um exemplo simples de script em JavaScript usando K6:

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Aumenta para 50 usuários
    { duration: '1m', target: 100 },  // Aumenta para 100 usuários
    { duration: '30s', target: 0 },   // Finaliza o teste
  ],
};

export default function () {
  const res = http.get('https://api.suaaplicacao.com');
  
  check(res, {
    'status 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}

📊 Visualizando Resultados
Os resultados podem ser visualizados diretamente no terminal ou exportados para um banco de dados e visualizados em um dashboard Grafana.
comandos:

No browser digite
http://localhost:5665/ui/?endpoint=/

e rode o comando no script que deseja visualizar. Aqui será o script carga5.js abaixo

import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios:{
        listar: {
            executor: 'constant-arrival-rate',
            exec: 'listar',
            duration: '1m',
            rate: 200,
            timeUnit: '1s',
            preAllocatedVUs: 200,
            gracefulStop: '5s',
            tags: { test_type: 'listagem_crocodilos' },

        },
        buscar: {
            executor: 'per-vu-iterations',
            exec: 'buscar',
            vus: 400,
            iterations: 20,
            maxDuration: '1m',
            tags: { test_type: 'busca_crocodilos' },
            gracefulStop: '5s'
        }
    },
    discardResponseBodies: true
}

export function listar(){
    http.get(__ENV.URL+'/crocodiles')
};

export function buscar(){
    if(__VU % 2 === 0){
        http.get(__ENV.URL+'/crocodiles/2')
    }else{
        http.get(__ENV.URL+'/crocodiles/1')
    }
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }

  * No gitbash rode o comando

  K6_WEB_DASHBOARD=true k6 run carga5.js -e URL=https://test-api.k6.io/public

🤝 Contribuições
Contribuições são bem-vindas! Fique à vontade para abrir uma issue ou enviar um pull request.

📄 Licença
Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo LICENSE para mais detalhes.

🧑‍💻 Autor
Elrison Gomes da Silva
Engenheiro de Qualidade | Tester QA | Analista de Testes | Desenvolvedor de Testes