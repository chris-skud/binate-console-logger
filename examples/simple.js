'use strict'

var Logger = require('../index.js')

var nologger = new Logger()
nologger.debug('Nothing to see here. Move along. Move along.')

var logger = new Logger({debug: true})
logger.debug('Hope you find de bug')

var loggerWithTimestamp = new Logger({debug: true, timestamp: true})
loggerWithTimestamp.info('Info is often better when temporal.')
