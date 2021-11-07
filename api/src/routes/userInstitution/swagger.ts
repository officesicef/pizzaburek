import { paths } from '@/constants';

export default {
  [paths.swaggerBuild(paths.USER_INSTITUTIONS)]: {
    post: {
      summary: 'Use to connect user to institution.',
      tags: ['User & Institution'],
      requestBody: {
        description: 'User and institution IDs used for connection.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                userId: { type: 'integer' },
                institutionId: { type: 'integer' },
              },
              required: ['userId', 'institutionId'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User is connected to institution successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to create institution.',
        },
        500: {
          description:
            'Server error occurred while trying to connect user to institution.',
        },
      },
    },
    get: {
      summary: 'Use to get check-ins.',
      tags: ['User & Institution'],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: 'Check-ins are returned successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to get check-ins results.',
        },
        404: {
          description: 'No entities found.',
        },
        500: {
          description: 'Server error occurred while trying to get check-ins.',
        },
      },
    },
  },
  [paths.swaggerBuild(paths.USER_INSTITUTIONS_CHECK_OUT)]: {
    post: {
      summary: 'Use to check out user.',
      tags: ['User & Institution'],
      security: [{ Bearer: [] }],
      requestBody: {
        description: 'User ID used for check out.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                userId: { type: 'integer' },
              },
              required: ['userId'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User is checked out successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to check out user.',
        },
        500: {
          description: 'Server error occurred while trying to check out user.',
        },
      },
    },
  },
  [paths.swaggerBuild(paths.USER_INSTITUTIONS_REPORT)]: {
    post: {
      summary: 'Use to report user as infected.',
      tags: ['User & Institution'],
      security: [{ Bearer: [] }],
      requestBody: {
        description: 'User ID which you want to mark as infected.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                userId: { type: 'integer' },
              },
              required: ['userId'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'User is reported successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to report user.',
        },
        500: {
          description: 'Server error occurred while trying to report user.',
        },
      },
    },
  },
  [paths.swaggerBuild(paths.USER_INSTITUTIONS_REPORTS_USER_INTERACTION)]: {
    get: {
      summary: 'Use to get reports and user interaction list.',
      tags: ['User & Institution'],
      security: [{ Bearer: [] }],
      parameters: [
        {
          in: 'query',
          name: 'timeOffset',
          required: false,
          description: 'Offset between access times of infected user.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description:
            'Reports and user interaction list  returned successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description:
            'Not authorized to get reports and user interaction list results.',
        },
        404: {
          description: 'No entities found.',
        },
        500: {
          description:
            'Server error occurred while trying to get reports and user interaction list.',
        },
      },
    },
  },
};
