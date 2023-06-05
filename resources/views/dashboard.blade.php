@extends('admintemp')
@section('title', 'Dashboard')
@section('content')
<section>
    <div class="container-fluid">
        <h1>Dashboard {{ Auth::user()->email_verified_at != null ? " " : "Check your email to verify your acount." }}</h1>
        <!--<a class="btn btn-primary float-end mb-2" role="button" href="{{ route('admin.investments.create') }}">Invest</a>-->
        @auth
        @if (!$planUsers->isEmpty())
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
                <tr>
                    <td row=""></td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Investments
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($planUsers as $planUser)
                                <li><a class="dropdown-item">{{ $planUser->investment }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact life
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($plans as $plan)
                                <li><a class="dropdown-item">{{ $plan->contact_life == 14 ? $plan->contact_life . ' ' . 'days' : $plan->contact_life . ' ' . 'months' }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Plan profit
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($planUsers as $planUser)
                                <li><a class="dropdown-item">{{ $planUser->profit != null ?  $planUser->profit : " " }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Plan
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($plans as $plan)
                                <li><a class="dropdown-item">{{ $plan->name }}</a></li>
                                @endforeach
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        @else
        <h1><strong>If you have fund your portfoil, please follow the link
                <a href="{{ route('admin.plans.index') }}">to invest in a plan</a>. Else contact admin to fund your account.
            </strong>
        </h1>
        @endif
        @endauth
    </div>
</section>
@endsection