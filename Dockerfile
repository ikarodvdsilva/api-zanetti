# Use a imagem oficial do Node.js
FROM node:20.5.1

# Instale o utilitário ping
RUN apt-get update && apt-get install -y iputils-ping

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instale as dependências
RUN npm install
ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Exponha a porta em que o aplicativo Nest.js será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
