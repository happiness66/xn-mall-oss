$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: "title",
        title: '活动标题',
    }, {
        title: "赠送币种",
        field: "currency",
        type: "select",
        required: true,
        key: "currency",
        keyCode: "802006",
        formatter: Dict.getNameForList("currency", '802006'),
        search: true
    }, {
        title: '直接推荐人获得数量',
        field: 'number',
        formatter: moneyFormat
    }, {
        title: '间接推荐人获得数量',
        field: 'indirectNumber',
        formatter: moneyFormat
    }, {
        title: '开始时间',
        field: 'startDatetime',
        type: "datetime",
        formatter: dateTimeFormat,
        search: true
    }, {
        title: '结束时间',
        field: 'endDatetime',
        type: "datetime",
        formatter: dateTimeFormat,
        search: true
    }, {
        title: "阅读时长(秒)",
        field: "readTimes",
    }, {
        title: "UI次序",
        field: "orderNo"
    }, {
        title: "浏览人数",
        field: "count",
    }, {
        type: "select",
        field: "status",
        title: "状态",
        data: {
            "0": "未上架",
            "1": "已上架",
            "2": "已下架"
        },
        search: true
    }, {
        title: "备注",
        field: "remark"
    }];

    buildList({
        columns: columns,
        pageCode: '801050',
        deleteCode: '801041',
        beforeEdit: function(data) {
            if (data.status == "1") {
                toastr.warning("上架中，不可修改");
                return "";
            }
            window.location.href = "./active_addedit.html?code=" + data.code;
        },
        searchParams: {
            type: "6",
            companyCode: OSS.company
        }
    });
    //上架
    $('#upBtn').click(function() {

        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.warning("请选择记录");
            return;
        }

        if (selRecords.length > 1) {
            toastr.warning("不能多选");
            return;
        }

        if (selRecords[0].status == 1) {
            toastr.warning("该记录不是可上架的状态");
            return;
        }
        window.location.href = "./active_up.html?code=" + selRecords[0].code;

    });
    //下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.warning("请选择记录");
            return;
        }

        if (selRecords.length > 1) {
            toastr.warning("不能多选");
            return;
        }

        if (selRecords[0].status != 1) {
            toastr.warning("该记录不是可下架的状态");
            return;
        }
        confirm("确认下架？").then(function() {
            reqApi({
                code: '801044',
                json: { "code": selRecords[0].code, remark: "下架" }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        }, function() {});

    });

});