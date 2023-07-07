@extends('admintemp')
@section('title', 'Referral')
@section('content')
<section style="padding-top: 5px;">
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Details</div>
                <div class="card-body">
                    <p class="card-text">{{ $referrals }}</p>
                    <p class="card-text"><strong>Referred by: </strong>{{ Str::ucfirst($referrer) }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@endsection