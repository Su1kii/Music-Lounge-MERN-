/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_PORT: string;
  VITE_MONGO_URI: string;
  VITE_ADMIN_EMAIL: string;
  VITE_CLOUDINARY_API_SECRET: string;
  VITE_CLOUDINARY_API_KEY: string;
  VITE_CLOUDINARY_CLOUD_NAME: string;
  VITE_NODE_ENV: string;
  VITE_CLERK_PUBLISHABLE_KEY: string;
  VITE_CLERK_SECRET_KEY: string;
  // Add any other variables you use in frontend
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
