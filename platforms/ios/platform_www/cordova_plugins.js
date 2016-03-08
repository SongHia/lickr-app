cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "id": "cordova-plugin-console.console",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "id": "cordova-plugin-console.logger",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.videocaptureplus/www/VideoCapturePlus.js",
        "id": "nl.x-services.plugins.videocaptureplus.VideoCapturePlus",
        "pluginId": "nl.x-services.plugins.videocaptureplus",
        "clobbers": [
            "window.plugins.videocaptureplus"
        ]
    },
    {
        "file": "plugins/com.coryjthompson.libraryhelper/www/LibraryHelper.js",
        "id": "com.coryjthompson.libraryhelper.LibraryHelper",
        "pluginId": "com.coryjthompson.libraryhelper",
        "clobbers": [
            "LibraryHelper"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-camera": "2.1.0",
    "cordova-plugin-console": "1.0.2",
    "nl.x-services.plugins.videocaptureplus": "1.3.0",
    "com.coryjthompson.libraryhelper": "1.0"
}
// BOTTOM OF METADATA
});