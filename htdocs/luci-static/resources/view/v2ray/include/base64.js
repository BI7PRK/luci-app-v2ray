"use strict";var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b64re=/^(?:[A-Za-z\d+\\/]{4})*?(?:[A-Za-z\d+\\/]{2}(?:==)?|[A-Za-z\d+\\/]{3}=?)?$/;return L.Class.extend({decode:window.atob||function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!b64re.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var r,t,n,o="",a=0;a<e.length;)r=b64.indexOf(e.charAt(a++))<<18|b64.indexOf(e.charAt(a++))<<12|(t=b64.indexOf(e.charAt(a++)))<<6|(n=b64.indexOf(e.charAt(a++))),o+=64===t?String.fromCharCode(r>>16&255):64===n?String.fromCharCode(r>>16&255,r>>8&255):String.fromCharCode(r>>16&255,r>>8&255,255&r);return o},encode:window.btoa||function(e){for(var r,t,n,o,a="",d=0,c=(e=String(e)).length%3;d<e.length;){if((t=e.charCodeAt(d++))>255||(n=e.charCodeAt(d++))>255||(o=e.charCodeAt(d++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");r=t<<16|n<<8|o,a+=b64.charAt(r>>18&63)+b64.charAt(r>>12&63)+b64.charAt(r>>6&63)+b64.charAt(63&r)}return c?a.slice(0,c-3)+"===".substring(c):a}});