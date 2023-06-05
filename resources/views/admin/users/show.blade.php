@extends('admintemp')
@section('title', 'Detail view')
@section('content')
<section style="padding-top:5px;">
        <div class="row">
            <div class="col-md-10 offset-1">                
                <div class="card" style="width: 45rem;">
                    <div class="card-header">                        
                            <button class="btn btn-danger float-end"  type="button"
                                onclick="event.preventDefault();
                                document.getElementById('delete-user-form{{ $user->id }}').submit()">
                                Delete
                            </button>
                            <a href="{{ route('admin.users.edit', $user->id) }}"><button class="btn btn-primary me-md-2 mr-2 float-end" role="button">Edit</button></a>
                            <form id="delete-user-form{{ $user->id }}" action="{{ route('admin.users.destroy', $user->id) }}" method="POST" style="display: none;">
                                @csrf
                                @method('DELETE')
                            </form>

                        <strong>{{ $user->name }} details </strong>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Email:  </strong> {{ $user->email }}</li>
                        @if ($userResources->isNotEmpty())
                        @foreach($userResources as $userResource)
                        <li class="list-group-item"><strong>Investment:  </strong>{{ $userResource->investment }}</li>
                        <li class="list-group-item"><strong>Profit:  </strong>{{ $userResource->profit }}</li>
                        <li class="list-group-item"><strong>Plan profit:  </strong>{{ $userResource->plan_profit }}</li>
                        @endforeach
                        @else
                    </ul>
                    @endif
                    <div class="card-body text-end">
                        <a href="{{ url('/home') }}" class="card-link">Back</a>
                    </div>
                </div>
            </div>
        </div>
</section>
@endsection('content')