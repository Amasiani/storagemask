function buy_asset(asset) {
    $('#buy_asset h4').html('Buy ' + asset);
    $('.coin-logo').html('<img src="images/icon/' + asset + '.png">');
    $('#buy_asset h5').html('Buy ' + asset);
    var coin_val = parseFloat($('#' + asset).val()).toFixed(2);
    $('#buy_asset h2').html(coin_val);
    $('#p_price').val(coin_val);
    $('#coin').val(asset);
    asset_info();
    $('.modal').modal();
}

function buy_stock(asset, asset_name) {
    $('#buy_stock h4').html('Buy Stock');
    $('.coin-logo').html('<img src="images/icon/' + asset + '.svg">');
    $('#buy_stock h5').html(asset_name);
    $('#stock_f_name').val(asset_name);
    var coin_val = parseFloat($('#' + asset).val()).toFixed(2);
    $('#buy_stock h2').html(coin_val);
    $('#stock_price').val(coin_val);
    $('#stock').val(asset);
    stock_info();
    $('.modal').modal();
}


function buy_oil(asset) {
    $('#buy_oil h4').html('Buy ' + asset);
    $('.coin-logo').html('<img src="images/icon/' + asset + '.png">');
    $('#buy_oil h5').html('Buy ' + asset);
    $('#buy_oil h2').html(asset);
    $('#p_price').val(0);
    $('#oil').val(asset);
    oil_info();
    $('.modal').modal();
}

function buy_gold(asset) {
    $('#buy_gold h4').html('Buy ' + asset);
    $('.coin-logo').html('<img src="images/icon/' + asset + '.png">');
    $('#buy_gold h5').html('Buy ' + asset);
    $('#buy_gold h2').html(asset);
    $('#p_price').val(0);
    $('#gold').val(asset);
    gold_info();
    $('.modal').modal();
}

function buy_more(asset) {
    $('#buy_more h4').html('Buy more ' + asset);
    $('.coin-logo').html('<img src="images/icon/' + asset + '.png">');
    $('#buy_more h5').html('Buy ' + asset);
    $('#buy_more h2').html(asset);
    $('#p_price').val(0);
    $('#more').val(asset);
    more_info();
    $('.modal').modal();
}

function asset_info() {
    var val = $('#purchase_value').val();
    var coin_val = parseFloat($('#p_price').val());
    var unit = val / coin_val;
    $('.buy_msg').html('open <strong>' + unit.toFixed(4) + '</strong> asset for <strong>$' + val + '</strong>');
}

function stock_info() {
    var val = $('#purchase_stock_value').val();
    var stock_name = $('#stock_f_name').val();
    // var coin_val = parseFloat($('#p_price').val());
    // var unit = val / coin_val;
    $('.buy_msg').html('open <strong class="text-uppercase">' + stock_name + '</strong> asset for <strong>$' + val + '</strong>');
}

function oil_info() {
    var val = $('#purchase_oil_value').val();
    var asset = $('#oil').val();
    $('.buy_msg').html('open <strong>' + asset + '</strong> asset for <strong>$' + val + '</strong>');
}

function more_info() {
    var val = $('#purchase_more_value').val();
    var asset = $('#more').val();
    $('.buy_msg').html('Add <strong>$' + val + '</strong> to your <strong>' + asset + '</strong> asset');
}

function gold_info() {
    var val = $('#purchase_gold_value').val();
    var asset = $('#gold').val();
    $('.buy_msg').html('open <strong>' + asset + '</strong> asset for <strong>$' + val + '</strong>');
}

function alert_msg(msg, classes, time_in, duration) {
    return M.toast({ html: msg, classes: classes, inDuration: time_in, displayLength: duration });
}

function purchase_success(msg) {
    M.toast({
        html: msg,
        classes: 'success',
        displayLength: 2000,
        completeCallback: function() {
            window.location.reload(true);
        }
    });
    var instance = M.Modal.getInstance(modal);
    instance.close();
}


$(document).ready(function() {
    $('#purchase_value').keyup(function(e) {
        asset_info();
    });

    $('#purchase_value').change(function(e) {
        asset_info();
    });

    $('#purchase_oil_value').keyup(function(e) {
        oil_info();
    });

    $('#purchase_oil_value').change(function(e) {
        oil_info();
    });

    $('#purchase_more_value').keyup(function(e) {
        more_info();
    });

    $('#purchase_more_value').change(function(e) {
        more_info();
    });

    $('#purchase_gold_value').keyup(function(e) {
        gold_info();
    });

    $('#purchase_gold_value').change(function(e) {
        gold_info();
    });

    $('#purchase_stock_value').keyup(function(e) {
        stock_info();
    });

    $('#purchase_stock_value').change(function(e) {
        stock_info();
    });

    $('.oil-chart a').click(function(e) {
        e.preventDefault();
    });

    $('#tradingview_8f582 a').click(function(e) {
        e.preventDefault();
    });

    $('.ccc-widget a').click(function(e) {
        e.preventDefault();
        $('.ccc-widget a').attr('href');
    });

});