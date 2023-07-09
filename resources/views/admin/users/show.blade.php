@extends('admintemp')
@section('title', 'Detail view')
@section('content')
<section style="padding-top:5px;">
        <div class="row">
            <div class="col-md-10">                
                <div class="card">
                    <div class="card-header">                        
                            <button class="btn btn-danger float-end"  type="button"
                                onclick="event.preventDefault();
                                document.getElementById('delete-user-form{{ $user->id }}').submit()">
                                Delete
                            </button>
                            <!-- <a href="#"><button class="btn btn-primary me-md-2 mr-2 float-end" role="button">Edit</button></a> -->
                            <form id="delete-user-form{{ $user->id }}" action="{{ route('admin.users.destroy', $user->id) }}" method="POST" style="display: none;">
                                @csrf
                                @method('DELETE')
                            </form>
                        <strong>{{ Str::ucfirst($user->name) }} details:</strong>
                    </div>
                    <div class="card-header">
                        <span class="float-end"><strong>Telephone: {{ $user->phone }}</strong></span>
                        <a href="mailto:{{ $user->email }}"><span><strong >Email:  {{ $user->email }}</strong></span></a>
                    </div>
                    <div class="card-body">
                    <ul class="list-group list-group-flush">
                        @if ($userResources->isNotEmpty())

                        @foreach($userResources as $userResource)
                        <li class="list-group-item"><strong>Investment:  </strong>{{ $userResource->investment }}</li>
                        <li class="list-group-item"><strong>Profit:  </strong>{{ $userResource->profit }}</li>
                        <li class="list-group-item"><strong>Plan profit:  </strong>{{ $userResource->plan_profit }}</li>
                        @endforeach
                        @else
                    </ul>
                    @endif
                    </div>
                    <div class="card-body text-end">
                        <a href="{{ url('/home') }}" class="card-link">Back</a>
                    </div>
                </div>
            </div>
        </div>
</section>
@endsection('content')