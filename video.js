var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.owns = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global,];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b, c) {
  if (!c || null != a) {
    c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c) {
      return a[b];
    }
    c = a[c];
    return void 0 !== c ? c : a[b];
  }
};
$jscomp.polyfill = function(a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d));
};
$jscomp.polyfillUnisolated = function(a, b, c, d) {
  c = $jscomp.global;
  a = a.split(".");
  for (d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c)) {
      return;
    }
    c = c[e];
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
};
$jscomp.polyfillIsolated = function(a, b, c, d) {
  var e = a.split(".");
  a = 1 === e.length;
  d = e[0];
  d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < e.length - 1; f++) {
    var g = e[f];
    if (!(g in d)) {
      return;
    }
    d = d[g];
  }
  e = e[e.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {configurable:!0, writable:!0, value:b}) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && (c = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + c + "$" + e), $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[e], {configurable:!0, writable:!0, value:b})));
};
$jscomp.polyfill("Object.values", function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) {
      $jscomp.owns(b, d) && c.push(b[d]);
    }
    return c;
  };
}, "es8", "es3");
var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", 
PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange",}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction",}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", 
UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other",}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media",}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript",}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none",}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited",}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded",}, Environment:{APP:"app", 
WEB:"web",}, DeviceCategory:{CTV:"ctv", DESKTOP:"desktop", MOBILE:"mobile", OTHER:"other",}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept",}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio",}, MediaType:{DISPLAY:"display", VIDEO:"video",}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", 
UNMEASURABLE:"unmeasurable", NO_WINDOW_FOCUS:"noWindowFocus", NO_OUTPUT_DEVICE:"noOutputDevice",}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid",}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone",}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen",}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", 
CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels", HAS_WINDOW_FOCUS:"hasWindowFocus",}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative",}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element",}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE",}, 
OmidImplementer:{OMSDK:"omsdk",}, MessageMethod:{IDENTIFY_SERVICE_WINDOW:"identifyServiceWindow",}};
const module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args";
class module$exports$omid$common$InternalMessage {
  static isValidSerializedMessage(a) {
    return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] || 
    void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
  }
  static deserialize(a) {
    return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
  }
  constructor(a, b, c, d) {
    this.guid = a;
    this.method = b;
    this.version = c;
    this.args = d;
  }
  serialize() {
    const a = {[module$contents$omid$common$InternalMessage_GUID_KEY]:this.guid, [module$contents$omid$common$InternalMessage_METHOD_KEY]:this.method, [module$contents$omid$common$InternalMessage_VERSION_KEY]:this.version,};
    void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
    return a;
  }
}
;class module$exports$omid$common$Communication {
  constructor(a) {
    this.to = a;
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
  }
  sendMessage(a, b) {
  }
  handleMessage(a, b) {
    if (this.onMessage) {
      this.onMessage(a, b);
    }
  }
  serialize(a) {
    return JSON.stringify(a);
  }
  deserialize(a) {
    return JSON.parse(a);
  }
  isDirectCommunication() {
    return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
  }
  isCrossOrigin() {
  }
}
;var module$exports$omid$common$argsChecker = {};
function module$contents$omid$common$argsChecker_assertTruthyString(a, b) {
  if (!b) {
    throw Error(`Value for ${a} is undefined, null or blank.`);
  }
  if ("string" !== typeof b && !(b instanceof String)) {
    throw Error(`Value for ${a} is not a string.`);
  }
  if ("" === b.trim()) {
    throw Error(`Value for ${a} is empty string.`);
  }
}
function module$contents$omid$common$argsChecker_assertNotNullObject(a, b) {
  if (null == b) {
    throw Error(`Value for ${a} is undefined or null`);
  }
}
function module$contents$omid$common$argsChecker_assertNumber(a, b) {
  if (null == b) {
    throw Error(`${a} must not be null or undefined.`);
  }
  if ("number" !== typeof b || isNaN(b)) {
    throw Error(`Value for ${a} is not a number`);
  }
}
function module$contents$omid$common$argsChecker_assertNumberBetween(a, b, c, d) {
  module$contents$omid$common$argsChecker_assertNumber(a, b);
  if (b < c || b > d) {
    throw Error(`Value for ${a} is outside the range [${c},${d}]`);
  }
}
function module$contents$omid$common$argsChecker_assertFunction(a, b) {
  if (!b) {
    throw Error(`${a} must not be truthy.`);
  }
}
function module$contents$omid$common$argsChecker_assertPositiveNumber(a, b) {
  module$contents$omid$common$argsChecker_assertNumber(a, b);
  if (0 > b) {
    throw Error(`${a} must be a positive number.`);
  }
}
module$exports$omid$common$argsChecker.assertTruthyString = module$contents$omid$common$argsChecker_assertTruthyString;
module$exports$omid$common$argsChecker.assertNotNullObject = module$contents$omid$common$argsChecker_assertNotNullObject;
module$exports$omid$common$argsChecker.assertNumber = module$contents$omid$common$argsChecker_assertNumber;
module$exports$omid$common$argsChecker.assertNumberBetween = module$contents$omid$common$argsChecker_assertNumberBetween;
module$exports$omid$common$argsChecker.assertFunction = module$contents$omid$common$argsChecker_assertFunction;
module$exports$omid$common$argsChecker.assertPositiveNumber = module$contents$omid$common$argsChecker_assertPositiveNumber;
var module$exports$omid$common$exporter = {};
function module$contents$omid$common$exporter_getOmidExports() {
  return "undefined" === typeof omidExports ? null : omidExports;
}
function module$contents$omid$common$exporter_getOrCreateName(a, b) {
  return a && (a[b] || (a[b] = {}));
}
function module$contents$omid$common$exporter_packageExport(a, b, c = module$contents$omid$common$exporter_getOmidExports()) {
  c && (a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b);
}
module$exports$omid$common$exporter.packageExport = module$contents$omid$common$exporter_packageExport;
class module$exports$omid$sessionClient$Partner {
  constructor(a, b) {
    module$contents$omid$common$argsChecker_assertTruthyString("Partner.name", a);
    module$contents$omid$common$argsChecker_assertTruthyString("Partner.version", b);
    this.name = a;
    this.version = b;
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.Partner", module$exports$omid$sessionClient$Partner);
class module$exports$omid$sessionClient$VerificationScriptResource {
  constructor(a, b, c, d = module$exports$omid$common$constants.AccessMode.FULL) {
    module$contents$omid$common$argsChecker_assertTruthyString("VerificationScriptResource.resourceUrl", a);
    this.resourceUrl = a;
    this.vendorKey = b;
    this.verificationParameters = c;
    this.accessMode = d;
  }
  toJSON() {
    return {accessMode:this.accessMode, resourceUrl:this.resourceUrl, vendorKey:this.vendorKey, verificationParameters:this.verificationParameters,};
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.VerificationScriptResource", module$exports$omid$sessionClient$VerificationScriptResource);
class module$exports$omid$sessionClient$Context {
  constructor(a, b, c = null, d = null) {
    module$contents$omid$common$argsChecker_assertNotNullObject("Context.partner", a);
    this.partner = a;
    this.verificationScriptResources = b;
    this.videoElement = this.slotElement = null;
    this.contentUrl = c;
    this.customReferenceData = d;
    this.underEvaluation = !1;
    this.serviceWindow = null;
  }
  setVideoElement(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("Context.videoElement", a);
    this.videoElement = a;
  }
  setSlotElement(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("Context.slotElement", a);
    this.slotElement = a;
  }
  setServiceWindow(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("Context.serviceWindow", a);
    this.serviceWindow = a;
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.Context", module$exports$omid$sessionClient$Context);
var module$exports$omid$common$OmidGlobalProvider = {};
function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
  if ("undefined" !== typeof omidGlobal && omidGlobal) {
    return omidGlobal;
  }
  if ("undefined" !== typeof global && global) {
    return global;
  }
  if ("undefined" !== typeof window && window) {
    return window;
  }
  if ("undefined" !== typeof globalThis && globalThis) {
    return globalThis;
  }
  const a = Function("return this")();
  if (a) {
    return a;
  }
  throw Error("Could not determine global object context.");
}
module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
const module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys = {ROOT:"omidSessionInterface", AD_EVENTS:"adEvents", MEDIA_EVENTS:"mediaEvents",}, module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap = {sessionError:"reportError",}, module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames = Object.keys(module$exports$omid$common$constants.MediaEventType).map(a => module$exports$omid$common$constants.MediaEventType[a]), module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames = 
["impressionOccurred",];
class module$exports$omid$sessionClient$OmidJsSessionInterface {
  constructor(a = module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    this.interfaceRoot_ = a[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.ROOT];
  }
  isSupported() {
    return null != this.interfaceRoot_;
  }
  sendMessage(a, b, c) {
    "registerSessionObserver" == a && (c = [b]);
    module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a] && (a = module$contents$omid$sessionClient$OmidJsSessionInterface_MethodNameMap[a]);
    b = this.interfaceRoot_;
    0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_AdEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.AD_EVENTS]);
    0 <= module$contents$omid$sessionClient$OmidJsSessionInterface_MediaEventMethodNames.indexOf(a) && (b = b[module$contents$omid$sessionClient$OmidJsSessionInterface_ExportedNodeKeys.MEDIA_EVENTS]);
    b = b[a];
    if (!b) {
      throw Error(`Unrecognized method name: ${a}.`);
    }
    b(...c);
  }
}
;class module$exports$omid$common$Rectangle {
  constructor(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
  }
}
;var module$exports$omid$common$guid = {};
function module$contents$omid$common$guid_generateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, a => {
    {
      let b = 16 * Math.random() | 0;
      a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    }
    return a;
  });
}
module$exports$omid$common$guid.generateGuid = module$contents$omid$common$guid_generateGuid;
var module$exports$omid$common$logger = {};
function module$contents$omid$common$logger_error(...a) {
  module$contents$omid$common$logger_executeLog(() => {
    throw Error("Could not complete the test successfully - ", ...a);
  }, () => console.error(...a));
}
function module$contents$omid$common$logger_debug(...a) {
  module$contents$omid$common$logger_executeLog(() => {
  }, () => console.error(...a));
}
function module$contents$omid$common$logger_executeLog(a, b) {
  "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
}
module$exports$omid$common$logger.error = module$contents$omid$common$logger_error;
module$exports$omid$common$logger.debug = module$contents$omid$common$logger_debug;
var module$exports$omid$common$eventTypedefs = {};
var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.4.9-dev"};
var module$exports$omid$common$VersionUtils = {};
const module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
function module$contents$omid$common$VersionUtils_isValidVersion(a) {
  return /\d+\.\d+\.\d+(-.*)?/.test(a);
}
function module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, b) {
  a = a.split("-")[0].split(".");
  b = b.split("-")[0].split(".");
  for (let c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
    const d = parseInt(a[c], 10), e = parseInt(b[c], 10);
    if (d > e) {
      break;
    } else if (d < e) {
      return !1;
    }
  }
  return !0;
}
module$exports$omid$common$VersionUtils.isValidVersion = module$contents$omid$common$VersionUtils_isValidVersion;
module$exports$omid$common$VersionUtils.versionGreaterOrEqual = module$contents$omid$common$VersionUtils_versionGreaterOrEqual;
var module$exports$omid$common$ArgsSerDe = {};
const module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
function module$contents$omid$common$ArgsSerDe_serializeMessageArgs(a, b) {
  return module$contents$omid$common$VersionUtils_isValidVersion(a) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
}
function module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(a, b) {
  return module$contents$omid$common$VersionUtils_isValidVersion(a) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
}
module$exports$omid$common$ArgsSerDe.serializeMessageArgs = module$contents$omid$common$ArgsSerDe_serializeMessageArgs;
module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs;
var module$exports$omid$common$serviceMethodUtils = {};
const module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix = {SESSION_SERVICE:"SessionService.", VERIFICATION_SERVICE:"VerificationService.",};
function module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod(a) {
  return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(a);
}
function module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod(a) {
  return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(a);
}
function module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, b) {
  return b + a;
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, b) {
  return (a = a.match(new RegExp(`^${b}(.*)`))) && a[1];
}
module$exports$omid$common$serviceMethodUtils.getPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.getPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod;
module$exports$omid$common$serviceMethodUtils.getUnprefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.getUnprefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod;
module$exports$omid$common$serviceMethodUtils.isPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.isPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod;
var module$exports$omid$common$windowUtils = {};
function module$contents$omid$common$windowUtils_isValidWindow(a) {
  return null != a && "undefined" !== typeof a.top && null != a.top;
}
function module$contents$omid$common$windowUtils_isCrossOrigin(a) {
  if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    return !1;
  }
  try {
    if ("undefined" === typeof a.location.hostname) {
      return !0;
    }
    module$contents$omid$common$windowUtils_isSameOriginForIE(a);
  } catch (b) {
    return !0;
  }
  return !1;
}
function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
  return "" === a.x || "" !== a.x;
}
function module$contents$omid$common$windowUtils_resolveGlobalContext(a) {
  "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
}
function module$contents$omid$common$windowUtils_resolveTopWindowContext(a) {
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
}
function module$contents$omid$common$windowUtils_isTopWindowAccessible(a) {
  try {
    return a.top.location.href ? !0 : !1;
  } catch (b) {
    return !1;
  }
}
function module$contents$omid$common$windowUtils_removeDomElements(a) {
  a.type === module$exports$omid$common$constants.AdEventType.SESSION_START && ("undefined" !== typeof a.data.context.videoElement && (a.data.context.videoElement = "DOM Video Element - Present but not parsed to avoid parse error"), "undefined" !== typeof a.data.context.slotElement && (a.data.context.slotElement = "DOM Slot Element - Present but not parsed to avoid parse error"));
  return a;
}
function module$contents$omid$common$windowUtils_evaluatePageUrl(a) {
  if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
    return null;
  }
  try {
    const b = a.top;
    return module$contents$omid$common$windowUtils_isCrossOrigin(b) ? null : b.location.href;
  } catch (b) {
    return null;
  }
}
module$exports$omid$common$windowUtils.evaluatePageUrl = module$contents$omid$common$windowUtils_evaluatePageUrl;
module$exports$omid$common$windowUtils.isCrossOrigin = module$contents$omid$common$windowUtils_isCrossOrigin;
module$exports$omid$common$windowUtils.removeDomElements = module$contents$omid$common$windowUtils_removeDomElements;
module$exports$omid$common$windowUtils.resolveGlobalContext = module$contents$omid$common$windowUtils_resolveGlobalContext;
module$exports$omid$common$windowUtils.resolveTopWindowContext = module$contents$omid$common$windowUtils_resolveTopWindowContext;
module$exports$omid$common$windowUtils.isTopWindowAccessible = module$contents$omid$common$windowUtils_isTopWindowAccessible;
class module$exports$omid$common$DirectCommunication extends module$exports$omid$common$Communication {
  constructor(a) {
    super(a);
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
    this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
  }
  sendMessage(a, b = this.to) {
    if (!b) {
      throw Error("Message destination must be defined at construction time or when sending the message.");
    }
    b.handleExportedMessage(a.serialize(), this);
  }
  handleExportedMessage(a, b) {
    module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
  }
  isCrossOrigin() {
    return !1;
  }
}
;class module$exports$omid$common$PostMessageCommunication extends module$exports$omid$common$Communication {
  static isCompatibleContext(a) {
    return !!(a && a.addEventListener && a.postMessage);
  }
  constructor(a, b = module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    super(b);
    this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
    a.addEventListener("message", c => {
      if ("object" === typeof c.data) {
        var d = c.data;
        module$exports$omid$common$InternalMessage.isValidSerializedMessage(d) && (d = module$exports$omid$common$InternalMessage.deserialize(d), c.source && this.handleMessage(d, c.source));
      }
    });
  }
  sendMessage(a, b = this.to) {
    if (!b) {
      throw Error("Message destination must be defined at construction time or when sending the message.");
    }
    b.postMessage(a.serialize(), "*");
  }
  isCrossOrigin() {
    return this.to ? module$contents$omid$common$windowUtils_isCrossOrigin(this.to) : !0;
  }
}
;var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", OMID_PRESENT_FRAME_NAME_WEB:"omid_v1_present_web", OMID_PRESENT_FRAME_NAME_APP:"omid_v1_present_app", getEnvironmentIframeName:function(a) {
  return {[module$exports$omid$common$constants.Environment.APP]:module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP, [module$exports$omid$common$constants.Environment.WEB]:module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB,}[a];
}};
function module$contents$omid$common$DetectOmid_isIframePresent(a, b) {
  try {
    return a.frames && !!a.frames[b];
  } catch (c) {
    return !1;
  }
}
module$exports$omid$common$DetectOmid.isOmidPresent = function(a) {
  return [module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP,].some(b => module$contents$omid$common$DetectOmid_isIframePresent(a, b));
};
module$exports$omid$common$DetectOmid.getOmidEnvironment = function(a) {
  for (const b of Object.values(module$exports$omid$common$constants.Environment)) {
    const c = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(b);
    if (module$contents$omid$common$DetectOmid_isIframePresent(a, c)) {
      return b;
    }
  }
  return null;
};
function module$contents$omid$common$DetectOmid_writePresenceIframe_(a, b) {
  a.document.write('<iframe style="display:none" ' + `id="${b}" name="${b}" sandbox></iframe>`);
}
module$exports$omid$common$DetectOmid.declareOmidPresence = function(a, b) {
  a.frames && a.document && ![module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP,].some(c => !!a.frames[c]) && (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a, b) : (b = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(b), a.document.body ? 
  (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, b)) : (module$contents$omid$common$DetectOmid_writePresenceIframe_(a, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$contents$omid$common$DetectOmid_writePresenceIframe_(a, b))));
};
module$exports$omid$common$DetectOmid.appendPresenceIframe_ = function(a, b) {
  const c = a.document.createElement("iframe");
  c.id = b;
  c.name = b;
  c.style.display = "none";
  c.sandbox = "";
  a.document.body.appendChild(c);
};
module$exports$omid$common$DetectOmid.isMutationObserverAvailable_ = function(a) {
  return "MutationObserver" in a;
};
module$exports$omid$common$DetectOmid.registerMutationObserver_ = function(a, b) {
  const c = new MutationObserver(d => {
    d.forEach(e => {
      "BODY" === e.addedNodes[0].nodeName && (e = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(b), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, e), c.disconnect());
    });
  });
  c.observe(a.document.documentElement, {childList:!0});
};
var module$exports$omid$common$serviceCommunication = {};
const module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
  return b.reduce((c, d) => c && c[d], a);
}
function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
  if (!module$contents$omid$common$windowUtils_isCrossOrigin(b)) {
    try {
      const e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
      if (e) {
        return new module$exports$omid$common$DirectCommunication(e);
      }
    } catch (e) {
    }
  }
  return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
}
function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
  for (const e of b) {
    if (b = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e, c, d)) {
      return b;
    }
  }
  return null;
}
function module$contents$omid$common$serviceCommunication_startSessionServiceCommunication(a, b, c = module$exports$omid$common$DetectOmid.isOmidPresent) {
  const d = [a, module$contents$omid$common$windowUtils_resolveTopWindowContext(a)];
  b && d.unshift(b);
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
}
function module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication(a, b = module$exports$omid$common$DetectOmid.isOmidPresent) {
  const c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
  d && c.push(d);
  c.push(module$contents$omid$common$windowUtils_resolveTopWindowContext(a));
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
}
module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = module$contents$omid$common$serviceCommunication_startSessionServiceCommunication;
module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication;
const module$contents$omid$sessionClient$AdSession_SESSION_CLIENT_VERSION = module$exports$omid$common$version.Version;
class module$exports$omid$sessionClient$AdSession {
  constructor(a, b, c) {
    module$contents$omid$common$argsChecker_assertNotNullObject("AdSession.context", a);
    this.adSessionId_ = module$contents$omid$common$guid_generateGuid();
    this.context_ = a;
    this.impressionOccurred_ = !1;
    const d = this.context_.serviceWindow || void 0;
    this.communication_ = b || module$contents$omid$common$serviceCommunication_startSessionServiceCommunication(module$contents$omid$common$windowUtils_resolveGlobalContext(), d);
    this.sessionInterface_ = c || new module$exports$omid$sessionClient$OmidJsSessionInterface();
    this.isSessionRunning_ = this.hasMediaEvents_ = this.hasAdEvents_ = !1;
    this.impressionType_ = this.creativeType_ = null;
    this.creativeLoaded_ = !1;
    this.callbackMap_ = {};
    this.communication_ && (this.communication_.onMessage = this.handleInternalMessage_.bind(this));
    this.setClientInfo_();
    this.injectVerificationScripts_(a.verificationScriptResources);
    this.sendSlotElement_(a.slotElement);
    this.sendVideoElement_(a.videoElement);
    this.sendContentUrl_(a.contentUrl);
    this.watchSessionEvents_();
  }
  getAdSessionId() {
    return this.adSessionId_;
  }
  setCreativeType(a) {
    if (a === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type cannot be redefined with value " + module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT);
    }
    if (this.impressionOccurred_) {
      throw Error("Impression has already occurred");
    }
    if (this.creativeLoaded_) {
      throw Error("Creative has already loaded");
    }
    if (this.creativeType_ && this.creativeType_ !== module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type cannot be redefined");
    }
    if (void 0 === this.creativeType_) {
      throw Error("Native integration is using OMID 1.2 or earlier");
    }
    this.sendOneWayMessage("setCreativeType", a, this.adSessionId_);
    this.creativeType_ = a;
  }
  setImpressionType(a) {
    if (a === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type cannot be redefined with value " + module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT);
    }
    if (this.impressionOccurred_) {
      throw Error("Impression has already occurred");
    }
    if (this.creativeLoaded_) {
      throw Error("Creative has already loaded");
    }
    if (this.impressionType_ && this.impressionType_ !== module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type cannot be redefined");
    }
    if (void 0 === this.impressionType_) {
      throw Error("Native integration is using OMID 1.2 or earlier");
    }
    this.sendOneWayMessage("setImpressionType", a, this.adSessionId_);
    this.impressionType_ = a;
  }
  isSupported() {
    return !!this.communication_ || this.sessionInterface_.isSupported();
  }
  isSendingElementsSupported_() {
    return this.communication_ ? this.communication_.isDirectCommunication() : this.sessionInterface_.isSupported();
  }
  registerSessionObserver(a) {
    this.sendMessage("registerSessionObserver", a, this.adSessionId_);
  }
  start() {
    this.sendOneWayMessage("startSession", {customReferenceData:this.context_.customReferenceData, underEvaluation:this.context_.underEvaluation,}, this.adSessionId_);
  }
  finish() {
    this.sendOneWayMessage("finishSession", this.adSessionId_);
  }
  error(a, b) {
    this.sendOneWayMessage("sessionError", a, b, this.adSessionId_);
  }
  registerAdEvents() {
    if (this.hasAdEvents_) {
      throw Error("AdEvents already registered.");
    }
    this.hasAdEvents_ = !0;
    this.sendOneWayMessage("registerAdEvents", this.adSessionId_);
  }
  registerMediaEvents() {
    if (this.hasMediaEvents_) {
      throw Error("MediaEvents already registered.");
    }
    this.hasMediaEvents_ = !0;
    this.sendOneWayMessage("registerMediaEvents", this.adSessionId_);
  }
  sendOneWayMessage(a, ...b) {
    this.sendMessage(a, null, ...b);
  }
  sendMessage(a, b, ...c) {
    this.communication_ ? this.sendInternalMessage_(a, b, c) : this.sessionInterface_.isSupported() && this.sendInterfaceMessage_(a, b, c);
  }
  sendInternalMessage_(a, b, c) {
    const d = module$contents$omid$common$guid_generateGuid();
    b && (this.callbackMap_[d] = b);
    a = new module$exports$omid$common$InternalMessage(d, module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod(a), module$exports$omid$common$version.Version, module$contents$omid$common$ArgsSerDe_serializeMessageArgs(module$exports$omid$common$version.Version, c));
    this.communication_.sendMessage(a);
  }
  handleInternalMessage_(a, b) {
    const {method:c, guid:d, args:e} = a;
    "response" === c && this.callbackMap_[d] && (a = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(module$exports$omid$common$version.Version, e), this.callbackMap_[d].apply(this, a));
    "error" === c && window.console && module$contents$omid$common$logger_error(e);
  }
  sendInterfaceMessage_(a, b, c) {
    try {
      this.sessionInterface_.sendMessage(a, b, c);
    } catch (d) {
      module$contents$omid$common$logger_error("Failed to communicate with SessionInterface with error:"), module$contents$omid$common$logger_error(d);
    }
  }
  assertSessionRunning() {
    if (!this.isSessionRunning_) {
      throw Error("Session not started.");
    }
  }
  impressionOccurred() {
    if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type has not been redefined");
    }
    if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type has not been redefined");
    }
    this.impressionOccurred_ = !0;
  }
  creativeLoaded() {
    if (this.creativeType_ === module$exports$omid$common$constants.CreativeType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Creative type has not been redefined");
    }
    if (this.impressionType_ === module$exports$omid$common$constants.ImpressionType.DEFINED_BY_JAVASCRIPT) {
      throw Error("Impression type has not been redefined");
    }
    this.creativeLoaded_ = !0;
  }
  setClientInfo_() {
    this.sendOneWayMessage("setClientInfo", module$exports$omid$common$version.Version, this.context_.partner.name, this.context_.partner.version, this.adSessionId_);
  }
  injectVerificationScripts_(a) {
    a && (a = a.map(b => b.toJSON()), this.sendOneWayMessage("injectVerificationScriptResources", a, this.adSessionId_));
  }
  sendSlotElement_(a) {
    this.sendElement_(a, "setSlotElement");
  }
  sendVideoElement_(a) {
    this.sendElement_(a, "setVideoElement");
  }
  sendElement_(a, b) {
    a && (this.isSendingElementsSupported_() ? this.sendOneWayMessage(b, a, this.adSessionId_) : this.error(module$exports$omid$common$constants.ErrorType.GENERIC, `Session Client ${b} called when communication is cross-origin`));
  }
  sendContentUrl_(a) {
    a && this.sendOneWayMessage("setContentUrl", a, this.adSessionId_);
  }
  setElementBounds(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("AdSession.elementBounds", a);
    this.sendOneWayMessage("setElementBounds", a, this.adSessionId_);
  }
  watchSessionEvents_() {
    this.registerSessionObserver(a => {
      a.type === module$exports$omid$common$constants.AdEventType.SESSION_START && (this.isSessionRunning_ = !0, this.creativeType_ = a.data.creativeType, this.impressionType_ = a.data.impressionType);
      a.type === module$exports$omid$common$constants.AdEventType.SESSION_FINISH && (this.isSessionRunning_ = !1);
    });
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.AdSession", module$exports$omid$sessionClient$AdSession);
class module$exports$omid$common$VastProperties {
  constructor(a, b, c, d) {
    this.isSkippable = a;
    this.skipOffset = b;
    this.isAutoPlay = c;
    this.position = d;
  }
  toJSON() {
    return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position,};
  }
}
;class module$exports$omid$sessionClient$AdEvents {
  constructor(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("AdEvents.adSession", a);
    this.adSessionId_ = a.getAdSessionId();
    try {
      a.registerAdEvents(), this.adSession = a;
    } catch (b) {
      throw Error("AdSession already has an ad events instance registered");
    }
  }
  impressionOccurred() {
    this.adSession.assertSessionRunning();
    this.adSession.impressionOccurred();
    this.adSession.sendOneWayMessage("impressionOccurred", this.adSessionId_);
  }
  loaded(a = null) {
    this.adSession.creativeLoaded();
    a = a ? a.toJSON() : null;
    this.adSession.sendOneWayMessage("loaded", a, this.adSessionId_);
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.AdEvents", module$exports$omid$sessionClient$AdEvents);
class module$exports$omid$sessionClient$MediaEvents {
  constructor(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("MediaEvents.adSession", a);
    this.adSessionId_ = a.getAdSessionId();
    try {
      a.registerMediaEvents(), this.adSession = a;
    } catch (b) {
      throw Error("AdSession already has a media events instance registered");
    }
  }
  start(a, b) {
    module$contents$omid$common$argsChecker_assertNumber("MediaEvents.start.duration", a);
    module$contents$omid$common$argsChecker_assertNumberBetween("MediaEvents.start.mediaPlayerVolume", b, 0, 1);
    this.adSession.sendOneWayMessage("start", a, b, this.adSessionId_);
  }
  firstQuartile() {
    this.adSession.sendOneWayMessage("firstQuartile", this.adSessionId_);
  }
  midpoint() {
    this.adSession.sendOneWayMessage("midpoint", this.adSessionId_);
  }
  thirdQuartile() {
    this.adSession.sendOneWayMessage("thirdQuartile", this.adSessionId_);
  }
  complete() {
    this.adSession.sendOneWayMessage("complete", this.adSessionId_);
  }
  pause() {
    this.adSession.sendOneWayMessage("pause", this.adSessionId_);
  }
  resume() {
    this.adSession.sendOneWayMessage("resume", this.adSessionId_);
  }
  bufferStart() {
    this.adSession.sendOneWayMessage("bufferStart", this.adSessionId_);
  }
  bufferFinish() {
    this.adSession.sendOneWayMessage("bufferFinish", this.adSessionId_);
  }
  skipped() {
    this.adSession.sendOneWayMessage("skipped", this.adSessionId_);
  }
  volumeChange(a) {
    module$contents$omid$common$argsChecker_assertNumberBetween("MediaEvents.volumeChange.mediaPlayerVolume", a, 0, 1);
    this.adSession.sendOneWayMessage("volumeChange", a, this.adSessionId_);
  }
  playerStateChange(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("MediaEvents.playerStateChange.playerState", a);
    this.adSession.sendOneWayMessage("playerStateChange", a, this.adSessionId_);
  }
  adUserInteraction(a) {
    module$contents$omid$common$argsChecker_assertNotNullObject("MediaEvents.adUserInteraction.interactionType", a);
    this.adSession.sendOneWayMessage("adUserInteraction", a, this.adSessionId_);
  }
}
module$contents$omid$common$exporter_packageExport("OmidSessionClient.MediaEvents", module$exports$omid$sessionClient$MediaEvents);
const OmidPartnerName$$module$src$constants = "Referenceapp", OmidPartnerVersion$$module$src$constants = "0.0.0", VerificationSettingsKeys$$module$src$constants = {ACCESS_MODE:"accessMode", CONTENT_URL:"contentUrl", MEDIA_URL:"mediaUrl", OMSDK_URL:"omsdkUrl", TEST_CASE_PAGE_NAME:"testCasePageName", VENDOR_KEY:"vendorKey", VERIFICATION_PARAMETERS:"verificationParameters", VERIFICATION_SCRIPT_URL:"verificationScriptUrl",}, AccessMode$$module$src$constants = {LIMITED:"limited", DOMAIN:"domain", CREATIVE:"creative", 
FULL:"full",}, MessageKeys$$module$src$constants = {DATA:"data", TYPE:"type",}, MessageTypes$$module$src$constants = {CREATIVE_DID_INIT:"creativeDidInit", LOAD_CREATIVE:"loadCreative",}, CreativeType$$module$src$constants = {HTML_DISPLAY:"htmlDisplay", VIDEO:"video", AUDIO:"audio",};
var module$src$constants = {AccessMode:AccessMode$$module$src$constants, CreativeType:CreativeType$$module$src$constants, MessageKeys:MessageKeys$$module$src$constants, MessageTypes:MessageTypes$$module$src$constants};
module$src$constants.OmidPartnerName = OmidPartnerName$$module$src$constants;
module$src$constants.OmidPartnerVersion = OmidPartnerVersion$$module$src$constants;
module$src$constants.VerificationSettingsKeys = VerificationSettingsKeys$$module$src$constants;
let VerificationSettings$$module$src$typedefs;
var module$src$typedefs = {};
const VIDEO_EVENT_TYPES$$module$src$omsdk_manager = "error loadeddata timeupdate volumechange click pause play fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange".split(" ");
class OmsdkManager$$module$src$omsdk_manager {
  constructor(a, b) {
    this.verificationSettings_ = a;
    this.videoElement_ = b;
    this.mediaEvents_ = this.adEvents_ = this.adSession_ = null;
    this.lastVideoTime_ = -1;
    this.omsdkIframe_ = this.createOmsdkIframe_();
    this.omsdkIframe_.addEventListener("load", () => this.omsdkIframeDidLoad_());
    document.body.appendChild(this.omsdkIframe_);
    VIDEO_EVENT_TYPES$$module$src$omsdk_manager.forEach(c => {
      this.videoElement_.addEventListener(c, d => this.videoElementDidDispatchEvent_(d));
    });
  }
  createOmsdkIframe_() {
    const a = document.createElement("iframe");
    a.sandbox = "allow-scripts allow-same-origin";
    a.style.display = "none";
    a.srcdoc = `<script src=${this.verificationSettings_.omsdkUrl}></script>`;
    return a;
  }
  omsdkIframeDidLoad_() {
    this.adSession_ = this.createAdSession_();
    this.adSession_.setCreativeType(module$exports$omid$common$constants.CreativeType.VIDEO);
    this.adSession_.setImpressionType(module$exports$omid$common$constants.ImpressionType.BEGIN_TO_RENDER);
    this.adEvents_ = new module$exports$omid$sessionClient$AdEvents(this.adSession_);
    this.mediaEvents_ = new module$exports$omid$sessionClient$MediaEvents(this.adSession_);
    this.adSession_.start();
  }
  createAdSession_() {
    var a = new module$exports$omid$sessionClient$Partner(OmidPartnerName$$module$src$constants, OmidPartnerVersion$$module$src$constants), b = new module$exports$omid$sessionClient$VerificationScriptResource(this.verificationSettings_.verificationScriptUrl, this.verificationSettings_.vendorKey, this.verificationSettings_.verificationParameters, this.getOmidAccessMode_());
    a = new module$exports$omid$sessionClient$Context(a, [b], this.verificationSettings_.contentUrl || null, "cust=ref&data=frominteg");
    a.underEvaluation = !0;
    a.setVideoElement(this.videoElement_);
    b = this.omsdkIframe_.contentWindow;
    if (!b) {
      throw Error("OM SDK iframe content window not available.");
    }
    a.setServiceWindow(b);
    return new module$exports$omid$sessionClient$AdSession(a);
  }
  getOmidAccessMode_() {
    switch(this.verificationSettings_.accessMode) {
      case AccessMode$$module$src$constants.LIMITED:
        return module$exports$omid$common$constants.AccessMode.LIMITED;
      case AccessMode$$module$src$constants.DOMAIN:
        return module$exports$omid$common$constants.AccessMode.DOMAIN;
      default:
        return module$exports$omid$common$constants.AccessMode.FULL;
    }
  }
  videoElementDidDispatchEvent_(a) {
    if (this.adSession_ && this.adEvents_ && this.mediaEvents_) {
      switch(a.type) {
        case "error":
          this.adSession_.error(module$exports$omid$common$constants.ErrorType.VIDEO, this.videoElement_.error.message);
          break;
        case "loadeddata":
          a = new module$exports$omid$common$VastProperties(!1, 0, !1, module$exports$omid$common$constants.VideoPosition.PREROLL);
          this.adEvents_.loaded(a);
          break;
        case "timeupdate":
          this.videoElementDidDispatchTimeUpdate_();
          break;
        case "click":
          this.mediaEvents_.adUserInteraction(module$exports$omid$common$constants.InteractionType.CLICK);
          break;
        case "pause":
          this.videoElement_.ended || this.mediaEvents_.pause();
          break;
        case "play":
          0 != this.videoElement_.currentTime && this.mediaEvents_.resume();
          break;
        case "volumechange":
          this.mediaEvents_.volumeChange(this.videoElement_.volume);
          break;
        case "fullscreenchange":
        case "webkitfullscreenchange":
        case "mozfullscreenchange":
        case "msfullscreenchange":
          this.videoPlayerStateDidChange_();
      }
    }
  }
  videoPlayerStateDidChange_() {
    this.mediaEvents_.playerStateChange(null !== document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullScreen ? module$exports$omid$common$constants.VideoPlayerState.FULLSCREEN : module$exports$omid$common$constants.VideoPlayerState.NORMAL);
  }
  videoElementDidDispatchTimeUpdate_() {
    if (this.adEvents_ && this.mediaEvents_ && 0 != this.videoElement_.playbackRate) {
      var a = this.videoElement_.currentTime / this.videoElement_.duration;
      0 > this.lastVideoTime_ && 0 <= a ? (this.adEvents_.impressionOccurred(), this.mediaEvents_.start(this.videoElement_.duration, this.videoElement_.volume), console.log("hello")) : 0.25 > this.lastVideoTime_ && 0.25 <= a ? this.mediaEvents_.firstQuartile() : 0.5 > this.lastVideoTime_ && 0.5 <= a ? this.mediaEvents_.midpoint() : 0.75 > this.lastVideoTime_ && 0.75 <= a ? this.mediaEvents_.thirdQuartile() : 1 > this.lastVideoTime_ && 1 <= a && (this.mediaEvents_.complete(), setTimeout(() => {
        this.adSession_.finish();
      }, 3000));
      this.lastVideoTime_ = a;
    }
  }
}
var $jscompDefaultExport$$module$src$omsdk_manager = OmsdkManager$$module$src$omsdk_manager, module$src$omsdk_manager = {};
module$src$omsdk_manager.default = $jscompDefaultExport$$module$src$omsdk_manager;
function getQueryParams$$module$src$query_utils(a) {
  const b = {};
  a.split("&").forEach(c => {
    c = c.split("=");
    b[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  });
  return b;
}
function parseVerificationSettings$$module$src$query_utils(a) {
  const b = {};
  var c = [VerificationSettingsKeys$$module$src$constants.ACCESS_MODE, VerificationSettingsKeys$$module$src$constants.CONTENT_URL, VerificationSettingsKeys$$module$src$constants.MEDIA_URL, VerificationSettingsKeys$$module$src$constants.OMSDK_URL, VerificationSettingsKeys$$module$src$constants.TEST_CASE_PAGE_NAME, VerificationSettingsKeys$$module$src$constants.VENDOR_KEY, VerificationSettingsKeys$$module$src$constants.VERIFICATION_PARAMETERS, VerificationSettingsKeys$$module$src$constants.VERIFICATION_SCRIPT_URL,
  ];
  for (const d of c) {
    if (c = a[d], "string" == typeof c) {
      b[d] = c;
    } else {
      return null;
    }
  }
  return b;
}
var module$src$query_utils = {};
module$src$query_utils.getQueryParams = getQueryParams$$module$src$query_utils;
module$src$query_utils.parseVerificationSettings = parseVerificationSettings$$module$src$query_utils;
class VideoCreativePageController$$module$src$video_creative_page_controller {
  constructor(a, b, c, d, e, f) {
    this.videoElement_ = a;
    this.didPressStart_ = !1;
    this.omsdkManager_ = null;
    this.volumeControl_ = b;
    this.playPauseButton_ = e;
    b.addEventListener("change", () => this.changeVolume_());
    b.addEventListener("input", () => this.changeVolume_());
    c.addEventListener("click", () => this.startButtonPressed_());
    d.addEventListener("click", () => this.clickButtonPressed_());
    e.addEventListener("click", () => this.playPauseButtonPressed_());
    f.addEventListener("click", () => this.fullscreenButtonPressed_());
    window.addEventListener("message", g => this.didReceivePostMessage_(g));
    window.parent.postMessage({[MessageKeys$$module$src$constants.TYPE]:MessageTypes$$module$src$constants.CREATIVE_DID_INIT,}, "*");
  }
  didReceivePostMessage_(a) {
    if (a.source == window.parent) {
      switch(a = a.data, a[MessageKeys$$module$src$constants.TYPE]) {
        case MessageTypes$$module$src$constants.LOAD_CREATIVE:
          (a = parseVerificationSettings$$module$src$query_utils(a[MessageKeys$$module$src$constants.DATA])) && this.didReceiveLoadCreativeMessage_(a);
      }
    }
  }
  didReceiveLoadCreativeMessage_(a) {
    this.videoElement_.src = a.mediaUrl;
    this.videoElement_.load();
    this.omsdkManager_ = new $jscompDefaultExport$$module$src$omsdk_manager(a, this.videoElement_);
  }
  startButtonPressed_() {
    this.didPressStart_ || (this.videoElement_.play(), this.didPressStart_ = !0);
  }
  clickButtonPressed_() {
    this.videoElement_.click();
  }
  playPauseButtonPressed_() {
    this.didPressStart_ && (this.videoElement_.paused ? (this.playPauseButton_.innerHTML = "<h3>Pause</h3>", this.videoElement_.play()) : (this.playPauseButton_.innerHTML = "<h3>Resume</h3>", this.videoElement_.pause()));
  }
  fullscreenButtonPressed_() {
    document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? this.videoElement_.requestFullscreen ? this.videoElement_.requestFullscreen() : this.videoElement_.webkitRequestFullscreen ? this.videoElement_.webkitRequestFullscreen() : this.videoElement_.msRequestFullscreen ? this.videoElement_.msRequestFullscreen() : this.videoElement_.mozRequestFullscreen && this.videoElement_.mozRequestFullscreen() : console.log("Fullscreen not enabled.");
  }
  changeVolume_() {
    this.videoElement_.volume = this.volumeControl_.value / 100;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const a = document.getElementById("videoElement"), b = document.getElementById("volumeControl"), c = document.getElementById("startButton"), d = document.getElementById("clickButton"), e = document.getElementById("playPauseButton"), f = document.getElementById("fullscreenButton");
  if (!(a instanceof HTMLVideoElement && b instanceof HTMLInputElement && c instanceof HTMLButtonElement && d instanceof HTMLButtonElement && e instanceof HTMLButtonElement && f instanceof HTMLButtonElement)) {
    throw Error("Could not locate video elements and player controls.");
  }
  new VideoCreativePageController$$module$src$video_creative_page_controller(a, b, c, d, e, f);
});
var module$src$video_creative_page_controller = {};

