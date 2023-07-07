@extends('admintemp')
@section('title', 'Dashboard')
@section('content')
<section>
    <div class="container-fluid">
        <!-- Content Header (Page header) -->
        <!-- <div class="content-header"> -->
        @if(isset(auth()->user()->account))
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter">
                            <div class="txt">
                                <h5 class="m-0" style="padding-left: 10px; padding-top: 4px;">${{ auth()->user()->account->amount }}</h5>
                                <p class="no-margin"  style="padding-left: 4px;">Amount Deposited</p>
                            </div>
                            <div class="" style="margin:4px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter" >
                            <div class="txt">
                                <h5 class="m-0" style="padding-left: 10px; padding-top: 4px;">${{ array_sum($totalInvestment) }}</h5>
                                <p class="no-margin" style="padding-left: 4px;">Total Investment</p>
                            </div>
                            <div class="" style="margin:4px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">shopping_cart</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter">
                            <div class="txt">
                                <h5 class="m-0" style="padding-left: 10px; padding-top: 4px;">${{ auth()->user()->account->total_profit }}</h5>
                                <p class="no-margin" style="padding-left: 4px;">Total Profit</p>
                            </div>
                            <div class="" style="margin:4px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance_wallet</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter">
                            <div class="txt">
                                <h5 class="m-0" style="padding-left: 10px; padding-top: 4px;">${{ auth()->user()->cashwithdrawals->pluck('amount')->sum() }}</h5>
                                <p class="no-margin" style="padding-left: 4px;">Total Withdrawal</p>
                            </div>
                            <div class="" style="margin:4px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">paid</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
        @endif
    </div>
    <!-- /.content-header -->
    <h1>Dashboard {{ Auth::user()->email_verified_at != null ? " " : "Check your email to verify your acount." }}</h1>
    <a class="btn btn-primary float-end mb-2" role="button" href="{{ route('admin.investments.create') }}">Invest</a>
    @auth
    @if ($planUsers->isNotEmpty())
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Account deposit</th>
                <th scope="col">Total investments</th>
                <th scope="col">Total profit</th>
                <th scope="col">Total withdrawal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td row=""></td>
                <td>{{ auth()->user()->account->amount }}
                    <!--<div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Investments
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($planUsers as $planUser)
                                <li><a class="dropdown-item">{{ $planUser->investment }}</a></li>
                                @endforeach
                            </ul>
                        </div>-->
                </td>
                <td>{{ $planUsers->count() }}
                    <!--<div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Contract life
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($plans as $plan)
                                <li><a class="dropdown-item">{{ $plan->contact_life == 14 ? $plan->contact_life . ' ' . 'days' : $plan->contact_life . ' ' . 'months' }}</a></li>
                                @endforeach
                            </ul>
                        </div>-->
                </td>
                <td>{{ auth()->user()->account->total_profit == 0 ? "0.00" : auth()->user()->account->total_profit }}
                    <!--<div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Plan profit
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($planUsers as $planUser)
                                <li><a href="{{ route('transfer') }}" class="dropdown-item">{{ $planUser->plan_profit != null ?  $planUser->plan_profit : " " }}</a></li>
                                @endforeach
                            </ul>
                        </div>-->
                </td>
                <td>{{ $planUsers->pluck('profit')->sum() == 0 ? "0.00" : $planUsers->pluck('profit')->sum() }}
                    <!--<div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Plan
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                @foreach($plans as $plan)
                                <li><a class="dropdown-item">{{ $plan->name }}</a></li>
                                @endforeach
                            </ul>
                        </div>-->
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