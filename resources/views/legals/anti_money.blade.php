@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<!-- Navbar End -->
<div style="background: url(/assets/images/legals.jpg); background-size: contain; background-repeat: no-repeat;background-position: top right;">
    <!-- Hero Start -->
    <section class="bg-half-80 d-table  w-100">
        <div class="bg-overlay "></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold mb-0 page-heading text-white">Anti Money Laundering (AML)</h5>
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
                                <a class="nav-link rounded shadow " href="{{ route('terms') }}">
                                    <div class="text-start py-1 px-3">
                                        <h6 class="mb-0">Terms And Conditions</h6>
                                    </div>
                                </a>
                                <!--end nav link-->
                            </li>
                            <!--end nav item-->

                            <li class="nav-item mt-3">
                                <a class="nav-link rounded shadow " href="{{ route('privacy_policy') }}">
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
                                <a class="nav-link rounded shadow" href="{{ route('payment_policy') }}">
                                    <div class="text-start py-1 px-3">
                                        <h6 class="mb-0">Payment Policy</h6>
                                    </div>
                                </a>
                                <!--end nav link-->
                            </li>

                            <li class="nav-item mt-3">
                                <a class="nav-link rounded shadow active" href="{{ route('anti_money') }}">
                                    <div class="text-start py-1 px-3">
                                        <h6 class="mb-0">Anti Money Laundering (AML) and Know Your Customer (KYC) Policy
                                        </h6>
                                    </div>
                                </a>
                                <!--end nav link-->
                            </li>

                            <li class="nav-item mt-3">
                                <a class="nav-link rounded shadow" href="{{ route('conduct') }}">
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


                        <div class="tab-pane fade show active" id="pills-payment" role="tabpanel" aria-labelledby="payment">
                            <div class="section-title" id="support">
                                <h2>Anti Money Laundering (AML) and Know Your Customer (KYC) Policy</h2>
                            </div>

                            <div class="ArticleMarkup Article__content">
                                <ul>
                                    <li>It is the Policy of <a href="/">storagetemasek.com</a> and its affiliates (hereinafter referred to as “the Company”) to prohibit and actively pursue the prevention of money laundering and any activity that facilitates money
                                        laundering or the funding of terrorist or criminal activities. The Company requires its officers, employees, and affiliates to adhere to these standards in preventing the use of its products and services for money
                                        laundering purposes.</li>
                                    <li>For the purposes of this Policy, money laundering is generally defined as engaging in acts designed to conceal or disguise the true origins of criminally derived proceeds so that the unlawful proceeds appear to have
                                        been derived from legitimate origins or constitute legitimate assets.</li>
                                    <li>Generally, money laundering occurs in three stages. Cash first enters the financial system at the “placement” stage, where the cash generated from criminal activities is converted into monetary instruments, such as
                                        money orders or traveler’s checks, or deposited into accounts at financial institutions. At the “layering” stage, the funds are transferred or moved into other accounts or other financial institutions to further
                                        separate the money from its criminal origin. At the “integration” stage, the funds are reintroduced into the economy and used to purchase legitimate assets or to fund other criminal activities or legitimate businesses.
                                        Terrorist financing may not involve the proceeds of criminal conduct, but rather an attempt to conceal the origin or intended use of the funds, which will later be used for criminal purposes.</li>
                                    <li>Each employee of the Company, whose duties are associated with the provision of products and services of the Company and who directly or indirectly deals with the clientele of the Company, is expected to know the requirements
                                        of the applicable laws and regulations which affect his or her job responsibilities, and it shall be the affirmative duty of such employee to carry out these responsibilities at all times in a manner that complies
                                        with the requirements of the relevant laws and regulations.</li>
                                    <li>The laws and regulations include, but not limited to: “Customer Due Diligence for Banks” (2001) and “General Guide to Account Opening and Customer Identification” (2003) of Basel Committee on Banking Supervision, Forty
                                        + nine Recommendations for Money Laundering of FATF, USA Patriot Act (2001), Prevention and Suppression of Money Laundering Activities Law (1996).</li>
                                    <li>To ensure that this general policy is carried out, the management of the Company has established and maintains an ongoing program for the purpose of assuring compliance with the relevant laws and regulations and the
                                        prevention of money laundering. This program seeks to coordinate the specific regulatory requirements throughout the group within a consolidated framework in order to effectively manage the group’s risk of exposure
                                        to money laundering and terrorist financing across all business units, functions, and legal entities.
                                    </li>
                                    <li>Each of the affiliates of the Company is required to comply with the AML and KYC policy.</li>
                                    <li>All identification documents and services records shall be kept for the minimum period of time required by local law.</li>
                                    <li>All new employees shall receive anti money laundering training as part of the mandatory new-hire training program. All applicable employees are also required to complete AML and KYC training annually. Participation
                                        in additional targeted training programs is required for all employees with day-to-day AML and KYC responsibilities.
                                    </li>
                                </ul>
                            </div>
                        </div>
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