(function() {
  'use strict';
  angular.module('paginator', []).factory('page',['$http',function($http){
     
     var obj = {};
     
     var ajax = false;
     
     var timer;
     
	 return {
	 
	    'ajax' : function(){
	    
	         return ajax;
	    
	    },
        
		'ini' : function(url1,url2){
		
		    var oop = this;
		    
			$http.get(url1).success(function(data){

				obj.num = 1;

				obj.total = data;

				obj.upBtn = false;

				if(obj.num == obj.total){

					obj.nextBtn = false;
					
				}else{
				    
				    obj.nextBtn = true;
				
				}
				
				ajax = true;
				
				oop.show(url2);

			}); 

		 },

		 'show' : function(url){
		 
		    return this._show(url);

		 },
		 
		'_show' : function(url){
		
		    if(this.ajax()){
		        
			    url = url + '&page='+obj.num;
			
			    $http.get(url).success(function(data){
			        
				    var dat = {
					
					    'item' : data,
					    'now' : obj.num,
					    'up' : obj.upBtn,
					    'down' : obj.nextBtn,
					    'total' : obj.total

				    };
				    
				    glob_angular(dat);

			    });
			    
			 }
			 
		},

		'up' : function(){
			
			 obj.num -= 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }

		 },

		 'down' : function(){

			 obj.num += 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }


		 },
		 
		 'home' : function(){
		    
		     obj.num = 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 },
		 
		 'end' : function(){
		 
		     obj.num = obj.total;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 },
		 
		 'jump' : function(page){
		 
		     obj.num = page;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 }

	 }

  }]).factory('pageChild',['$http',function($http){
  
     var obj = {};
     
     var ajax = false;
     
     var timer;
     
	 return {
	 
	    'ajax' : function(){
	    
	         return ajax;
	    
	    },
        
		'ini' : function(url1,url2){
		
		    var oop = this;
		    
			$http.get(url1).success(function(data){

				obj.num = 1;

				obj.total = data;

				obj.upBtn = false;

				if(obj.num == obj.total){

					obj.nextBtn = false;
					
				}else{
				    
				    obj.nextBtn = true;
				
				}
				
				ajax = true;
				
				oop.show(url2);

			}); 

		 },

		 'show' : function(url){
		 
		    return this._show(url);

		 },
		 
		'_show' : function(url){
		
		    if(this.ajax()){
		        
			    url = url + '&page='+obj.num;
			
			    $http.get(url).success(function(data){
			        
				    var dat = {
					
					    'item' : data,
					    'now' : obj.num,
					    'up' : obj.upBtn,
					    'down' : obj.nextBtn,
					    'total' : obj.total

				    };
				    
				    glob_angular_child(dat);

			    });
			    
			 }
			 
		},

		'up' : function(){
			
			 obj.num -= 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }

		 },

		 'down' : function(){

			 obj.num += 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }


		 },
		 
		 'home' : function(){
		    
		     obj.num = 1;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 },
		 
		 'end' : function(){
		 
		     obj.num = obj.total;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 },
		 
		 'jump' : function(page){
		 
		     obj.num = page;

			 if(obj.num <= 1 && obj.num < obj.total){

				obj.upBtn = false;

				obj.nextBtn = true;

			 }else if(obj.num <= 1 && obj.num >= obj.total){

				obj.upBtn = false;

				obj.nextBtn = false;

			 }else if(obj.num > 1 && obj.num < obj.total){

				obj.upBtn = true;

				obj.nextBtn = true;

			 }else{

				obj.upBtn = true;

				obj.nextBtn = false;

			 }
		 
		 }

	 }
  
  }]);

})();

<!---use this module will need follow func--->
    
    function glob_angular(data){
    
        var el = document.querySelector('[ng-app=sample]');
        
        var scope = angular.element(el).scope();
        
        scope.show = data;
        
        //$scope.show storage the page data,so every page.show() execute,the page will change the data;
    
    }
    
    function glob_angular_child(data){
    
        var el = document.querySelector('[ng-app=sample]');
        
        var scope = angular.element(el).scope();
        
        scope.details = data;
        
        //$scope.details storage the another page data,so every pageChild.show() execute,the page will change the data;
    
    }
    
<!---end--->
