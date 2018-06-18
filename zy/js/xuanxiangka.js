var xxk=document.getElementsByClassName('xuanxiangka');
		var h3=$('.xuanxiangka').find('h3');
		h3.click(function(){
		$(this).addClass('act').siblings().removeClass('act');
		$('.content').find('.box').eq($(this).index()).addClass('show').siblings().removeClass('show');
	});