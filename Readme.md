# HTML Tag hunter
Returns all unique HTML tags on a particular webpage
Returns tag names in two formats:
* An array with all unique tag names
* A comma separated string of tag names

### To use:
```sh
clone repo
$ npm install
```

In the scraper.js file, edit the 'webpage' variable with the url of the page you would like to use

### To run
```sh
$ npm start
```

##### TODO
* Add ability to provide url from command line
* Add support for scraping attributes as well (class, id etc)