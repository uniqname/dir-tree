# dir-tree
Creates a JavaScript object representing the directory structure of a given path.

#API

```
dirTree = require('dir-tree');
```

Given a directory structure of the following

```
/demo/
     dir1/
         file1.txt
         dir2/
     dir3/
         file2.js
     file3.js
```

##Promises
dirTree returns a promise that resolves with the directory tree object.

```
dirTree('/demo').then(function (tree) {
    console.log(tree);
});
```

The output of the above would be...

```
{
    'dir1': {
        'file1.txt': true,
        'dir2': {}
    },
    'dir3': {
        'file2.js': true
    },
    'file3.js': true
}
```

##Callbacks
dirTree can also be passed a callback that will be called with the final directory tree as the only argument.

```
dirTree('/demo', function (tree) {
    console.log(tree);
});
```
