// 创建四个项目
//develop task：用于开发时使用
//release task:用于部署发布时用的
//watch task：监听实时文件修改行为，可及时打包
//default task：gulp 默认执行的task

var gulp = require('gulp');//本地安装gulp所用到的地方

less = require('gulp-less');

//定义一个自己的任务
gulp.task('project' , function (){
	gulp.src ('src/css/test.less') //该任务针对的文件
	.pipe(less()) //该任务调用的模块
	.pipe(gulp.dest('server/assets')); //将会在此目录下生成test.css
});

// gulp.task('watch',function(){
// 	gulp.watch('src/css/test.less',['less']);
// });
// gulp.task('default',function(){
// 	// gulp.run('less');
// 	gulp.run('watch');
// });

gulp.task('default',['project']);
// gulp.task('watch',function(){
// 	var watcher=gulp.watch(('src/css/test.less',['less']));
// });

//gulp.dest || gulp.src || gulp.task

//gulp watcher可以进行函数回调；gulp.watch()的另一个好的特性就是返回watcher对象，利用watcher来监听额外
//的事件或者向watch中添加文件

//gulp常用的组件：

//gulp-uglify:压缩，混淆js文件用的
//gulp-mini-css:压缩css使用的
//gulp－clean:清空文件夹
