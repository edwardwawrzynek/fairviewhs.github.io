# About the Web Team

This site provides information about the Fairview web team. This includes the history of the web team, some of its past and current members and an explanation of what we do to people who might be interested.

To serve the site locally, make sure Ruby and the [jekyll gem](https://github.com/jekyll/jekyll) are installed (`gem install jekyll`) and then run `jekyll serve` to start the site server. Visit [http://localhost:4000](http://localhost:4000) to see the site in action!

The stylesheets automatically compile when any changes are made and the changes are pushed to GitHub, but the JavaScript must be done manually. To compile the JavaScript, run the `grunt` command to combine the files listed in the [Gruntfile.js](Gruntfile.js), which are found in the [_js](_js) folder and move the compiled and minified file to the [js](js) folder to be served in production on GitHub pages.
