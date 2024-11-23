<h1 align="center">SISTEMA DE MONITORAMENTO E GERENCIAMENTO DE RECARGA DE VEÍCULOS ELÉTRICOS
</h1>

<h2>Descrição</h2>
<p>Este projeto consiste em um painel de recarga para veículos elétricos, desenvolvido com uma arquitetura full-stack utilizando <strong>React</strong> no front-end e <strong>Node.js</strong> com <strong>Express</strong> no back-end. A aplicação permite gerenciar recargas, visualizar estações de recarga e otimizar o uso de fontes de energia renováveis.</p>

<h3>Funcionalidades:</h3>
<ul>
    <li><strong>Gerenciar Recargas:</strong>
        <ul>
            <li>Exibe o status das recargas em tempo real.</li>
            <li>Permite criar novas recargas.</li>
            <li>Atualiza o status das recargas existentes.</li>
        </ul>
    </li>
    <li><strong>Visualizar Estações de Recarga:</strong>
        <ul>
            <li>Lista todas as estações disponíveis.</li>
            <li>Exibe informações sobre cada estação, como nome e localização.</li>
        </ul>
    </li>
    <li><strong>Recomendações de Energia:</strong>
        <ul>
            <li>Fornece recomendações baseadas na localização do usuário.</li>
        </ul>
    </li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
    <li><strong>React</strong> (para o front-end)</li>
    <li><strong>React Router DOM</strong> (para navegação entre páginas)</li>
    <li><strong>Node.js</strong> (para o back-end)</li>
    <li><strong>Express.js</strong> (framework para Node.js)</li>
    <li><strong>Sequelize</strong> (ORM para interação com o banco de dados)</li>
    <li><strong>SQLite</strong> (banco de dados leve utilizado para desenvolvimento)</li>
    <li><strong>Axios</strong> (para requisições HTTP)</li>
    <li><strong>Bcrypt</strong> (para hash de senhas e autenticação)</li>
    <li><strong>CORS</strong> (para permitir requisições de diferentes origens)</li>
    <li><strong>Dotenv</strong> (para gerenciar variáveis de ambiente)</li>
    <li><strong>Socket.IO</strong> (para comunicação em tempo real)</li>
    <li><strong>JSON Web Token (JWT)</strong> (para autenticação segura)</li>
    <li><strong>React Icons</strong> (para ícones na interface)</li>
</ul>

<h2>Requisitos</h2>
<ul>
    <li><strong>Node.js</strong>: Certifique-se de que o Node.js esteja instalado em sua máquina.</li>
    <li><a href="https://nodejs.org/en/download/" target="_blank">Clique aqui para baixar o Node.js</a></li>
</ul>

<h2>Como Instalar</h2>
<ul>
    <li><strong>Acesse a pasta do front-end:</strong>
        <pre><code>cd web</code></pre>
        <strong>Instale as dependências:</strong>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Acesse a pasta do back-end:</strong>
        <pre><code>cd server</code></pre>
        <strong>Instale as dependências:</strong>
        <pre><code>npm install</code></pre>
    </li>
</ul>

<h2>Como Rodar o Projeto</h2>
<ol>
     <li><strong>Execute o servidor de desenvolvimento do back-end:</strong>
        <pre><code>cd server</code></pre>
        <pre><code>npm run dev</code></pre>
        <p>O servidor do back-end estará disponível em: 
           <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
        <p><strong>Popule o banco de dados:</strong> Após iniciar o servidor, execute o seguinte comando para popular o banco de dados com dados iniciais:</p>
        <pre><code>node src/seeder/seed.js</code></pre>
    </li>
    <li><strong>Execute o servidor de desenvolvimento do front-end:</strong>
        <pre><code>cd web</code></pre>
        <pre><code>npm run dev</code></pre>
    </li>
</ol>

<strong>Este projeto foi desenvolvido como trabalho acadêmico.</strong>

<p><strong>Licença:</strong> Todos os direitos reservados.</p>
