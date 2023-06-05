@extends('admintemp')
@section('title', 'Assign role')
@section('content')
<section style="padding-top:10px;">
    <div class="col-md-11">
        <div class="card mb-3" style="max-width: 900px;">
            <div class="card-header">
                <strong>Assign role</strong>
                <a href="{{ url('/home') }}" role="button" class="btn mb-2 float-end">Back</a>
            </div>
            <div class="card-body">
                @if(Session::has('success'))
                <div class="alert-session" role="alert">
                    {{Session::get('success')}}
                </div>
                @endif
                <form method="post" action="{{ route('admin.assignStore')}}" enctype="multipart/form-data" class="row g-3">
                    @csrf
                    @include('admin.roleusers.partials.form')
                <div class="col-12">
                    <button type="submit" class="btn btn-primary float-end">Create</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</section>
@endsection('content')