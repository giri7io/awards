/**
 * Created by Smurf on 1/6/2017.
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: 'app/dist/**/*.js',
        dest: 'app/built.js'
      },
      li: {
        src: ["app/lib/jquery/dist/jquery.min.js",
          "app/lib/angular/angular.min.js",
          "app/lib/angular-animate/angular-animate.min.js",
          "app/lib/angular-aria/angular-aria.min.js",
          "app/lib/angular-messages/angular-messages.min.js",
          "app/lib/angular-route/angular-route.min.js",
          "app/lib/angular-material/angular-material.min.js",
          "app/lib/angular-ui-router/release/angular-ui-router.min.js",
          "app/lib/angular-bootstrap/ui-bootstrap.min.js",
          "app/lib/angular-md5/angular-md5.min.js",
          "app/lib/angular-moment/angular-moment.min.js",
          "app/lib/moment/min/moment.min.js",
          "app/lib/ng-file-upload/ng-file-upload.min.js",
          "app/lib/tinymce/tinymce.min.js",
          "app/lib/angular-ui-tinymce/dist/tinymce.min.js"],
        dest: 'app/lib.min.js'
      }
    },
/*    uglify:{
       files: {
         src: 'app/built.js',
         dest: 'app/built-min.js'
       }
     }*/
  });

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default',['concat'])

}







/*
uglify:{
  options:{
    manage:false
  },
  my_target:{
    files:[{
      expand:true,
      cwd: 'app/',
      src: '**!/!*.js',
      dest: 'app/'
    }]
  }
}*/
  
  

