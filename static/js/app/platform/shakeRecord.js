$(function () {
	var code = getQueryString('code');
	var hzbCode = getQueryString('hzbCode');
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'hzbCode',
        title: '摇钱树',
    }, {
        field: 'user',
        title: '摇出人',
        formatter: function(v, data){
        		return data.user.mobile;
        }
    }, {
        field: 'yyCurrency',
        title: '摇出币种',
        search: true,
        key: 'currency',
        keyCode: '802006',
        formatter: Dict.getNameForList("currency","802006"),
    }, {
        field: 'yyAmount',
        title: '摇出金额',
        formatter:moneyFormat
    }, {
        field: 'createDatetime',
        title: '产生时间',
        formatter: dateTimeFormat
    }, {
        field: 'deviceNo',
        title: '设备编号',
    }];

    buildList({
        columns: columns,
        pageCode: '615125',
		searchParams:{
			hzbCode: hzbCode,
			companyCode: OSS.company
		}
    });
    
    $('#luckMomListBtn').remove();
    $('#shakeRecordBtn').remove();
    $('#upDownBtn').remove();
    
});