const restoreUser = {
    put: {
        tags: ['Usuarios'],
        summary: 'Restaurar usuario (borrado lógico)',
        description: 'Restaura un usuario previamente eliminado (borrado lógico) marcando el campo `activated` como `1`. Solo los administradores pueden restaurar usuarios.',
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
                description: 'ID del usuario a restaurar',
                schema: {
                    type: 'string',
                    example: "077eff87-4076-4c01-938c-5623c91aedc2"
                }
            }
        ],
        responses: {
            200: {
                description: 'Usuario restaurado correctamente'
            },
            404: {
                description: 'Usuario no encontrado o ya restaurado'
            },
            500: {
                description: 'Error interno del servidor'
            }
        }
    }
};

export default restoreUser;
