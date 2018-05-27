// -------------------------
// gulp相关
// -------------------------
var gulp = require('gulp');

var del = require('del'); // 删除文件或目录

var requireDir = require('require-dir'); // 加载同一个目录下的多个任务文件
var dirGulpTask = requireDir('./gulp-task'); // 加载同一个目录下的多个任务文件

var dirTemp = 'result/'; // 临时文件所在的目录
var dirRelease = 'web/'; // 处理后文件所在的目录

// -------------------------
// 清理
// -------------------------

// 公共的清理任务，同时也会将源代码目录下的公共库编译后的文件删除
gulp.task('clean', function () {
    del.sync([
        dirTemp
    ]);
});

// -------------------------------------------

// 默认任务
gulp.task('default', ['creat'], function () {
});
