$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '编号',
    }, {
        field: 'owner',
        title: '树主人',
        formatter: function(v, data){
        	return data.ownerUser.mobile;
        }
    }, {
        field: 'ownerAmount',
        title: '树主人领取金额',
        formatter:moneyFormat
    }, {
        field: 'ownerCurrency',
        title: '树主人领取币种',
        key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
    }, {
        field: 'receiveAmount',
        title: '红包领取金额',
        formatter:moneyFormat
    }, {
        field: 'receiver',
        title: '领取人',
        formatter: function(v, data){
        	if(data.receiverUser)
        		return data.receiverUser.mobile;
        	else
        		return "-";
        }
    }, {
        field: 'receiveCurrency',
        title: '领取人领取币种',
        key: 'currency',
        formatter: Dict.getNameForList("currency","802006"),
    }, {
    	field: 'receiveDatetime',
        title: '领取时间',
        formatter: dateTimeFormat
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: "hzb_mgift_status",
        keyCode:'615907',
        formatter: Dict.getNameForList("hzb_mgift_status",'615907'),
        search: true
    }, {
        field: 'remark',
        title: '备注'
    }];

    buildList({
        columns: columns,
        pageCode: '615135',
		searchParams:{
			companyCode: OSS.company
		}
    });
    
    
});