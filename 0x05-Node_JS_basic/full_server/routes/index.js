import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Script that Binds the routes to the appropriate
 * handler in the given Express application.
 * @param {Express} app The Express application.
 * @author Zuriel Victus Azameti <https://github.com/zuriel0001>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
