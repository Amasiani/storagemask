@extends('admintemp')
@section('title', 'Cash withdrawal Request Detail')
@section('content')
<section style="padding-top: 5px;">
    <div class="container">
        <div class="row justify-items-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <strong>Request Details for:</strong> {{ Str::ucfirst($username) }}
                        <a href="{{ route('admin.cashwithdrawals.index') }}" role="button" class="btn btn-primary btn-sm mb-2 float-end">Back</a>
                    </div>
                    <div class="card-body">
                        <h3 class="card-text"><strong>Amount: </strong>${{ $cashwithdrawal->amount }}</h3>
                        <h3 class="card-text"><strong>Withdrawal from: </strong>{{ $cashwithdrawal->profit === true ? "Profit" : "Deposit"}}</h3>
                        <h3 class="card-text"><strong>Wallet Address: </strong>{{ $cashwithdrawal->wallet_address }}</h3>
                        <h3 class="card-text"><strong>Crypto: </strong>{{ Str::upper($cashwithdrawal->crypto) }}</h3>
                        <a href="#" class="card-link">Process</a>
                        <button class="btn btn-danger card-link float-end" type="button" onclick="event.preventDefault();
                                document.getElementById('delete-cashwithdrawal-form{{ $cashwithdrawal->id }}').submit()">
                            Delete
                        </button>
                        <form id="delete-cashwithdrawal-form{{ $cashwithdrawal->id }}" action="{{ route('admin.cashwithdrawals.destroy', $cashwithdrawal->id) }}" method="POST" style="display: none;">
                            @csrf
                            @method('DELETE')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection