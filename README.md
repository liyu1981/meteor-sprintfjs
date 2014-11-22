sprintfjs for Meteor
====================

This is a simple wrapper of [sprintfjs](https://github.com/alexei/sprintf.js) for Meteor.

Use it by

```bash
  meteor add liyu:sprintfjs
```

This package will expose global `sprintf` variable, so in both your client and server code

```javascript
var s = sprintf('hello, %s.', 'buddy');
// s now will be 'hello, buddy'
```

how to dev & build
==================

```bash
git clone git@github.com:liyu1981/meteor-sprintfjs.git
cd meteor-sprintfjs
git submodule init
git submodule update
ln -s `pwd` /path/to/your/test/meteor/app/packages/liyu:sprintfjs
cd /path/to/your/test/meteor/app
meteor add liyu:sprintfjs
meteor
```
