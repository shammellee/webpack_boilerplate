.PHONY: default yarn dev test prod

DIR__NODE_BIN := ./node_modules/.bin
DIR__SRC      := src
DIR__TEST     := $(DIR__SRC)/tests

CMD__MOCHA_WEBPACK      := $(DIR__NODE_BIN)/mocha-webpack
CMD__WEBPACK            := $(DIR__NODE_BIN)/webpack
CMD__WEBPACK_DASHBOARD  := $(DIR__NODE_BIN)/webpack-dashboard
CMD__WEBPACK_DEV_SERVER := $(DIR__NODE_BIN)/webpack-dev-server
CMD__YARN               := yarn

CONFIG__WEBPACK_DEV  := webpack.dev.js
CONFIG__WEBPACK_PROD := webpack.prod.js

default:

yarn:
	@$(CMD__YARN)

dev:
	@$(CMD__WEBPACK_DASHBOARD) -- $(CMD__WEBPACK_DEV_SERVER) --config $(CONFIG__WEBPACK_DEV)

test:
	@$(CMD__MOCHA_WEBPACK) --webpack-config $(CONFIG__WEBPACK_DEV) $(DIR__TEST)

prod:
	@$(CMD__WEBPACK) --config $(CONFIG__WEBPACK_PROD)
