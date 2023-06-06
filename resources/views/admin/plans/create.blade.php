@extends('admintemp')
@section('title', 'Create plan')
@section('content')
<section style="padding-top:5px;">
<div class="container">
    <div class="col">
        <div class="card" style="max-width: 900px;">
            <div class="card-header">
                <strong>Create a Plan</strong>
                <a href="{{ route('admin.plans.index') }}" role="button" class="btn float-end">Back</a>
            </div>
            <div class="card-body">
                @if(Session::has('message_sent'))
                <div class="alert-session" role="alert">
                    {{Session::get('message_sent')}}
                </div>
                @endif
                <form method="POST" action="{{route('admin.plans.store')}}" enctype="multipart/form-data">
                    @csrf
                    @include('admin.plans.partials.form')                                     
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</section>
@endsection('content')
