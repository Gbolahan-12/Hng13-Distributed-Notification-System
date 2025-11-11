# Use Node.js 18 Alpine as base
FROM node:18-alpine

# Install OpenSSL (required by Prisma)
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching layer)
COPY package*.json ./

# Install dependencies (including dev for Prisma)
RUN npm ci --include=dev
RUN npm install -g prisma

# Copy Prisma schema and source code
COPY prisma ./prisma
COPY src ./src

# Generate Prisma client (schema must exist now)
RUN npx prisma generate

# Expose the service port
EXPOSE 4000

# Start the service
CMD ["npm", "run", "start"]