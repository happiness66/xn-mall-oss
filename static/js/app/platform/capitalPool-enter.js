$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
            title: '入金金额',
            field: 'amount',
            required: true
        },
        {
            title: "入金备注",
            field: "remark",
            maxlength: 255,

        }
    ];

    var options = {
        fields: fields,
        //code: code,
        //detailCode: '808516'
    };

    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['amount'] = $("#amount").val()*1000;
                data['addUser'] = sessionStorage.getItem('userName');
                data["remark"] = $("#remark").val();
                reqApi({
                    code: "808500",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);


});