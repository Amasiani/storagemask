@extends('admintemp')
@section('title', 'Invest')
@section('content')
<section style="padding-top:10px;">
    <div class="col-md-11">
        <div class="card mb-3" style="max-width: 900px;">
            <div class="card-header">
                <strong>Investment</strong>
                @canany(['is-admin'])
                <a href="{{ route('admin.investments.index') }}" role="button" class="btn mb-2 float-end">Back</a>
                @endcanany
            </div>
            <div class="card-body">
                @if(Session::has('success'))
                <div class="alert-session" role="alert">
                </div>
                @endif
                <form method="post" action="{{ route('admin.investments.store') }}" class="row g-3">
                    @csrf
                    @include('admin.investments.partials.form', ['create' => TRUE])
                <div class="col-12">
                    <button type="submit" class="btn btn-primary float-end">Create</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection('content')