@extends('admintemp')
@section('title', 'Referral')
@section('content')
<section style="padding-top: 5px;">
    <div class="container-fluid">
        @cannot('is-admin')
        <div class="row gy-4">
            <div class="col-md-4">
                <div class="card hoverable">
                    <div class="card-body">
                        <div class="row row-cols-2 justify-contents-evenly">
                            <div class="col-md-6">
                                <h2 class="crad-text text-start">{{ $referred->count() }}</h2>
                                <h5 class="card-text text-start">Referrals</h5>
                            </div>
                            <div class="col">
                                <h1 class=" text-end align-inline" style="padding-top: 2px;"><i class="medium material-icons font-main-color gradient-shadow white-text">reduce_capacity</i></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body hoverable float-end">
                        <div class="row">
                            <div class="col-md-6 text-start">
                                <p class="card-text"></p>
                            </div>
                            <div class="col-md-6 text-end">
                                <a href="{{ url('/home') }}" class="btn btn-primary me-md-2 mb-2" role="button">Copy</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 text-start">
                                <p class="card-text text-danger">Referral link:</p>
                                <p class="card-text"> Your Referral link ID: {{ auth()->user()->link }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gy-2">
            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body hoverable">
                        <div class="col"><span class="material-icons" style="font-size: 4rem;">
                                person_pin
                            </span></div>

                        <div class="col">
                            <div class="btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle border" data-bs-toggle="dropdown" aria-expanded="false">Referred</button>
                                <ul class="dropdown-menu">
                                    @foreach($emails as $email)
                                    <li>
                                        <p class="card-text text-center">{{ $email }}</p>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endcannot
        @canany('is-admin', 'is-superuser')
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">List of Referrals</div>
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Referred Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    @foreach ($referrals as $referral)
                                        <th scope="row">1</th>
                                        <td>{{ $referral->email }}</td>
                                        <td><a href="{{ route('admin.referrals.show', $referral->id) }}" role="button" class="btn btn-info">Detail</a></td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
        @endcanany
    </div>
</section>
@endsection