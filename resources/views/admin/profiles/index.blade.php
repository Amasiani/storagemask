@extends('admintemp')
@section('title', 'Profile')
@section('content')
<section style="padding-top: 5px;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7">
                <div class="card text-center">
                    <div class="card-body">
                        <div class="row gx-0 justify-items-evenly">
                            <div class="col-md-6 text-start">
                                <h5 class="card-text">{{ Str::upper('Name') }}</h5>
                                <p class="card-text text-muted">{{ Str::title(auth()->user()->name) }}</p>
                                <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                            </div>
                            <div class="col-md-6 text-start">
                                <h5 class="card-text">{{ Str::upper('Email') }}</h5>
                                <p class="card-text  text-muted">{{ auth()->user()->email }}</p>
                                <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                            </div>
                        </div>
                        <div class="row gx-0 justify-items-evenly">
                            <div class="col-md-6 text-start">
                                <h5 class="card-text">{{ Str::upper('Contact Number') }}</h5>
                                <p class="card-text text-muted">{{ Str::title(auth()->user()->phone) }}</p>
                                <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                            </div>
                            <div class="col-md-6 text-start">
                                <h5 class="card-text">{{ Str::upper('Account Status') }}</h5>
                                <p class="card-text  text-muted">#</p>
                                <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                            </div>
                        </div>
                        <div class="row gx-0 justify-items-evenly">
                            <div class="col text-start">
                                <h5 class="card-text">{{ Str::ucfirst('Contact') }}</h5>
                                <p class="card-text text-muted">#</p>
                                <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                <form method="Post" action="{{ route('admin.updatePassword') }}">
                    @csrf
                    <div class="card-body">
                            <div class="card-tilte mb-4"> Change password</div>
                            <div class="row gx-0 justify-items-evenly">
                                <div class="col-md-6 text-start">
                                    <label for="current_password" class="form-label">Current Password</label>
                                    <input type="password" name="current_password" id="current_password" class="form-control @error('email') is-invalid @enderror card-text border border-0" placeholder="Current Password" />
                                    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                                </div>
                                @error('current_password')
                                <span role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <div class="col-md-6 text-start">
                                    <label for="password" class="form-label">New Password</label>
                                    <input type="password" name="password" id="password" class="form-control @error('email') is-invalid @enderror card-text border border-0" placeholder="New Password" />
                                    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                                </div>
                                @error('password')
                                    <span role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="row gx-0 justify-items-evenly">
                                <div class="col-md-6 text-start">
                                    <label for="password_confirmation" class="form-label">Confirm Password</label>
                                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control @error('email') is-invalid @enderror card-text border border-0" placeholder="Confirm Password" />
                                    <hr style="width:100%;text-align:left;margin-left:0; border-width: 2px; background-color:gray">
                                </div>
                                @error('password_confirmation')
                                <span role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <div class="col align-self-center text-end">
                                <input role="button" type="Submit" class="btn btn-primary" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card hoverable text-center">
                    <div class="row row-cols-2 justify-items-evenly">
                        <div class="col">    
                             <div class="card-body">
                                <h5 class="card-text">${{ auth()->user()->account->amount }}</h5>
                                <p class="card-text text-muted">Account Deposit</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                            <span><i class="medium material-icons font-main-color gradient-shadow white-text">account_balance</i></span>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="card hoverable text-center">
                    <div class="row row-cols-2 justify-items-evenly">
                        <div class="col">    
                             <div class="card-body">
                                <h5 class="card-text">${{ $planUser->value('investment') }}</h5>
                                <p class="card-text text-muted">Total Investment</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                            <span><i class="medium material-icons font-main-color gradient-shadow white-text">shopping_cart</i></span>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="card hoverable text-center">
                    <div class="row row-cols-2 justify-items-evenly">
                        <div class="col">    
                             <div class="card-body">
                                <h5 class="card-text">${{ auth()->user()->account->total_profit }}</h5>
                                <p class="card-text text-muted">Total Profit</p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                            <span> <i class="medium material-icons font-main-color gradient-shadow white-text">savings</i></span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>           
</section>
@endsection