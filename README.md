
## Website Performance Optimization portfolio project

### Part 1: 

1. Optimised images starting with the really obvious oversized pizza on the home page!
2. Inline CSS styles from styles.css
3. Add media attribute to print.css to ensure only downloaded for printing
4. Minified CSS and JS files using gulp task runner - uglify. Courtesy of http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/#JS_Minification for tips and tricks. Uglify can be installed via npm - see https://www.npmjs.com/package/gulp-uglify for info.

### Part 2: 

1. Optimised loops by taking some unnecessary calculations out of the loops.
2. Reduced number of pizza's from 200 to 40 as that's all we see on the screen at any one time (max).
3. Changed from using absolute positions to using translateX to move the pizza's - see Paul Irish's excellent article on this - http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
4. Use getElementsByClassName() which is faster than querySelectorAll()
5. 

### Running the project
To get started, follow the steps below;

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! https://developers.google.com/speed/pagespeed/insights/

Enjoy!

=======
