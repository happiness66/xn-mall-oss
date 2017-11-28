$(function() {
	
	var code = getQueryString('code');
	
	var fields = [{
		title: '户名',
		field: 'realName',
		required: true,
		maxlength: 32
	}, {
		title: '账号',
		field: 'accountNumber',
		required: true
	},{
		title: '流水编号',
		field: 'code1',
		'[value]': 'code'
	}, {
		field : 'channelType',
		title : '渠道类型',
		type: 'select',
		key: 'channel_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('channel_type','802006'),
	}, {
		field: 'channelOrder',
		title: '渠道单号'
	}, {
		field : 'bizType',
		title : '业务类型',
		type: 'select',
		key: 'biz_type',
		keyCode:'802006',
		formatter: Dict.getNameForList('biz_type','802006'),
	}, {
		field: 'bizNote',
		title: '业务说明'
	}, {
		field: 'transAmount',
		title: '变动金额',
		formatter: moneyFormat
	}, {
		field : 'fee',
		title : '手续费',
		formatter: moneyFormat
	},{
		field: 'preAmount',
		title: '变动前金额',
		formatter: moneyFormat
	}, {
		field: 'postAmount',
		title: '变动后金额',
		formatter: moneyFormat
	}, {
		field: 'createDatetime',
		title: '金额変动时间',
		formatter: dateTimeFormat
	}, {
		field : 'status',
		title : '状态',
		type: 'select',
		key: 'jour_status',
		keyCode:'802006',
		formatter: Dict.getNameForList('jour_status','802006'),
	}, {
		field: 'workDate',
		title: '拟对账时间'
	},{
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		view: true,
		detailCode: '802522',
	});
	
});