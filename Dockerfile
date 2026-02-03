FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies (skip lock file)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
