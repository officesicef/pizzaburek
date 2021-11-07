import cors from 'cors';
import express, { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import fileUpload from 'express-fileupload';

import routes from '@/routes';
import swagger from '@/swagger';
import { error } from '@/middlewares';

const app: Express = express();

app.use(cors());

app.enable('trust proxy');
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger));

app.use('/', routes.get());

app.use(error);

export default app;
