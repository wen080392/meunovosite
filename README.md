# Vibe Tech — Site Institucional

Site B2B de captação de leads para empresa de tecnologia. Construído com React + Vite no frontend e Express + Prisma + PostgreSQL no backend.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Estilização | CSS vanilla (dark mode) |
| Roteamento | React Router v6 |
| Formulários | react-hook-form |
| Backend | Node.js + Express + TypeScript |
| ORM | Prisma |
| Banco de dados | PostgreSQL (produção) / SQLite (dev local) |
| E-mail | Nodemailer + Gmail SMTP |
| Hospedagem | Vercel (frontend) + Railway (backend) |

---

## Estrutura do Projeto

```
MEUNOVOSITE/
├── src/                  # Frontend React
│   ├── pages/            # Páginas da aplicação
│   ├── components/       # Componentes reutilizáveis
│   └── data/siteData.ts  # Dados e lógica de negócio
├── server/               # Backend Express
│   ├── src/index.ts      # Entry point da API
│   ├── src/mailer.ts     # Serviço de e-mail
│   └── prisma/           # Schema e migrações do banco
├── public/               # Assets estáticos
└── index.html            # Entry point do frontend
```

---

## Deploy em Produção

### Backend — Railway

1. Acesse [railway.app](https://railway.app) e crie uma conta
2. Clique em **New Project → Deploy from GitHub repo**
3. Selecione o repositório `meunovosite` e defina o **Root Directory** como `/server`
4. Adicione o plugin **PostgreSQL** ao projeto (Railway fornece gratuitamente)
5. Configure as variáveis de ambiente em **Variables**:

```env
DATABASE_URL=<copiado automaticamente do plugin PostgreSQL>
PORT=3001
SMTP_USER=seu-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

6. Clique em **Deploy** — Railway roda `npm install` + `prisma migrate deploy` + `npm start` automaticamente
7. Copie a **URL pública** gerada (ex: `https://meunovosite-backend.up.railway.app`)

### Frontend — Vercel

1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Clique em **Add New Project → Import Git Repository**
3. Selecione o repositório `meunovosite`
4. Configure as variáveis de ambiente:

```env
VITE_API_URL=https://meunovosite-backend.up.railway.app
```

5. Clique em **Deploy** — Vercel faz o build e hospeda automaticamente
6. Configure o domínio `vibetech.com.br` em **Settings → Domains**

---

## Desenvolvimento Local

### Pré-requisitos
- Node.js 18+

### Frontend
```bash
npm install
npm run dev
# Acesse: http://localhost:3000
```

### Backend
```bash
cd server
npm install
# Crie o arquivo .env baseado no .env.example
npx prisma migrate dev --name init
# Inicie o servidor:
node node_modules/ts-node/dist/bin.js src/index.ts
# API disponível em: http://localhost:3001
```

---

## Variáveis de Ambiente

Veja `server/.env.example` para a lista completa de variáveis necessárias.

---

## Funcionalidades

- **Calculadora de investimento** — Estima o custo de projetos de tecnologia
- **Diagnóstico empresarial** — Identifica oportunidades de automação
- **Captação de leads** — Formulário com notificação por e-mail
- **Portfólio** — Cases de estudo
- **SEO** — Meta tags, sitemap, robots.txt

---

## Contato

**Vibe Tech** — vibetechvibe92@gmail.com
