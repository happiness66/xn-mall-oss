$(function() {
    var code = getQueryString('code');
    //var  view =getQueryString('v');

    var fields = [{
        title: '汇率',
        field: 'rate',
        required: true,
        number: true

    }];

    var options = {
        fields: fields,
          code: code,
          detailCode: '808516'
    };

    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['rate'] = $("#rate").val();
                data['addUser'] = sessionStorage.getItem('userName');
                reqApi({
                    code: "808501",
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