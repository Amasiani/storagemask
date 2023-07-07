@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<!-- Navbar End -->
<div style="background: url(/assets/images/legals.jpg); background-size: contain; background-repeat: no-repeat;background-position: top right;">
    <!-- Hero Start -->
    <section class="bg-half-80 d-table  w-100">
        <div class=""></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold mb-0 page-heading text-white">Payment Policy</h5>
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
                                <a class="nav-link rounded shadow " href="terms">
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
                                <a class="nav-link rounded shadow active" href="{{ route('payment_policy') }}">
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


                        <div class="tab-pane fade show active" id="pills-payment" role="tabpanel" aria-labelledby="payment">
                            <div class="section-title" id="support">

                            </div>

                            <div class="ArticleMarkup Article__content">
                                <h2>1. Payment Policy</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>The Company is financially responsible for the Client's account balance at any moment.</li>
                                            <li>The Company’s financial responsibility starts with the first record about the Client’s deposit and continues up to the full withdrawal of the funds.</li>
                                            <li>The Client has the right to demand from the Company any amount of funds which is available in their account at the time of the inquiry.</li>
                                            <li>The only official deposit/withdrawal methods are the methods that appear on the Company’s official Website. The Client is taking all the risks related to the use of the payment methods unless these payment methods
                                                are provided by the Company’s partners or are the Company’s responsibility. The Company isn’t responsible for any delay or cancellation of financial transactions that may be caused by the selected payment
                                                system. In case where the Client has any claims related to any of the payment systems, it’s their responsibility to contact the support service of the payment system and to notify the Company of their claims.
                                            </li>
                                            <li>The Company shall not be responsible for the activities of any third-party service providers that the Client may use in order to make any deposit/withdrawal. The Company’s financial responsibility for the Client’s
                                                funds starts when the funds arrive to the Company’s bank account or any other account related to the Company and this fact appears on the Payment Methods page of the Website. In case any fraud appears during
                                                the financial transaction or after it, the Company reserves the right to cancel the transaction and to freeze the Client's account.
                                            </li>
                                            <li>The Company’s responsibility as to the Client’s funds ends when the funds leave the Company’s bank account or any other account related to the Company and this fact appears on the Payment Methods page of the
                                                Website.
                                            </li>
                                            <li>In case of any technical errors that may appear when processing the financial transaction, the Company reserves the right to cancel that transaction and all other Client’s financial activity on the Company’s
                                                Website.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>2. Client’s Registration</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>Client’s registration procedure is based on two main steps:
                                                <ol>
                                                    <li>Client’s web registration.</li>
                                                    <li>Client’s identity verification.</li>
                                                </ol>
                                            </li>
                                            <li>To complete the first step, the Client must:
                                                <ol>
                                                    <li>Provide the Company their real identity and contact details.
                                                    </li>
                                                    <li>Accept the Company’s agreement and submit an application.</li>
                                                </ol>
                                            </li>
                                            <li>To complete the second step, the Client must:
                                                <ol>
                                                    <li>Provide a full copy of their Passport and/or (if available) ID card with a photo and personal details.</li>
                                                </ol>
                                            </li>
                                            <li>The Company reserves the right to demand from the Client other documents, such as paying bills, bank confirmation, bank card scans or any other document that may be necessary during the verification process.
                                            </li>
                                            <li>The identification process shall be completed in 10 business days since the Company's request to identify the Client. In some cases, the Company may increase the identification process up to 30 working days.</li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>3. Depositing Procedure</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>To make a deposit, the Client shall make an inquiry from their personal profile. To complete the inquiry, the Client shall choose any of the payment methods from the list, fill in all the required details and
                                                proceed to the payment page.</li>
                                            <li>The processing time of the inquiry depends on the selected payment method and may vary from one method to another. The Company cannot regulate the processing time. In case of using electronic payment methods,
                                                the transaction time can vary from seconds to days. In case of using direct bank wire, the transaction time can be up to 45 business days.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>4. Taxes</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>The Company is not a tax agent and therefore shall not provide financial information on the Client to any third parties. This information shall not be disclosed unless officially requested by government authorities.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>5. One-Click Payments</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>You agree to pay for all goods and/or services or other additional services you ordered on the Website, as well as for any additional expenses (if any), including, but not limited to, all possible taxes, charges,
                                                etc. You bear full responsibility for timely payments on the Website. The Payment Service Provider only facilitates payments for the amounts indicated on the Website and it is not responsible for the payment
                                                of any additional fees/expenses by the Website user. After you click the “Pay” button, the transaction is deemed to be irrevocably processed and executed. After clicking the “Pay” button, you agree that
                                                you will not be eligible to cancel the payment or request to cancel it. By placing the order on the Website, you confirm and state that you do not violate the laws of any country. Also, by accepting these
                                                Regulations (and/or Terms &amp; Conditions), you, as a cardholder, confirm that you are entitled to use the Services offered on the Website. When using the Website services, you make a legally binding declaration
                                                that you have reached or surpassed the legal age that is considered as such by your jurisdiction for using the Services provided on the Website. By starting to use the Website Services, including those of
                                                specific nature, you bear legal responsibility for violating the legislation of any country where these Services are being used and confirm that the Payment Service Provider is not responsible for any such
                                                unlawful or unauthorized violation. By agreeing to use the Website Services, you understand and accept that processing of any of your payments is executed by the Payment Service Provider and there is no
                                                statutory right of revocation of already purchased goods and/or services or any other opportunities to cancel the payment. If you wish to reject to use Services for your next purchases of goods and/or services
                                                or other facilities on the Website, you can do that by using your personal account/profile on the Website. The Payment Service Provider is not responsible for any failure to process the data related to your
                                                payment card, or for the issuing bank’s refusal to provide authorization for the payment with your payment card. The Payment Service Provider is not responsible for the quality, quantity, price, terms or
                                                conditions of any goods and/or services or other facilities offered to you or purchased by you from the Website by using your payment card. When you pay for any of the Website’s goods and/or services, you
                                                are primarily bound by the Website Terms and Conditions. Please note that only you, as the cardholder, are responsible for paying for all goods and/or services you have ordered on the Website and for any
                                                additional expenses/fees that can be applied to this payment. The Payment Service Provider acts only as the executor of the payment in the amount stated on the Website and it is not responsible for pricing,
                                                total prices and/or total sums. In case there is a situation when you do not agree with the terms and conditions and/or other reasons, we ask you not to proceed with the payment and, if necessary, contact
                                                directly the Administration/Support Team of the Website.</li>
                                        </ol>
                                    </li>
                                </ol>
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