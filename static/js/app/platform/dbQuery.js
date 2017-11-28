$(function () {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'periods',
        title: '期号',
    }, {
        field: 'toAmount',
        title: '中奖金额',
        formatter:moneyFormat
    },{
    	title: '中奖币种',
        field: 'toCurrency',
		key: 'currency',
		keyCode:'802006',
        formatter: Dict.getNameForList("currency","802006"),
        search: true
    }, {
        field: 'fromAmount',
        title: '单价',
        formatter:moneyFormat
    }, {
        title: '单价币种',
        field: 'fromCurrency',
		key: 'currency',
		keyCode:'802006',
        formatter: Dict.getNameForList("currency","802006"),
        search: true
    }, {
        title: '总次数',
        field: 'totalNum',
    }, {
        title: '已参与人次',
        field: 'investNum',
    }, {
        title: '每人最大投资次数',
        field: 'maxNum',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jewel_status',
        keyCode:'615907',
        formatter: Dict.getNameForList("jewel_status",'615907'),
        search: true
    }, {
        field: 'winUser',
        title: '中奖人',
        formatter: function(v, data){
        	if(data.user)
        		return data.user.mobile;
        	else
        		return "-";
        }
    }, {
        field: 'winNumber',
        title: '中奖号码',
    }, {
        field: 'winDatetime',
        title: '中奖时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        pageCode: '615015',
		searchParams:{
			companyCode: OSS.company
		}
    });
    
    
    $('#joinDetailBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "joinDetail.html?jewelCode=" + selRecords[0].code;

    });
    
});