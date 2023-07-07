@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<div style="background: url(/assets/images/legals.jpg); background-size: contain; background-repeat: no-repeat;background-position: top right;">
    <!-- Hero Start -->
    <section class="bg-half-80 d-table w-100">
        <div class=""></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold mb-0 page-heading text-white">Withdrawal Policy</h5>
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
                                <a class="nav-link rounded shadow active" href="{{ route('withdrawal_policy') }}">
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
                                <a class="nav-link rounded shadow" href="{{ route('anti_money') }}">
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


                        <div class="tab-pane fade show active" id="pills-withdraw" role="tabpanel" aria-labelledby="withdraw">
                            <div class="section-title" id="payment">
                                <h2>Withdrawal Policy</h2>
                            </div>

                            <div class="ArticleMarkup Article__content">
                                <ul>
                                    <li>To withdraw funds from his/her verified account, the Client shall submit a withdrawal request from his/her personal profile. In order to fill in the withdrawal request properly, the Client shall choose one of the withdrawal
                                        methods shown in the list and specify all the necessary details.</li>
                                    <li>After the Client submits a withdrawal request, such request will be assigned a "Requested" status. When the request is being processed, it has an "In Process" status. After the "In Process" status is assigned, the requested
                                        funds will be debited from the Client's account balance. After the withdrawal request is assigned a "Processed" status, the requested funds will be transferred to the payment system.</li>
                                    <li>Withdrawal requests are processed by the financial department of the Company one-at-a-time. The processing time is 3 business days. The Company reserves the right to increase the processing time; in such case, the Company
                                        shall notify the Client via any contact method specified by the Client in his/her profile.</li>
                                    <li>The Company may not process withdrawals less than the minimum amount set by the relevant payment provider and/or due to technical limitations. Further information can be found in the <a href="/payment-methods/withdrawals">Deposits
                                            and Withdrawals</a> section on the website.</li>
                                    <li>The Company reserves the right to increase the processing time and/or cancel withdrawal requests submitted by the Client, without prior notice, during an internal risk assessment of the Client’s account in relation
                                        to activities which insinuates the following(this list is not exhaustive):
                                        <ul>
                                            <li>i. Fraud;</li>
                                            <li>ii. Money laundering;</li>
                                            <li>iii. Unfair usage of the Company’s General Fees Policy and the Terms of the Agreement;</li>
                                            <li>iv. other activities by the Client which may indicate breach of provisions of the Agreement and/or the applicable law;</li>
                                            <li>For the purpose of the risk assessment, the Company shall be entitled to block the account immediately (without giving prior notice) and to request from the Client additional supporting documents as it may deem
                                                necessary.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>The Client has the right to withdraw funds only to the payment system that was used to deposit funds to his/her account. In cases where it is technically impossible to withdraw funds to the payment system that was used
                                        to deposit funds, an alternative payment method shall be chosen and the payment details shall meet the conditions specified by the Client in his/her personal info.
                                    </li>
                                    <li>The Client is fully responsible for the information he/she provides to the Company through the withdrawal request.
                                    </li>
                                    <li>If the Client uses a bank card for making deposits, withdrawals shall be made to this bank card in the amounts not exceeding the amount deposited within 90 (ninety) calendar days from the last deposit. Withdrawals to
                                        bank cards have greater priority than other types of withdrawals.</li>
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