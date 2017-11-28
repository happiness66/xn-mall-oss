$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '商家名称',
        search: true
    }, {
        field: 'type',
        title: '分类',
        type: 'select',
        listCode: '808007',
        keyName: 'code',
        valueName: 'name',
        params: {
            type: '2',
        },
        search: true
    }, {
        field: 'legalPersonName',
        title: '法人姓名',
    }, {
        field: 'bookMobile',
        title: '联系电话',
        search: true
    }, {
        field: 'smsMobile',
        title: '短信手机号',
        mobile: true,
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: "store_status",
        keyCode: '808907',
        formatter: Dict.getNameForList("store_status", "808907"),
        search: true,
    }, {
        field: 'isDefault',
        title: '是否默认',
        type: 'select',
        data: {
            1: "是",
            0: "否",
        },
        required: true,
    }, {
        field: 'rate2',
        title: '使用抵金券比例',
    }, {
        field: 'rate3',
        title: '返点人民币比例',
    }, {
        field: 'rate1',
        title: '返点菜狗币比例',
    }, {
        field: 'rate4',
        title: '返点抵金券比例',
    }, {
        field: 'createDatetime',
        title: '入驻时间',
        formatter: dateTimeFormat,
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat,
    }];

    buildList({
        columns: columns,
        pageCode: '808215',
        searchParams: {
            userReferee: getUserId(),
            companyCode: OSS.company
        }
    });

    //修改
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 2 || selRecords[0].status == 3) {
            toastr.info("当前商家状态不能修改!");
            return;
        }

        window.location.href = "store_edit.html?Code=" + selRecords[0].code;
    });

    //审核
    $('#examineBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 0) {
            toastr.info("当前店铺状态不能审核!");
            return;
        }

        window.location.href = "store_examine.html?Code=" + selRecords[0].code;
    });

    //上架
    $('#up2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 2 || selRecords[0].statu == 3) {
            toastr.info("已上架!");
            return;
        }

        if (selRecords[0].status != 1 && selRecords[0].status != 4) {
            toastr.info("当前店铺状态不能上架!");
            return;
        }

        window.location.href = "store_up2.html?Code=" + selRecords[0].code;
    });

    //下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 2 && selRecords[0].status != 3) {
            toastr.info("还未上架");
            return;
        }
        confirm("确认下架？").then(function() {
            reqApi({
                code: '808205',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        }, function() {});

    });

    $('#detail2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "store_detail.html?Code=" + selRecords[0].code;
    });


    $('#yyBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "yyLedger.html?Code=" + selRecords[0].code;
    });

    $('#daixiaoBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "daixiaoLedger.html?Code=" + selRecords[0].code + "&owner=" + selRecords[0].owner + "&c=CGB";
    });

    $('#jifenBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "daixiaoLedger.html?Code=" + selRecords[0].code + "&owner=" + selRecords[0].owner + "&c=CGJF";
    });

    //账户查询
    $('#accountQueryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "../platform/member_account.html?userId=" + selRecords[0].owner + "&business=1";
    });

    $('#goBackBtn').hide();


});