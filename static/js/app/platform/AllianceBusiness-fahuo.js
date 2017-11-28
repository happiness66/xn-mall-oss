$(function () {
	var userId = getQueryString('userId');
	
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '订单编号',
    }, {
        field: 'status',
        title: '订单状态',
        type: "select",
        key: "order_status",
        keyCode: '808907',
        search: true,
        formatter: Dict.getNameForList("order_status","808907"),
    }, {
        field: 'amount2',
        title: '菜狗币总额',
        formatter: moneyFormat,
    }, {
        field: 'amount3',
        title: '抵金券总额',
        formatter: moneyFormat,
    }, {
        field: 'payAmount2',
        title: '已支付菜狗币总额',
        formatter: moneyFormat,
    }, {
        field: 'payAmount3',
        title: '已支付抵金券总额',
        formatter: moneyFormat,
    },{
        field: 'applyUser',
        title: '下单用户',
        formatter: function(v, data){
        	return data.user.mobile;
        },
        search: true,
        type: 'select',
		pageCode1: '805054',
		params: {
			kind: 'f1',
			updater:''
		},
		keyName: 'userId',
		valueName: 'mobile',
		searchName: 'mobile',
    },{
        field: 'applyDatetime',
        title: '下单时间',
        type: "datetime",
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildList({
        columns: columns,
        pageCode: '808065',
		searchParams:{
			toUser: userId,
			companyCode: OSS.company
		}
    });
    
    $('.tools .toolbar').html('<li style="display:block;" id="detail2Btn"><span><img src="/static/images/t01.png"></span>详情</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
	$('#backBtn').on('click', function() {
		window.location.href = "AllianceBusiness.html";
	});  
    
     $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "../store/order_addedit.html?code=" + selRecords[0].code+"&v=1";
    });
    
});