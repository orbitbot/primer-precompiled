var fs   = require('fs');
var glob = require('glob');
var sass = require('node-sass');


glob('scss/*.scss', function(err, files) {
  if (err) throw err;

  files.forEach((file) => {
    console.log('Processing ' + file);

    var result = sass.renderSync({
      file        : file,
      outputStyle : 'expanded'
    });
    var path = 'dist/' + file.slice(file.lastIndexOf('/')).replace('scss', 'css');
    fs.writeFileSync(path, result.css);
  });

});
