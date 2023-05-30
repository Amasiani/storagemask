@extends('adminTemp')
@section('title', 'Dashboard')
@section('content')
<section>
<div class="container-fluid">
<h1>Welcome to user Dashboard</h1>
<a href="{{ route('admin.plans.create') }}" role="button" class="btn btn-primary mb-2 float-end">Create church</a>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Invested Amount</th>
                <th scope="col">Contact life</th>
                <th scope="col">Profit</th>
                <th scope="col">Plan</th>
            </tr>
            </thead>
            <tbody>
            @auth
                @if ($user = Auth::user() && $userResources != null && $userplan != null)
                            <tr>
                                <th scope="row">#</th>
                                <td>{{ $userResources->investment }}</td>
                                <td>{{ $userplan->value('contact_life') == 14 ?   $userplan->value('contact_life') . ' ' . 'Days' :  $userplan->value('contact_life') . ' ' . 'Months'   }}</td>
                                <td>{{ $userResources->profit }}</td>
                                <td>{{ $userplan->value('name') }}</td>
                                <td><a href="#" role="button" class="btn btn-info">Show</a></td>
                            </tr>
            </tbody>                   
        </table>     
                    @else
                        <h1><strong>You have no Church in your record, please create a 
                            <a href="{{ route('admin.plans.index') }}">Invest in a plan</a> and link it to your account.
                            </strong>
                        </h1>                  
                    @endif           
             
            @endauth      
    </div>
</section>
@endsection