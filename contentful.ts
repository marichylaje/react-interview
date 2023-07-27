import { createClient } from 'contentful';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;
