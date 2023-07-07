@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<!-- Hero Start -->
<section class="bg-half-80 d-table  w-100">
    <div class=""></div>
    <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-12">
                <div class="title-heading text-center">
                    <h5 class="heading fw-semibold mb-0 page-heading text-white">Terms Of Services</h5>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!--end section-->
<!-- Hero End -->

<!-- Start -->
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-5 col-12">
                <div class="card section-title card-bg p-4 shadow rounded border-0">
                    <ul class="nav nav-pills nav-justified flex-column bg-transparent mb-0" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link rounded shadow active" href="terms">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Terms And Conditions</h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>
                        <!--end nav item-->

                        <li class="nav-item mt-3">
                            <a class="nav-link rounded shadow" href="{{ route('privacy_policy') }}">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Privacy Policy</h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>
                        <!--end nav item-->

                        <li class="nav-item mt-3">
                            <a class="nav-link rounded shadow" href="{{ route('withdrawal_policy') }}">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Withdrawal Policy</h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>
                        <!--end nav item-->

                        <li class="nav-item mt-3">
                            <a class="nav-link rounded shadow" href="{{ route('payment_policy')  }}">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Payment Policy</h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>

                        <li class="nav-item mt-3">
                            <a class="nav-link rounded shadow" href="anti_money">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Anti Money Laundering (AML) and Know Your Customer (KYC) Policy
                                    </h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>

                        <li class="nav-item mt-3">
                            <a class="nav-link rounded shadow" href="conduct">
                                <div class="text-start py-1 px-3">
                                    <h6 class="mb-0">Code of Conduct</h6>
                                </div>
                            </a>
                            <!--end nav link-->
                        </li>
                        <!--end nav item-->
                    </ul>
                    <!--end nav pills-->
                </div>
            </div>

            <div class="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 legal">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-terms" role="tabpanel" aria-labelledby="terms">
                        <div class="section-title" id="tech">
                            <h4>Terms of Services</h4>
                        </div>

                        <a href="/assets/images/bb5cd9eb95c9g3c2f7.pdf" target="_blank" class="text-primary mt-5 btn btn-outline-primary btn-lg"><span class="icofont-file-pdf" style="font-size: 30px;"></span> Terms And Condition</a>
                    </div>
                    <!--end teb pane-->



                    <!--end teb pane-->
                </div>
                <!--end tab content-->
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->

    <!--end container-->
</section>
<!--end section-->
<!-- End -->
</div>
<!-- Footer Start -->
@endsection