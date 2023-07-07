@extends('admintemp')
@section('title', 'Cashwithdrawal')
@section('content')
<section style="padding-top: 5px;">
    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    Cash Withdrawal request
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Wallet Address</th>
                                    <th scope="col">Crypto</th>
                                    <th scope="col">From:</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($withdrawalrequests as $withdrawalrequest)
                                <tr>
                                    <td scope="row">{{ $withdrawalrequest->amount }}</td>
                                    <td>{{ $withdrawalrequest->wallet_address }}</td>
                                    <td>{{ Str::upper($withdrawalrequest->crypto) }}</td>
                                    <td>
                                        {{ $withdrawalrequest->deposit === true ? "Deposit" : "Profit" }}
                                    <td>
                                    <td><a href="{{ route('admin.cashwithdrawals.show', $withdrawalrequest->id) }}" role="button" class="btn btn-info btn-sm">Detail</a></td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {{ $withdrawalrequests->links()}}
        </div>
    </div>
</section>
@endsection