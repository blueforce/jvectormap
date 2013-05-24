jQuery(document).ready(function($) {
	$(function() {
		$('#ch-map').vectorMap({
			map: 'ch_merc_en',
			backgroundColor: 'rgba(255,255,255,0.8)',
			regionsSelectable: true,
			regionsSelectableOne: true,
			regionStyle: {
				initial: {
					fill: '#B8E186',
					stroke: '#ffffff',
					"stroke-width": 1,
					"stroke-opacity": 1
				},
				selected: {
					fill: '#7fbf4f'
				}
			},
			onRegionSelected: function(event, code) {
			
			var selectedRegion = $('#ch-map').vectorMap('get', 'mapObject');
			
				var catAlias;
				switch(code) {
					case "CH-AG":
					catAlias = 'ag';
					break;
				
					case "CH-AR":
					catAlias = 'ar';
					break;
				
					case "CH-AI":
					catAlias = 'ai';
					break;
				
					case "CH-BL":
					catAlias = 'bl';
					break;
				
					case "CH-BS":
					catAlias = 'bs';
					break;
				
					case "CH-BE":
					catAlias = 'be';
					break;
				
					case "CH-FR":
					catAlias = 'fr';
					break;
				
					case "CH-GE":
					catAlias = 'ge';
					break;
				
					case "CH-GL":
					catAlias = 'gl';
					break;
				
					case "CH-GR":
					catAlias = 'gr';
					break;
				
					case "CH-JU":
					catAlias = 'ju';
					break;
				
					case "CH-LU":
					catAlias = 'lu';
					break;
				
					case "CH-NE":
					catAlias = 'ne';
					break;
				
					case "CH-NW":
					catAlias = 'nw';
					break;
				
					case "CH-OW":
					catAlias = 'ow';
					break;
				
					case "CH-SH":
					catAlias = 'sh';
					break;
				
					case "CH-SZ":
					catAlias = 'sz';
					break;
				
					case "CH-SO":
					catAlias = 'so';
					break;
				
					case "CH-SG":
					catAlias = 'sg';
					break;
				
					case "CH-TI":
					catAlias = 'ti';
					break;
				
					case "CH-TG":
					catAlias = 'tg';
					break;
				
					case "CH-UR":
					catAlias = 'ur';
					break;
				
					case "CH-VD":
					catAlias = 'vd';
					break;
				
					case "CH-VS":
					catAlias = 'vs';
					break;
				
					case "CH-ZG":
					catAlias = 'zg';
					break;
				
					case "CH-ZH":
					catAlias = 'zh';
					break;
					
					default:
					catAlias = false;
					break;
				}
				
				console.log('Canton Code: ' + code + '   Category Alias: ' + catAlias);
				
				$(".jvectormap-results li.info").hide();
				if (catAlias !== false) {
					$(".jvectormap-results li." + catAlias).fadeIn();
					$(".jvectormap-results li.load").text(selectedRegion.getRegionName(code))
				}
				/*event.preventDefault();
				event.stopPropagation;
				$(".jvectormap-results").find('.selected').hide();
				$(".jvectormap-results li." + catAlias).addClass('selected').fadeIn();*/
				
				//return false;
			}
			
		});
	});
	
	
	$("#filter").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".jvectormap-results li.info").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $(".jvectormap-results li.load").text(count + " results found.");
    });
	
	
});