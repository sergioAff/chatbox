# Chatbox de Texto a Voz

Este proyecto es una aplicación web desarrollada con **Next.js** que convierte texto en voz utilizando la API de **Hugging Face** para **text-to-speech** (TTS). La aplicación permite a los usuarios escribir texto y escucharlo en una voz natural, ideal para proyectos de accesibilidad o para experimentar con TTS en tiempo real.

## Características
- Conversión de texto a voz en tiempo real.
- Interfaz intuitiva y fácil de usar.
- Sonido de alta calidad con voces naturales.
- Respuesta rápida para grandes volúmenes de texto.

## Tecnologías Utilizadas
- **Next.js**: Framework de React para aplicaciones web optimizadas.
- **API de Hugging Face**: Utilizada para generar la voz en tiempo real a partir del texto.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo.

## Instalación

1. **Clonar el repositorio**
   ```
   git clone https://github.com/sergioAff/chatbox.git
   cd chatbox
   ```
2. **Instalar dependencias**

 Asegúrate de tener Node.js instalado. Luego, ejecuta:
 ```
   npm install
```

3. **Configurar las credenciales de Hugging Face**
Regístrate en Hugging Face para obtener una clave de API. Luego, crea un archivo .env.local en la raíz del proyecto con el siguiente contenido:
```
NEXT_PUBLIC_HUGGINGFACE_API_KEY=tu_api_key
```

4. **Iniciar el servidor de desarrollo**
   ```
   npm run dev
   ```

**La aplicación estará disponible en http://localhost:3000.**
