
var preload;

preload = new createjs.LoadQueue(false, '../../../img/Programming/');

var plugin = {
    getPreloadHandlers: function() {
        return {
            types: ['image'],
            callback: function(src) {
                console.log(src);
                var id = src.split('/')[5].split('.')[0];
                var img = document.getElementById(id);
                return {
                    tag: img
                }
            }
        }
    }
}

preload.installPlugin(plugin);

preload.loadManifest([
    'Java.png',
    'iOS.jpg',
    'Swift.jpg'
]);
