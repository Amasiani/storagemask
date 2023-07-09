@extends('admintemp')
@section('title', 'Create Account')
@section('content')
<section style="padding-top:5px;">
    <!--<div class="container overflow-hidden text-center">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <strong>Create Account</strong>
                    <a href="{{ route('admin.accounts.index') }}" role="button" class="btn float-end">Back</a>
                </div>
                <div class="card-body">
                    @if(Session::has('message_sent'))
                    <div class="alert-session" role="alert">
                        {{Session::get('message_sent')}}
                    </div>
                    @endif

                </div>
            </div>
        </div>
    </div>
</div>-->
    <div class="container-fluid">
        <div class="row">
            @csrf
            @include('admin.accounts.partials.form', ['fundAccount' => true])
        </div>
    </div>
</section>
@endsection('content')