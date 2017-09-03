.PHONY: all npm-install dev dev-server

NPM_PACKAGES := babel-polyfill  # Polyfills for ES6 Sets, Maps, Promises, etc
NPM_PACKAGES += babel-runtime   # ES6 Runtime helpers

NPM_DEV_PACKAGES :=
NPM_DEV_PACKAGES += babel-core                      # Babel transpiler
NPM_DEV_PACKAGES += babel-loader                    # Webpack babel loader
NPM_DEV_PACKAGES += babel-plugin-transform-runtime  # Replace ES6 runtime helpers
NPM_DEV_PACKAGES += babel-preset-es2015             # Babel preset for ES2015 support
NPM_DEV_PACKAGES += babel-preset-stage-0            # Experimental ES7 features
NPM_DEV_PACKAGES += clean-webpack-plugin            # Webpack plugin for cleaning the build folder before building
NPM_DEV_PACKAGES += css-loader                      # Webpack css loader
NPM_DEV_PACKAGES += eslint                          # ESLint
NPM_DEV_PACKAGES += eslint-loader                   # Webpack eslint loader
NPM_DEV_PACKAGES += extract-text-webpack-plugin     # Extract text from a bundle into a file
NPM_DEV_PACKAGES += html-webpack-plugin             # Webpack plugin for HTML creation
NPM_DEV_PACKAGES += node-sass                       # Sass preprocessor
NPM_DEV_PACKAGES += sass-loader                     # Webpack Sass loader
NPM_DEV_PACKAGES += stylelint                       # Sass linter
NPM_DEV_PACKAGES += stylelint-config-recommended    # Base stylelint config
NPM_DEV_PACKAGES += stylelint-webpack-plugin        # Webpack stylelint plugin
NPM_DEV_PACKAGES += uglifyjs-webpack-plugin         # Webpack plugin for UglifyJS
NPM_DEV_PACKAGES += webpack                         # Webpack
NPM_DEV_PACKAGES += webpack-dev-server              # Webpack Dev Server
NPM_DEV_PACKAGES += webpack-merge                   # Webpack plugin for merging configs

WEBPACK_DEV_CONFIG := webpack.dev.js
WEBPACK_PROD_CONFIG := webpack.prod.js

npm-install:
	@npm install --save $(NPM_PACKAGES)
	@npm install --save-dev $(NPM_DEV_PACKAGES)

dev:
	@./node_modules/.bin/webpack-dev-server --config $(WEBPACK_DEV_CONFIG)

prod:
	@./node_modules/.bin/webpack --config $(WEBPACK_PROD_CONFIG)
