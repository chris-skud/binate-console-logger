'use strict'

var nologger = require('../index.js')()
nologger.debug('Nothing to see here. Move along. Move along.')

var logger = require('../index.js')({debug: true})
logger.debug('Hope you find de bug')

var loggerWithTimestamp = require('../index.js')({debug: true, timestamp: true})
loggerWithTimestamp.info('Info is often better when temporal.')
