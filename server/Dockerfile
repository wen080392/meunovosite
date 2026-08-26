# Usa uma imagem oficial do Node.js leve
FROM node:20-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de configuração do npm
COPY package*.json ./
COPY prisma ./prisma/

# Instala as dependências
RUN npm install

# Copia o resto do código da aplicação
COPY . .

# Gera o client do Prisma (precisa rodar depois de copiar a pasta prisma)
RUN npx prisma generate

# Compila o TypeScript (caso haja build, senão roda com ts-node)
# RUN npm run build # Descomente se adicionar script de build
# Como o projeto atual usa ts-node para rodar o backend, vamos usá-lo diretamente
# Porém em produção o ideal é compilar para JS primeiro.

EXPOSE 3001

# Comando para rodar a aplicação em produção
# Se houver migração de banco pendente, idealmente deve-se rodar antes
CMD ["npm", "run", "dev"]
