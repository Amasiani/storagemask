<div class="col-md-4">
    <select name="user_id" id="user_id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        @foreach($users as $user)                                        
            <option value="{{ $user->id }}" @selected(old('user') == $user->id)> {{ $user->name }}</option>                                   
        @endforeach
    </select>
</div>
<div class="col-md-6">
    <div class="form-check form-check-inline">                                        
        @foreach($roles as $role)
        <input value="{{ $role->id }}" name="roles[]" type="checkbox" id="{{ $role->name }}" @isset($user) @if(in_array($role->id, $user->roles->pluck('id')->toArray())) checked @endif @endisset>
        <label class="form-check-label px-2 py-4" for="{{ $role->name }}">
            {{ $role->name }}
        </label>
        @endforeach
    </div>
</div>