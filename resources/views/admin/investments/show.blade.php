@extends('template')
@section('title', 'Show investement')
@section('content')
<section style="padding-top:5px;">
        <div class="row">
            <div class="col-md-10 offset-1">                
                <div class="card" style="width: 45rem;">
                    <div class="card-header">                        
                            <button class="btn btn-danger float-end"  type="button"
                                onclick="event.preventDefault();
                                document.getElementById('delete-investment-form{{ $planuser }}').submit()">
                                Delete
                            </button>
                            <a href="{{ route('admin.investments.edit', $planuser) }}"><button class="btn btn-primary me-md-2 mr-2 float-end" role="button">Edit</button></a>
                            <form id="delete-user-form{{ $planuser }}" action="{{ route('admin.investments.destroy', $planuser) }}" method="POST" style="display: none;">
                                @csrf
                                @method('DELETE')
                            </form>

                        <strong> details </strong>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Name:</strong> {{ $account->user->name }}</li>
                    </ul>
                    <div class="card-body text-end">
                        <a href="{{ route('admin.investments.index') }}" class="card-link">Back</a>
                    </div>
                </div>
            </div>
        </div>
</section>
@endsection('content')