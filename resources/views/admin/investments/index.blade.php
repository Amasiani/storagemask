@extends('admintemp')
@section('title', 'Investments')
@section('content')
<div class="card login-card" max-width="780px">
    <div class="col">
        <div class="card-body">
            <div class="card-header">
                Investment
                <a href="{{ route('admin.investments.create') }}" role="button" class="btn btn-primary btn-sm mb-2 float-end">Investment</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($accounts as $account)
                            <tr>
                                <td scope="row">{{ $account->user->name }}</td>
                                <td>{{ $account->amount }}</td>
                                <td>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Plans
                                        </a>
                                        @if(@isset($user->plans))
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            @foreach($user->plans as $plan)
                                            <li><a class="dropdown-item" href="#"></a>{{ $plan->name }}</li>
                                            @endforeach
                                        </ul>
                                        @endif
                                    </div>
                                </td>
                                <!--<td>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Profits
                                        </a>
                                        @if(@isset($planusers))
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            @foreach($planusers as $planuser)
                                            <li><a class="dropdown-item" href="#"></a>{{ $planuser->profit }}</li>
                                            @endforeach
                                        </ul>
                                        @endif
                                    </div>
                                </td>-->
                                @if(@isset($planusers))
                                @foreach($planusers as $planuser)
                                <td>{{ $planuser->profit }}</td>
                                @endforeach
                                @endif
                                <td><a href="#" role="button" class="btn btn-info btn-sm">Detail</a></td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {{ $plans->links()}}
    </div>
</div>
@endsection