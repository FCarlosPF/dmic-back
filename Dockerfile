FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto usando npm
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["npm", "start"]