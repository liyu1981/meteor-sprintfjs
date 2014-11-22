Package.describe({
  name: 'liyu:sprintfjs',
  summary: 'sprintjs for meteor',
  version: '1.0.0',
  git: 'https://github.com/liyu1981/meteor-sprintfjs'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('sprintf');
  api.addFiles(['pre.js', 'sprintfjs/dist/sprintf.min.js', 'post.js'], [ 'client', 'server' ]);
});
