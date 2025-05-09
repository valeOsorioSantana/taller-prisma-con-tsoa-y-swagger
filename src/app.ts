import 'reflect-metadata';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';

const app = express();
app.use(bodyParser.json());

RegisterRoutes(app);

// Swagger docs
app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  const swaggerDocument = await import('../build/swagger.json');
  res.send(swaggerUi.generateHTML(swaggerDocument));
});

export default app;
