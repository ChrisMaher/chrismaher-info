$(document).ready(function(){





            $(function() {
          
				// on  click logo	ul.list li
				$('ul.arrowunderline li,.menu > .item > .item_content >h2,.logo').hover(
				)
	
	
	// on  click navigation	
				.click(function(){
					var $this = $(this);
					var name = this.className;
					$('#content').animate({marginTop:-900}, 500,function(){ // upside slide animation 
					var $this = $(this);
		
		switch (name)
			{
			case 'home':
			$('#home').show();
			$('#maths,#webProgramming,#ooProgramming,#computerEssentials,#systemsAnalysis,#contact').hide();
			
			break;
			
			case 'logo':
			$('#home').show();
			$('#maths,#webProgramming,#ooProgramming,#computerEssentials,#systemsAnalysis,#contact').hide();
			break;
			
			case 'maths':
			$('#maths').show();
			$('#webProgramming,#home,#ooProgramming,#computerEssentials,#systemsAnalysis,#contact').hide();
			break;
			
			case 'webProgramming':	 
			$('#webProgramming').show();
			$('#maths,#home,#ooProgramming,#computerEssentials,#systemsAnalysis,#contact').hide();
			break;
			
			case 'ooProgramming':	 
			$('#ooProgramming').show();
			$('#maths,#home,#webProgramming,#computerEssentials,#systemsAnalysis,#contact').hide();
			break;
			
			case 'computerEssentials':
			$('#computerEssentials').show();
			$('#maths,#home,#ooProgramming,#webProgramming,#systemsAnalysis,#contact').hide();
			break;

			
			case 'systemsAnalysis':
			$('#systemsAnalysis').show();
			$('#maths,#home,#ooProgramming,#webProgramming,#computerEssentials,#contact').hide();
			break;

			case 'contact':
			$('#contact').show();
			$('#maths,#home,#ooProgramming,#webProgramming,#computerEssentials,#systemsAnalysis').hide();
			break;
			
		} // end switch 
					
				$this.animate({marginTop:108}, 500);  // Downside slide animation 
				$this.animate({marginTop:96}, 500); //  slight animation 
				$this.animate({marginTop:108}, 500); // reset to normal
		
					})	 

				});

            });

});

  // Card Slides END