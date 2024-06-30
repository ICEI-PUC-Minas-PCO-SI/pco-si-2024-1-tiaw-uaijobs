[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14412781&assignment_repo_type=AssignmentRepo)
# Nome do projeto
Escreva um ou dois  parágrafo resumindo o objetivo do seu projeto.

## Alunos integrantes da equipe

* Guilherme de Oliveira Souza
* Igor Maia Moreira Fernandes
* Luis Henrique Sampaio Vieira
* Thiago Moreira de Queiroz
* Victor Schneider do Vale
* Vitor Prates de Souza Lima

## Professores responsáveis

* Amália Soares Vieira de Vasconcelos
* Leonardo Vilela Cardoso

## Instruções de utilização

Assim que a primeira versão do sistema estiver disponível, deverá complementar com as instruções de utilização. Descreva como instalar eventuais dependências e como executar a aplicação.

### Roteiro de Instruções para Configuração do Projeto

#### 1. Baixando o Código
**Via arquivo ZIP:**
1. **Receba o arquivo ZIP:** Você deve receber um arquivo chamado `(INSERIR NOME).zip`.
2. **Extraia o arquivo:** Clique com o botão direito no arquivo ZIP e selecione "Extrair aqui" ou "Extrair para INSERIR NOME".

**Via GitHub:**
1. **Acesse o repositório:** Abra seu navegador e vá até o repositório do projeto no GitHub. O link do repositório é [pco-si-2024-1-tiaw-uaijobs](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs).
2. **Baixe o repositório:** Clique no botão "Code" e depois em "Download ZIP". Extraia o arquivo ZIP da mesma forma descrita acima.

#### 2. Instalando VS Code
1. **Baixe o Visual Studio Code:** Acesse [VS Code](https://code.visualstudio.com/) e clique em "Download for Windows" (ou o sistema operacional correspondente).
2. **Instale o VS Code:** Abra o arquivo baixado e siga as instruções do instalador.

#### 3. Configurando o Projeto no VS Code
1. **Abra o VS Code:** Dê um duplo clique no ícone do VS Code.
2. **Abra a pasta do projeto:** No VS Code, clique em "File" -> "Open Folder" e navegue até a pasta extraída do projeto (`INSERIR NOME`). Selecione a pasta e clique em "Select Folder".

#### 4. Instalando Node.js
1. **Baixe o Node.js:** Vá para [Node.js](https://nodejs.org/) e baixe a versão recomendada para o seu sistema operacional.
2. **Instale o Node.js:** Abra o arquivo baixado e siga as instruções do instalador.

#### 5. Instalando o JSON Server
**Opção 1: Instalação Global**
1. **Abra o terminal do VS Code:** No VS Code, clique em "Terminal" -> "New Terminal".
2. **Instale o JSON Server globalmente:** No terminal, digite o seguinte comando e pressione Enter:
   ```bash
   npm install -g json-server
   ```

**Opção 2: Usando npx**
1. **Abra o terminal do VS Code:** No VS Code, clique em "Terminal" -> "New Terminal".
2. **Instale o JSON Server localmente:** No terminal, digite o seguinte comando e pressione Enter:
   ```bash
   npm install json-server
   ```

#### 6. Iniciando o JSON Server
**Opção 1: Iniciar Globalmente**
1. **Navegue até a pasta do projeto:** No terminal, certifique-se de que você está na raiz do projeto onde o arquivo `db.json` está localizado (pasta `codigo`).
2. **Inicie o JSON Server:** No terminal do VS Code, execute o comando:
   ```bash
   json-server --watch db.json
   ```

**Opção 2: Iniciar via npx**
1. **Navegue até a pasta do projeto:** No terminal, certifique-se de que você está na raiz do projeto onde o arquivo `db.json` está localizado (pasta `codigo`).
2. **Inicie o JSON Server:** No terminal do VS Code, execute o comando:
   ```bash
   npx json-server --watch db.json
   ```
   
Ambos os comandos iniciarão o servidor JSON, que estará disponível em `http://localhost:3000`.

#### 7. Executando o Projeto
1. **Abra o arquivo HTML principal:** No VS Code, navegue até o arquivo `home.html` localizado na pasta `codigo/Paginas/Home/` e clique duas vezes para abri-lo.
2. **Abra no navegador:** Clique com o botão direito no arquivo `home.html` e selecione "Open with Live Server" (você precisa ter a extensão Live Server instalada no VS Code). Isso abrirá o projeto no seu navegador padrão.

### Resumo das Dependências e Ferramentas
- **Visual Studio Code:** Editor de código.
- **Node.js:** Ambiente de execução JavaScript.
- **JSON Server:** Servidor fake para dados JSON.

### Extensões Recomendadas para o VS Code
- **Live Server:** Para visualização em tempo real das mudanças no HTML.
- **Prettier:** Para formatação de código.

### Dicas Adicionais
- **Verifique se o Node.js está instalado corretamente:** No terminal, execute `node -v` e `npm -v` para verificar as versões instaladas.
- **Certifique-se de que o JSON Server está funcionando:** Acesse `http://localhost:3000` no navegador e veja se os dados JSON estão sendo exibidos.

