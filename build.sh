mkdir -p build
browserify index.js -p [ tsify ] > build/index_bundle.js
