# PreReqs 

- NodeJS (I use v8.1.2) + NPM

# Installing
```
git clone https://github.com/gseyffert/SubstanceAbuseMap
cd SubstanceAbuseMap
npm install
```

# Running the Application

To build the application and listen for changes, type:

```
npm run start
```

This will run a webpack build in watch mode and output the bundle JavaScript to the `dist` directory.

To serve the application (requires python), type:

```
python -m SimpleHTTPServer
```

This will start a basic webserver on port 8000. Go to `localhost:8000` in your browser to check it out! If you've started the application via `npm run start`, then any changes you make will be reflected upon refresh of the page.