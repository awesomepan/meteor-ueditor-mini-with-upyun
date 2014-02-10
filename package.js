Package.describe({
  summary: "ueditor mini with upyun"
});

Npm.depends({
  'connect': '2.7.10',
  'node-uuid': '1.4.1',
  'node-http': '0.0.5',
});

var path = Npm.require('path'),
      fs = Npm.require("fs"),
      packagePath = path.join(path.resolve("."), "packages", "ueditor-mini-with-upyun");

Package.on_use(function (api, where) {
    
  api.use(['webapp','npm'], 'server');
  api.use(['iron-router','coffeescript','jquery'], ['client', 'server']);


  api.add_files(['umeditor.config.js', 'umeditor.js', 'umeditor.css', 'lang/zh-cn/zh-cn.js'], 'client');
  api.add_files(['upyun.coffee', 'request-data.coffee'], 'server');
  api.export('RequestData', 'server');
    
  var snippets = fs.readdirSync(path.join(packagePath, "themes", "default","images"));
  snippets.forEach(function(file){
    snippetPath = path.join("themes", "default", "images", file)
    api.add_files(snippetPath, "client", {isAsset: true});
  })

  api.add_files(path.join('dialogs', 'emotion', 'emotion.js'), "client", {isAsset: true});
  api.add_files(path.join('dialogs', 'emotion', 'emotion.css'), "client", {isAsset: true});
  var snippets = fs.readdirSync(path.join(packagePath, "dialogs", "emotion","images"));
  snippets.forEach(function(file){
    snippetPath = path.join("dialogs", "emotion", "images", file)
    api.add_files(snippetPath, "client", {isAsset: true});
  })

  api.add_files(path.join('dialogs', 'image', 'image.js'), "client", {isAsset: true});
  api.add_files(path.join('dialogs', 'image', 'image.css'), "client", {isAsset: true});
  var snippets = fs.readdirSync(path.join(packagePath, "dialogs", "image","images"));
  snippets.forEach(function(file){
    snippetPath = path.join("dialogs", "image", "images", file)
    api.add_files(snippetPath, "client", {isAsset: true});
  })

  api.add_files(path.join('dialogs', 'video', 'video.js'), "client", {isAsset: true});
  api.add_files(path.join('dialogs', 'video', 'video.css'), "client", {isAsset: true});
  var snippets = fs.readdirSync(path.join(packagePath, "dialogs", "video","images"));
  snippets.forEach(function(file){
    snippetPath = path.join("dialogs", "video", "images", file)
    api.add_files(snippetPath, "client", {isAsset: true});
  })

  api.add_files(path.join('dialogs', 'link', 'link.js'), "client", {isAsset: true});

  api.add_files(path.join('dialogs', 'map', 'map.js'), "client", {isAsset: true});


});