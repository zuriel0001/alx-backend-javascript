/**
 * Contains the miscellaneous route handlers.
 * @author Zuriel Victus Azameti <https://github.com/zuriel0001>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
