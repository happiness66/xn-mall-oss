$(function() {

	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'realName',
		title : '户名',
		search: true
	},{
		field: 'currency',
		title: '充值币种',
        key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
	},{
		field: 'channelType',
		title: '渠道',
		type: 'select',
		key: 'channel_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('channel_type','802006'),
		search: true
	},{
		field : 'bizType',
		title : '业务类型',
		type: 'select',
		key: 'biz_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('biz_type','802006')
	},{
		field : 'transAmount',
		title : '变动金额',
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
	},{
		field : 'remark',
		title : '备注'
	}];
	buildList({
		router: 'lineRecharge',
		columns: columns,
		pageCode: '802520',
		searchParams: {
			'bizType': '11'
		}
	});
	
	
	$("#detail1Btn").click(function () {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if (selRecords.length <= 0) {
			toastr.info("请选择记录");
			return;
		}
		location.href = "lineRecharge_check.html?code=" + selRecords[0].code + "&detail=1";
	});
	
});

