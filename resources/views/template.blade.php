<!doctype html>
<html lang="en">
  <head>
  	<link rel="shortcut icon" href="#">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    @vite(['resources/js/app.js'])
    <!--<link rel="stylesheet" type="text/css" href="{%static 'css/style.css'%}">-->
    <title>SEG-NAU - @yield('title')</title>
  </head>
  <body id="top">
    <div class="">
     <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src="assets/images/seg-nau.jpg" alt="segnau_logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="{{ url('/') }}">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/about') }}">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href=" {{ route('contact') }}">Contact</a>
            </li>
            @if(Auth::User())
            <li class="nav-item">
              <a class="nav-link " href="#">Members</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Join</a>
            </li>
            <li class="nav-item">
            @if(Route::has('login'))
            <a href="{{ route('logout') }}" class="nav-link text-sm text-gray-700 dark:text-gray-500 underline" style="text-decoration: none;" onclick="event.preventDefault();
              document.getElementById('logout-form').submit();"><p>Logout</p></a>
            <form id='logout-form' action="{{ route('logout') }}" method=POST style="display:none" >
              @csrf
            </form>
            @endif
            @else
            <a href="{{ route('login') }}" class="nav-link text-sm text-gray-700 dark:text-gray-500 underline"><p>Login</p></a>
            @if(Route::has('register'))
            <a href="{{ route('register') }}" class="nav-link text-sm text-gray-700 dark:text-gray-500 underline"><p>Register</p></a>
            @endif
          @endif
          </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search for post..." aria-label="Search">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div class="container">
        <section style="padding-top:60px">
          @include('partials.alerts')
          @yield('content')
         </section>
      </div>
       <!-- Get intouch with us -->
        <div class="social-media">
          <div class="social-heading"><h3 class="text-center ">Get in Touch</h3></div>
          <div class="social-links">
            <ul>
              <li>
                <a href="#"><i class="ri-facebook-box-fill"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/eastsunetwork" target="blank"><i class="ri-twitter-fill"></i></a>
              </li>
              <li>
                <a href=""><i class="ri-linkedin-box-fill"></i></i></a>
              </li>
              <li>
                <a href=""><i class="ri-mail-fill"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- End Get intouch with us -->
        <!-- Footer -->

      </div>
      <div style="margin-bottom: 30px; padding: 5px;"> <a href="#top" class="btn btn-outline-primary btn-sm round" style="float:right;"><i class="ri-arrow-up-line" style="font-size:15px; font-weight: bold;"></i></i></a></div>
       <div class="Footer ">
          <div class="Text">
            <p>
              Designed by Eastsun Network Ltd <span><a class="mytwitter" href="https://twitter.com/eastsunnetwork"><i class="ri-twitter-fill"></i></a></span><br>
              &copy; 2019-<?php echo date('Y')?> | Privacy Policy 
            </p>
          </div>
        </div>
    </div>
    <!--<script type="text/javascript" src="{%static 'js/main.js'%}"> </script>-->
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
   
  </body>
</html>