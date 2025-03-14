# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the Next.js server
EXPOSE 3000

# Build the Next.js app
RUN npm run build

# Start Next.js server
CMD ["npm", "run", "start"]