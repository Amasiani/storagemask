<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Invest with an algo-trading firm you can trust and make the most out of your money. Unique results coupled with 24/7 monitoring of your funds is assured!. We are responsible for more than just executing trades in the market on behalf of our clients. We build for our clients." />
  <title>Dential Capital - @yield('title')</title>

  <!-- Google icon fonts -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="/layout/assets/plugins/fontawesome-free/css/all.min.css">
  <!--Bootstrap cdn file-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <!-- Theme style -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
  <link rel="stylesheet" href="/layout/asset/dist/css/adminlte.min.css">
  <link rel="stylesheet" href="/css/storagetemaske.css">
  <link rel="shortcut icon" href="/assets/img/logo.png" type="image/x-icon" />
  @vite(['resources/js/app.js'])
</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-white" style="background-color: grey;">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="{{ url('/home') }}" class="nav-link text-white">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="{{ url('/contact-us') }}" class="nav-link text-white">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <!-- Messages Dropdown Menu -->

        <!-- Notifications Dropdown Menu -->

        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="{{ url('home') }}" class="brand-link">
        <img src="/layout/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Dential Capital</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->

        <div class="user-panel mt-1 pb-1 mb-0.5 d-flex">
          <div class="image">
            <img src="/layout/assets/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            @if(Route::has(['login']))
            <a href="#" class="d-block">Welcome {{ ucfirst(auth()->user()->name) }}</a>
            @if (isset($referral_link))
            <h5 class="text-light">Referral: {{ $referral_link->value('link') }}</h5>
            @endif
            @cannot('is-admin')
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Your account
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="{{ route('home') }}">Dashboard</a></li>
                    <li><a class="dropdown-item" href="{{ route('admin.myInvestments') }}">My Investments</a></li>
                  </ul>
                </div>
              </li>
              @isset(auth()->user()->account)
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.accounts.create') }}">Fund Account</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.withdrawals.create') }}">Withdrawal</a></li>
              @endisset
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.referrals.index') }}">Referrals</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.activites') }}">Activites</a></li>
              <li class="nav-link"><a class="nav-link" href="{{ route('admin.profiles.index') }}">My profile</a></li>
            </ul>
            @endcannot
            <a href="{{ route('logout') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline" style="text-decoration: none;" onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">
              <p>Logout</p>
            </a>
            <form id='logout-form' action="{{ route('logout') }}" method=POST style="display:none">
              @csrf
            </form>
            @endif
          </div>
        </div>

        <!-- SidebarSearch Form -->

        <!--/* SidebarSearch Form -->
        <!--Admin dropdown-menu items -->
        <div div class="user-panel px-4 mt-1 pb-1 mb-0.5 d-flex">
          <div class="info">
            @canany(['is-admin', 'is-editor'])
            @auth
            <ul class="navbar-nav">

              <li class="nav-item"><a class="nav-link" href="{{ route('admin.accounts.index') }}">Accounts</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.plans.index') }}">Plans</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.investments.index') }}">Investments</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.assign') }}">Roles</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.referrals.index') }}">Referrals</a></li>
              <!-- <li class="nav-item"><a class="nav-link" href="{{ route('admin.users.index') }}">Users</a></li> -->
              <li class="nav-item"><a class="nav-link" href="{{ route('admin.cashwithdrawals.index') }}">Withdrawals</a></li>
            </ul>
            @endauth
            @endcanany
          </div>
        </div>
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <!--<div class="card">-->
              <div class="card-body">
                <h5 class="card-title"></h5>

                @include('partials.alerts')
                @yield('content')

              </div>
              <!--</div>-->
            </div><!-- /.card -->
          </div>
          <!-- /.col-md-6 -->
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      ...Living your dream.
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2019-<?php echo date('Y') ?> <a href="https://eastsunnetwork.com">East Sun Network Ltd</a>.</strong> All rights reserved.
  </footer>
  </div>
  <!-- ./wrapper -->

  <!-- REQUIRED SCRIPTS -->
  <!-- <script src="/js/custom.js"></script> -->
  <!-- jQuery -->
  <script src="/layout/assets/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 5 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  <!--<script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>-->
  <!-- AdminLTE App -->
  <script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
  <!--<script src="/assest/dist/js/adminlte.min.js"></script>-->
  <!-- <script src="{{ asset('/js/custom.js') }}"></script> -->
</body>

</html>