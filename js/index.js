$("#baidu").click(function(){
				var $inp = $(".inp").val();
				var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=&tn=baiduerr&bar=&wd="+$inp
				location.href=url
			});
	        $("#google").click(function(){
	      	  var $inp = $(".inp").val();
	      	  var url = "https://www.google.com/search?source=hp&ei=iRofXsrnNIz_9QO4sKXABQ&q="+$inp
	      	  location.href=url
	        });
			$("#bing").click(function(){
			  	  var $inp = $(".inp").val();
			  	  var url = "https://cn.bing.com/search?q="+$inp
			  	  location.href=url
			});
			$(".yaohuo").click(function(){
				location.href="https://yaohuo.me"
			});
			$(".bili").click(function(){
				location.href="https://www.bilibili.com"
			});
			$(".iqiyi").click(function(){
				location.href="https://iqiyi.com"
			});
			$(".youku").click(function(){
				location.href="https://youku.com"
			});
			 $('.inp').bind('keypress',function(event){
			            if(event.keyCode == "13")    
			            {
							// alert(123)
			                window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&ch=&tn=baiduerr&bar=&wd="+$('.inp').val())
			            }
			        });
		setTimeout(function(){
            $(".inp").focus();
        },50)
