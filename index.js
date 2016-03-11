module.exports = function Logger (config) {
  config = config || {}
  var debug = config.debug || false
  var timestamp = config.timestamp || false
  var clog = console.log.bind(console)
  var slice = Function.prototype.apply.bind(Array.prototype.slice)

  function log (method, args) {
    if (debug) {
      var t = (timestamp) ? new Date().toISOString() + ' - ' : ''
      var prefixedArgs = [t + method + ':'].concat(slice(args))
      clog.apply(log, prefixedArgs)
    }
  }

  return {
    debug: function () {
      log('debug', arguments)
    },

    info: function () {
      log('info', arguments)
    },

    notice: function () {
      log('notice', arguments)
    },

    warning: function () {
      log('warning', arguments)
    },

    error: function () {
      log('error', arguments)
    },

    critical: function () {
      log('critical', arguments)
    },

    alert: function () {
      log('alert', arguments)
    },

    emergency: function () {
      log('emergency', arguments)
    }
  }
}
