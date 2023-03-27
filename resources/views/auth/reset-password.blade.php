@extends('layout')
@section('title', 'Reset Password')
@section('content')
    <div class="container">
        <div class="col">
        <div class="card login-card">
            <div class="row no-gutters">
                <div class="col">
                    <img src="/assets/img/auth/login.jpg" height="300" alt="login" class="img-fluid image rounded">
                </div>
                <div class="card-img-overlay">
                <div class="col">
                    @if($errors->any())
                        @foreach ($errors->all() as $error)
                            <h1 class="text-danger">{{ $error }}</h1>
                        @endforeach
                    @endif
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                    <div class="card-body">
                        <div class="brand-wrapper">
                            <!--<a class="navbar-brand d-flex align-items-center fw-bolder fs-2 fst-italic" href="{{ url('/') }}">
                                <img src="assets/img/gallery/logo.png" class="rounded-circle" alt="logo">
                                <div class="col md-6 px-1">Catholic Clock</div>           
                            </a>-->
                        </div>
                        <p class="login-card-description text-light fw-bolder">Reset your password</p>
                        <form method="POST" action="{{ route('password.update') }}">
                            @csrf
                            <input type="hidden" name="token" value="{{ $request->route('token') }}">
                            <div class="form-group">
                                <label for="email" class="sr-only">Email</label>
                                <input type="email" name="email" id="email" class="form-control" value="{{ $request->email }}">
                                @error('email')
                                <span class="invalid-feedback is-invalid" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Password</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group mb-4">
                                <label for="password" class="sr-only">Password</label>
                                <input id="password-confirmation" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm password">
                            </div>
                            <input name="reset" id="reset" class="btn btn-block text-white bg-dark fw-bolder login-btn mb-4" type="submit" value="Update">
                            <a href="{{ route('newLink') }}" class="btn btn-primary" role="button">Request a new Reset Link</a>
                        </form>
                        <nav class="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <a href="#!">Privacy policy</a>
                        </nav>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
@endsection