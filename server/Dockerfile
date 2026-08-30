FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./
COPY prisma ./prisma/

# Instalar TODAS as dependências (incluindo devDependencies para ts-node)
RUN npm ci

# Gerar o cliente Prisma (NÃO precisa de DATABASE_URL)
RUN npx prisma generate

# Copiar o restante do código
COPY . .

# Expor a porta
EXPOSE 8080

# Iniciar o servidor com ts-node
CMD ["node", "node_modules/ts-node/dist/bin.js", "src/index.ts"]
