cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-fonts.fonts",
    "file": "plugins/cordova-plugin-fonts/www/fonts.js",
    "pluginId": "cordova-plugin-fonts",
    "clobbers": [
      "navigator.Fonts"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.Toast",
    "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
    "pluginId": "cordova-plugin-x-toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-fonts": "0.6.5",
  "cordova-plugin-x-toast": "2.6.2",
  "cordova-plugin-ios-longpress-fix": "1.1.0"
};
// BOTTOM OF METADATA
});