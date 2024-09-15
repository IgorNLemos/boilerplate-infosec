const express = require('express');
const app = express();
//Exercise 1 - Require Helmet 
const helmet = require('helmet')

const ninetyDaysInSeconds = 90*24*60*60;

/*const helmetMiddlewares = [ 
  //Exercise 2 - Remove the X-Powered-By header
  helmet.hidePoweredBy(),

  //Exercise 3 - Set x-frame-options header to deny
  helmet.frameguard({action: 'deny'}),

  //Exercise 4 - X-XSS-Protection HTTP header
  helmet.xssFilter(),

  //Exercise 5 - Set the X-Content-Type-Options header to nosniff
  helmet.noSniff(),

  //Erxercise 6 - Set the X-Download-Options header to noopen
  helmet.ieNoOpen(),

  //Exercise 7 - Set the header Strict-Transport-Security to prevent HTTP usage
  helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}),

  //Exercise 8 - Configure X-DNS-Prefetch-Control header
  helmet.dnsPrefetchControl({ allow: false }),

  //Exercise 9 - Configure Cache header
  helmet.noCache({allow: true}),

  //Exercise 10 - Set a Content Security Policy
  helmet.contentSecurityPolicy({
    directives:{
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com']
    }
  }) 
]

app.use(helmetMiddlewares)
*/

app.use(helmet({
  hidePoweredBy: true, // Exercício 2: Remove o header X-Powered-By
  frameguard: { action: 'deny' }, // Exercício 3: Set x-frame-options header to deny
  xssFilter: true, // Exercício 4: X-XSS-Protection HTTP header
  noSniff: true, // Exercício 5: Set the X-Content-Type-Options header to nosniff
  ieNoOpen: true, // Exercício 6: Set the X-Download-Options header to noopen
  hsts: { maxAge: ninetyDaysInSeconds, force: true }, // Exercício 7: Strict-Transport-Security header
  dnsPrefetchControl: { allow: false }, // Exercício 8: X-DNS-Prefetch-Control header
  noCache: true, // Exercício 9: Configurar o header de Cache
  contentSecurityPolicy: { // Exercício 10: Content Security Policy
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com']
    }
  }
}));































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
