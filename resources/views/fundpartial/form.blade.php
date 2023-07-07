<!-- <div class="col-md-4"> -->
    <label for="amount">Amount:</label>
    <input type="number" value="{{ old('amount') }} @isset($account) {{ $account->amount }} @endisset" name="amount" autofocus class="form-control mb-3 @error('amount') is-invalid @enderror"  />
    @error('amount')
    <span role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
<!-- </div> -->
<!-- <div class="col-md-4"> -->
    <select name="user_id" id="user_id" class="form-select form-select-lg  mb-3" aria-label=".form-select-lg example">
        @foreach($users as $user)                                        
            <option value="{{ $user->id }}" @selected(old('user') == $user->id)> {{ $user->name }}</option>                                   
        @endforeach
    </select>
<!-- </div> -->
