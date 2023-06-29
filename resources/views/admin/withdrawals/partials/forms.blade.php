@isset($userwithdraw)
<div class="mb-3">
    <label for="wallet" class="form-label float-start text-muted fw-light">Withdraw from</label>
    <select class="form-select" name="wallet" id="wallet" style="border: none">
        <option value="deposits" selected>Account Deposit</option>
        <option value="profits">Account Profit</option>
    </select>
    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
</div>
<div class="mb-3">
    <label for="crypto" class="form-label float-start text-muted fw-light">Select Crypto</label>
    <select class="form-select" name="crypto" id="crypto" style="border: none">
        <option value="">From Deposit</option>
        <option value="btc" selected>Bitcoin (BTC)</option>
        <option value="eth">Ethereum (ETH)</option>
        <option value="erc20">USTD (ERC20)</option>
        <option value="bch">Bitcoin cash (BCH)</option>
    </select>
    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
</div>
<div class="mb-3">
    <label for="amount" class="form-label float-start text-muted fw-light">Amount in ($)</label>
    <input type="number" class="form-control" name="amount" id="amount" style="border: none" />
    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
</div>
@error('amount')
<span role="alert">
    <strong>{{ $message }}</strong>
</span>
@enderror
<div class="mb-3">
    <label for="wallet_address" class="form-label float-start text-muted fw-light">Wallet Address</label>
    <input type="text" class="form-control" name="wallet_address" id="wallet_address" style="border: none" />
    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
    <p class="text-danger float-start" id="error_alert" style="font-size: 12px">*please reconfirm your wallet address before submitting</p>
</div>
@error('walletAddress')
<span role="alert">
    <strong>{{ $message }}</strong>
</span>
@enderror
<div class="mb-3">
    <label>
        <input type="hidden"  value="{{ auth()->user()->name }}" name="user_name" id="user_name" />
    </label>
</div>
@endisset