/*
* @Author: fxf
* @Date:   2018-02-02 14:52:07
* @Last Modified by:   fxf
* @Last Modified time: 2018-02-02 15:23:39
*/
'use strict';

var _cities = {
    cityInfo : {
        '北京市' :['朝阳区',　'海淀区',　 '通州区'],
        '广东省' :['东莞市',　 '广州市',　 '中山市',　 '深圳市',　 '惠州市',　 '江门市'],
        '山东省' :['济南市',　 '青岛市',　 '临沂市',　 '济宁市',　 '菏泽市',　 '烟台市',　 '泰安市'],　　
        '江苏省' :['苏州市',　 '徐州市',　 '盐城市',　 '无锡市',　 '南京市',　 '南通市',　 '连云港市'],　 　
        '河南省' :['郑州市',　 '南阳市',　 '新乡市',　 '安阳市',　 '洛阳市',　 '信阳市',　 '平顶山市'], 　 　
        '上海市' :['松江区',　 '宝山区',　 '金山区',　 '嘉定区',　 '南汇区',　 '青浦区',　 '浦东新区'],　 　　
        '河北省' :['石家庄市', '唐山市',　 '保定市',　 '邯郸市',　 '邢台市',　 '河北区',　 '沧州市'],
        '浙江省' :['温州市',　 '宁波市',　 '杭州市',　 '台州市',　 '嘉兴市',　 '金华市',　 '湖州市'],　 
        '陕西省' :['西安市',　 '咸阳市',　 '宝鸡市',　 '汉中市',　 '渭南市',　 '安康市',　 '榆林市'],　 　
        '湖南省' :['长沙市',　 '邵阳市',　 '常德市',　 '衡阳市',　 '株洲市',　 '湘潭市',　 '永州市'],　 　
        '重庆市' :['江北区',　 '渝北区',　 '沙坪坝区',　'九龙坡区',　 '万州区',　 '永川市',　 '南岸区'],　 　 　 
        '福建省' :['漳州市',　 '泉州市',　 '厦门市',　 '福州市',　 '莆田市',　 '宁德市',　 '三明市',　 '南平市'],　　
        '天津市' :['和平区',　 '北辰区',　 '河北区',　 '河西区',　 '西青区',　 '津南区',　 '东丽区',　 '武清区'],　 
        '云南省' :['昆明市',　 '红河州',　 '大理州',　 '文山州',　 '德宏州',　 '曲靖市',　 '昭通市',　 '楚雄州'],　 
        '四川省' :['成都市',　 '绵阳市',　 '广元市',　 '达州市',　 '南充市',　 '德阳市',　 '广安市',　 '阿坝州'],　  
        '安徽省' :['芜湖市',　 '合肥市',　 '六安市',　 '宿州市',　 '阜阳市',　 '安庆市',　 '马鞍山市',　 '蚌埠市'],　 
        '海南省' :['三亚市',　 '海口市',　 '琼海市',　 '文昌市',　 '东方市',　 '昌江县',　 '陵水县',　 '乐东县'],　 
        '江西省' :['南昌市',　 '赣州市',　 '上饶市',　 '吉安市',　 '九江市',　 '新余市',　 '抚州市',　 '宜春市'],　 
        '湖北省' :['武汉市',　 '宜昌市',　 '襄樊市',　 '荆州市',　 '恩施州',　 '孝感市',　 '黄冈市',　 '十堰市']　
    },
    //获取所有的省份
    getProvinces : function(){
        var provinces = [];
        for(var item in this.cityInfo){
            provinces.push(item);
        }
        return provinces;
    },
    //获取某省份的所有城市
    getCities : function(provinceName){
        return this.cityInfo[provinceName] || [];
    }
}
module.exports = _cities 