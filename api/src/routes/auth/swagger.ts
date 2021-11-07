import { paths } from '@/constants';

export default {
  [paths.AUTH_HEALTH]: {
    get: {
      summary: 'Use to check if user is authenticated.',
      description: 'Use to authenticate user.',
      tags: ['Auth'],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: 'User is authenticated successfully.',
        },
        401: {
          description: 'Not authorized.',
        },
        500: {
          description:
            'Server error occurred while trying to authenticate user.',
        },
      },
    },
  },
  [paths.AUTH_LOGIN]: {
    post: {
      summary: 'Use to sign in a user.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: ['email', 'password'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User is signed in successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        422: {
          description:
            'Request was well-formed but was unable to be followed due to semantic errors',
        },
        500: {
          description: 'Server error occurred while trying to sign in user.',
        },
      },
    },
  },
  [paths.AUTH_CREATE_OR_VALIDATE_USER]: {
    post: {
      summary: 'Use to create or validate user in mobile application.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                },
                lastName: {
                  type: 'string',
                },
                phoneNumber: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: ['firstName', 'lastName', 'phoneNumber', 'password'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User is signed in or validated successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        422: {
          description:
            'Request was well-formed but was unable to be followed due to semantic errors',
        },
        500: {
          description:
            'Server error occurred while trying to sign in or validate user.',
        },
      },
    },
  },
  [paths.AUTH_REGISTER]: {
    post: {
      summary: 'Use to create institution.',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: ['email', 'name', 'password'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Institution is created successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        422: {
          description:
            'Request was well-formed but was unable to be followed due to semantic errors',
        },
        500: {
          description:
            'Server error occurred while trying to create institution.',
        },
      },
    },
  },
  [paths.swaggerBuild(paths.AUTH_USER)]: {
    get: {
      summary: 'Use to get auth user.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: 'Auth user is returned successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to get auth user results.',
        },
        404: {
          description: 'No entities found.',
        },
        500: {
          description: 'Server error occurred while trying to get auth user.',
        },
      },
    },
  },
};
