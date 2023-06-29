@extends('admintemp')
@section('title', 'Fund account')
@section('content')
<section style="padding-top:5px;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 mb-6">
                <div class="card">
                    <a href="#" style=" max-width: 80px; margin-top: 12px; margin-left: 6px" class="btn btn-primary float-end" role="button">Back</a>
                    <div class="card-header">
                        <h5><strong>Current Balance</strong></h5>
                        <strong>$2,350.00</strong>
                    </div>
                    <div class="card-body">
                        <p class="text-left">Our minimum amount is <strong> $100.00</strong> and the maximum amount is <strong> $1,000,000.00</strong> a day. If you need to increase your limit, please Contact Support team. The top-up amount will be added to your Storagetemasek account a few minutes after the payment clears. On rare occasions, it may take up to 24 hours for the amount to show in your account. This payment method is 100% commission free. <br></p>
                        <p>For issue reports and inquiries, please contact <a href="mailto:support@storagetemasek.io">support@storagetemasek.io</a> </p>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6 mb-6 text-center">
                <div class="card">
                    <div class="card-header">Amount</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="pay_type" class="form-label float-start text-muted">Select payment option</label>
                                <select class="form-select" name="pay_type" id="pay_type">
                                    <option value="bitcoin">Bitcoin (BTC)</option>
                                    <option value="ethereum">Ethereum (ETH)</option>
                                    <option value="erc20">USDT (ERC20)</option>
                                    <option value="bch">Bitcoin cash (BCH)</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="amount" class="form-label"></label>
                                <input type="number" class="form-control" name="amount" id="dp_amount" placeholder="Enter amount to deposit in $" />
                                <p class="text-danger" id="error_alert"></p>
                            </div>
                            <label type="submit" id="label_dp" role="button" class="btn btn-info">Deposit </label>
                            @error('amount')
                            <span role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                            <div class="mb-3 d-none" id="btc_detail">
                                <p class="text-danger text-center">please stay on this page till you make your payment</p>

                                <p class="text-center" style="margin-bottom: 0; font-size: 20px;">SCAN ME</p>

                                <img src="" alt="scan_me" id="qr_code" style="width:200px;display: table; margin: 0 auto;">

                                <h5 class="text-center" style="text-decoration: underline;">Payment details</h5>

                                <p class="text-center-info" id="send_val"></p>

                                <p class="text-center"><strong style="font-size: 16px;color: red;">NOTE:</strong> If you send any other amount, payment system will NOT process it!</p>

                                <p class="text-center" style="margin-bottom: 0;">Address</p>

                                <button class="btn disabled" id="wallet-id" style="width: 100%; font-size:10px;padding: 5px 5px; height: auto;"></button>
                                <p class="text-center"><span class="text-danger"> NOTE:</span> After making your payment, click "I have made my payment" for your payment processing to start.</p>

                                <hr style="margin-top: 2em;">
                                <label type="submit" role="button" class="btn btn-secondary" id="copy" value="">Copy Address</label>

                                <input type="hidden" class="d-none hide hidden" id="tot_send_val" value="">
                                <input type="hidden" class="d-none hide hidden" value="" id="purchase_more_value">
                                <label class="btn btn-info mt-5 hoverable" type="submit" id="paid" style="display: table; margin: 5px auto;">I have made my payment</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection('content')