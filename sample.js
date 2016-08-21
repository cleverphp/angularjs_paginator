var app = angular.module('sample',['paginator']);

app.controller('index',function($http,$scope,page){

    //initialize the page data
    
    page.ini(url1,url2);//url1 use to get the total pages num，url2 use to get the first page data
    
    //start paginator,other operations similar
    page.up();
    page.show(url2);//attention,you do not need to add page num to url,as page service will add it auto
    
    //if when you wan to paginator many pages at the same page,then you can use child service,just copy the original,and give it
    //another name,you can use pageChild to paginator another page then.
    
    


});
