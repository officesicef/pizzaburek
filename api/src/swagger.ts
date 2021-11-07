import routes from '@/routes';

import config from './config';

const AVAILABLE_SERVERS =
  config.environment === 'development'
    ? [
        {
          url: 'http://localhost:5555',
          description: 'Development server',
        },
      ]
    : [
        {
          url: 'https://api.leprinka.hr',
          description: 'Production server',
        },
      ];

export default {
  openapi: '3.0.0',
  info: {
    title: 'Hackathon API',
    version: '1.0.0',
    description: 'Hackathon API documentation',
  },
  servers: AVAILABLE_SERVERS,
  components: {
    securitySchemes: {
      Bearer: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description:
          'JWT Authorization header using the Bearer scheme. \r\n\r\n Enter \'Bearer\' [space] and then your token in the text input below.\r\n\r\nExample: "**Bearer 1safs-sdf5d-020fd**"',
      },
    },
  },
  paths: {
    ...routes.auth.swagger,
    ...routes.generics.swagger,
    ...routes.userInstitution.swagger,
  },
};
