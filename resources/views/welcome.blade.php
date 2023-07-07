<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Dential Capital :: INVEST AND GROW</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Invest with an algo-trading firm you can trust and make the most out of your money. Unique results coupled with 24/7 monitoring of your funds is assured!. We are responsible for more than just executing trades in the market on behalf of our clients. We build for our clients." />
    <meta name="keywords" content="Storagetemasek, trade, investment, crypto, Creative" />

    <!-- Google iconfont -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="/assets/plugins/fontawesome-free/css/all.min.css">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/assets/css/tiny-slider.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/assets/css/line.css" />
    <link href="/assets/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Main Css -->
    <link href="/assets/css/style.min.css" rel="stylesheet" type="text/css" id="theme-opt" />
    <link href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/icofont/icofont.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="shortcut icon" href="/assets/img/logo.png" type="image/x-icon" />
    @vite('resources/js/app.js')
</head>

<body style="background: #ADD8E6">
    <!-- Navbar STart -->
    <a href="https://wa.me/+2348183209325" title="Chat on WhatsApp" style="
        position: fixed;
        z-index: 3;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        bottom: 0;
        margin: 2rem;
        box-shadow: 0px 0px 10px 2px #ffffff;
      "><img src="/assets/images/wats.png" alt="" style="border-radius: 100%; width: 100%" /></a>

    <header id="topnav" class="defaultscroll sticky tagline-height">
        <div class="container">
            <!-- Logo container-->
            <a class="logo" href="/">
                <img src="/assets/img/logo.svg" height="50" style="max-width: 180px" alt="" />
            </a>
            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <div id="navigation">
                <!-- Navigation Menu-->
                <ul class="navigation-menu nav-left">
                    <li class="">
                        <a href="/">Home</a><span class="menu-arrow"></span>
                    </li>

                    <li class="has-submenu parent-parent-menu-item">
                        <a href="javascript:void(0)">For Investors</a><span class="menu-arrow"></span>
                        <ul class="submenu">
                            <li>
                                <a href="{{ route('plans') }}" class="sub-menu-item">Investment Plans</a>
                            </li>

                            <li>
                                <a href="{{ route('our_numbers') }}" class="sub-menu-item">Dential Capital in Numbers</a>
                            </li>

                            <li><a href="{{ route('award') }}" class="sub-menu-item">Awards</a></li>

                            <li class="has-submenu parent-menu-item">
                                <a href="javascript:void(0)">Legals</a><span class="submenu-arrow"></span>
                                <ul class="submenu">
                                    <li>
                                        <a href="{{ route('terms')  }}" class="sub-menu-item">Terms and Services</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('privacy_policy')  }}" class="sub-menu-item">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('withdrawal_policy')  }}" class="sub-menu-item">Withdrawal Policy</a>
                                    </li>
                                    <li>
                                        <a href="/payment_policy" class="sub-menu-item">Payment Policy
                                        </a>
                                    </li>

                                    <li>
                                        <a href="{{ route('anti_money')  }}" class="sub-menu-item">Anti Money Laundering
                                        </a>
                                    </li>
                                    <li>
                                        <a href="{{ route('conduct')  }}" class="sub-menu-item">Code of Conduct
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="has-submenu parent-parent-menu-item">
                        <a href="javascript:void(0)">About</a><span class="menu-arrow"></span>
                        <ul class="submenu">
                            <li>
                                <ul>
                                    <li>
                                        <a href="{{ route('about')  }}" class="sub-menu-item">About Dential Capital</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('contact')  }}" class="sub-menu-item">Contact Us</a>
                                    </li>
                                    <!-- <li><a href="/faq" class="sub-menu-item">F.A.Q</a></li> -->
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="">
                        <a href="/login" class="">LogIn <i class="fa-solid fa-right-to-bracket"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/register" class="sub-menu-item">Register <i class="icofont-user-alt-2"></i></a>
                    </li>
                </ul>
                <!--end navigation menu-->
            </div>
            <!--end navigation-->
        </div>
        <!--end container-->
    </header>

    <!-- Hero Start -->
    <section class="bg-half-70 pb-0 d-table w-100 home-bg-1">
        <div class="container">
            <div class="row align-items-center mt-5 justify-content-center align-content-center align-items-center">
                <div class="col-lg-7 col-md-6 mt-5">
                    <div class="title-heading mt-5">
                        <h4 class="display-3 fw-bold text-white pt-5 mb-4">
                            Make Smarter Fixed Daily Profits.
                        </h4>
                        <p class="para-desc text-muted"></p>
                        <div class="mt-5 pt-2">
                            <a href="register" class="btn btn-lg btn-pills btn-primary mb-3">Start Now</a>
                        </div>
                    </div>
                </div>
                <!--end col-->
                <div class="col-lg-5 mt-5 col-md-6 mt-5 mt-sm-0">
                    <img src="/assets/images/trade_pc.webp" class="img-fluid mt-5" alt="" />
                </div>

                <div class="bg-sm-1">
                    <div class="pb-4">
                        <!-- TradingView Widget BEGIN -->
                        <div class="tradingview-widget-container">
                            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                                {
                                    "symbols": [{
                                            "description": "",
                                            "proName": "BINANCE:ETHUSDT"
                                        },
                                        {
                                            "description": "",
                                            "proName": "BITSTAMP:BTCUSD"
                                        },
                                        {
                                            "description": "",
                                            "proName": "BINANCE:ADAUSDT"
                                        },
                                        {
                                            "description": "",
                                            "proName": "NASDAQ:AAPL"
                                        },
                                        {
                                            "description": "",
                                            "proName": "NASDAQ:TSLA"
                                        },
                                        {
                                            "description": "",
                                            "proName": "NASDAQ:META"
                                        },
                                        {
                                            "description": "",
                                            "proName": "FX:EURUSD"
                                        },
                                        {
                                            "description": "",
                                            "proName": "FX:GBPUSD"
                                        }
                                    ],
                                    "showSymbolLogo": true,
                                    "colorTheme": "dark",
                                    "isTransparent": false,
                                    "largeChartUrl": "https://www.storagetemasek.com",
                                    "displayMode": "compact",
                                    "locale": "en"
                                }
                            </script>
                        </div>
                        <!-- TradingView Widget END -->
                    </div>

                    <p class="pb-3">
                        * Information regarding past performance is not a reliable
                        indicator of future performance Leverage restrictions may apply
                        depending on client's circumstances and/or jurisdiction.
                    </p>
                </div>
            </div>

            <!--end row-->
        </div>
        <!--end container-->

        <!--end section-->
        <!-- Hero End -->

        <section class="section container-fluid">
            <div class="container dark-bg pt-5">
                <div>
                    <div class="row justify-content-center">
                        <div class="col-md-4 text-center text-white">
                            <i class="fa-solid fa-computer"></i>
                            <h3 class="mt-5">Advanced Platform</h3>

                            <p>Desktop Windows / MacOs / Web / Mobile</p>
                        </div>

                        <div class="col-md-4 text-center text-white">
                            <i class="text-main icofont-hat-alt ico"></i>
                            <h3 class="mt-5">Free Practice</h3>

                            <p>Refillable free Practice Account of $10,000</p>
                        </div>

                        <div class="col-md-4 text-center text-white">
                            <i class="text-main icofont-headphone-alt-2 ico"></i>
                            <h3 class="mt-5">24/7 Support</h3>

                            <p>Prompt multilingual support</p>
                        </div>
                    </div>
                </div>

                <iframe width="100%" height="400px" style="border-radius: 20px; margin: 1rem 0" src="https://www.youtube.com/embed/1HJRmP4g_fo" title="Storagetemasek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>

        <!--end section-->

        <section class="section container-fluid">
            <div class="container">
                <div class="row justify-content-center align-content-center align-items-center">
                    <div class="col-md-6 card-bg">
                        <h2 class="pb-4">
                            Enjoy the ultimate <br />
                            platform
                        </h2>
                        <p>
                            A multichart layout, technical analysis, historical quotes and
                            beyond. Everything you’re looking for in a platform — on the
                            device of your choice.
                        </p>
                    </div>

                    <div class="col-md-6">
                        <img src="/assets/images/840@2x.png" width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </section>

    <div class="p-2" style="background: url('/assets/images/astro1.svg')">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-2">
                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
                            {
                                "symbol": "COINBASE:BTCUSD",
                                "width": "100%",
                                "height": 220,
                                "locale": "en",
                                "dateRange": "1D",
                                "colorTheme": "dark",
                                "trendLineColor": "rgba(60, 120, 216, 1)",
                                "underLineColor": "rgba(17, 85, 204, 0.3)",
                                "underLineBottomColor": "rgba(41, 98, 255, 0)",
                                "isTransparent": false,
                                "autosize": false,
                                "largeChartUrl": "https://www.storagetemasek.com"
                            }
                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </div>

                <div class="col-md-6 p-2">
                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
                            {
                                "symbol": "COINBASE:ETHUSD",
                                "width": "100%",
                                "height": 220,
                                "locale": "en",
                                "dateRange": "1D",
                                "colorTheme": "dark",
                                "trendLineColor": "rgba(60, 120, 216, 1)",
                                "underLineColor": "rgba(17, 85, 204, 0.3)",
                                "underLineBottomColor": "rgba(41, 98, 255, 0)",
                                "isTransparent": false,
                                "autosize": false,
                                "largeChartUrl": "https://www.storagetemasek.com"
                            }
                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </div>
            </div>
        </div>

        <section class="section container-fluid">
            <div class="container">
                <h2 class="text-center">Features</h2>

                <div class="row justify-content-center align-content-center align-items-center">
                    <div class="col-md-6">
                        <div class="card-bg">
                            <h3 class="pb-4">Analysis & Alerts</h3>
                            <p>
                                Get the most out of fundamental and technical analysis with
                                our News Feed and Economic Calendars. More than 100 most
                                widely-used technical indicators and widgets. Always stay
                                up-to-date on what is happening in financial markets with our
                                customizable investments alerts.
                            </p>
                        </div>

                        <div class="card-bg p-3">
                            <iframe width="100%" height="315" style="border-radius: 20px" src="https://www.youtube.com/embed/gSm_CV_nAJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-md-6 p-3">
                        <img src="/assets/images/840@1x.png" width="100%" alt="" style="border-radius: 2rem" />
                    </div>
                </div>
            </div>
        </section>

        <section class="section container-fluid">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6 p-2">
                        <img src="/assets/images/rack.png" width="100%" alt="" />
                    </div>

                    <div class="col-md-6 card-bg">
                        <h3 class="mb-4">Risk Management</h3>

                        <p>
                            With features like End and Take Profit, Negative balance
                            protection and Trailing Stop, you can manage your losses and
                            profits at the levels predetermined by you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section class="section" style="
        background: url('/assets/images/price.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="section-title text-center mb-4 pb-2">
                        <h6 class="text-primary">Pricing Plan</h6>
                        <h4 class="title fw-semibold mt-2 mb-3 text-primary">
                            Our Best Investments
                        </h4>
                        <p class="text-muted para-desc mx-auto mb-0 text-light">
                            We give you the option to switch investment as your financial
                            circumstances changes. You can change how you invest to suit
                            your needs without additional costs!
                        </p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="row cont hide_con">
                    @foreach ($plans as $plan)
                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">{{ $plan->profit }}%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">{{ $plan->name }}</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>${{ $plan->min_deposit }}</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>${{ $plan->max_deposit }}</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>{{ $plan->contact_life > 14 ? $plan->contact_life . " Months" : $plan->contact_life . " Days" }}  </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>{{ $plan->business_day }}</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>{{ $plan->withdrawal }}</strong>
                                </li>
                                <li class="text-muted mt-3">{{ $plan->referral_bonus }}% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>
                    @endforeach

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">0.84%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI BEGINNER</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$200.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$4,999.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>2 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">1.2%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI PRIME</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$5,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$24,999.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>4 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">1.54%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI EXECUTIVE</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$25,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$49,999.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>8 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">1.87%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI PREMIUM</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$50,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$99,999.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>16 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">2%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI MASTER</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$100,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$499,999.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>24 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">2.6%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase">STI MASTER PRO</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">
                                    Minimum Deposit: <br />
                                    <strong>$500,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Maximum Deposit: <br />
                                    <strong>$1,000,000.00</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Contract life: <br />
                                    <strong>48 Months </strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Business Days: <br />
                                    <strong>Mondays - Fridays</strong>
                                </li>
                                <li class="text-muted mt-3">
                                    Withdrawal: <br />
                                    <strong>Weekly/Monthly</strong>
                                </li>
                                <li class="text-muted mt-3">5% referrer Bonus</li>
                            </ul>

                            <div class="mt-4 pt-2">
                                <a href="/login" class="btn btn-dark">Start Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->

    <div class="container-fluid px-0">
        <div class="py-5 position-relative" style="background: url('/assets/images/cta02.jpg') center">
            <div class="bg-overlay bg-gradient-overlay"></div>
            <div class="container my-5">
                <div class="row align-items-center p-2">
                    <div class="col-lg-8 col-md-7 card-bg">
                        <h4 class="mb-0 text-white fw-medium">
                            We only charge 15% flat rate of profit earnings to help maintain
                            and improve our mining pools and systems. All withdrawals are
                            sent instantly. No hidden charges.
                        </h4>
                    </div>
                    <!--end col-->

                    <div class="col-lg-4 col-md-5 text-md-end mt-4 mt-sm-0">
                        <a href="/register" class="btn btn-light">Register Now</a>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </div>
        <!--end bg image-->
    </div>

    <div style="
        background: url('/assets/images/astro3.png');
        background-size: contain;
        background-repeat: no-repeat;
      ">
        <section class="section">
            <div class="container">
                <div class="row justify-content-center align-items-center p-2">
                    <div class="col-md-6 card-bg">
                        <h3 class="pb-4">Investment Community</h3>

                        <p>
                            Join our massive investment community, discuss investment ideas
                            and opportunities, or simply follow other investor with features
                            like Traders' Sentiment and Community Live Trades
                        </p>
                    </div>

                    <div class="col-md-6">
                        <img src="/assets/images/840@1x (1).png" width="100%" alt="" style="border-radius: 2rem" />
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="text-center text-primary">Start Investing in 3 Steps</h2>
            </div>

            <div class="dark-bg m-2">
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-6 col-md-4 p-5 text-center text-white">
                        <span class="text-dark icofont-tasks ico mb-3"></span>
                        <h6 class="pt-5 pb-2">1. Register</h6>
                        <p>
                            Open an Account for free in just a few minutes and verify your
                            email
                        </p>
                    </div>

                    <div class="col-sm-6 col-md-4 p-5 text-center text-white">
                        <span class="text-dark icofont-coins ico mb-3"></span>
                        <h6 class="pt-5 pb-2">2. Fund Account</h6>
                        <p>
                            Easy and Secure, Choose one of the multiple payment method
                            available, make deposites and get funded instantly.
                        </p>
                    </div>

                    <div class="col-sm-6 col-md-4 p-5 text-center text-white">
                        <span class="text-dark icofont-chart-histogram-alt ico mb-3"></span>
                        <h6 class="pt-5 pb-2">3. Start A Plan</h6>
                        <p>
                            Choose any investment plan that suits your financial status and
                            start earning instantly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <section class="section" style="
        background: url(/assets/images/1440@1x.webp);
        background-size: cover;
        background-repeat: no-repeat;
      ">
        <div class="container">
            <div class="row justify-content-evenly align-items-center">
                <div class="col-md-4 text-center text-white">
                    <span class="icofont-bird-wings ico text-primary"></span>
                    <h5 class="mt-4">Century International Quality Gold ERA Award</h5>
                    <small>Business Initiative Directions Group</small>
                </div>

                <div class="col-md-4 text-center text-white">
                    <span class="icofont-medal-sport text-primary"></span>
                    <h5 class="mt-4">Best Technology Application</h5>
                    <small>The Web Marketing Association</small>
                </div>
            </div>

            <h2 class="text-center pt-5 pb-5 text-white">
                <strong> Award-winning broker</strong> recognized and praised by the
                most respected experts of the industry.
            </h2>

            <a href="award" class="btn btn-primary center text-center d-table m-auto">See All Awards</a>
        </div>
    </section>

    <!-- End services -->

    <div style="
        background: url(/assets/images/mid.jpeg);
        background-size: contain;
        background-repeat: no-repeat;
      ">
        <!-- Start -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 mb-4 pb-2">
                        <div class="section-title text-center">
                            <h4 class="title fw-semibold mb-3">Meet Our Team Expert</h4>
                            <p class="text-muted para-desc mx-auto mb-0">
                                WE ARE FRIENDLY & PROFESSIONAL. our fund managers and research
                                scientists with the mission to deliver superior long and short
                                term returns at the lowest possible risk bracket.
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->

            <div class="container-fluid mt-4 pt-2">
                <div class="row">
                    <div class="col-12 px-0">
                        <div class="tns-outer" id="tns2-ow">
                            <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                                slide <span class="current">3</span> of 4
                            </div>
                            <div id="tns2-mw" class="tns-ovh">
                                <div class="tns-inner" id="tns2-iw">
                                    <div class="tiny-four-item tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns2" style="transform: translate3d(-50%, 0px, 0px)">
                                        <div class="tiny-slide tns-item" id="tns2-item0" aria-hidden="true" tabindex="-1">
                                            <div class="card team team-primary">
                                                <div class="card-img">
                                                    <img src="/assets/images/04.jpg" class="img-fluid" alt="" />
                                                    <div class="card-overlay"></div>
                                                </div>
                                                <div class="team-content">
                                                    <a href="javascript:void(0)" class="h6 name text-uppercase d-block mb-0 text-white">Ben Baldwin</a>
                                                    <small class="text-white">PRESIDENT AND CEO</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tiny-slide tns-item" id="tns2-item1" aria-hidden="true" tabindex="-1">
                                            <div class="card team team-primary">
                                                <div class="card-img">
                                                    <img src="/assets/images/06.jpg" class="img-fluid" alt="" />
                                                    <div class="card-overlay"></div>
                                                </div>
                                                <div class="team-content">
                                                    <div class="name">
                                                        <a href="javascript:void(0)" class="h6 name text-uppercase d-block mb-0 text-white">Rob Anthony</a>
                                                        <small class="text-white">MANAGING DIRECTOR</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tiny-slide tns-item tns-slide-active" id="tns2-item2">
                                            <div class="card team team-primary">
                                                <div class="card-img">
                                                    <img src="/assets/images/03.jpg" class="img-fluid" alt="" />
                                                    <div class="card-overlay"></div>
                                                </div>
                                                <div class="team-content">
                                                    <div class="name">
                                                        <a href="javascript:void(0)" class="h6 name text-uppercase d-block mb-0 text-white">Lynda Jacob</a>
                                                        <small class="text-white">VP OF BUSINESS DEVELOPMENT</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tiny-slide tns-item" id="tns2-item3" aria-hidden="true" tabindex="-1">
                                            <div class="card team team-primary">
                                                <div class="card-img">
                                                    <img src="/assets/images/01.jpg" class="img-fluid" alt="" />
                                                    <div class="card-overlay"></div>
                                                </div>
                                                <div class="team-content">
                                                    <div class="name">
                                                        <a href="javascript:void(0)" class="h6 name text-uppercase d-block mb-0 text-white">Da Blazö</a>
                                                        <small class="text-white">CHIEF OPERATING OFFICER</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tns-nav" aria-label="Carousel Pagination" style="">
                                <button type="button" data-nav="0" aria-controls="tns2" style="" aria-label="Carousel Page 1" class="" fdprocessedid="nvqq9e" tabindex="-1"></button><button type="button" data-nav="1" aria-controls="tns2" style="" aria-label="Carousel Page 2" class="" fdprocessedid="1n1g39" tabindex="-1"></button><button type="button" data-nav="2" aria-controls="tns2" style="" aria-label="Carousel Page 3 (Current Slide)" class="tns-nav-active" fdprocessedid="eq9s3"></button><button type="button" data-nav="3" aria-controls="tns2" style="" aria-label="Carousel Page 4" class="" fdprocessedid="thq6mp" tabindex="-1"></button>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end 
            
          
       
        </section>
        <!--end container-->
        <!-- End -->

        <!-- Start CTA -->
        <section class="bg-cta" style="background: url('/assets/images/cta03.png') center">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-8 col-md-6 col-12 card-bg">
                        <iframe width="100%" height="400" style="border-radius: 20px" src="https://www.youtube.com/embed/0iFYzRejhtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="card py-5 px-4 border-0 card-bg">
                            <div class="tiny-single-item">
                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-alt-2 avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " I have never trusted any investment platform ever
                                                befor, but this changed everything. They manage my
                                                assets, funds and everything inbetween."
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Johnny Rosario</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-female avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                "Not sure how or where i heard about Storagetemasek,
                                                but am really happy i found them. They keep exiding my
                                                expectation. For me particularly Deposits and
                                                withdrawals are very quick and no fees"
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Jenifer Smith</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-alt-2 avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " Promised returns were attractive. Actual returns
                                                were even better. I appreciate the many insights
                                                shared in each trading session report and look forward
                                                to continued investments together."
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Mr. Kelvin</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-alt-2 avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " I received my investment account update this morning
                                                - and holy cow - you guys are doing a great job! I’m
                                                kicking myself for not putting more into this
                                                opportunity. I won’t make the same mistake next time!
                                                Please keep in mind for future opportunities...I’d
                                                love to invest more with Storagetemasek!"
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Mr. David</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-alt-2 avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " For me investing is about trust, ability, affinity
                                                and availability. I have been an investor with
                                                Storagetemasek since March and have found Henry and
                                                Ronald to be competent individuals with integrity who
                                                pay attention to details and deliver for their
                                                clients"
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Richard Maxwell</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-female avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " I am liking this platform so much, it is now my
                                                major way of earning money while i save. Please you
                                                guys should pay more attention to adverts, more people
                                                need to know about this."
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Precious Johnson</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tiny-slide">
                                    <div class="card client-testi text-center">
                                        <span class="text-dark icofont-user-alt-2 avatar p-3 rounded-pill mx-auto" style="font-size: 50px; border: 1px solid #3c4858"></span>

                                        <div class="card-body pb-0 content">
                                            <p class="h6 fw-normal text-muted fst-italic">
                                                " I received my investment account update this morning
                                                - and holy cow - you guys are doing a great job! I’m
                                                kicking myself for not putting more into this
                                                opportunity. I won’t make the same mistake next time!
                                                Please keep in mind for future opportunities...I’d
                                                love to invest more with Storagetemasek!"
                                            </p>

                                            <div class="name mt-4">
                                                <small class="text-uppercase fw-semibold d-block">Mr. David</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>
    </div>
    <!--end section-->
    <!-- End CTA -->

    <!-- Footer Start -->

    <footer class="footer" style="
        background: url('/assets/images/foot.jpeg');
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #000000;
      ">
        <div class="container">
            <div id="google_translate_element"></div>

            <div class="row">
                <div class="col-12">
                    <div class="footer-py-60">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-4 order-md-1">
                                <h6 class="footer-head">Secured By</h6>
                                <img src="/assets/images/ssl.png" width="200" alt="" class="mt-4" />
                                <!--end icon-->
                            </div>
                            <!--end col-->

                            <div class="col-lg-3 col-md-3 col-12 order-1 order-md-2">
                                <h6 class="footer-head">Company</h6>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li>
                                        <a href="/" class="text-foot"><i class="uil uil-angle-right-b me-1"></i>Home</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('our_numbers')  }}" class="text-foot"><i class="uil uil-angle-right-b me-1"></i>Our
                                            Numbers</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('about') }}" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> About Us</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('plans')  }}" class="text-foot"><i class="uil uil-angle-right-b me-1"></i>
                                            Investment</a>
                                    </li>
                                    <li>
                                        <a href="{{ route('contact')  }}" class="text-foot"><i class="uil uil-angle-right-b me-1"></i> Contact
                                            Us</a>
                                    </li>
                                </ul>
                            </div>
                            <!--end col-->

                            <div class="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-3">
                                <h6 class="footer-head">Contact us</h6>
                                <ul class="list-unstyled footer-list mt-4">
                                    <li>
                                        <h6>
                                            <span class="icofont-smart-phone"></span>+1 719-4142-678
                                        </h6>
                                    </li>
                                    <li>
                                        <h6>
                                            <span class="icofont-smart-phone"></span> +1 432-5262-535
                                        </h6>
                                    </li>

                                    <li>
                                        <h6>
                                            <span class="icofont-email">
                                                support@dentialcapital.com</span>
                                        </h6>
                                    </li>

                                    <!--<li>-->
                                    <!--    <h6><span class="icofont-location-pin"> 60B Orchard Road-->
                                    <!--            #06-18 <br> Tower 2-->
                                    <!--            The Atrium@Orchard <br>-->
                                    <!--            Singapore 238891.-->
                                    <!--        </span></h6>-->
                                    <!--</li>-->
                                    <!--<li>-->
                                    <!--    <h6><span class="icofont-location-pin"> Louisville, by Boulder County, <br>-->
                                    <!--            Colorado 80027-80028, USA.-->
                                    <!--        </span></h6>-->
                                    <!--</li>-->
                                </ul>
                            </div>
                            <!--end col-->

                            <div class="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-3 order-md-4">
                                <h6 class="footer-head">News Letter</h6>

                                <input type="email" class="form-control mt-4" />
                                <button class="btn btn-primary btn-sm mt-4 form-control">
                                    Join
                                </button>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end col-->
            </div>
            <div class="bg-sm-2">
                <img src="/assets/images/tfc-icon.png" class="mt-4" alt="" />
                <p>
                    Dential Capital is a member of The Financial Commission, an
                    international organization engaged in the resolution of disputes
                    within the financial services industry in the Forex market.
                </p>

                <img src="/assets/images/sec-logo.png" class="mt-4" alt="" />

                <p>
                    Dential Capital is regulated by the US Securities and Exchange
                    Commission. The mission of the SEC is to protect investors; maintain
                    fair, orderly, and efficient markets; and facilitate capital
                    formation. Storagetemasek is an investment company that . Direct
                    access to over 50 financial markets through one account. Any
                    information contained on this website is provided to you for
                    informational purposes only and should not be regarded as an offer
                    or solicitation of an offer to buy or sell any investments or
                    related services that may be referenced here. Investing in certain
                    instruments, including stocks, options, futures, foreign currencies,
                    and bonds involve a high level of risk. Trading on margin comes with
                    substantial risk as well. You must be aware of these risks before
                    opening an account to trade. The income you may get from online
                    investing may go down as well as up. Storagetemasek is a registered
                    investment dealer, a member of the United States Securities and
                    Exchange Commission (SEC), the Investment Industry Regulatory
                    Organization of Canada (IIROC) and a member of the Canadian Investor
                    Protection Fund (CIPF), the benefits of which are limited to the
                    activities undertaken by Storagetemasek.
                </p>
            </div>
            <!--end row-->
        </div>
        <!--end container-->

        <div class="footer-py-30 footer-bar bg-footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-4">
                        <div class="text-sm-start text-center">
                            <a href="#">
                                <img src="/assets/images/logo.svg" height="26" alt="" />
                            </a>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-sm-8 mt-4 mt-sm-0">
                        <div class="text-sm-end text-center">
                            <p class="mb-0 text-muted">
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                © dentialcapital.com <iconify-icon icon="mdi:heart" style="color: red;"></iconify-icon>
                            </p>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </div>
    </footer>

    <a href="javascript:void(0)" onclick="topFunction()" id="back-to-top" class="back-to-top rounded-pill"><i class="mdi mdi-arrow-up"></i></a>

     <!-- Bootstrap 5 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/tiny-slider.js"></script>
    <script src="/assets/js/feather.min.js"></script>

    <script src="/assets/js/plugins.init.js"></script>
    <script src="/assets/js/app.js"></script>
    <script src="//code.jivosite.com/widget/XxBY5kuFvo" async></script>
    <script src="https://kit.fontawesome.com/6a95746d12.js" crossorigin="anonymous"></script>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                    pageLanguage: "en",
                },
                "google_translate_element"
            );
        }
    </script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>