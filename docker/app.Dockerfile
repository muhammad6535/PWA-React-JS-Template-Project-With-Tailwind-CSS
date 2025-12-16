# Stage 1: Build the React Application
FROM node:18-alpine AS node-builder

WORKDIR /app

# Copy package.json from the docker directory as requested in the structure
COPY ./src ./src
COPY index.html ./
COPY package.json ./
COPY package-lock.json ./
COPY postcss.config.cjs ./
COPY README.md ./
COPY tailwind.config.js ./
COPY vite.config.js ./

# Install dependencies
RUN npm install
RUN npx update-browserslist-db@latest

# Build the static files
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
# COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from the build stage
COPY --from=node-builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

