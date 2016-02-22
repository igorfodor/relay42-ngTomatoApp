# Overview

To run the app you need a browser plugin to "Allow-Control-Allow-Origin" otherwise you get a security exception in your browser.

For chrome you can install the plugin Allow-Control-Allow-Origin.

## Configuration
The url for the Tomato REST-API is configured in ```src/app/app.js``` simply change the value to match your settings of the deployed REST-API.

```.constant('TOMATO_REST_API', 'http://localhost:8080/tomato-rest/tomatoes')```

## Starting the app

The app is build on ngBoilerplate, for more details please see

https://github.com/ngbp/ngbp

Simply type the following in the root directory where you checked out this project.
```
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt build
```
 Open a browser and in the address field type

file:///{local_path_to_app}/TomatoApp/build/index.html


