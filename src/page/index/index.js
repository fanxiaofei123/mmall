/*
* @Author: fxf
* @Date:   2017-12-10 17:12:38
* @Last Modified by:   fxf
* @Last Modified time: 2018-01-07 16:22:20
*/

// console.log('hello index');
// var $$ = require('jquery');
// $$('body').html('index hrllosdhsgh --');

/*require('./index.css');
require('../module.js');*/

require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
    name : 'user-pass-update'
});

/*_mm.request({
    url: '/product/list.do?keyword=1',
    success: function(res){
        console.log(res);
    },
    error: function(errMsg){
        console.log(errMsg);
    }
});*/

/*console.log(_mm.getUrlParam('test'));*/

/*var html = '<div>{{data}}</div>';
var data = {
    data : 'test'
}
console.log(_mm.renderHtml(html,data));*/