<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>Storagetemasek :: APP</title>
    <link rel="shortcut icon" type="image/x-icon" href="/dasboard/assets/images/logo/fav.svg">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- BEGIN: VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/vendors/vendors-min.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/vendors/animate-css/animate.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/vendors/chartist-js/chartist-min.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/vendors/chartist-js/chartist-plugin-tooltip.css">

    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/themes/materalize-min.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/themes/style-min.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/pages/dashboard-modern.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/pages/intro-min.css">
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/pages/page-timeline-min.css">
    <link rel="stylesheet" href="/dashboard/assets/icofont/icofont_min.css">
    <!-- END: Page Level CSS-->
    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="/dashboard/assets/css/custom/custom.css">
    <!-- END: Custom CSS-->
    <!-- @vite('resource/js/app.js') -->
    <script>
        function move_market(coin) {
            var count_time = Math.floor(Math.random() * 1000) + 1500;
            setInterval(function() {
                var main_coin_price = $('#' + coin).val();
                var new_coin_price = parseFloat(main_coin_price) + parseFloat(Math.random() * 2);
                $('#' + coin + '_price').html(new_coin_price.toFixed(4));
            }, count_time);
        }
    </script>
</head>

<body class="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 2-columns   " data-open="click" data-menu="vertical-menu-nav-dark" data-col="2-columns">

  <!-- BEGIN: Header-->
  <header class="page-topbar" id="header">
    <div class="navbar navbar-fixed">
        <nav class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark main-color gradient-shadow">
            <div class="nav-wrapper">

                <ul class="navbar-list right">

                    <li class="hide-on-med-and-down"><a class="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><i class="material-icons">settings_overscan</i></a></li>

                    <li><a class="waves-effect waves-block waves-light profile-button " href="javascript:void(0);" data-target="profile-dropdown"><span class="text-uppercase hide-on-small-and-down">Kristen Tracey </span> <span class="avatar-status avatar-online" style="margin-left: 1em;"><img src="/dashboard/assets/images/avatar/avatar-7.png" alt="avatar"><i></i></span></a></li>

                </ul>

                <!-- profile-dropdown-->
                <ul class="dropdown-content" id="profile-dropdown">

                    <li class="text-uppercase hide-on-med-and-up"><a class="grey-text text-darken-1" href="#!"><i class="material-icons">person_outline</i>Kristen Tracey </a></li>

                    <li><a class="grey-text text-darken-1" href="/app/profile"><i class="material-icons">person_outline</i>My Profile</a></li>

                    <li><a class="grey-text text-darken-1" href="/actions/logout.php"><i class="material-icons">keyboard_tab</i> Logout</a></li>
                </ul>
            </div>

        </nav>
    </div>
</header>  <!-- END: Header-->

  <!-- BEGIN: SideNav-->
  <aside class="sidenav-main nav-expanded nav-lock nav-collapsible main-color navbar-full sidenav-active-rounded">
    <div class="brand-sidebar main-color">
        <h1 class="logo-wrapper"><a class="brand-logo darken-1" href="/app/home"><img src="/app/images/logo/logo.svg" alt="TradesPMR logo" style="transform:scale(1.5) ; margin-left: 2em;" /></a><a class="navbar-toggler" href="#"><i class="material-icons">radio_button_checked</i></a></h1>
    </div>
    <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
        <li class="active bold"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i class="material-icons">settings_input_svideo</i><span class="menu-title" data-i18n="Dashboard">Your account</span></a>
            <div class="collapsible-body">
                <ul class="collapsible collapsible-sub" data-collapsible="accordion">
                    <li class=""><a class="" href="/app/home"><i class="material-icons">radio_button_unchecked</i><span data-i18n="">Dashboard</span></a>
                    </li>
                    <li><a href="/app/asset"><i class="material-icons">radio_button_unchecked</i><span data-i18n="eCommerce">My Investment</span></a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="/app/crypto"><i class="material-icons">savings</i><span class="menu-title" data-i18n="Templates">Fund Account</span></a>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="/app/withdraw"><i class="material-icons">account_balance_wallet</i><span class="menu-title" data-i18n="Mail">withdraw</span></a>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="/app/referal"><i class="material-icons">reduce_capacity</i><span class="menu-title" data-i18n="Mail">Referrals</span></a>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="/app/activities"><i class="material-icons">article</i><span class="menu-title" data-i18n="Chat">Activities</span></a>
        </li>

        <li class="bold"><a class="waves-effect waves-cyan " href="/app/profile"><i class="material-icons">perm_identity</i><span class="menu-title" data-i18n="ToDo">My profile</span></a>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="/actions/logout.php"><i class="material-icons">logout</i><span class="menu-title" data-i18n="Kanban">Logout</span></a>
        </li>
        
    </ul>
    <div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>
</aside>  <!-- END: SideNav-->

  <!-- BEGIN: Page Main-->
  <div id="main">
    <div class="row">
      <div class="content-wrapper-before blue-grey lighten-5"></div>
      <div class="col s12">
        <div class="container">
          <div class="section">

            <div class="row">
              <div class="col s12 m4 l4">
                <div class="card card-pil padding-4 hoverable animate fadeLeft" title="Total Deposite">
                  <div class="inter">
                    <div class="txt">
                      <h5 class="mb-0">$1,750.00</h5>
                      <p class="no-margin">Account Deposit</p>
                    </div>
                    <div class="">
                      <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance</i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col s12 m4 l4">
                <div class="card card-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                  <div class="inter">
                    <div class="txt">
                      <h5 class="mb-0">$5,050.00                      </h5>
                      <p class="no-margin">Total Investment</p>

                    </div>
                    <div class="">
                      <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">shopping_cart</i>

                    </div>
                  </div>
                </div>
              </div>

              <div class="col s12 m4 l4">
                <div class="card card-pil padding-4 hoverable animate fadeLeft" title="Total Earnings">
                  <div class="inter">
                    <div class="txt">
                      <h5 class="mb-0">$4,200.80</h5>
                      <p class="no-margin">Total Profit</p>

                    </div>
                    <div class="">
                      <i class="medium material-icons ux-icon font-main-color gradient-shadow white-text">account_balance_wallet</i>

                    </div>
                  </div>
                </div>
              </div>

              <div class="col s12 m4 l4">
                <div class="card card-pil padding-4 hoverable animate fadeLeft" title="Total withdraw">
                  <div class="inter">
                    <div class="txt">
                      <h5 class="mb-0">$8,400.00</h5>
                      <p class="no-margin">Total Withdrawal</p>

                    </div>
                    <div class="">
                      <i class="medium icofont-money-bag ux-icon font-main-color gradient-shadow white-text"></i>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="section edge" style="margin-top: 4rem;">

            <h6 class="collection-header m-0" style="font-size: 2em; padding-top: 5px;"> <i class="material-icons ux-icon">rss_feed</i>
              Create Your Portfolio
            </h6>

            <div class="row">
              <div class="col s12 m12" id="crypto">
                <div class=" card hoverable rounded-">
                  <div class="card-image">
                    <img src="/dashboard/assets/images/gallery/crypto.jpg">
                    <span class="card-title" style="background: #0D1727; font-size: 18px; text-transform: uppercase; padding: 5px;">Investment Plans</span>
                    <button onclick="open_profile('#crypto')" class="btn-floating btn-large halfway-fab card-btn waves-effect hoverable waves-light primary darken-1">
                      <i class="icofont-plus icons"></i>
                    </button>
                  </div>
                  <div class="card-content">

                    <div class="row cont hide_con">

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI DEMO </span></strong>

                                <p class="mt-5">Minimum Deposit: $10.00</p>
                                <p class="mt-5">Maximum Deposit: $199.00</p>
                                <p class="mt-5">0.17% Daily ROI Profits</p>
                                <!-- <p class="mt-5">5.1% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 14 Days </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt22" value="" placeholder="From $10.00 -- $199.00">
                                <button href="#" onclick="start_plan(22)" id="id22" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI BEGINNER </span></strong>

                                <p class="mt-5">Minimum Deposit: $200.00</p>
                                <p class="mt-5">Maximum Deposit: $4,999.00</p>
                                <p class="mt-5">0.84% Daily ROI Profits</p>
                                <!-- <p class="mt-5">25.2% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 2Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt9" value="" placeholder="From $200.00 -- $4,999.00">
                                <button href="#" onclick="start_plan(9)" id="id9" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI PRIME </span></strong>

                                <p class="mt-5">Minimum Deposit: $5,000.00</p>
                                <p class="mt-5">Maximum Deposit: $24,999.00</p>
                                <p class="mt-5">1.2% Daily ROI Profits</p>
                                <!-- <p class="mt-5">36% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 4Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt10" value="" placeholder="From $5,000.00 -- $24,999.00">
                                <button href="#" onclick="start_plan(10)" id="id10" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI EXECUTIVE </span></strong>

                                <p class="mt-5">Minimum Deposit: $25,000.00</p>
                                <p class="mt-5">Maximum Deposit: $49,999.00</p>
                                <p class="mt-5">1.54% Daily ROI Profits</p>
                                <!-- <p class="mt-5">46.2% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 8Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt21" value="" placeholder="From $25,000.00 -- $49,999.00">
                                <button href="#" onclick="start_plan(21)" id="id21" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI PREMIUM </span></strong>

                                <p class="mt-5">Minimum Deposit: $50,000.00</p>
                                <p class="mt-5">Maximum Deposit: $99,999.00</p>
                                <p class="mt-5">1.87% Daily ROI Profits</p>
                                <!-- <p class="mt-5">56.1% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 16Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt12" value="" placeholder="From $50,000.00 -- $99,999.00">
                                <button href="#" onclick="start_plan(12)" id="id12" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI MASTER </span></strong>

                                <p class="mt-5">Minimum Deposit: $100,000.00</p>
                                <p class="mt-5">Maximum Deposit: $499,999.00</p>
                                <p class="mt-5">2% Daily ROI Profits</p>
                                <!-- <p class="mt-5">60% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 24Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt13" value="" placeholder="From $100,000.00 -- $499,999.00">
                                <button href="#" onclick="start_plan(13)" id="id13" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                          <div class="col s12 m4 l4" style="text-align: center;">
                            <div class="card">
                              <div class="card-content">
                                <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">STI MASTER PRO </span></strong>

                                <p class="mt-5">Minimum Deposit: $500,000.00</p>
                                <p class="mt-5">Maximum Deposit: $1,000,000.00</p>
                                <p class="mt-5">2.6% Daily ROI Profits</p>
                                <!-- <p class="mt-5">78% Monthly Profits</p> -->
                                <p class="mt-5">Contract Live: 48Months </p>
                                <p class="mt-5">Business days: Monday - Friday</p>
                                <p class="mt-5">Withdrawals: Weekly/Monthly</p>

                              </div>
                              <div class="card-action">
                                <label for="">Enter amount:</label>
                                <input type="number" id="amt14" value="" placeholder="From $500,000.00 -- $1,000,000.00">
                                <button href="#" onclick="start_plan(14)" id="id14" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                              </div>
                            </div>
                          </div>

                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="col s12 m4" id="stock">
                    <div class=" card hoverable rounded-">
                      <div class="card-image">
                        <img src="images/gallery/stock.jpg">
                        <span class="card-title" style="background: #0D1727; font-size: 18px; text-transform: uppercase; padding: 5px;">Stock Investment</span>
                        <button onclick="open_profile('#stock')" class="btn-floating btn-large halfway-fab card-btn waves-effect hoverable waves-light primary darken-1">
                          <i class="icofont-plus icons"></i>
                        </button>
                      </div>

                      <div class="card-content">

                        <div class="row cont hide_con">

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">BEGINNER </span></strong>

                                    <p class="mt-5">Minimum Deposit: $1,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $59,999.00</p>
                                    <p class="mt-5">1% Daily Profits</p>
                                    <p class="mt-5">30% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt15" value="" placeholder="From $1,000.00 -- $59,999.00">
                                    <button href="#" onclick="start_plan(15)" id="id15" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">PRIME </span></strong>

                                    <p class="mt-5">Minimum Deposit: $60,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $99,999.00</p>
                                    <p class="mt-5">1.33% Daily Profits</p>
                                    <p class="mt-5">39.9% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt16" value="" placeholder="From $60,000.00 -- $99,999.00">
                                    <button href="#" onclick="start_plan(16)" id="id16" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">EXECUTIVE </span></strong>

                                    <p class="mt-5">Minimum Deposit: $100,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $1,000,000.00</p>
                                    <p class="mt-5">1.6% Daily Profits</p>
                                    <p class="mt-5">48% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt17" value="" placeholder="From $100,000.00 -- $1,000,000.00">
                                    <button href="#" onclick="start_plan(17)" id="id17" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col s12 m4" id="estate">
                    <div class=" card hoverable rounded-">
                      <div class="card-image">
                        <img src="images/gallery/estate.jpg">
                        <span class="card-title" style="background: #0D1727; font-size: 18px; text-transform: uppercase; padding: 5px;">Real Estate</span>
                        <button onclick="open_profile('#estate')" class="btn-floating btn-large halfway-fab card-btn waves-effect hoverable waves-light primary darken-1">
                          <i class="icofont-plus icons"></i>
                        </button>
                      </div>

                      <div class="card-content">

                        <div class="row cont hide_con">

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">BEGINNER </span></strong>

                                    <p class="mt-5">Minimum Deposit: $50,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $159,999.00</p>
                                    <p class="mt-5">1% Daily Profits</p>
                                    <p class="mt-5">30% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt18" value="" placeholder="From $50,000.00 -- $159,999.00">
                                    <button href="#" onclick="start_plan(18)" id="id18" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">PRIME </span></strong>

                                    <p class="mt-5">Minimum Deposit: $150,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $599,999.00</p>
                                    <p class="mt-5">1.33% Daily Profits</p>
                                    <p class="mt-5">39.9% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt19" value="" placeholder="From $150,000.00 -- $599,999.00">
                                    <button href="#" onclick="start_plan(19)" id="id19" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                              <div class="col s12 m4 l4">
                                <div class="card">
                                  <div class="card-content">
                                    <strong><span class="card-title" style="font-weight: 900; background: #0D1727; font-size: 22px; color: #ffffff; text-align: center; padding: 10px; border-radius: 5px;">MASTER </span></strong>

                                    <p class="mt-5">Minimum Deposit: $600,000.00</p>
                                    <p class="mt-5">Maximum Deposit: $1,000,000.00</p>
                                    <p class="mt-5">1.7% Daily Profits</p>
                                    <p class="mt-5">51% Monthly Profits</p>
                                    <p class="mt-5">30% Referral Bonus</p>

                                  </div>
                                  <div class="card-action">
                                    <label for="">Enter amount:</label>
                                    <input type="number" id="amt20" value="" placeholder="From $600,000.00 -- $1,000,000.00">
                                    <button href="#" onclick="start_plan(20)" id="id20" class="btn blue darken-1 text-center waves-effect waves-ripple hoverable col m12 s12">Start Plan</button>
                                  </div>
                                </div>
                              </div>

                          
                        </div>
                      </div>

                    </div>
                  </div> -->

            </div>


          </div>

          <div class="section edge" style="margin-top: 4rem;">
            <h6 class="collection-header m-0" style="font-size: 2em; padding-top: 5px;"> <i class="material-icons ux-icon">auto_graph</i>
              Daily profit
            </h6>

            <div class="col s12" style="margin-top: 2rem;">
              <div class=" subscriber-list-card animate fadeRight" style="overflow-x: scroll;" style="margin-top: 4rem;">
                <div class="card-content pb-1">

                </div>
                <table class=" highlight bordered" style="overflow-x: scroll;">
                  <thead>
                    <tr>
                      <th class="">PROFIT</th>
                      <th class="">TOTAL PROFIT</th>
                      <th class="">INVESTMENT</th>
                      <th class="">PLAN</th>
                      <th class="">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$4,200.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Sat 24 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$4,140.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Fri 23 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$4,080.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Thu 22 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$4,020.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Wed 21 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,960.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Tue 20 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,900.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Mon 19 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,840.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Sun 18 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,780.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Sat 17 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,720.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Fri 16 Jun 2023</td>

                          </tr>

                                              <tr>
                            <td class="green-text">$60.00</td>
                            <td class="green-text">$3,660.00</td>
                            <td class="">CRYPTO</td>
                            <td class="">STI PRIME</td>
                            <td class="">Thu 15 Jun 2023</td>

                          </tr>

                    
                  </tbody>
                </table>

                <a class="btn hoverable btn-small center" href="/app/asset" style="margin: 2rem auto; display: table;">See More</a>
              </div>
            </div>
          </div>

          <input type="hidden" id="log_name" value="kristentracey26@gmail.com">
          <input type="hidden" id="log_deposite" value="1700">

          <!-- END RIGHT SIDEBAR NAV -->
        </div>
        <div class="content-overlay"></div>
      </div>
    </div>
  </div>
  <!-- END: Page Main-->


  <!-- BEGIN: Footer-->

  <footer class="page-footer footer footer-static footer-dark gradient-45deg-purple-deep-orange gradient-shadow navbar-border navbar-shadow">
    <div class="footer-copyright">
        <div class="container"><span>&copy; 2023 <a href="">Storagetemasek </a> All rights reserved.</span></div>
    </div>
</footer>

<!-- END: Footer-->
<!-- BEGIN VENDOR JS-->
<script src="/dashboard/assets/js/vendors-min.js"></script>
<!-- BEGIN VENDOR JS-->
<!-- BEGIN PAGE VENDOR JS-->
<script src="/dashboard/assets/vendors/chartjs/chart-min.js"></script>
<script src="/dashboard/assets/vendors/chartist-js/chartist-min.js"></script>
<script src="/dashboard/assets/vendors/chartist-js/chartist-plugin-tooltip.js"></script>
<script src="/dashboard/assets/vendors/chartist-js/chartist-plugin-fill-donut.min.js"></script>
<!-- END PAGE VENDOR JS-->
<!-- BEGIN THEME  JS-->
<script src="/dashboard/assets/js/plugins_min.js"></script>
<script src="/dashboard/assets/js/search_min.js"></script>
<script src="/dashboard/assets/js/custom/custom-script_min.js"></script>
<script src="/dashboard/assets/js/scripts/customizer-min.js"></script>
<!-- END THEME  JS-->
<!-- BEGIN PAGE LEVEL JS-->
<script src="/dashboard/assets/js/scripts/dashboard-modern.js"></script>
<script src="/dashboard/assets/js/scripts/intro-min.js"></script>
<script src="/dashboard/assets/js/crypto-market.js"></script>

<script src="//code.jivosite.com/widget/XxBY5kuFvo" async></script>


  <!-- END PAGE LEVEL JS-->
  <script>
    function open_profile(card) {
      $(card).hide();
      $(card).show();
      // $(card).toggleClass('m4');
      // $(card).toggleClass('m12');
      $(card + ' .cont').toggle(500);
      $(card + ' .icons').toggleClass('icofont-plus');
      $(card + ' .icons').toggleClass('icofont-minus');
      $(card + ' .card-btn').toggleClass('primary');
      $(card + ' .card-btn').toggleClass('red');
    }

    function start_plan(plan_id) {
      var btn = $('#id' + plan_id);
      btn.attr('disabled', 'disabled');
      btn.html('<i class="icofont-spinner icofont-spin"></i>');

      $.post("/actions/buy_trade.php", {
          user: 'kristentracey26@gmail.com',
          start_plan: plan_id,
          amt: $('#amt' + plan_id).val(),
        },
        function(data) {
          console.log(data);
          if (data === 'successful') {
            purchase_success('Your investment has been activated');
          } else {
            alert_msg(data, 'danger', 2000, 5000);
          }

          btn.removeAttr('disabled');
          btn.html('Start Plan');
          btn.show(500);

        });

    }

    $(document).ready(function() {


    });
  </script>

  
</body>


</html>