// swagger/swaggerSpec.js

import info from './info.js';
import servers from './servers.js';

// User
import User from './components/schemas/user/User.js';
import UserLogin from './components/schemas/user/UserLogin.js';
import UserRegister from './components/schemas/user/UserRegister.js';
import UserLoginP from './paths/user/loginUser.js';
import UserRegisterP from './paths/user/registerUser.js';
import getAllUsers from './paths/user/getAllUsers.js';
import getUserById from './paths/user/getUserById.js';
import updateUser from './paths/user/updateUser.js';
import deleteUser from './paths/user/deleteUser.js';
import restoreUser from './paths/user/restoreUser.js';
import logoutUser from './paths/user/logoutUser.js';

// Category
import CategoryDelete from './components/schemas/categories/CategoryDelete.js';
import CategoryInput from './components/schemas/categories/CategoryInput.js';
import CategoryOutput from './components/schemas/categories/CategoryOutput.js';
import CategoryUpdate from './components/schemas/categories/CategoryUpdate.js';
import createCategory from './paths/categories/createCategory.js';
import getAllCategories from './paths/categories/getAllCategories.js';
import getCategoryById from './paths/categories/getCategoryById.js';
import updateCategory from './paths/categories/updateCategory.js';
import deleteCategory from './paths/categories/deleteCategory.js';

const swaggerSpec = {
    openapi: '3.0.0',
    info,
    servers,
    paths: {
        // Users
        '/users/register': UserRegisterP,
        '/users/login': UserLoginP,
        '/users/logout': logoutUser,
        '/users': getAllUsers,
        '/users/{id}': getUserById,
        '/users/update/{id}': updateUser,
        '/users/delete/{id}': deleteUser,
        '/users/restore/{id}': restoreUser,
        // Categories
        '/categories': createCategory,
        '/categories/all': getAllCategories,
        '/categories/{id}': getCategoryById,
        '/categories/update/{id}': updateCategory,
        '/categories/delete/{id}': deleteCategory,

    },
    components: {
        schemas: {
            // User
            User,
            UserLogin,
            UserRegister,
            // Category
            CategoryInput,
            CategoryOutput,
            CategoryUpdate,
            CategoryDelete
        },
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    }
};

export default swaggerSpec;
