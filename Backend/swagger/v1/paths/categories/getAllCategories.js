const getCategories = {
    get: {
        tags: ['Categorías'],
        summary: 'Obtener lista de categorías',
        description: 'Devuelve todas las categorías registradas en el sistema.',
        security: [
            {
                BearerAuth: []
            }
        ],
        responses: {
            200: {
                description: 'Lista de categorías obtenida correctamente',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    id: {
                                        type: 'string',
                                        description: 'ID de la categoría',
                                        example: '077eff87-4076-4c01-938c-5623c91aedc2'
                                    },
                                    name: {
                                        type: 'string',
                                        description: 'Nombre de la categoría',
                                        example: 'Electrónica'
                                    },
                                    description: {
                                        type: 'string',
                                        description: 'Descripción de la categoría',
                                        example: 'Productos electrónicos como teléfonos, computadoras, etc.'
                                    },
                                    custom: {
                                        type: 'boolean',
                                        description: 'Indica si la categoría es personalizada',
                                        example: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};  

export default getCategories;    