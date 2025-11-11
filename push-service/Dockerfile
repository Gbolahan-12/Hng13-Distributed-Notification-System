# --- Dockerfile ---
FROM node:18-alpine

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install ALL dependencies, including devDependencies
RUN npm install

# Copy the rest of your source code
COPY . .

RUN npm install -g typescript

# Build TypeScript -> dist
RUN npx tsc

# Expose the port your service uses
EXPOSE 8000

# Start the compiled JavaScript
CMD ["node", "dist/index.js"]