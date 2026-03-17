# 🍅 Chronos Pomodoro

> Domine seu tempo. Foque no que importa.

O **Chronos Pomodoro** é uma aplicação web de cronômetro baseada na técnica Pomodoro, projetada para ajudar você a organizar seu tempo de forma eficiente, alternando entre sessões de foco e descanso.

---

## ✨ Funcionalidades

- ⏱️ **Timer de foco** com duração configurável (padrão: 25 minutos)
- 😴 **Descanso curto** após cada sessão de foco (padrão: 5 minutos)
- 🛌 **Descanso longo** a cada 3 ciclos concluídos (padrão: 15 minutos)
- 🔔 **Alerta sonoro** ao fim de cada sessão
- 🌗 **Tema claro/escuro** alternável
- 📋 **Histórico de sessões** salvo automaticamente no navegador (localStorage)
- ⚙️ **Configurações personalizáveis** para ajustar os tempos de foco e descanso

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS

---

## 🚀 Como instalar e rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/Mrburg3000/chronos-pomodoro.git

# 2. Entre na pasta do projeto
cd chronos-pomodoro

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## 📖 Como usar

### 1. Iniciando uma sessão de foco
Clique no botão **Iniciar** para começar um ciclo de 25 minutos de foco. O timer começará a contagem regressiva na tela.

### 2. Descanso após o foco
Quando o timer zerar, um **som de alerta** será tocado. Clique no botão novamente para iniciar o **descanso curto** (5 minutos).

### 3. Descanso longo
Após **3 ciclos** de foco completados, o próximo descanso será o **descanso longo** (15 minutos), para uma recuperação mais completa.

### 4. Alternando o tema
Use o botão de tema no topo da página para alternar entre o modo **claro** ☀️ e **escuro** 🌙.

### 5. Visualizando o histórico
Acesse a página de **Histórico** para ver todas as suas sessões anteriores. Os dados ficam salvos no seu navegador, mesmo após fechar a aba.

### 6. Ajustando os tempos
Na página de **Configurações**, você pode personalizar a duração do timer de foco, do descanso curto e do descanso longo conforme sua preferência.
