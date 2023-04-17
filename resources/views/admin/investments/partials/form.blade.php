<div class="col-md-6">
    <label for="amount">Amount</label>
    <input type="number" value="{{ old('amount') }} @isset($account) {{ $account->amount }} @endisset" name="amount" autofocus class="form-control @error('amount') is-invalid @enderror"  />
    @error('amount')
    <span role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
<div class="col-md-4">
    <select name="plan_id" id="plan_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($plans as $plan)                                        
            <option value="{{ $plan->id }}" @selected(old('plan') == $plan->id)> {{ $plan->name }}</option>                                   
        @endforeach
    </select>
</div>
