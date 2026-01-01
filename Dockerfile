# ================================
# Stage 1 – Build Angular
# ================================
FROM node:18-alpine AS build

WORKDIR /app

# Copia dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm ci

# Copia o restante do projeto
COPY . .

# Build de produção
RUN npm run build -- --configuration production


# ================================
# Stage 2 – Nginx (Runtime)
# ================================
FROM nginx:alpine

# Remove config default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia configuração customizada do Nginx (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos gerados pelo Angular
# ⚠️ Ajuste "nome-do-projeto" para o nome real da pasta em /dist
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html


# Expor porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
