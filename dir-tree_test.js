var assert = require('chai').assert,
    dirTree = require('./dir-tree');

describe('Tests for dir-tree, a directory tree generator', function () {
    'use strict';

    it('should return a promise', function () {
        var tree = dirTree(process.cwd() + '/demo');
        assert.isFunction(tree.then);
        assert.isFunction(tree.catch);
    });

    it('when passed in as last argument, should execute a callback on completion', function () {
        var tree = dirTree(process.cwd() + '/demo', assert.isObject);
    });

    it('should have a value of `true` for file entries', function () {

        var tree = dirTree(process.cwd() + '/demo').then(function (tree) {
            assert.strictEqual(tree['file1.txt'], true);
        });
    });

    it('should have a value that is an object for diretory entries', function () {

        var tree = dirTree(process.cwd() + '/demo').then(function (tree) {
            assert.isObject(tree.inner);
        });
    });

    it('should recurse as deep as the file structure is', function () {

        var tree = dirTree(process.cwd() + '/demo').then(function (tree) {
            assert.strictEqual(tree.inner['file2.txt'], true);
        });
    });
});
