<div class="col-md-4">
    <label for="amount">Amount</label>
    <input type="number" value="{{ old('amount') }} @isset($account) {{ $account->amount }} @endisset" name="amount" autofocus class="form-control @error('amount') is-invalid @enderror" />
    @error('amount')
    <span role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
<div class="col-md-4">
    <label for="payment_type" class="form-label float-start text-muted">Select payment option</label>
    <select class="form-select" name="payment_type" id="payment_type">
        <option value="bitcoin">Bitcoin (BTC)</option>
        <option value="ethereum">Ethereum (ETH)</option>
        <option value="erc20">USDT (ERC20)</option>
        <option value="bch">Bitcoin cash (BCH)</option>
    </select>
</div>
<div class="col-md-4 py-4 offset-0.5">
    <select name="plan_id" id="plan_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($plans as $plan)
        <option value="{{ $plan->id }}" @selected(old('plan')==$plan->id)> {{ $plan->name }}</option>
        @endforeach
    </select>
</div>