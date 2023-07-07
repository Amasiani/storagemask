@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<!-- Hero Start -->
<section class="bg-half-80 d-table w-100" style="background: url(/assets/images/plan.jpeg); background-size: contain; background-repeat: no-repeat;">
    <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-12">
                <div class="title-heading text-center">
                    <small class="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Investment Plans</small>
                    <h5 class="heading fw-semibold mb-0 page-heading text-white">Our Plans</h5>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->

    <!--end section-->

    <section class="section" style="background: url('/assets/images/bg/price.svg'); background-repeat: no-repeat; background-position: center; background-size: contain;">

        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="section-title text-center mb-4 pb-2">
                        <h6 class="text-primary">Pricing Plan</h6>
                        <h4 class="title fw-semibold mt-2 mb-3 text-primary">Our Best Investments</h4>
                        <p class="text-muted para-desc mx-auto mb-0 text-light">We give you the option to switch investment as your financial circumstances changes. You can change how you invest to suit your needs without additional costs!</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">

                <div class="row cont hide_con">


                    <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 price-card">
                            <div class="mb-5">
                                <h1 class="display-4 fw-medium mb-0">0.17%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase ">STI DEMO</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$10.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$199.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>14 Days </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <h1 class="display-4 fw-medium mb-0">0.84%</h1>
                                <p class="text-muted mb-0">Daily Profit</p>
                            </div>

                            <div class="p-2 h6 mx-5 rounded-lg bg-dark">
                                <span class="text-light text-uppercase ">STI BEGINNER</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$200.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$4,999.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>2Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <span class="text-light text-uppercase ">STI PRIME</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$5,000.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$24,999.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>4Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <span class="text-light text-uppercase ">STI EXECUTIVE</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$25,000.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$49,999.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>8Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <span class="text-light text-uppercase ">STI PREMIUM</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$50,000.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$99,999.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>16Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <span class="text-light text-uppercase ">STI MASTER</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$100,000.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$499,999.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>24Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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
                                <span class="text-light text-uppercase ">STI MASTER PRO</span>
                            </div>

                            <ul class="list-unstyled mb-0 mt-4">
                                <li class="text-muted mt-3">Minimum Deposit: <br> <strong>$500,000.00</strong></li>
                                <li class="text-muted mt-3">Maximum Deposit: <br> <strong>$1,000,000.00</strong></li>
                                <li class="text-muted mt-3">Contact life: <br> <strong>48Months </strong></li>
                                <li class="text-muted mt-3">Business Days: <br> <strong>Mondays - Fridays</strong></li>
                                <li class="text-muted mt-3">Withdrawal: <br> <strong>Weekly/Monthly</strong></li>
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

</section>
<!-- Hero End -->

<section class="section" style="background: url(/assets/images/bg/num.jpg); background-size: cover; background-repeat: no-repeat; text-align: center; color: #ffff;">
    <div class="container">
        <h2>Investment Per Day</h2>
        <p>From 2014 to 2021, the number of trades made per day increased by more than 800%!</p>

        <div class="row mt-5">
            <div class="col-md-6 mt-5">
                <h4 class="text-danger">2014</h4>
                <h2 class="text-white">145 150</h2>
            </div>

            <div class="col-md-6 mt-5">
                <h4 class="text-danger">2021</h4>
                <h2 class="text-white">1 338 793</h2>
            </div>
        </div>

        <h3 class="mt-5">Investment Volume Per Month</h3>
        <p>The total trade volume increased by 2100% between 2014 and 2021</p>

        <div class="row justify-content-center mt-5">
            <div class="col-md-6">
                <h5 style="text-align: right;">2022</h5>
                <img src="/assets/images/app/chart.01c40917788f3c1359428a9ae90bb255.svg" width="100%" alt="" style="border-left: 1px dashed #ffff; border-bottom: 1px dashed #ffff;">
                <h5 style="text-align: left;">2014</h5>
            </div>
        </div>
    </div>
</section>

<section class="section" style=" background: url(/assets/images/endplan.jpeg); background-size: contain; background-repeat: no-repeat; background-position: bottom;">
    <div class="container">
        <h2 class="text-center">Accounts Registered</h2>
        <p class="text-center">The number of active users is growing rapidly from year to year</p>

        <div class="row justify-content-center align-items-center mt-5 pt-5 text-center">
            <div class="col-md-4">
                <h2>965 650</h2>
                <p>registered users</p>
                <h4>2014</h4>
            </div>


            <div class="col-md-4">
                <h2>14 514 300</h2>
                <p>registered users</p>
                <h4>2016</h4>
            </div>
            <div class="col-md-4">
                <h2>48 091 542</h2>
                <p>registered users</p>
                <h4>2021</h4>
            </div>
        </div>
    </div>
</section>
@endsection