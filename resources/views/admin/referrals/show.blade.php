@extends('admintemp')
@section('title', 'Referral')
@section('content')
<section style="padding-top: 5px;">
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    Details
                    <a href="{{ route('admin.referrals.index') }}" class="float-end">Back</a>
                </div>
                <div class="card-body">
                    <p class="card-text"><strong>Email Address: </strong>{{ $referrals->email }}</p>
                    <p class="card-text"><strong>Referred by: </strong>{{ Str::ucfirst($referrer) }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@endsection