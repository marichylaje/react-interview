import { createClient } from 'contentful';
/*import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();*/

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
