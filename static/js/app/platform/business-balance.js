$(function () {
	var userId = getQueryString('userId');
    
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    },{
		field : 'realName',
		title : '户名',
		search: true
	},{
		field: 'accountNumber',
		title: '账号'
	},{
		field : 'transAmount',
		title : '变动金额',
		formatter: moneyFormat
	},{
		field : 'fee',
		title : '手续费',
		formatter: moneyFormat
	},{
		field: 'preAmount',
		title: '变动前金额',
		formatter: moneyFormat
	},{
		field: 'postAmount',
		title: '变动后金额',
		formatter: moneyFormat
	},{
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'jour_status',
		keyCode:'802006',
		formatter: Dict.getNameForList('jour_status','802006'),
		search: true
	}, {
		field : 'createDatetime',
		title : '创建时间',
        formatter: dateTimeFormat
	}, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        pageCode: '802520',
		searchParams:{
			userId: userId,
			currency: 'CNY',
			bizType: '-11'
		}
    });
    
    $('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
	$('#backBtn').on('click', function() {
		goBack();
	}); 
});