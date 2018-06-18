		var chouti=$('.chouti').eq(0);
		var ctt=chouti.find('.ctt');
		var title=ctt.find('.title'); 
		var titlew=title.innerWidth(); 
		var ctimgw=chouti.find('.img').innerWidth(); 
		title.click(function() {
		var n=$(this).parent().index();
		ctt.each(function(i){
				if(i<=n){
					$(this).css('left',i*titlew);
				}else{
					$(this).css('left',i*titlew+ctimgw);
				}
			});
		});