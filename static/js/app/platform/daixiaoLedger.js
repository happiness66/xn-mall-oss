$(function () {
	var code = getQueryString('code');
	var c = getQueryString('c');
	var owner = getQueryString('owner');
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
		field : 'mobile',
		title : '发放用户',
		formatter: function(v, data){
			return data.toUser.mobile;
		}
	},{
    	field: 'toAmount',
    	title: '发放金额',
    	formatter: moneyFormat
    },{
		field: 'toCurrency',
		title: '币种',
		type: 'select',
		key: 'currency',
		keyCode: "802006",
        formatter: Dict.getNameForList("currency",'802006'),
	},{
		field : 'createDatetime',
		title : '发放时间',
		formatter: dateTimeFormat,
	},];

    buildList({
        columns: columns,
        pageCode: '802415',
        searchParams:{
        	fromUserId: owner,
        	fromCurrency: c,
        	toCurrency: c,
        	status: 1,
        	companyCode: OSS.company
		}
    });
    
	$('.tools .toolbar').empty();
	
	$('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
	$('#backBtn').on('click', function() {
		goBack();
	});  
    
    
});