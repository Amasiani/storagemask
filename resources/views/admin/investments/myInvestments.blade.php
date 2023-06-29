@extends('admintemp')
@section('title', 'Profile')
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
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ auth()->user()->account->amount }}</h5>
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
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ $planUser->value('investment') }}</h5>
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
                                <h5 class="m-0" style="padding-left: 20px; padding-top: 10px;">${{ auth()->user()->account->total_profit }}</h5>
                                <p class="no-margin" style="padding-left: 10px;">Total Profit</p>
                            </div>
                            <div class="" style="margin:8px">
                                <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance_wallet</i>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            @endcannot
            <div class="col text-center">
                <div class="card">
                    <div class="card-header" style="text-align: left; border: none; font-size: 20px; padding-top: 15px">Withdraw to Wallet</div>
                    <div class="card-title" style="text-align: left; padding-left: 20px">We pay real time crypo values</div>
                    <div class="card-body">
                        <div class="card-body">
                            @if(Session::has('message_sent'))
                            <div class="alert-session" role="alert">
                                {{Session::get('message_sent')}}
                            </div>
                            @endif
                            <form method="POST" action="{{route('admin.withdrawals.store')}}" enctype="multipart/form-data">
                                @csrf
                                @include('admin.withdrawals.partials.forms', ['userwithdraw' => true])
                                <button type="submit" class="btn btn-info float-start">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection