@extends('admintemp')
@section('title', 'Investment')
@section('content')
<section style="padding-top:5px;">
    <div class="container">
        <div class="col">
            @cannot('is-admin')
            <div class="row">
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter" style="padding: 2px">
                            <div class="txt">
                                @isset(auth()->user()->account)
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ auth()->user()->account->amount }}</h5>
                                @endisset
                                <p class="no-margin" style="padding-left: 10px;">Account Deposit</p>
                            </div>
                            <div class="" style="margin:8px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter" style="padding: 2px">
                            <div class="txt">
                                @isset($investments)
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ array_sum($investments) }}</h5>
                                @endisset
                                <p class="no-margin" style="padding-left: 10px;">Total Investment</p>
                            </div>
                            <div class="" style="margin:8px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">shopping_cart</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
                <div class="col-sm-4 s12 m4 l4">
                    <div class=" card cards-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                        <div class="inter" style="padding: 2px">
                            <div class="txt">
                                @isset(auth()->user()->account)
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ auth()->user()->account->total_profit }}</h5>
                                @endisset
                                <p class="no-margin" style="padding-left: 10px;">Total Profit</p>
                            </div>
                            <div class="" style="margin:8px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance_wallet</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
            </div>
            <div class="row justify-items-center" style="margin-top: 50px;">
                <div class="col-md-10">
                    <div class="card">
                        <div class="card-title py-2 px-4" style="background-color: #3FB0E4;">My Investments</div>
                        <table class="table table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Investment</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr>
                                    <th scope="row">1</th>
                                    <td>{{ Str::ucfirst($planUsers->value('payment_type')) }}</td>
                                    @foreach(auth()->user()->plans as $plan)
                                    <td>{{ $plan->name }}</td>
                                    @endforeach
                                    <td>Active</td>
                                    <td>{{ $planUsers->value('investment') }}</td>
                                    @isset(auth()->user()->account)
                                    <td>{{ auth()->user()->account->total_profit }}</td>
                                    @endisset
                                </tr> -->
                                @foreach ($planUsers as $planUser)
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{{ Str::ucfirst($planUser->payment_type) }}</td>
                                    <td>{{ $planUser->plan_id }}</td>
                                    <td>Active</td>
                                    <td>{{ $planUser->investment }}</td>
                                    <td>{{ $planUser->profit }}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-10" style="margin-top: 50px;">
                    <div class="card">
                    <div class="card-title py-2 px-4" style="background-color: #3FB0E4;">Daily Profits</div>
                        <table class="table table-hover table-responsive">
                            <thead">
                                <tr>
                                    <th scope="col">Profits</th>
                                    <th scope="col">Total profit</th>
                                    <th scope="col">Investment</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td> @php(print_r(date("l d M Y"))) </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
            @endcannot
        </div>
    </div>
</section>
@endsection