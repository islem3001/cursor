import express from 'express';
import { createServer } from 'http';
import { registerRoutes } from './routes';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist/public')));
}

// Create HTTP server
const httpServer = await registerRoutes(app);

// Start server
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
