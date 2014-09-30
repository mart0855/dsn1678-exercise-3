var salesDetailsLeft = $('.sales__details-left');
var salesLeft = $('.sales-left');


var buttonClickHandler = function () {
	var isActive = salesDetailsLeft.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsLeft.attr('data-state', 'inactive');
		} else {
		salesDetailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', buttonClickHandler);

var salesDetailsRight = $('.sales__details-right');
var salesRight = $('.sales-right');


var buttonClickHandler = function () {
	var isActive = salesDetailsRight.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
		} else {
		salesDetailsRight.attr('data-state', 'active');
	}
};

salesRight.on('click', buttonClickHandler);