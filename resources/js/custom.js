/*jshint esversion: 6 */
 
// import axios from 'axios';

var depositInput = document.getElementById('label_dp');
depositInput.addEventListener('click', () => {
    var amt = document.getElementById('dp_amount').value;
    const pay_type = document.getElementById('pay_type').value;
    var btc = parseFloat(amt / 26775.29).toFixed(5);
    var eth = parseFloat(amt / 1730.1).toFixed(5);
    var usdt = parseFloat(amt / 0.9996).toFixed(2);
    var bch = parseFloat(amt / 106.39).toFixed(2);
    console.log({
        amt,
        btc,
        eth,
        usdt,
        bch,
        pay_type
    });
    if (amt < 50 || amt == null) {
        alert('Sorry minimum deposit is $50', 'danger', 1000, 5000);
    } else if (pay_type === 'bitcoin' && amt >= 50) {
        var btc_address = 'bc1qwnkylacsne8gfx8sea76sjsvnjugrfs9revsg4';
        document.getElementById('qr_code').src = '/temp/assets/img/bitcoin.jpeg';
        document.getElementById('wallet-id').value = btc_address;
        document.getElementById('wallet-id').innerHTML = btc_address;
        document.getElementById('copy').value = btc_address;
        document.getElementById('send_val').innerHTML = 'Total BTC value: <span class="text-danger font-main-color" style="font-size:20px">' + btc + 'BTC</span> <small>(No transaction fee included in this amount!)</small>';
        document.getElementById('tot_send_val').value = btc;
        document.getElementById('purchase_more_value').value = 'BTC';
        document.getElementById('btc_detail').classList.remove('d-none');
        document.getElementById('label_dp').style.display = 'none';

    } else if (pay_type === 'ethereum' && amt >= 50) {
        var eth_address = '0xc204263438c3a57E58C6923323a058d1db4B1103';
        document.getElementById('qr_code').src = '/temp/assets/img/ethereum.jpeg';
        document.getElementById('wallet-id').value = eth_address;
        document.getElementById('wallet-id').innerHTML = eth_address;
        document.getElementById('copy').value = eth_address;
        document.getElementById('send_val').innerHTML = 'Total ETH value: <span class="text-danger font-main-color" style="font-size:20px">' + eth + 'ETH</span> <small>(No transaction fee included in this amount!)</small>';
        document.getElementById('tot_send_val').value = eth;
        document.getElementById('purchase_more_value').value = 'ETH';
        document.getElementById('btc_detail').classList.remove('d-none');
        document.getElementById('label_dp').style.display = 'none';

    } else if (pay_type === 'erc20' && amt >= 50) {
        var usdt_address = '0xc204263438c3a57E58C6923323a058d1db4B1103';
        document.getElementById('qr_code').src = '/temp/assets/img/usdt.jpeg';
        document.getElementById('wallet-id').value = usdt_address;
        document.getElementById('wallet-id').innerHTML = usdt_address;
        document.getElementById('copy').value = usdt_address;
        document.getElementById('send_val').innerHTML = 'Total USDT value: <span class="text-danger font-main-color" style="font-size:20px">' + usdt + 'USDT</span> <small>(No transaction fee included in this amount!)</small>';
        document.getElementById('tot_send_val').value = usdt;
        document.getElementById('purchase_more_value').value = 'USDT';
        document.getElementById('btc_detail').classList.remove('d-none');
        document.getElementById('label_dp').style.display = 'none';

    } else if (pay_type === 'bch' && amt >= 50) {
        var bch_address = 'qp0mvhuyf7l0q6ngz6h6glm0wq3qg78anqsff6kg76';
        document.getElementById('qr_code').src = '/temp/assets/img/bch.jpeg';
        document.getElementById('wallet-id').value = bch_address;
        document.getElementById('wallet-id').innerHTML = bch_address;
        document.getElementById('copy').value = bch_address;
        document.getElementById('send_val').innerHTML = 'Total BCH value: <span class="text-danger font-main-color" style="font-size:20px">' + bch + 'BCH</span> <small>(No transaction fee included in this amount!)</small>';
        document.getElementById('tot_send_val').value = bch;
        document.getElementById('purchase_more_value').value = 'BCH';
        document.getElementById('btc_detail').classList.remove('d-none');
        document.getElementById('label_dp').style.display = 'none';
    }
}); 

    var copyme = document.getElementById('copy');
    copyme.addEventListener('click', () =>  {
        var walletAddress = document.getElementById('wallet-id').value;
        document.execCommand('copy');
        document.getElementById('copy').innerHTML = 'Wallet copied';
        setTimeout(() => {
            document.getElementById('copy').innerHTML = 'Copy Address';
        }, 2000);
    });

    var sendDetails = document.getElementById('paid');
    sendDetails.addEventListener('click', () => {
        var amt = document.getElementById('dp_amount').value;
        var pay_type = document.getElementById('pay_type').value;
        axios.get("/fund", {
                params: { amount: amt,
                    pay_type: pay_type,
                },
        }).then((response) => {
            var msg = response.data.message;
            alert(msg);
            })
            .catch((error) => {
                console.log(error.response);
            });
    });

    var statusChanger = document.getElementById('statuschange');
        statusChanger.addEventListener('click', () => {
            if (statusChanger.innerHTML == "Activate" &  statusChanger.style.backgroundColor == "green"){
                statusChanger.innerHTML = "Deactivate";
                statusChanger.style.backgroundColor = "red";
            }else{
                statusChanger.innerHTML = "Activate";
                statusChanger.style.backgroundColor = "green";
            }
        });


    // function copyToClipboard() {
    //     var $temp = $("<input>");
    //     $("#wallet-id").append($temp);
    //     $temp.val($("#wallet-id").text()).select();
    //     document.execCommand("copy");
    //     $temp.remove();
    //     $('#copy').html('Wallet copied');
    //     setTimeout(() => {
    //         $('#copy').html('Copy Address');
    //     }, 2000);
    // }

    // function copyAddress() {
    //     var walletAddress = document.getElementById('wallet-id').value; // Text to be copied to the clipboard
    //     console.log(walletAddress);
    //     navigator.clipboard.writeText(walletAddress)
    //         .then(function() {
    //             alert("Text copied to clipboard");
    //         })
    //         .catch(function(error) {
    //             console.error("Unable to copy text: ", error);
    //         });
    // }

// $(document).ready(function() {
//     $('#deposit').click(function(e) {
//         e.preventDefault();
//         var amt = document.getElementById('dp_amount').value;
//         var pay_type = $('#pay_type').val();
//         var btc = parseFloat(amt / 26775.29).toFixed(5);
//         var eth = parseFloat(amt / 1730.1).toFixed(5);
//         var ltc = parseFloat(amt / 77.05).toFixed(5);
//         var doge = parseFloat(amt / 0.0619).toFixed(5);
//         var usd = parseFloat(amt / 0.9996).toFixed(2);
//         var bch = parseFloat(amt / 106.39).toFixed(2);
//         console.log({
//             amt,
//             pay_type,
//             btc,
//             eth,
//             ltc,
//             doge,
//             usd,
//             bch
//         })
//         if (amt < 50) {
//             alert_msg('Sorry minimum deposit is $50', 'danger', 1000, 5000);
//         } else if (pay_type === 'bitcoin') {
//             var btc_address = 'bc1qwnkylacsne8gfx8sea76sjsvnjugrfs9revsg4'
//             var qr_code = document.getElementById('qr_code')
//             qr_code.src = '/temp/assets/img/bitcoin.jpeg';
//             $('#wallet-id').val(btc_address);
//             $('#wallet-id').html(btc_address);
//             $('#copy').val(btc_address);
//             $('#send_val').html('Total BTC value: <span class="font-main-color" style="font-size:20px">' + btc + 'BTC</span> <small>(No transaction fee included in this amount!)</small>');
//             $('#tot_send_val').val(btc);
//             $('#purchase_more_value').val('BTC');
//             $('#deposit').hide();
//             $('#btc_detail').show(1000);

//         } else if (pay_type === 'ethereum') {
//             var eth_address = '0x9Ab3175f5474B95f55792157092E1F8782Ae639E'
//             $('#qr_code').attr('src', "/temp/assets/img/eth_code.png");
//             $('#wallet-id').val(eth_address);
//             $('#wallet-id').html(eth_address);
//             $('#copy').val(eth_address);
//             $('#send_val').html('Total ETH value: <span class="font-main-color" style="font-size:20px">' + eth + 'ETH</span> <small>(No transaction fee included in this amount!)</small>');
//             $('#tot_send_val').val(eth);
//             $('#purchase_more_value').val('ETH');
//             $('#deposit').hide();
//             $('#btc_detail').show(1000);

//         } else if (pay_type === 'usdt') {
//             var usdt_address = '0xc204263438c3a57E58C6923323a058d1db4B1103'
//             $('#qr_code').attr('src', "/temp/assets/img/usdt_code.png");
//             $('#wallet-id').val(usdt_address);
//             $('#wallet-id').html(usdt_address);
//             $('#copy').val(usdt_address);
//             $('#send_val').html('Total USDT value: <span class="font-main-color" style="font-size:20px">' + usd + 'USDT</span> <small>(No transaction fee included in this amount!)</small>');
//             $('#tot_send_val').val(usd);
//             $('#purchase_more_value').val('USDT');
//             $('#deposit').hide();
//             $('#btc_detail').show(1000);

//         } else if (pay_type === 'bch') {
//             var bch_address = 'qp0mvhuyf7l0q6ngz6h6glm0wq3qg78anqsff6kg76'
//             $('#qr_code').attr('src', "/temp/assets/img/bch_code.png");
//             $('#wallet-id').val(bch_address);
//             $('#wallet-id').html(bch_address);
//             $('#copy').val(bch_address);
//             $('#send_val').html('Total BCH value: <span class="font-main-color" style="font-size:20px">' + bch + 'BCH</span> <small>(No transaction fee included in this amount!)</small>');
//             $('#tot_send_val').val(bch);
//             $('#purchase_more_value').val('bch');
//             $('#deposit').hide();
//             $('#btc_detail').show(1000);

//         }
//     });

//     $('#copy').click(function(e) {
//         var $temp = $("<input>");
//         $("#wallet-id").append($temp);
//         $temp.val($("#wallet-id").text()).select();
//         document.execCommand("copy");
//         $temp.remove();
//         $('#copy').html('Wallet copied');
//         setTimeout(() => {
//             $('#copy').html('Copy Address');
//         }, 2000);
//     });

//     $('#paid').click(function(e) {
//         e.preventDefault();

//         $('.progress').show();
//         var btc = $('#fsym_price').val();
//         var value = parseFloat(btc).toFixed(4);

//         $.post("/actions/paid.php", {
//                 username: 'Kristen Tracey ',
//                 useremail: 'kristentracey26@gmail.com',
//                 paid_amount: $('#tot_send_val').val(),
//                 ref: 'No ref',
//                 purchase_type: $('#purchase_more_value').val(),
//                 paid: $('#dp_amount').val()
//             },
//             function(data) {
//                 console.log(data);
//                 if (data === 'successful') {
//                     alert_msg('payment completed, process started', 'success', 2000, 5000);
//                     $('#btc_detail').hide(1000);
//                     $('#deposit').show();

//                 } else {
//                     alert_msg(data, 'danger', 2000, 5000);
//                 }
//                 $('.progress').hide();
//             });
//     });
// });