var app = angular.module('sample',['paginator']);

app.controller('index',function($http,$scope,page){

    //初始化页面数据
    
    page.ini(url1,url2);//url1获取总页数大小，url2获取第一页的数据
    
    //分页操作,只举例上翻，其余类似
    page.up();
    page.show(url2);//值得注意的，url2是数据源地址，无需加上分页值，page服务会自动加上
    
    //同一页面多个分页，采取pageChild多服务的形式，当时由于时间原因，没有整合到一个类，不过多服务的扩展只是简单复制也并不复杂，所以也
    就不再修改
    
    


});
