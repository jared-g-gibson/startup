# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

IP Address is located at: http://34.234.179.165

Here is the start of my notes.

I learned about the basics of Git and how to use it.

```git add . - Adds all of the files that have any changes to the stage.```

```git commit -m "" - Commits staged changes to be pushed.```

```git push - Pushes local changes to github branch.```

I also learned that markdown allows for flexibility when writing things for the github readme.


# Midterm Review

In the following code, what does the link element do?

```
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico" type="image/x-icon">
Style sheets and icons.
```

In the following code,  what does a div tag do?

```The <div> tag in HTML defines a division or container used to group together other HTML elements.```

In the following code, what is the difference between the #title and .grid selector?

```
* - Universal Selector
h1 - Type selector
. - Class Selector
# = ID selector
```

In the following code, what is the difference between padding and margin?

```Padding is the space between an element's content and its border. Margin is the space outside the element's border, separating it from adjacent elements.Padding is within the little box and margin is outside the box. Padding is inside```

Given this HTML and this CSS how will the images be displayed using flex?

```Flexbox container is a layout model designed to lay out elements efficiently. 

display: flex - Activates flexbox layout
flex-direction: sets main axis direction
justify-content: aligns items along main axis
align-items: aligns items along cross axis
flex-wrap: allows items to wrap
align-content: aligns multiple rows/columns
```

What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?

```let myFunction = (a, b) => a * b;```

What does the following code using map with an array output?

```const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)```

What does the following code output using getElementByID and addEventListener?

```element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}```

What does the following line of Javascript do using a # selector?

```This means getting IDs with javascript.```

Which of the following are true? (mark all that are true about the DOM)

```Programming interface between HTML and XML. Represents a tree of elements. Can change parts of the document. Javscript manages the DOM. Tree structure.```

By default, the HTML span element has a default CSS display property value of: 

```inline```

How would you use CSS to change all the div elements to have a background color of red?

```div {background-color: red;}```

How would you display an image with a hyperlink in HTML?

```<a href="https://www.example.com">
  <img src="image.jpg" alt="Example Image" width="300" height="200">
</a>
```

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

```Content -> Padding -> Border -> Margin```

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

```#byu {color: green}```

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

How do you declare the document type to be html?

```<!DOCTYPE html>```

What is valid javascript syntax for if, else, for, while, switch statements?

What is the correct syntax for creating a javascript object?

```
const person = {}
const person = new Object({})
Object.create()
```

Is it possible to add new properties to javascript objects?

```Yes```

If you want to include JavaScript on an HTML page, which tag do you use?

```<script>```

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

``` 
chmod - change file permissions

pwd - present working directory

cd - change directory

ls - list directory

vim - enter vim mode

nano - enter nano mode (file editing)

mkdir - make directory

mv - move file

rm - remove file

man - display manual pages

ssh - secure connection with something else

ps - process status

wget - download files from internet

sudo - root privilege
```

Which of the following console command creates a remote shell session?

```ssh username@host```

Which of the following is true when the -la parameter is specified for the ls console command?

```ls -la lists all files (including hidden) in their long format```

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

```.click is the top level domain, bozo is the root domain, banana.fruit is the subdomain ```

Is a web certificate is necessary to use HTTPS.

```Yes```

Can a DNS A record can point to an IP address or another A record.

```Can only point to IP address.```

Port 443, 80, 22 is reserved for which protocol? 

```Port 443 is used for HTTPS, Port 80 is used for HTTP, and Port 22 is used for SSH.```

What will the following code using Promises output when executed?
```
Many possiblities. 

1. Promise.resolve('done').then(console.log) -> 'done'

2. Promise.reject('error).catch(console.log) -> 'error

3. new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) => 'Hi' after 1s

4. Async function returns value -> printed when awaited or .then

5. Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5

6. Reject handled -> shows error via catch.

```




What is the default port for HTTP/HTTPS/SSH? 

```HTTPS is 443, HTTPS is 80, SSH is 22```

What does an HTTP status code in the range of 300/400/500 indicate?

``` The HTTP status range of 300/400/500 indicates 
Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.
```

What does the HTTP header content-type allow you to do?

```Header stuffs
Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	The format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the content being sent. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.
```

What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

```The SameSite attribute lets servers specify whether/when cookies are sent with cross-site requests — i.e., third-party cookies. Cross-site requests are requests where the site (the registrable domain) and/or the scheme (http or https) do not match the site the user is currently visiting. This includes requests sent when links are clicked on other sites to navigate to your site, and any request sent by embedded third-party content.```

```SameSite helps to prevent leakage of information, preserving user privacy and providing some protection against cross-site request forgery attacks. It takes three possible values: Strict, Lax, and None:```

```A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that Secure prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information.```

```A cookie with the HttpOnly attribute can't be accessed by JavaScript, for example using Document.cookie; it can only be accessed when it reaches the server. Cookies that persist user sessions for example should have the HttpOnly attribute set — it would be really insecure to make them available to JavaScript. This precaution helps mitigate cross-site scripting (XSS) attacks.```

Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
```In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production-ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:

Routing requests for service endpoints
Manipulating HTTP requests with JSON body content
Generating HTTP responses
Using middleware to add functionality
Express was created by TJ Holowaychuk and is currently maintained by the Open.js Foundation.

app.get('/store/provo', (req, res, next) => {
  res.send({ name: 'provo' });
});

app.get('/store/:storeName', (req, res, next) => {
  res.send({ name: req.params.storeName });
});

// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));
```


Given the following Express service code: What does the following front end JavaScript that performs a fetch return?



Given the following MongoDB query, select all of the matching documents {name:Mark}
```This selects all documents named Mark.```


How should user passwords be stored?
```Hashed```


Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?



What is the websocket protocol intended to provide?
```HTTP is based on a client-server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client-initiated connections open for a very long time as the client waited for some event to happen on the server.


Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

WebSocket Upgrade

This enables the server to send notifications to the client, or for the client and server to have an asynchronous exchange of information.

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.```


What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
```Javascript XML, Javascript, Amazon Web Services, Node Package Manger, Node Version Manager```


Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.



Given a set of React components that include each other, what will be generated



What does a React component with React.useState do?
```Allowing React components to declare variables, update variables, and to trigger re-renders when the variable is updated```

What are React Hooks used for?
```Hooks are used for handling state (variables). They are also used to fetch data, update the DOM, start timers, etc. Resuse logic without duplicating code.Accessing context. Optimize performance. Work with DOM.```


What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
```

State Hooks 
State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

To add state to a component, use one of these Hooks:

useState declares a state variable that you can update directly.
useReducer declares a state variable with the update logic inside a reducer function.
function ImageGallery() {
  const [index, setIndex] = useState(0);
  // ...


Context Hooks 
Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

useContext reads and subscribes to a context.
function Button() {
  const theme = useContext(ThemeContext);
  // ...



Ref Hooks 
Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.
function Form() {
  const inputRef = useRef(null);
  // ...


Effect Hooks 
Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

useEffect connects a component to an external system.
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.

There are two rarely used variations of useEffect with differences in timing:

useLayoutEffect fires before the browser repaints the screen. You can measure layout here.
useInsertionEffect fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.


Performance hooks
A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.

To skip calculations and unnecessary re-rendering, use one of these Hooks:

useMemo lets you cache the result of an expensive calculation.
useCallback lets you cache a function definition before passing it down to an optimized component.
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
Sometimes, you can’t skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don’t need to block the user interface (like updating a chart).

To prioritize rendering, use one of these Hooks:

useTransition lets you mark a state transition as non-blocking and allow other updates to interrupt it.
useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.

```


Given React Router code, select statements that are true.



What does the package.json file do?
``` Your project configuration file, defining project name, version, and package dependencies```


What does the fetch function do?
```The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the XMLHttpRequest API.

Today, the fetch API is the preferred way to make HTTP requests. The fetch function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote. If the request method is unspecified, it defaults to GET.

fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

{
  author: 'Kyle Simpson',
  quote: "There's nothing more permanent than a temporary hack."
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

What does node.js do?
```Runs JavaScript code outside of an internet browser```


What does pm2 do?
```When you run a program from the console, the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.```

```We want our web services to continue running as a daemon. We would also like an easy way to start and stop our services. That is what Process Manager 2 (PM2) does.```

```PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services not running, then here are some commands that you might find useful.```

```You can SSH into your server and see PM2 in action by running the following command: pm2 ls```


What does Vite do?
```In order to use most web frameworks you need to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.```

```For our toolchain we are going to use Vite. Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.```

```We can use Vite to build our first React-based web application. Open your command console and run the following commands:```

```Vite is a fast development and build tool that lets you write modern frontend code and see changes instantly, then bundles everything efficiently for production.```




DOM stands for document object model.
200 - Successful messages
300 - Redirection messages
400 - Client Error responses
500 - Server Error responses
NVM stands for node version manager
NPM - Node Package Manager


What is the "useState" React component used for? It is used for declaration of variables and rerendering when variable is updated. Allowing React components to declare variables, update variables, and to trigger re-renders when the variable is updated

Package.json - Your project configuration file, defining project name, version, and package dependencies

Passwords should NOT be saved in Plaintext

What is the "useEffect" React component used for? Allowing React components to run code after a page finishes rendering or after a specific React state is updated

content-type is The content type of the request body

authorization - the credentials of an authorized user

JSX - JavaScript XML

What does a "vite.config.js" file do? Lists configurations for debugging and building with Vite

Which MongoDB query would find all JSON objects with a username containing "cs260" as a substring? { username: /.*cs260.*/ }

what does .gitignore do? Allows specifying files that should not be added to the GitHub repository

Which MongoDB query would find all JSON objects with a "username" value of "cosmo25"? { username: "cosmo25" }

The HTTPOnly flag on cookies prevents a client browser from reading or writing a cookie. True.

What does Node.js do?
Runs JavaScript code outside of an internet browser

Which MongoDB query would find all JSON objects with a "score" value less than 25?{ score: { $lt: 25 } }

What does a "vite.config.js" file do? Lists configurations for debugging and building with Vite

Which MongoDB query would find all JSON objects with either a "score" above 100 OR a "username" value of "hacker"? { $or: [(score: { $gt: 100 }), (username:"hacker")] }
