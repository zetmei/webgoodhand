
//插入瀑布流圖片欄位
	var insetPPStyleLi = function(){
		var picNum = 99;
		for(i=1; i<picNum; i++){
			$('#grid').prepend('<li><a href="javascript:;"><img src=""><div class="hot_info"><p></p></div></a><p class="img_txt"></p><img class="brandPic" src=""></img><span></span></li>');
		}
	}

//產生亂數(v2.0)
    Array.prototype.randomize = function() {
        for (var i = this.length; i > 0; i--)
            this.push(this.splice((Math.floor(Math.random() * i)), 1));
    }
	var picRandom = function(){
		var picAr = [];
		for(i=0; i<picNum; i++){
			picAr[i] =  i + 1;
		}
		picAr.randomize();
	}

//置入圖片、說明(v2.0)
	var insetPicTxt = function(){
		$(function(){
			for(i=0; i<picNum; i++){
				$('#grid li:nth-child('+i+') img:first-child').attr('src',''+picJSON[picAr[i]].picSrc+'');
				$('#grid li:nth-child('+i+') .img_txt').text(''+picJSON[picAr[i]].picTxt+'');
				$('#grid li:nth-child('+i+') p + img').attr('src',''+picJSON[picAr[i]].picBrand+'');
				$('#grid li:nth-child('+i+') .hot_info').addClass(''+picJSON[picAr[i]].picStyle+'');
				$('#grid li:nth-child('+i+')').attr('data-style', ''+picJSON[picAr[picAr[i]]].picStyle+'');
				$('#grid li:nth-child('+i+') .hot_info p').text(''+picJSON[picAr[i]].picHover+'');
				$('#grid li:nth-child('+i+') span').addClass(''+picJSON[picAr[i]].picStyle+'');
			};
		});
	}

//FOR材質分類
	var PPStyle = function(liCount, startSid){
		var picCount = liCount+1;
		for(i=0; i<picCount; i++){
			$('#grid').prepend('<li><a href="javascript:;"><img src=""><div class="hot_info"><p></p></div></a><p class="img_txt"></p><img class="brandPic" src=""></img><span></span></li>');
		}
		$(function(){
			for(i=1; i<picCount; i++){
				//$('#grid li:nth-child('+i+') img:first-child').attr('src','images/'+i+'.jpg');
				$('#grid li:nth-child('+i+') img:first-child').attr('src',''+picJSON[i+startSid-2].picSrc+'');
				$('#grid li:nth-child('+i+') .img_txt').text(''+picJSON[i+startSid-2].picTxt+'');
				$('#grid li:nth-child('+i+') p + img').attr('src',''+picJSON[i+startSid-2].picBrand+'');
				$('#grid li:nth-child('+i+') .hot_info').addClass(''+picJSON[i+startSid-2].picStyle+'');
				//$('#grid li:nth-child('+i+')').attr('data-style', ''+picJSON[picAr[i]].picStyle+'');
				$('#grid li:nth-child('+i+') .hot_info p').text(''+picJSON[i+startSid-2].picHover+'');
				$('#grid li:nth-child('+i+') span').addClass(''+picJSON[i+startSid-2].picStyle+'');
			};
		});
	}
