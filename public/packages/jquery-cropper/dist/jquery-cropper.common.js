"use strict";function _interopDefault(r){return r&&"object"==typeof r&&"default"in r?r.default:r}var $=_interopDefault(require("jquery")),Cropper=_interopDefault(require("cropperjs"));if($&&$.fn&&Cropper){var AnotherCropper=$.fn.cropper,NAMESPACE="cropper";$.fn.cropper=function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];var p;return this.each((function(e,o){var n=$(o),a="destroy"===r,f=n.data(NAMESPACE);if(!f){if(a)return;var i=$.extend({},n.data(),$.isPlainObject(r)&&r);f=new Cropper(o,i),n.data(NAMESPACE,f)}if("string"==typeof r){var u=f[r];$.isFunction(u)&&((p=u.apply(f,t))===f&&(p=void 0),a&&n.removeData(NAMESPACE))}})),void 0!==p?p:this},$.fn.cropper.Constructor=Cropper,$.fn.cropper.setDefaults=Cropper.setDefaults,$.fn.cropper.noConflict=function(){return $.fn.cropper=AnotherCropper,this}}