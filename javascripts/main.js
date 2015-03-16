(function() {
	var mapping = {
		'skill_js': ['Sugar_FT', 'Sugar_intern'],
		'skill_htmlcss': ['Sugar_FT', 'Sugar_intern'],
		'skill_python': ['EC_intern', 'opportunityDiscovery'],
		'skill_c#': ['EC_intern'],
		'skill_c++': ['heartsGame'],
		'skill_java': ['waterloo'],
		'skill_matlab': ['denoisedImages', 'imageSegmentation'],
		'skill_r': ['waterloo'],
		'skill_groovy': ['GM_intern'],
		'skill_scheme': ['waterloo']
	}
	var animationOn = [];
	$('.btn').click(function(evt) {
		if (!_.isEmpty(animationOn)) {
			return;
		}
		var id = evt.currentTarget.id;
		var selectList = mapping[id];

		_.each(selectList, function(id) {
			animationOn.push(true);
			$('#'+id).css('backgroundColor', '#D6EAF4');
		});

		_.each(selectList, function(id) {
			if (_.contains(['waterloo', 'heartsGame', 'imageSegmentation', 'denoisedImages'], id)){
				document.getElementById(id).scrollIntoView();
			}
			$('#'+id).animate({
          		backgroundColor: '#fff'
        	}, 1200, function() {
        		animationOn.pop();
        	});
		});
	});
}())
