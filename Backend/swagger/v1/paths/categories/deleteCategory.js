const deleteCategory = {
    delete: {
        tags: ['Categorías'],
        summary: 'Eliminar categoría',
        description: 'Marca una categoría como eliminada sin eliminarla físicamente de la base de datos.',
        security: [
            {
                BearerAuth: []
            }
        ],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID de la categoría a eliminar',
                schema: {
                    type: 'string',
                    example: "077eff87-4076-4c01-938c-5623c91aedc2"
                }
            }
        ],
        responses: {
            200: {
                description: 'Categoría eliminada correctamente (borrado lógico)'
            },
            404: {
                description: 'Categoría no encontrada'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default deleteCategory