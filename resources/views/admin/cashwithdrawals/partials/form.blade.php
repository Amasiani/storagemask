<div class="col-md-3">
    <label for="amount">Amount:</label>
    <input type="number" value="{{ old('amount') }} @isset($account) {{ $account->amount }} @endisset" name="amount" autofocus class="form-control @error('amount') is-invalid @enderror"  />
    @error('amount')
    <span role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
<div class="col-md-3">
    <select name="user_id" id="user_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($users as $user)                                        
            <option value="{{ $user->id }}" @selected(old('user') == $user->id)> {{ $user->name }}</option>                                   
        @endforeach
    </select>
</div>
@isset($cashwithdrawals)
<div class="col-md-3">
    <select name="user_id" id="user_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($demandforcash as $cashrequest)                                        
            <option value="{{ $cashrequest->id }}" @selected(old('cashrequest') == $cashrequest->id)> {{ $cashrequest->id }}</option>                           
        @endforeach
    </select>
</div>
@endisset




<!--<div class="md-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" value="{{ old('title') }} @isset($announcement) {{ $announcement->title }} @endisset" class="form-control @error('title') is-invalid @enderror" placeholder="Title announcement" required autocomplete="TRUE" name="title" autofocus >
    @error('title')
    <span role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</div>
<div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <textarea type="text" class="form-control @error('description') is-invalid @enderror" placeholder="Description" required autocomplete="description" name="description" autofocus>{{ old('description') }} @isset($announcement) {{ $announcement->description }} @endisset</textarea>
    @error('description')
    <span role="alert">
    <strong>{{ $message }}</strong>
        </span>
    @enderror
</div>
@isset($create)
<div class="mb-3">                                                                    
    <select name="church_id" id="church_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($churches as $church)                                        
            <option value="{{ $church->id }}" @if(old('church') == $church->id) selected @endif>{{ $church->name }}</option>                                   
        @endforeach
    </select>                                                                         
 </div>-->
