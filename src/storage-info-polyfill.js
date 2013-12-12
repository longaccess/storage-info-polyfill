'use strict';

(function(exports) {

// do nothing if the Storage Info API is already available
if (exports.webkitStorageInfo) {
  return;
}

if (typeof exports.TEMPORARY == "undefined") {
  exports.TEMPORARY = 0,
  exports.PERSISTENT = 1
}

exports.webkitStorageInfo = {
  TEMPORARY: exports.TEMPORARY,
  PERSISTENT: exports.PERSISTENT,
}

var UNSUPPORTED_STORAGE_TYPE = new CustomExceptions.DOMException(9);

function requestQuota(type, size, successCallback, errorCallback) {
  if (type != exports.TEMPORARY && type != exports.PERSISTENT) {
    if (errorCallback) {
      errorCallback(UNSUPPORTED_STORAGE_TYPE);
    }
    return;
  }
  successCallback(size);
}
function queryUsageAndQuota(type, successCallback, errorCallback) {
  if (type != exports.TEMPORARY && type != exports.PERSISTENT) {
    if (errorCallback) {
      errorCallback(UNSUPPORTED_STORAGE_TYPE);
    }
    return;
  }
  successCallback(0, 0);
}
exports.webkitStorageInfo.requestQuota = requestQuota;
exports.webkitStorageInfo.queryUsageAndQuota = queryUsageAndQuota;

})(self);
