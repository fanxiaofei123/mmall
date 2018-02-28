/*
* @Author: fxf
* @Date:   2018-01-29 23:11:00
* @Last Modified by:   fxf
* @Last Modified time: 2018-01-29 23:13:57
*/
'use strict';

var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data    : {
                pageSize : 50
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _address;