@extends('admintemp')
@section('title', 'Show Account')
@section('content')
<section style="padding-top:5px;">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <button class="btn btn-danger float-end" type="button" onclick="event.preventDefault();
                                document.getElementById('delete-account-form{{ $account }}').submit()">
                        Delete
                    </button>
                    <a href="{{ route('admin.accounts.edit', $account) }}"><button class="btn btn-primary me-md-2 mr-2 float-end" role="button">Edit</button></a>
                    <form id="delete-user-form{{ $account }}" action="{{ route('admin.accounts.destroy', $account) }}" method="POST" style="display: none;">
                        @csrf
                        @method('DELETE')
                    </form>
                    <h3><strong>Name: </strong>{{ Str::ucfirst($account->user->name) }}</h3>
                    
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Amount: </strong>${{ $account->amount }}</li>
                </ul>
                <div class="card-body text-end">
                    <a href="{{ route('admin.accounts.index') }}" class="card-link">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection('content')