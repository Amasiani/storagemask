<!--church form partials for creation and editing  -->

<div class="col-md-6">
    <label for="profit" class="form-label">Profit</label>
    <input type="text" id="profit" value="{{ old('profit') }} @isset($plan) {{$plan->profit }} @endisset" class="form-control @error('profit') is-invalid @enderror"  name="profit" autofocus placeholder="1.50%" >
    @error('profit')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="name" class="form-label">Name:</label>
    <input type="text" value="{{ old('name') }} @isset($plan) {{$plan->name }} @endisset" class="form-control @error('name') is-invalid @enderror" id="name" name="name" placeholder="Plan name" autofocus />
    @error('name')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="min_deposit" class="form-label">Minimum Deposit</label>
    <input type="text" value="{{ old('min_deposit') }} @isset($plan) {{ $plan->min_deposit }} @endisset" class="form-control @error('min_deposit') is-invalid @enderror" name="min_deposit" autofocus>
    @error('min_deposit')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="max_deposit" class="form-label">Maximum Deposit</label>
    <input type="text" value="{{ old('max_deposit') }} @isset($plan) {{ $plan->max_deposit }} @endisset" class="form-control @error('max_deposit') is-invalid @enderror" name="max_deposit" autofocus>
    @error('max_deposit')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="contact_life" class="form-label">Contact Life</label>
    <input type="text" value="{{ old('contact_life') }} @isset($plan) {{ $plan->contact_life }} @endisset" class="form-control @error('contact_life') is-invalid @enderror" name="contact_life" autofocus>
    @error('contact_life')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="business_day" class="form-label">Business Days</label>
    <input type="text" value="{{ old('business_day') }} @isset($plan) {{ $plan->business }} @endisset" class="form-control @error('business_day') is-invalid @enderror" name="business_day" autofocus>
    @error('business_day')
        <span role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="withdrawal" class="form-label">Withdrawal</label>
    <input type="text" value="{{ old('withdrawal') }} @isset($plan) {{ $plan->withdrawal }} @endisset" class="form-control @error('withdrawal') is-invalid @enderror" required autocomplete="withdrawal" name="withdrawal" autofocus >
    @error('withdrawal')
        <span  role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
<div class="col-md-6">
    <label for="referral_bonus" class="form-label">Referral Bonus</label>
    <input type="text" value="{{ old('referral_bonus') }} @isset($plan) {{ $plan->referral_bonus }} @endisset" class="form-control @error('referral_bonus') is-invalid @enderror" required autocomplete="refrerral_bonus" name="referral_bonus" placeholder="1.89%" autofocus >
    @error('referral_bonus')
        <span  role="alert">
            <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>