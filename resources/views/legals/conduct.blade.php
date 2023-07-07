@extends('pagestemp')
@section('title', 'Plans')
@section('content')
<!-- Navbar End -->
<div style="background: url(/assets/images/legals.jpg); background-size: contain; background-repeat: no-repeat;background-position: top right;">
    <!-- Hero Start -->
    <section class="bg-half-80 d-table  w-100">
        <div class=" "></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="title-heading text-center">
                        <h5 class="heading fw-semibold mb-0 page-heading text-white">Code of Conduct</h5>
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
                                <a class="nav-link rounded shadow " href="{{ route('anti_money') }}">
                                    <div class="text-start py-1 px-3">
                                        <h6 class="mb-0">Anti Money Laundering (AML) and Know Your Customer (KYC) Policy
                                        </h6>
                                    </div>
                                </a>
                                <!--end nav link-->
                            </li>

                            <li class="nav-item mt-3">
                                <a class="nav-link rounded shadow active" href="{{ route('conduct') }}">
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
                                <h2>Code of Conduct</h2>
                            </div>

                            <div class="ArticleMarkup Article__content">
                                <h2>1. Promotional Activities in Chats</h2>
                                <ol>
                                    <li><strong>On our website, it is prohibited to:</strong>
                                        <ol>
                                            <li>Promote any services without the prior consent of the Customer Support Team.</li>
                                            <li>Promote and/or advertise any goods and/or services.</li>
                                            <li>Make financial and/or other deals in chats.</li>
                                        </ol>
                                    </li>
                                    <li>In the event where any violations of the above rules are identified by the administrator or moderators, the account of the user who violated the rules will be blocked permanently.</li>
                                    <li>Our platform does not assume any responsibility or liability for any advertising and/or promotional activity that is carried out in violation of the above rules.</li>
                                </ol>
                                <h2>2. Rules of Conduct for Chat Users</h2>
                                <ol>
                                    <li><strong>In our chats it is strictly prohibited to do the following, and any user can be banned for:</strong>
                                        <ol>
                                            <li>Using abusive or vulgar terms, profanity or swearing, mild expletives in any form and context.</li>
                                            <li>Insulting or offending other users in any way.</li>
                                            <li>Making statements that incite ethnic or racial hatred or discrimination, advocate violence in any form, and/or outrage religious feelings of other users.</li>
                                            <li>Posting information and messages that are contrary to any applicable law.</li>
                                            <li>Posting same-type information, sending duplicate messages, posting similar graphic files, holding unreasoned disputes (flooding), making radical statements, getting personal (flaming), posting irrelevant messages
                                                (spamming), discussing political news and events.</li>
                                            <li>Using abusive or vulgar terms (both explicitly and implicit) in the user's nickname.</li>
                                            <li>Distributing malicious links, links to third-party online projects, and/or sponsored links.</li>
                                            <li>Insulting and/or offending administrators, moderators, and/or chat developers.</li>
                                            <li>Discussing the actions taken by moderators. If you believe that you have not been treated fairly, please contact our administrator.</li>
                                            <li>Requiring a moderator status or any other admin status.</li>
                                            <li>Using uppercase excessively.</li>
                                            <li>Posting contact details and links to social media accounts, as well as sharing contact details and such links with other users.</li>
                                            <li>Using another language than the language set for this specific chat.</li>
                                            <li>Encouraging other users to violate the rules of conduct.</li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>3. Rules for Moderators</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>As a representative of the administration, the moderator must comply strictly with all the rules of conduct in chats and set the pattern for other users.</li>
                                            <li>Before applying any penalties, the moderator must notify the user that he/she has violated the rules of conduct in chats. The moderator reserves the right not to inform the user of his/her violation if the user
                                                explicitly insulted another user (users), posted a link to another site, contributed to flooding or repeatedly violated the rules of conduct in chats.</li>
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