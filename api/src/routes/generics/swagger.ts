import { paths } from '@/constants';

export default {
  [paths.swaggerBuild(paths.GENERICS_MODEL)]: {
    get: {
      summary: 'Use to request all entities of provided model.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      parameters: [
        {
          in: 'path',
          name: 'model',
          required: true,
          description: 'Entity model for generic route.',
          schema: {
            type: 'string',
          },
        },
        {
          in: 'query',
          name: 'sortFilters',
          required: false,
          description:
            'Array with values based on which you want to sort response.',
          schema: {
            type: 'array',
            items: { type: 'object' },
          },
        },
        {
          in: 'query',
          name: 'page',
          required: false,
          description: 'Current page for which you want to get entities.',
          schema: {
            type: 'string',
          },
        },
        {
          in: 'query',
          name: 'pageCount',
          required: false,
          description: 'Total entities per page.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Entities are returned successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to get results.',
        },
        404: {
          description: 'No entities found.',
        },
        500: {
          description:
            'Server error occurred while trying to get all entities.',
        },
      },
    },
    post: {
      summary: 'Use to create entity of provided model.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      requestBody: {
        description: 'Attributes of a model you want to create.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
      },
      parameters: [
        {
          in: 'path',
          name: 'model',
          required: true,
          description: 'Entity model for generic route.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        201: {
          description: 'Entity is created successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to execute create operation.',
        },
        500: {
          description: 'Server error occurred while trying to create entity.',
        },
      },
    },
  },
  [paths.swaggerBuild(paths.GENERICS_MODEL_ID)]: {
    get: {
      summary: 'Use to request entity by ID of provided model.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      parameters: [
        {
          in: 'path',
          name: 'model',
          required: true,
          description: 'Entity model for generic route.',
          schema: {
            type: 'string',
          },
        },
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'Entity model ID for generic route.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Entity with requested ID returned successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to get results.',
        },
        404: {
          description: 'Not found entity with requested ID.',
        },
        500: {
          description:
            'Server error occurred while trying to get entity with requested ID.',
        },
      },
    },
    put: {
      summary: 'Use to update entity by ID of provided model.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      requestBody: {
        description: 'The model attributes to update.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
      },
      parameters: [
        {
          in: 'path',
          name: 'model',
          required: true,
          description: 'Entity model for generic route.',
          schema: {
            type: 'string',
          },
        },
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'Entity model ID for generic route.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Entity with requested ID was updated successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to execute update.',
        },
        404: {
          description: 'Not found entity to update.',
        },
        500: {
          description:
            'Server error occurred while trying to update entity with requested ID.',
        },
      },
    },
    delete: {
      summary: 'Use to delete entity by ID of provided model.',
      tags: ['Generics'],
      security: [{ Bearer: [] }],
      parameters: [
        {
          in: 'path',
          name: 'model',
          required: true,
          description: 'Entity model for generic route.',
          schema: {
            type: 'string',
          },
        },
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'Entity model ID for generic route.',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        204: {
          description: 'Entity with requested ID was deleted successfully.',
        },
        400: {
          description: 'Request cannot be processed due error.',
        },
        401: {
          description: 'Not authorized to execute delete.',
        },
        404: {
          description: 'Not found entity to delete.',
        },
        500: {
          description:
            'Server error occurred while trying to delete entity with requested ID.',
        },
      },
    },
  },
};
