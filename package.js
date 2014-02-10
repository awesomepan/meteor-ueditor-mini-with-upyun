Package.describe({
  summary: "/* fill me in */"
});

Package.on_use(function (api, where) {
  api.add_files('meteor-ueditor-mini-with-upyun.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('meteor-ueditor-mini-with-upyun');

  api.add_files('meteor-ueditor-mini-with-upyun_tests.js', ['client', 'server']);
});
