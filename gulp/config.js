const dest = './dist';
const src = './static-src';

module.exports = {
    browserSync: {
        open: false,
        proxy: 'local.wordpress.test',
    },
    sass: {
        src: `${src}/sass/**/*.{sass,scss}`,
        dest: `${dest}/css`,
        settings: {
            /*
             * Required if you want to use SASS syntax
             * See https://github.com/dlmanning/gulp-sass/issues/81
             */
            sourceComments: 'map',
            imagePath: '/images', // Used by the image-url helper
        },
    },
    images: {
        src: `${src}/assets/images/**`,
        dest: `${dest}/images`,
    },
    videos: {
        src: `${src}/assets/videos/**`,
        dest: `${dest}/videos`,
    },
    fonts: {
        src: `${src}/assets/fonts/**`,
        dest: `${dest}/fonts`,
    },
    browserify: {
        /*
         * A separate bundle will be generated for each
         * bundle config in the list below
         */
        bundleConfigs: [
            {
                entries: `${src}/javascript/common.js`,
                dest: `${dest}/js`,
                outputName: 'common.js',
                extensions: ['.js'],
            }
        ],
    },
    production: {
        cssSrc: `${dest}/css/*.css`,
        jsSrc: `${dest}/js/*.js`,
        dest,
    },
};
