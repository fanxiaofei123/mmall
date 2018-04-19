/*
* @Author: fxf
* @Date:   2018-03-01 15:03:09
* @Last Modified by:   fxf
* @Last Modified time: 2018-03-01 16:14:16
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _order           = require('service/order-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
    data:{
        orderNumber : _mm.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'order-detail'
        });
        //加载detail数据
        this.loadDetail();
    },
    bindEvent : function(){
        var _this = this;
        $(document).on('click','.order-cancel',function(){
            if (window.confirm('确定要取消订单吗？')) {
               _order.cancelOrder(_this.data.orderNumber,function(res){
                    _mm.successTips('订单取消成功');
                    _this.loadDetail();
                },function(errMsg){
                    _mm.errorTips(errMsg);
                }); 
            }
        });
    },
    //加载订单列表
    loadDetail : function(){
        var _this = this,
            orderDetailHtml = '',
            $content = $('.content');
        $content.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNumber, function(res){
            _this.dataFilter(res);
            //渲染HTML
            orderDetailHtml = _mm.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
            
        },function(errMsg){
            $content.html('<p class="err-tip">'+ errMsg +'</p>');
        });
    },
    //数据的适配
    dataFilter : function(data){
        data.needPay = data.status == 10;
        data.isCancelable = data.status == 10;
    }
};
$(function(){
    page.init();
});