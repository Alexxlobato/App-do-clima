# 🌤️ Buscador de Clima Local

Uma aplicação web simples e elegante que consome dados de APIs públicas para buscar e exibir as condições climáticas atuais de qualquer cidade do mundo em tempo real.

---

## 🚀 Demonstração

O projeto permite que o usuário digite o nome de uma cidade, faz a busca de coordenadas geográficas e, em seguida, renderiza na tela informações essenciais como temperatura, umidade e velocidade do vento.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web nativas, sem a necessidade de frameworks externos, focando em JavaScript moderno:

*   **HTML5:** Estruturação semântica da página.
*   **CSS3:** Estilização e layout responsivo.
*   **JavaScript (ES6+):** Manipulação de DOM, eventos e consumo de APIs assíncronas.
*   **APIs Utilizadas:**
    *   [Open-Meteo Geocoding API](https://open-meteo.com) - Para converter o nome da cidade em coordenadas (Latitude e Longitude).
    *   [Open-Meteo Weather Forecast API](https://open-meteo.com) - Para obter os dados meteorológicos atuais baseados nas coordenadas.

---

## 💡 Recursos e Boas Práticas Implementadas

*   **Asynchrony (Async/Await):** Requisições eficientes e organizadas usando funções assíncronas.
*   **Tratamento de Erros:** Estrutura `try/catch/finally` para gerenciar falhas de rede, respostas inválidas ou cidades não encontradas de forma amigável para o usuário.
*   **Segurança em URLs:** Uso de `encodeURIComponent` para garantir que cidades com espaços ou acentos (ex: "São Paulo") sejam processadas corretamente.
*   **UX (Experiência do Usuário):** Limpeza automática do campo de entrada e foco do cursor após a pesquisa, além de suporte para busca ao pressionar a tecla `Enter`.
*   **Modularidade:** Separação da lógica de requisição de dados da lógica de renderização da interface (HTML).

---

## 🔧 Como Executar o Projeto

Para rodar este projeto localmente, você não precisa instalar nenhuma dependência ou servidor complexo. Basta seguir os passos:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Alexxlobato/App-do-clima.git
    ```
2.  **Navegue até a pasta:**
    ```bash
    cd nome-do-seu-repositorio
    ```
3.  **Abra o arquivo principal:**
    Basta dar um duplo clique no arquivo `index.html` ou usar a extensão *Live Server* no VS Code.

---

Feito com 💻 e ☕ por [Alex Lobato](https://github.com/Alexxlobato).
