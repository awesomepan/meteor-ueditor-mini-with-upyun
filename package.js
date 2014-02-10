Package.describe({
  summary: "ueditor mini with upyun"
});

Npm.depends({
  'connect': '2.7.10',
  'node-uuid': '1.4.1',
  'node-http': '0.0.5',
});

var everywhere = ['server', 'client'];


Package.on_use(function (api, everywhere) {
  var path = Npm.require('path');
  api.add_files([
    'umeditor.config.js',
    'umeditor.js',
    'themes/default/css/umeditor.css',
    'lang/zh-cn/zh-cn.js',
    ], 'client');

  api.use(['webapp','npm', 'upyun'], 'server');
  api.use(['iron-router','coffeescript','jquery'], everywhere);
  api.add_files([
    'upyun.coffee', 
    'request-data.coffee',
    ], 'server');
    api.export('RequestData', 'server');
    

  api.add_files([
    path.join('themes/default/images/icons.png'),
    path.join('themes/default/images/icons.gif'),
    path.join('themes/default/images/caret.png'),
    path.join('themes/default/images/close.png'),
    path.join('themes/default/images/ok.gif'),
    path.join('themes/default/images/pop-bg.png'),
    path.join('themes/default/images/spacer.gif'),
    path.join('themes/default/images/videologo.gif'),
    ], 'client');

  // Now dialogs must copy to /public 
  api.add_files(path.join('dialogs/emotion/emotion.js'), 'client');
  api.add_files(path.join('dialogs/emotion/emotion.css'), 'client');
  api.add_files(path.join('dialogs/emotion/images/0.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/bface.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/cface.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/fface.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/jxface2.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/neweditor-tab-bg.png'), 'client');
  api.add_files(path.join('dialogs/emotion/images/tface.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/wface.gif'), 'client');
  api.add_files(path.join('dialogs/emotion/images/yface.gif'), 'client');
  
  api.add_files(path.join('dialogs/image/image.js'), 'client');
  api.add_files(path.join('dialogs/image/image.css'), 'client');
  api.add_files(path.join('dialogs/image/images/close.png'), 'client');
  api.add_files(path.join('dialogs/image/images/upload1.png'), 'client');
  api.add_files(path.join('dialogs/image/images/upload2.png'), 'client');


  api.add_files(path.join('dialogs/video/video.js'), 'client');
  api.add_files(path.join('dialogs/video/video.css'), 'client');
  api.add_files(path.join('dialogs/video/images/center_focus.jpg'), 'client');
  api.add_files(path.join('dialogs/video/images/left_focus.jpg'), 'client');
  api.add_files(path.join('dialogs/video/images/none_focus.jpg'), 'client');
  api.add_files(path.join('dialogs/video/images/right_focus.jpg'), 'client');
  
  api.add_files(path.join('dialogs/link/link.js'), 'client');
  api.add_files(path.join('dialogs/map/map.js'), 'client');
 


});

Package.on_test(function (api) {
  api.use('ueditor');

  api.add_files('ueditor_tests.js', ['client', 'server']);
});
