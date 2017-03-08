# JavaScript_period_2
Node.js, Express + JavaScript, Backend Testing with Mocha

#### Why would you consider a Scripting Language as JavaScript as your Backend Platform.
JavaScript can be used both in the frontend and backend, Javascipt is being interpreted by the V8 engine. That means that it runs inside of another program. Also Node.JS has a lot of packages available and both are envolving constantly.
JavaScript is good for a quick prototype, you don’t have to explicitly declare objects as a String, int, etc. Functions can be as parameters with simple syntax, this makes JavaScript strong event-based language. Npm allow us to easy add and manage dependencies in a project.  
We can use Node.js as a simple HTTP server, or any sort of microservice.

#### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat
Pros:
* Same language in both frontend and backend
* Not having to deal with threads because of node.js non-blocking event queue.
* Node.js is faster than Java, SPEEEED
* Npm - Node package manager  

Cons:
* Since Node.js is single threaded, a CPU heavy coperation could slow down the whole server.

#### Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
Since CPU's speed have more or less stopped increasing, the number of cores has increased. By using threads, we could really take advantage of the multi-core system. Since Node.js is single threaded, it is only running on one core.
By using the Cluster module, we can spawn a pool of workers, running under a parent Node process. The parent/master process is in charge of initiating and controller workers.
```javascript
var cluster = require('cluster');
```

#### Explain, using relevant examples, concepts related to the testing a REST-API using Node/JavaScript + relevant packages.
The 'Request' module allows us to make http requests from our node.js application. This can be used to 'test' our RESTful api.
However, if we want to make 'real' tests, we have to use mocha and chai.

#### Explain, using relevant examples, the Express concept; middleware.
Express is minimal and flexible Node.js web application framework for writing web applications. Running on server, has all the http methods with request and response, use Middleware to access req and resp object. There are two ways of using the router methods. We can define one route (for example /home) and attach the methods to it, or we can create a new method for each route.  
* Method 1 if we have /api/. 
```javascript
router.route('/hello')  
    .get(function (req, res, next) { ... })
    .post(function (req, res, next) { ... });
```
* Method 2 rarely use more than one method on a route.  
```javascript
router.get('/hello', function (req, res) { ... });  
router.post('/hello', function (req, res) { ... });  
```
Middleware is a function/callback with access to request and response object and next. Order in code matters! 
```javascript
app.use( function (req, res, next){...});
```

#### Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
Session - session object is on the server, stored in hashmap, it is stateless, if session cookie is deleted, user must type name again when using page. When logged in, session object is created, so when user visits again, session object is called. 
If hacker steals the session key, it can be used for hacking the owner of session.  

There are various ways of implementing sessions, but the most used one is by using the module called "express-session". The way it works (on the surface), is by saving a cookie holding the Session ID. When ever a request comes in, the session middleware will look at the session ID found in the cookie, and make the session object available for us.
```javascript
var session = require("express-session");

app.use(function (req, res, next) {
    //Taking the session object from the request object.
    var sess = req.session; 
    ...
}
```

#### Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
On 2nd semester, we used a MVC pattern, using servlets, java classes and jsp pages. The servlet(with other controller classes), took the data from our java objects(from db -> mapping to objects -> facade) and put the data into the jsp pages, which was then generated to html and send back to the user.


With node.js server side templating, we're using the same principles but other technologies. We have a view engine that takes some data, and puts it into our views and returns some generated html. Since we're using a view engine, we can easily change which engine to use, and therefore we have more oppotunities. The most used ones are Jade, EJS and Handlebars.
* Pug -   
* Jade -   
* EJS - embedded JavaScript, Model View Controller

#### Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package.
To test REST, we need server running. The 'Request' module allows us to make http requests from our node.js application. This can be used to 'test' our RESTful api:


#### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.
In 3.sem we used JUnit for testing and this package had it ‘all’, Mocha is the biggest framework for JavaScript backend testing.


Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test case.  Mocha can use any assertion library Assertions, but I will use Chai(uses ‘expect’), the test code is written in behaviour driven development, which should be used for documentation.  


Mock (fake) objects are simulated objects that mimic the behavior of real objects in controlled ways.
Mock object frameworks allow the programmers to create mocks Automatically from existing code/interfaces.  
To test asynchronous code Mocha provides a callback that lets it know when an asynchronous test is complete. By adding a callback to it() Mocha will know that it should wait for completion.

#### Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
Nock is an HTTP mocking and expectations library for Node.js. Nock can be used to test modules that perform HTTP requests in isolation (that is without performing a real network operation).
```javascript
var nock = require('nock');
```

