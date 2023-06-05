@extends('template')
@section('title', 'Register')
@section('content')
<div class="card login-card" max-width="780px">
    <div class="col">
            <div class="card-body">
                <p class="login-card-description" class="text-white">Sign up</p>
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="form-group mb-2">
                        <label for="referral_id" class="sr-only text-white">Referral code</label>
                        <input type="text" name="referral_id" id="referral_id" class="form-control @error('referral_id') is-invalid @enderror" placeholder="Referral Code" autofocus>
                        @error('referral_id')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="form-group mb-2">
                        <label for="name" class="sr-only text-white">Name</label>
                        <input type="text" name="name" id="name" class="form-control @error('name') is-invalid @enderror" placeholder="John Doe" autofocus>
                        @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="form-group mb-2">
                        <label for="email" class="sr-only text-white">Email</label>
                        <input type="email" name="email" id="email" class="form-control @error('email') is-invalid @enderror"" placeholder=" Email Address" autofocus>
                        @error('email')
                        <span class="invalid-feedback is-invalid" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="form-group mb-2">
                        <label for="password" class="sr-only text-white">Password</label>
                        <input type="password" name="password" id="password" class="form-control @error('password') is-invalid @enderror"" placeholder=" ***********" autofocus>
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="form-group mb-4">
                        <label for="password_confirmation" class="sr-only text-white">Confirm Password</label>
                        <input type="password" name="password_confirmation" id="password" class="form-control @error('password_confirmation') is-invalid @enderror" placeholder=" ***********" autofocus>
                        @error('password_confirmation')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <input name="login" id="login" class="btn btn-primary login-btn mb-4" type="submit" value="Login">
                </form>
                <a href="{{ url('forgot-password') }}" class="text-white" class="forgot-password-link">Forgot password?</a>
                <nav class="login-card-footer-nav">
                    <a href="#!" class="text-danger">Terms of use.</a>
                    <a href="{{ url('/privacy') }}" class="text-danger">Privacy policy</a>
                </nav>
            </div>
    </div>
</div>
@endsection