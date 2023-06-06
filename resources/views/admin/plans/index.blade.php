@extends('admintemp')
@section('title', 'Plans')
@section('content')
<div class="container">
    <div class="row">
        <div class="card">
            <div class="card-header">
            Plans
            @canany(['is-admin', 'is-editor'])
                <a href="{{ route('admin.plans.create') }}" role="button" class="btn btn-primary btn-sm mb-2 float-end">Create/Edit Plan</a>
            @endcanany
            </div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Profit</th>
                            <th scope="col">Name</th>
                            <th scope="col">Minimum Deposit</th>
                            <th scope="col">Maximum Deposit</th>
                            <th scope="col">Contact life</th>
                            <th scope="col">Business days</th>
                            <th scope="col">Withdrawal</th>
                            <th scope="col">Referral bonus</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Invest</th>
                        </tr>
                    </thead>
                        <tbody>
                            @foreach ($plans as $plan)
                            <tr>
                                <td scope="row">{{ $plan->profit }}%</td>
                                <td>{{ $plan->name }}</td>
                                <td>${{ $plan->min_deposit }}</td>
                                <td>${{ $plan->max_deposit }}</td>
                                <td>{{ $plan->contact_life == 14 ?  $plan->contact_life . ' ' . 'Days' : $plan->contact_life . ' ' . 'Months'   }}</td>
                                <td>{{ $plan->business_day }}</td>
                                <td>{{ $plan->withdrawal }}</td>
                                <td>{{ $plan->referral_bonus }}%</td>
                                <td>{{ $plan->profit}}</td>
                                <td><a href="{{ route('admin.investments.create') }}" role="button" class="btn btn-info btn-sm">Invest</a></td>
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