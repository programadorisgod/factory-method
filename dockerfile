FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "dev"]