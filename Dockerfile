# Use a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instale as dependências
RUN npm install

# Exponha a porta em que o aplicativo Nest.js será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
