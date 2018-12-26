/*
* 生成 由td 与 tr 构成的html
* */

var gulp = require('gulp');
var del = require('del');                        // 删除文件或目录
var rename = require('gulp-rename');            // 文件更名
var replace = require('gulp-string-replace');   // 字符串替换
var runSequence = require('run-sequence');      // 指定执行顺序
var gulpUtil = require('gulp-util');            // 用于构造错误信息，抛出以提示严重错误
var fs = require('fs');                         // 文件系统操作
var inject = require('gulp-js-text-inject');    // 读取text文件

// 配置信息
const dirResult = 'result/'; // 临时文件所在的目录
const content = 'content/';  // 内容目录
const dirResultSrc = dirResult + 'src/'; // 临时文件目录中存放源代码相关的地方
const contentName = 'jobTime.txt';   // 内容名称

// 拷贝相关的文件
gulp.task('Module:CopyAllFiles', function () {
    return gulp
        .src([
            content + '**/*.*'
        ])
        // .pipe(print())
        .pipe(gulp.dest(dirResultSrc));
});

// read text
gulp.task('Module:ReadText', function () {
    fileContentHandle()
});

function fileContentHandle() {
    let jobArr = fs.readFileSync(dirResultSrc + contentName, 'utf8').split('\r');

    jobArr = jobArr.map((item) => {
        let sonArr = [], htmlTemplate = '';
        sonArr = item.replace(/\n/g, '').split(' ').filter((key, index) => key !== '');
        htmlTemplate = `<tr><td>${sonArr[0] }</td><td>${sonArr[1] }</td><td>${sonArr[2] }</td><td>${sonArr[3] }</td><td>${sonArr[4] }</td></tr>`;
        return htmlTemplate;
    });

    fs.writeFileSync(dirResultSrc + contentName, jobArr.join('\n'));
}

gulp.task('creat',
    function (callback) {
        runSequence(
            'Module:CopyAllFiles',
            'Module:ReadText',
            callback);
    });
