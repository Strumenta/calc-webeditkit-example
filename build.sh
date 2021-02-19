mkdir -p build
npx browserify index.js -p [ tsify ] > build/index_bundle.js
