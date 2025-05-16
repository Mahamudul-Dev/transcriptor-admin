# -------- Stage 1: Build the Next.js app --------
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client (for type-safe DB access)
RUN npx prisma generate

# Build the Next.js application
RUN npm run build


# -------- Stage 2: Production image --------
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy necessary files for production
COPY package*.json ./
COPY prisma ./prisma/
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/postcss.config.mjs ./
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/node_modules ./node_modules

# Install only production dependencies
RUN npm install --only=production

# Generate Prisma client in prod container (uses schema from copied /prisma/)
RUN npx prisma generate

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
