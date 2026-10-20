# 🌤️ ClimaTech - Catálogo Interativo de Clima

Aplicação web interativa desenvolvida em React para consulta meteorológica em tempo real, consumindo a API REST pública da **OpenWeatherMap**, com gerenciamento de estado moderno, custom hooks e estilização responsiva com **Tailwind CSS**.

Projeto desenvolvido para a **Avaliação Prática AP2 - Desenvolvimento de Aplicações Front-End**.

---

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para interfaces modulares e reativas.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida para o ecossistema frontend.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização ágil e responsiva.
- **[OpenWeatherMap API](https://openweathermap.org/)**: API RESTful para dados meteorológicos globais em tempo real.

---

## 🌐 API Utilizada e Endpoints

- **Provedor:** [OpenWeatherMap](https://openweathermap.org/api)
- **Endpoint Base:** `https://api.openweathermap.org/data/2.5/weather`
- **Parâmetros Utilizados:**
  - `q`: Nome da cidade (ex: `Torres`, `São Paulo`).
  - `units=metric`: Unidades em Celsius (°C).
  - `lang=pt_br`: Descrição das condições meteorológicas traduzidas para o português.
  - `appid`: Chave de autenticação da API (*API Key*).
- **Exemplo de URL gerada:**
  ```text
  https://api.openweathermap.org/data/2.5/weather?q=Torres&units=metric&lang=pt_br&appid=SUA_API_KEY
  ```

---

## 🛠️ Instruções de Instalação e Execução

### 1. Pré-requisitos
- Node.js instalado (versão 18+ recomendada)
- Gerenciador de pacotes `npm`

### 2. Instalação
Clone o repositório ou descompacte o arquivo do projeto e acesse o diretório raiz:
```bash
cd "AP2 aplicacoes front end"
npm install
```

### 3. Executando em Modo de Desenvolvimento
Inicie o servidor local do Vite:
bash
npm run dev

Acesse o link informado no terminal (geralmente `http://localhost:5173/`).

---

## 📸 Demonstração da Aplicação

- **Tela Inicial com Catálogo:** Exibe cards meteorológicos com temperatura em °C, condição do tempo com ícone oficial, umidade e velocidade do vento.
- **Busca Interativa:** Campo de busca com adição instantânea de novas cidades ao catálogo.
- **Feedback de Loading e Erro:** Animação tipo *pulse* durante o carregamento e card amigável com botão de fechamento em caso de cidade não encontrada.
- **Ações:** Botão interativo para remoção individual de cards da lista.
