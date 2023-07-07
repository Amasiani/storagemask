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
                        <h5 class="heading fw-semibold mb-0 page-heading text-white">Privacy Policy</h5>
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
                                <a class="nav-link rounded shadow active" href="{{ route('privacy_policy') }}">
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
                        <div class="tab-pane fade show active" id="pills-privacy" role="tabpanel" aria-labelledby="privacy">
                            <div class="section-title" id="general">
                                <h2>Privacy Policy</h2>
                            </div>
                            <div class="ArticleMarkup Article__content mt-3">
                                <p>
                                    Storagetemasek LLC respects your privacy and is committed to protecting and respecting your personal data. This privacy policy aims to give you information on how we collect and process any personal data i.e. information about
                                    a Client (as defined below) who is a natural person on the basis of which that Client can be identified (hereinafter the <strong>data</strong>
                                    ) in accordance with the applicable data protection legislation and best
                                    practice.

                                </p>
                                <p>We strive to create the most secure infrastructure of any broker in the world. In this privacy policy we would like to tell why you can trust us with your data and rest assured that your data is safe.</p>
                                <p>It is important that you read this privacy policy together with any other privacy policy we may provide on specific occasions when we are collecting or processing your data about you so that you are fully aware of how and
                                    why we are using your data.</p>
                                <p>
                                    In this Privacy Policy, unless the context otherwise requires, expressions defined herein shall have the meaning ascribed to them in the <a href="terms-conditions">Terms &amp;Conditions</a>
                                    .
                                </p>
                                <p>Please note that this Privacy Policy is addressed to Clients and potential customers. If you are an Storagetemasek employee, a contractor to Storagetemasek or a third-party service provider, your personal information will be used in
                                    connection with your employment contract, your contractual relationship or in accordance with our separate policies which are available by contacting us at the contact details listed in the section OUR CONTACT DETAILS
                                    below.
                                </p>
                                <h2>1. WHO WE ARE</h2>
                                <p>
                                    Storagetemasek LLC, is a company registered in St. Vincent and the Grenadines and having its registered address at Hinds Building, Kingstown, St. Vincent and the Grenadines (hereinafter <strong>Storagetemasek</strong>
                                    ). Storagetemasek is
                                    the controller and responsible for the data of the Client disclosed to us in order to register for a Trading Account, Demo Account and/or to make use of any other services offered by the Storagetemasek Group (as defined in
                                    Appendix A) through the <a href="/">website</a>
                                    (hereinafter “Website”) (this term shall at all times include Website’s desktop and mobile versions).
                                </p>
                                <p>
                                    This Privacy Policy is issued on behalf of Storagetemasek Group so when we mention “Storagetemasek”, “Company”, “we”, “us” or “our” in this Privacy Policy, we are referring to the relevant company in the Storagetemasek group responsible
                                    for collecting and/or processing your data when you use the Trading Platform through the Website, either for a Trading Account or a Demo Account (or their mobile/desktop versions) (hereinafter the
                                    <strong>Service(s)</strong>
                                    ). In Storagetemasek we respect your privacy and therefore all companies within the Storagetemasek group are committed to protect your data, which it collects, uses and/or has access to.

                                </p>
                                <p>If you are participating in our affiliate and/or introducing broker programs, we will process the data provided under our agreement with you to exercise our rights and perform our obligations under or in connection with
                                    the relevant agreement and the term Client in this Privacy Policy shall be read to include the term Affiliate and/or Introducing Broker (as applicable).</p>
                                <p>The Company takes measures to implement advanced data protection policies and procedures and to update them from time to time for the purpose of safeguarding the Client's data and the Client’s account. Your data is protected
                                    by the legal, administrative and technical measures that we take to ensure the privacy, integrity and accessibility of data. To prevent security incidents with your data, we use a mixed organizational and technical
                                    approach based on the results of annual risk assessment.</p>
                                <p>The Company shall not divulge any private information of its Clients and former Clients unless the Client approves in writing such disclosure or unless such disclosure is required under applicable law or is required in
                                    order to verify the Client's identity or it is required for Storagetemasek to perform its contractual obligations under any agreement concluded with the Client. The Clients' information is processed only by the employees
                                    of the Company and/or employees of the Storagetemasek group and/or trusted third parties which provide specific support services, dealing with the specific Client's Accounts and necessary for the provision of our services.
                                    All such information shall be stored on electronic and physical storage media according to applicable law.</p>
                                <h2>2. DATA USAGE</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>
                                                We may collect, use, store and transfer different kinds of data about you which we have grouped together as follows:

                                                <ul>
                                                    <li>
                                                        <strong>Identity Data</strong>
                                                        includes first name, last name, and patronymic (if available), date of birth gender, passport, ID, Driver’s number, and copy of photo.
                                                    </li>
                                                    <li>
                                                        <strong>Contact Data</strong>
                                                        includes billing address, email address and telephone numbers.

                                                    </li>
                                                    <li>
                                                        <strong>Financial Data</strong>
                                                        includes bank account, payment card details and tax identification number (including but not limited to social security number, income tax identification number, national
                                                        insurance number).
                                                    </li>
                                                    <li>
                                                        <strong>Transaction Data</strong>
                                                        includes details about the transactions performed by you, details about payments, withdrawals, exchanges, trading history, profit, balance, deposited and withdrawal
                                                        amount methods, and any other details in relation to the services you have made use of through our Website.
                                                    </li>
                                                    <li>
                                                        <strong>Technical Data</strong>
                                                        includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in type and versions, operating system
                                                        and platform, and other technologies on the devices you use to access the Website and use of cookies stored on your device.

                                                    </li>
                                                    <li>
                                                        <strong>Profile Data</strong>
                                                        includes your Client’s account details, username and password, transactions made by you, your interests, preferences, feedback and/or information received through your interaction
                                                        with us within the course of providing our services and survey responses.

                                                    </li>
                                                    <li>
                                                        <strong>Usage Data</strong>
                                                        includes information about how you use the Website, products and services, registration date, account category, trading cluster, number of complaints, number of requests filed
                                                        and IP history.
                                                    </li>
                                                    <li>
                                                        <strong>Marketing and Communication Data</strong>
                                                        includes your preferences in receiving marketing from us and your communication preferences.
                                                    </li>
                                                    <li>
                                                        <strong>Special Categories of Data/ ‘Sensitive’ Data</strong>
                                                        includes details about your religious belief, annual income, biometric data, and/or criminal convictions and offences.

                                                    </li>
                                                    <li>
                                                        <strong>Conformity Data</strong>
                                                        includes details about your education, employment status, trading experience, self-assessment test.
                                                    </li>
                                                    <li>
                                                        <strong>Banking Data</strong>
                                                        includes details of the number of payment wallets and/or information of your bank card, including information of the issuing bank, card number, cardholder name, card expiration
                                                        date, payment system, card validation code (CVV2 / CVC2), and photos of both sides of the bank card.
                                                    </li>
                                                    <li>
                                                        <strong>Data in KYC (Know your customer)</strong>
                                                        includes identity document information, including copies of recent dated Utility Bills, Identity Card, Passport, and/or Driver’s License.

                                                    </li>
                                                    <li>
                                                        <strong>Economic Profile Data</strong>
                                                        includes details on occupation, purpose of investment, annual income, net wealth, expected annual amount of investment and sources of funds.

                                                    </li>
                                                    <li>
                                                        <strong>Location Data</strong>
                                                        includes details on your actual location when interacting with our Website (for example, a set of parameters that determine regional settings of your interface, namely
                                                        residency country, time zone, and the interface language).
                                                    </li>
                                                    <li>
                                                        <strong>Audio Data</strong>
                                                        includes full voice recordings of calls that you receive from us or make to us. <br>(the above collectively referred to as “Personal Data”)
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Aggregated Data includes statistical or demographic data for any purpose. Such data can be derived from your data but may not be considered personal data in law as it will not directly or indirectly reveal your
                                                identity. An example of such Aggregated Data could be that we aggregate your Usage Data to calculate the percentage of users accessing a specific website feature and/or services/product preference.
                                                <br>Notwithstanding the above, if Storagetemasek combines Aggregate Data with data in a way that the end result can in any way identify the data subject, Storagetemasek shall treat such combined data as data which will
                                                be treated as per the provisions herein contained.

                                            </li>
                                            <li>Processing of your data is carried out by Storagetemasek following the principles of lawfulness, fairness, transparency, and always adhering to the intended purpose of data processing, the principle of data minimization,
                                                accuracy, limited data storage, data integrity, confidentiality and accountability.
                                            </li>
                                            <li>
                                                In general Storagetemasek collects and process the Personal Data, for any of the following reasons:

                                                <ol>
                                                    <li>To perform its contract with you,</li>
                                                    <li>To comply with its legal obligations including without limitation to applicable anti-money laundering and terrorist financing laws and regulations (hereby referred to as Money-Laundering Law), and/or</li>
                                                    <li>To safeguard its legitimate interest</li>
                                                </ol>
                                            </li>
                                            <li>The Client acknowledges that all or part of the data concerning the Client's account and related transactions will be stored by the Storagetemasek and may be used by the Company in case of dispute between the Client
                                                and the Company.</li>
                                            <li>The Client is responsible for updating any data provided to us in case of any change. Although we will strive to keep your data up to date and review and inspect any information provided by you, we may not be
                                                able to always do so without your help. The Client acknowledges that Storagetemasek holds neither commitment nor responsibility to the Client due to any aforesaid review or inspection of information.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>3. HOW IS YOU PERSONAL DATA COLLECTED?</h2>
                                <ol>
                                    <li>
                                        We use different methods to collect data from and about you including through:

                                        <ol>
                                            <li>
                                                <strong>Direct Interactions</strong>
                                                . You will provide to us your Identity, Contact and Financial Data online through the Website and/or by filling in online forms and/or by corresponding with us by emails or
                                                otherwise. Data may be submitted to us by you when you wish to:

                                                <ol>
                                                    <li>Register for a Trading Account;</li>
                                                    <li>Register for a Demo Account;</li>
                                                    <li>Subscribe to our publications and ongoing updates;</li>
                                                    <li>Request marketing and promotions to be sent to you;</li>
                                                    <li>Enter a competition, promotion or survey; and/or</li>
                                                    <li>Give us feedback or contact us.</li>
                                                </ol>
                                            </li>
                                            <li>We require to collect the above data in order that we are able to (i) provide our services efficiently, (ii) to comply with our ongoing legal obligations, including, inter alia, to prevent fraud and money laundering
                                                acts.
                                            </li>
                                            <li>If you fail to provide the data when requested we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with our services). In this case, we may have
                                                to cancel a service you have with us but we will notify you if this is the case at the time. It is important that the data we hold about you is accurate and current. Please keep us informed if your data
                                                changes during your relationship with us.</li>
                                            <li>
                                                <strong>Automated Technologies or Interactions</strong>
                                                . <br>
                                                When using our services, your device automatically transmits to us its technical characteristics. Locale (a set of parameters that determine regional
                                                settings of your interface, namely, residence country, time zone and the interface language) is used for the purpose of providing you with the best possible service within our platform. <br>
                                                Using the information
                                                about IP address, cookies files, information about browser and operating system used, the date and time of access to the site, and the requested pages addresses allows us to provide you with the optimal
                                                operation on our web application, mobile and/or desktop versions of our application and monitor your behaviour for the purpose of improving the efficiency and usability of our Services. <br>
                                                We use web analytics
                                                tools to track performance of our website and marketing source of user by cookies in order to optimize our marketing costs and provide users with better experience. <br>You may at any time request that we
                                                refrain from any such transmissions (to the degree this is possible and subject to any of our legal obligations) by sending your request to the DPO using our details in the OUR CONTACT DETAILS below using
                                                the registered email address you disclosed and registered with us through your Account. We will address your request within 30 business days.

                                            </li>
                                            <li>
                                                <strong>About Cookies</strong>
                                                . <br>
                                                A cookie is a small amount of data that often includes a unique identifier that is sent to your computer or device browser from a website's computer and is stored on your
                                                device's hard drive for tracking site usage. A website may send its own cookie to your browser if your browser's preferences allow it, but, to protect your privacy, your browser only permits a website to
                                                access the cookies it has already sent to you, not the cookies sent to you by other websites. Many websites do this whenever a user visits their website in order to track online traffic flows. When you visit
                                                our Website, our system automatically collects information about your visit, such as your Technical Data, including inter alia to, your browser type, your IP address and the referring website. <br>
                                                Cookies
                                                stored may determine the path the Client took on our site and used to anonymously identify repeat users of the website and what pages were most popular for Clients. However, the Company protects the Client’s
                                                privacy by not storing the Client’s names, personal details, emails, etc. Using cookies is an industry standard and is currently used by most major websites. Stored cookies allow the Website to be more user-friendly
                                                and efficient for Clients by allowing Storagetemasek to learn what information is more valued by Clients versus what isn’t. You can set your browser not to save any cookies of this website and you may also delete
                                                cookies automatically or manually. However, please note that by doing so you may not be able to use all the provided functions of our website in full. <br>
                                                Please see our <a href="cookie-policy">Cookies
                                                    Policy</a>
                                                for further details.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>4. PURPOSE FOR WHICH WE WILL USE YOUR DATA AND ON WHAT LEGAL BASIS</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>We process the aforementioned data in compliance with the applicable legislation as amended from time to time in order to (i) be able to perform our contractual obligations towards the Client and offer them
                                                the best possible service, (ii) provide our Services efficiently, (iii) comply with our legal obligations, including, inter alia, to prevent fraud and money laundering acts, and (iv) protect our legitimate
                                                interests and your vital interests.</li>
                                            <li>
                                                We process all data based on the following legal basis:

                                                <ol>
                                                    <li>For compliance with our legal obligations;</li>
                                                    <li>For the performance of our contractual obligations towards the Client;
                                                    </li>
                                                    <li>For the purposes of safeguarding our legitimate interests and your interests and fundamental rights do not override those interests; and/or</li>
                                                    <li>On the basis of your consent.</li>
                                                </ol>
                                            </li>
                                            <li>Indicatively we set out below a description of all the ways we plan to use your data and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.
                                                Note that we may process the data for more than one lawful ground depending on the specific purpose for which we are using your data.</li>
                                        </ol>
                                    </li>
                                </ol>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>-</th>
                                            <th>PURPOSE ACTIVITY</th>
                                            <th>TYPE OF DATA</th>
                                            <th>LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF LEGITIMATE INTEREST</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>a.</td>
                                            <td>
                                                1. To accept to register you as a Client <br>
                                                2. To notify you about changes to our terms or privacy policy
                                                <br>
                                                3. To communicate with you and provide you with secure identifications, authentication and support services<br>4. To confirm you are at age of majority as recognized and declared by the laws of your
                                                jurisdiction

                                            </td>
                                            <td>
                                                1. Identity Data <br>
                                                2. Profile Data<br>
                                                3. Contact Data<br>
                                                4. Data in KYC
                                                <br>
                                                5. Financial Data<br>6. Economic Profile Data

                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary to comply with our legal obligations

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>b.</td>
                                            <td>1. To perform our Scoring Processing under which a Client is scored on a scale basis with regard to the level of risk he is to Storagetemasek</td>
                                            <td>
                                                1. Banking Data<br>2. Economic Profile Data
                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary to comply with our legal obligations

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>c.</td>
                                            <td>1. To confirm the information provided by You under (a) above in relation to your location.</td>
                                            <td>1. Location Data</td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary to comply with our legal obligations

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>d.</td>
                                            <td>1. To secure authentication, identification and support services via social networks protocols and use the links to your accounts in social networks for these purposes.</td>
                                            <td>1. Technical Data</td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary to comply with our legal obligations

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>e.</td>
                                            <td>
                                                1. To process and deliver your transactions and requests (Deposits; Trades; Withdrawals)<br>
                                                2. Manage payments, fees and charges;<br>3. To collect and recover money owed to us.
                                            </td>
                                            <td>
                                                1. Banking Data<br>2. Transaction Data
                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary for our legitimate interest (recover charges owed to us, make a withdrawal in case of breach of our contract)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>f.</td>
                                            <td>1. To administer and protect our business and Website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</td>
                                            <td>
                                                1. Identity Data<br>
                                                2. Contact Data<br>3. Technical Data
                                            </td>
                                            <td>
                                                1. Performance of our contract with you<br>
                                                2. Necessary to comply with our legal obligations <br>3. Necessary for our legitimate interests (take reasonable steps to confirm that you do not use any ways to manipulate
                                                our platform &amp;for running our business, provision of administration and IT services, network security, to prevent fraud)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>g.</td>
                                            <td>
                                                1. To deliver relevant Website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you
                                                <br>2. To provide you with an optimal operation on our web application, mobile and/or desktop versions of our application and monitor your behavior for the purpose of improving the efficiency and usability
                                                of our services.

                                            </td>
                                            <td>
                                                1. Identity Data<br>
                                                2. Contact Data<br>
                                                3. Profile Data<br>
                                                4. Usage Data Technical Data<br>5. Marketing and Communication Data
                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>h.</td>
                                            <td>
                                                1. to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy;<br>2. statutory limitations

                                            </td>
                                            <td>1. Transaction Data</td>
                                            <td>1. Necessary for our legitimate interests (including statutory limitations provisions by applicable laws)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>i.</td>
                                            <td>
                                                1. To inform you about any of the following:<br>
                                                — new services and/or products we may offer;<br>— Any new development and/or features of the current products/services we offer
                                            </td>
                                            <td>
                                                1. Identity Data<br>
                                                2. Profile Data<br>
                                                3. Contact Data<br>
                                                4. Technical Data
                                                <br>
                                                5. Usage Data<br>
                                                6. Transactions
                                                <br>7. Marketing and Communication Data

                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary for our legitimate interests (to study how customers use our products/services, to develop our products/services and grow our business)

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>j.</td>
                                            <td>
                                                1. To send direct marketing of our services to you always within the boundaries of our legitimate interests.
                                                <br>
                                                2. To send to you newsletters, push-messages and calls to keep you in touch with our new feature and new development of the current products/services we offer, news and events and the efficient provision
                                                of the full scope of our services.<br>Please note that we will never use your data to communicate to you and/or promote any third party marketing material.

                                            </td>
                                            <td>
                                                1. Identity Data<br>
                                                2. Profile Data<br>
                                                3. Contact Data<br>
                                                4. Data that may be provided by you during your activity at the Website.<br>Marketing and Communication Data
                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary for our legitimate interests (to provide effective and personalized customer services to you and to update you in relation to our services that are
                                                available to you.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>k.</td>
                                            <td>
                                                1. To allow us to provide you with the optimal operation on our Website, mobile and desktop versions of our application and monitor your behavior for the purpose of improving the efficiency and usability of
                                                our Services.<br>2. To use analytics tools to track performance of the Website and marketing source of our Clients in order to optimize our marketing costs and provide you with better experience.

                                            </td>
                                            <td>
                                                1. Location Data<br>
                                                2. Technical Data<br>
                                                3. Usage Data<br>4. Marketing and Communication Data
                                            </td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>2. Necessary for our legitimate interests (to provide effective and personalized customer services to you and to update you in relation to our services that are
                                                available to you).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>l.</td>
                                            <td>
                                                1. to allow us to monitor and train our employees for your benefit<br>
                                                2. to safeguard your or our interests in case of a dispute<br>
                                                3. to take steps for fraud prevention<br>4. to improve the services provided
                                                to you
                                            </td>
                                            <td>Audio Data</td>
                                            <td>
                                                1. Necessary to perform our contract with you<br>
                                                2. Necessary to comply with our legal obligations
                                                <br>3. Necessary for our legitimate interests

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>m.</td>
                                            <td>
                                                1. To confirm that your annual income corresponds with your employment status
                                                <br>2. To confirm that you have no criminal history.

                                            </td>
                                            <td>Sensitive Data</td>
                                            <td>
                                                1. Necessary to comply with our legal obligations<br>2. Necessary to protect your vital interests.

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ol start="4">
                                    <li>If you are an existing Client of the Website where we have a legitimate interest in communicating with you, or if you have given us your consent we will collect and process your personal data to communicate with you
                                        in case of support and/or sending newsletters, push-messages and calls to keep you in touch with our new features, news and events and the efficient provision of the full scope of our services. We will also use
                                        your data to send you marketing information regarding our services that we believe may be of interest to you via email or otherwise.</li>
                                    <li>Our Website is not intended for children and we do not knowingly collect data relating to children. As we do not allow users under the age of 18 to use our services, we need to obtain your birth date in order to confirm
                                        the Clients’ age checks. </li>
                                </ol>
                                <h2>5. OPTING OUT</h2>
                                <p>
                                    If you do not want to receive any marketing newsletters or transmit your data to the third-parties for marketing purposes, you can configure your preferences. Such configuring can be done when (i) opening an account or
                                    (ii) when receiving such advertising content or (iii) by logging in and going to My Account &gt;Personal Details &gt;Notification Settings. You may also send to the Company, at any time, an email to <a href="mailto:support@storagetemasek.io">support@storagetemasek.io</a>
                                    using the registered email address you disclosed and registered with us through your Account asking the Company to cease from sending such advertising content or sending your data to the third-parties for marketing
                                    purposes. The aforesaid mark removal and/or e-mail received by Storagetemasek will oblige us to cease sending advertisement content to you within 7 (seven) business days.
                                </p>
                                <h2>6. DISCLOSURE OF DATA</h2>
                                <ol>
                                    <li>We may share your data with the parties for the purposes set out above.</li>
                                    <li>We require all Storagetemasek Group companies and any third parties processing data on our behalf to respect your data and to treat it in accordance with the provisions of the General Data Protection Regulation and applicable
                                        local legislation as amended from time to time. We take all reasonable steps so that our third-party service providers do not use your personal data for their own purposes and only permit them to process your data
                                        for specific purposes and in accordance with our instructions.</li>
                                    <li>
                                        <strong>Storagetemasek group companies</strong>
                                        . In general, your data is used by the processors of the Storagetemasek group.

                                    </li>
                                    <li>In addition, a transfer of your data to another legal entity may occur as part of a transfer of our business or parts thereof in form of a reorganization, sale of assets, consolidation, merger or similar.</li>
                                    <li>With regard to the transfer of data to recipients outside the Storagetemasek group, we note that we strive to maintain discretion with respect to client related matters and assessments of which we acquire knowledge. We may
                                        disclose data that concerns you only if (i) we are legally required to do so; (ii) if required when you expressly order us to process a transaction or any other service and (iii) it is required for the provision
                                        of our services under our contractual relationship and/or (iv) protection of our legitimate interests and applicable legislation as amended from time to time.
                                    </li>
                                    <li>
                                        <strong>External Third Parties</strong>
                                        . Your data is shared with third party organisations/entities including but not limited to:

                                        <ol>
                                            <li>
                                                A. <strong>Service Providers</strong>
                                                . We may share your data with our trusted third party service providers, who, on our behalf, operate, maintain, and/or support our IT systems and IT infrastructure, our websites,
                                                manage our payment solutions, perform statistical analysis, marketing and advertising purposes, sending newsletters, provide customer support and perform other important services for us.
                                            </li>
                                            <li>
                                                B. <strong>Other Storagetemasek Affiliates</strong>
                                                . We may also disclose your data to other Storagetemasek Affiliate companies in order for them to provide us with the relevant services.
                                            </li>
                                            <li>
                                                C. <strong>State authorities</strong>
                                                . The Client's details that are provided and/or that will be provided by the Client during his/her activity on the site may be disclosed by the Company to official authorities.
                                                The Company will make such disclosure only if required to be disclosed by the Company by applicable law or court order and to the minimum required extent.
                                            </li>
                                            <li>
                                                D. <strong>Other disclosures</strong>
                                                . In addition to where you have consented to a disclosure of the data or where disclosure is necessary to achieve the purpose(s) for which, it was collected, data may also
                                                be disclosed in special situations, where we have reason to believe that doing so is necessary to identify, contact or bring legal action against anyone damaging, injuring, or interfering (intentionally
                                                or unintentionally) with our rights or property, users, or anyone else who could be harmed by such activities, or otherwise where necessary for the establishment, exercise or defence of legal claims.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Where reasonably possible, management shall ensure that third parties collecting, storing or processing personal information on behalf of the Company have:

                                        <ol>
                                            <li>a. Signed agreements to protect personal information consistent with this Privacy Policy and information security practices or implemented measures as prescribed by applicable laws;</li>
                                            <li>b. Signed non-disclosure agreements or confidentiality agreements which includes privacy clauses in the contract; and</li>
                                            <li>c. Established procedures to meet the terms of their agreement with third party to protect personal information.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>Remedial action shall be taken in response to misuse or unauthorized disclosure of personal information by a third party collecting, storing or processing personal information on behalf of Storagetemasek.</li>
                                    <li>If you want to obtain further information on any data transfers mentioned above please contact us using the registered email address you disclosed and registered with us through your Account through the points of contact
                                        listed in the Section OUR CONTACT DETAILS below.</li>
                                </ol>
                                <h2>7. DATA RETENTION</h2>
                                <p>We store your data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, tax, accounting or reporting requirements. We may retain your personal
                                    data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you. </p>
                                <p>To determine the appropriate retention period for your data, we consider the amount, nature and sensitivity of the data, the potential risk of harm from unauthorised use or disclosure of your data, the purposes for which
                                    we process your data and whether we can achieve those purposes through other means, and the applicable legal, tax, accounting and other requirements. </p>
                                <p>We shall keep your data (including call recordings) during our contractual relationship and for a minimum period of 5 (five) years from the date of termination of the Platform/Service used by the Client.</p>
                                <p>In general, all other data is stored for a period of 30 (thirty) business days after the date of termination of the provision of our services unless there is any other legal reason to keep it.</p>
                                <p>At the expiration of the data retention period the data is erased by irreversible destruction and we also inform all third parties, to whom the data was transferred, regarding such erasure and request implementation of
                                    similar actions on their part.</p>
                                <h2>8. YOUR RIGHTS AND HOW TO WITHDRAW CONSENTS AND UNSUBSCRIBE</h2>
                                <ol>
                                    <li>We ask you to provide us with true, accurate and updated information on your identity and not misrepresent yourself to be another individual or legal entity. Any changes in your identifying details shall be notified
                                        to the Company immediately and in any case no later than the 7th day from the date of such changes. If your data is incorrect or incomplete, please contact our support services at the contact details listed in the
                                        section OUR CONTACT DETAILS below in order to change your data.</li>
                                    <li>
                                        Under certain circumstances, you have rights in accordance with applicable legislation and our policies as amended from time to time. Some of the rights are rather complex and include exemptions, thus we strongly advise
                                        you to contact us (at the contact details listed in the section OUR CONTACT DETAILS below). You can find a summary of your rights below in this section.

                                        <ol>
                                            <li>
                                                <strong>A. The right to access</strong>
                                                . You have a right to obtain the confirmation as to whether or not your data are being processed by us. In addition, you have a right to obtain more detailed information
                                                about the data kept and the processing undertaken by us and under certain circumstances the right to receive a copy of this data.
                                            </li>
                                            <li>
                                                <strong>B. The right to rectification</strong>
                                                . You have the right to have inaccurate data about you rectified, and, taking into account the purpose of the processing, to have incomplete data completed.

                                            </li>
                                            <li>
                                                <strong>C. The right to erasure</strong>
                                                . This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. Please note however that we may not always
                                                be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request. In case if you want to obtain complete erasure of your
                                                data (to apply the “right to be forgotten”), please note that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at
                                                the time of your request.
                                            </li>
                                            <li>
                                                <strong>D. The right to restriction of processing</strong>
                                                . You have the right to request the restriction of processing of your personal data (a) if it is not accurate;(b) where processing may be unlawful but
                                                you do not want us to erase your data; (c) where you need us to hold the data even if we no longer require it; or (d) where you may have objected to our use of your data but we need to verify whether we
                                                have overriding legitimate grounds to use it.
                                            </li>
                                            <li>
                                                <strong>E. The right to data portability</strong>
                                                . To the extent the legal basis for the processing is your consent, and such processing is carried out by automated means, you have the right to receive your
                                                data in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others and/or in case it may be technically
                                                impossible to do so.
                                            </li>
                                            <li>
                                                <strong>F. The right to object</strong>
                                                . Subject to the legal basis on which the processing activity is based, you may object to processing of your personal data. Please note that in some cases, we may have
                                                compelling legitimate grounds to process your information which we need to comply with.
                                            </li>
                                            <li>
                                                <strong>G. The right to withdraw consent</strong>
                                                . To the extent that the legal basis for the processing is your consent, you have the right to withdraw from that consent at any time. This may apply to marketing
                                                purposes and/or with regards to the transfer of your data to third parties. In case you withdraw from a consent given, then we will cease to process your data, unless and to the extent the continued processing
                                                is permitted or required according to the applicable data regulation or other applicable laws and regulations. The withdrawal from your consent will in no event affect the lawfulness of processing based
                                                on consent before its withdrawal.
                                            </li>
                                            <li>
                                                <strong>H. The right to complaint to data protection supervisory
                                                    authority</strong>
                                                . We do our best to ensure that we protect your data, keep you informed about how we process your data and comply with the applicable data protection regulation. In case you are not
                                                satisfied with the processing and protection of your data or the information you have received from us, then we urge you to inform us in order for us to improve. Please also do not hesitate to contact us,
                                                if you want to make use of your rights.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>If you want to exercise any of your rights mentioned above and/or obtain more information regarding your rights and/or our policies and procedures please contact us through the points of contact listed in the Section
                                        OUR CONTACT DETAILS below. Please also provide us with relevant information to take care of your request, including your full name and email address so that we can identify you. We will respond to your request without
                                        undue delay.</li>
                                    <li>We may need to request specific information from you to help us confirm your identity and ensure your right to access your data (or to exercise any of your other rights). This is a security measure to ensure that personal
                                        data is not disclosed to any person who has no right to receive it. We may also contact you to ask you further information in relation to your request to speed up our response. </li>
                                    <li>We try to respond to all legitimate requests within one month. Occasionally it could take longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify
                                        you and keep you updated. </li>
                                    <li>We may charge you a reasonable administrative fee for any unreasonable or excessive requests we may receive, and for any additional copies of the data you may request.</li>
                                </ol>
                                <h2>9. DATA SECURITY</h2>
                                <p>We have put in place appropriate security measures to prevent your data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your data to those employees,
                                    agents, contractors and other third parties who have a business need to know. They will only process your data on our instructions and they are subject to a duty of confidentiality.
                                </p>
                                <p>We have put in place procedures to deal with any suspected data breach and will notify you of a breach where we are legally required to do so.</p>
                                <p>Your help is always valuable in ensuring that your data is kept safe. Upon registration to the Website (or its mobile version), the Client will be asked to choose a username and password to be used by the Client on each
                                    future login and for the performance of transactions and use of the Company's Services. In order to protect the Client's privacy and operation with the Website sharing registration details (including without limitation,
                                    username and password) by the Client with other persons or business entities is strictly prohibited. The Company shall not be held responsible for any damage or loss caused to the Client due to improper use (including
                                    prohibited and unprotected use) or storage of such username and password, including any such use made by a third party, and whether or not known to or authorized by the Client.
                                </p>
                                <p>Any use of the Website with the Client's username and password is Client's sole responsibility. The Company shall not be held responsible for any such use, including for validation that Client is actually operating in his/her
                                    account.
                                </p>
                                <p>The Client is obliged to forthwith notify the Company's client service of any suspicion for unauthorized use of the Client’s account. You may contact us at any time through the points of contact listed in the Section OUR
                                    CONTACT DETAILS below.</p>
                                <p>
                                    <strong>Encryption of your data in transit</strong>
                                    . Encryption provides a high level of security and privacy for your data. When you enter your data in our platform we use strong encryption technologies (such as Transport
                                    Layer Security) to protect your data during transmission from your devices to our servers.
                                </p>
                                <p>For providing more trust and security we use digital EV (Extended Validation) Certificates issued by trusted Certificate Authorities. You can see the ‘Green Bar’ in the supported browser versions which confirms what all
                                    transmitted data is secure.</p>
                                <p>
                                    <strong>Protection of your data in our infrastructure</strong>
                                    . We make it a priority to develop services that are secure "by default". The "default" security of our services means that all new services and features are
                                    designed with strict security requirements in mind before we even begin development. This is the key to guaranteed protection and privacy of all data that our services handle and store, once the service or new feature
                                    is released.
                                </p>
                                <p>To secure your data, we use the pseudonymisation which allows most of our services to operate without using your actual data. Instead of that, our services use a system ID that can't be traced back to identify you. </p>
                                <p>The Company is always vigilant about the security of your data stored in our infrastructure. Because of that we locate all our equipment which is used for your data processing in secure data centres. Network access to this
                                    equipment is isolated from the Internet. We use network segmentation for isolation of services which need different levels of security from each other. In addition, we restrict logical access to your data for our employees
                                    on a "need to know" basis. So, only the personnel that really requires access to your data for the purpose of providing you with our best service, will have access to it.</p>
                                <p>
                                    <strong>Threats protection</strong>
                                    . Our Company is highly knowledgeable about modern threats to data security and privacy, and we are well prepared to combat them. All events that occur in our infrastructure are continuously
                                    monitored, analysed and responded, which allows us to ensure proper protection of your data, keeping it safe from threats, vulnerabilities, and the effects of malware.

                                </p>
                                <p>In the event of a failure that affects the accessibility of your data, we have data backup and recovery procedures in place that will help us restore your data in a short time. To guarantee quick recovery, we use high availability
                                    mode enabled for most critical databases which allows us to minimize downtime.</p>
                                <p>
                                    <strong>Employee awareness of data security</strong>
                                    . Our employees may handle your data in order to provide you with the first-class service. To guarantee the security and confidentiality of your data, we monitor all employees’
                                    actions with access to your data in our systems and grant access strictly on a "need to know" basis: only employees who need access will receive it. We hold regular training sessions to make sure that each employee
                                    understands the principles that the Company follows to achieve robust data security and privacy.
                                </p>
                                <p>
                                    <strong>If you choose not to give your personal information</strong>
                                    . In the context of our business relationship we may need to collect data by law, or under the terms of a contract we have with you. Without this data,
                                    we are, in principle, not in a position to close or execute a contract with you.
                                </p>
                                <p>If you choose not to give us this data, it may delay or prevent us from meeting our obligations. It may also mean that we cannot perform services needed to run your accounts or policies. </p>
                                <p>
                                    <strong>To what extent we carry automated decision-making and profiling</strong>
                                    . In establishing and carrying out a business relationship, we generally do not use automated decision-making. If we use this procedure in
                                    individual cases, we will inform you of this separately. In some cases, we may proceed with profiling in order to evaluate certain personal aspects. We shall inform you accordingly in case we perform any profiling.
                                    In general, any data collection that is optional would be made clear at the point of collection.

                                </p>
                                <h2>10. OUR CONTACT DETAILS</h2>
                                <ol>
                                    <li>Who is responsible for the data processing and who you can contact.</li>
                                    <li>The entity responsible for your data processing is Storagetemasek LLC and you can contact us using the details set out below:</li>
                                    <li>Hinds Building, Kingstown, St. Vincent and the Grenadines</li>
                                    <li>
                                        <strong>Data Protection Officer</strong>
                                    </li>
                                    <li>
                                        We have appointed a data protection officer (hereinafter <strong>DPO</strong>
                                        ) who is responsible for overseeing questions in relation to this Privacy Policy. If you have any questions about this privacy policy, including
                                        requests relating to the data, please contact the DPO using the details set out below:

                                    </li>
                                    <li>Hinds Building, Kingstown, St. Vincent and the Grenadines</li>
                                    <li>
                                        <a href="mailto:internationaldpo@storagetemasek.io">internationaldpo@storagetemasek.io</a>
                                    </li>
                                    <li>To enable us to process your request, please contact us using the registered email address you disclosed and registered with us through your Account. We may require that you provide us with proof of your identity, such
                                        as by providing us with a copy of a valid form of identification. This is to ensure that we appropriately protect the personal data we hold from unauthorised access requests and comply with our security obligations.</li>
                                    <li>If you have any questions, or want more details about how we use your data, you may contact us at the above contact details and we will be happy to provide you with further details.</li>
                                </ol>
                                <h2>11. LINKS TO OTHER WEBSITES</h2>
                                <p>We may provide links to third party websites in our Website. These linked websites are not under our control, and we therefore cannot accept responsibility or liability for the conduct of third parties linked to our websites,
                                    including without limitation to the collection or disclosure of your data. Before disclosing your data on any other website, we encourage you to examine the terms and conditions of using that website and its privacy
                                    policies. </p>
                                <h2>12. CHANGES TO THIS PRIVACY POLICY</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>This Privacy Policy was last updated 09 November 2020. We reserve the right, at our discretion, to add, modify or remove portions of this Privacy Policy in the future to ensure that the information herein provides
                                                relevant and adequate information about our collecting and processing of your data.
                                            </li>
                                            <li>This privacy policy may be supplemented by other information received from the Storagetemasek group and other terms and conditions applicable to the Website or which you have agreed to as part of your interaction
                                                with us.</li>
                                            <li>In case of updates, we will post the revised Privacy Policy on our website. Changes will take effect as soon as the revised version is made available on our website. Your comments and feedback are always welcome.
                                                You may contact us at any time through the points of contact listed in the Section OUR CONTACT DETAILS above.</li>
                                        </ol>
                                    </li>
                                </ol>
                                <h2>APPENDIX A</h2>
                                <ol>
                                    <li>
                                        <ol>
                                            <li>In relation to a company, that company, any subsidiary or subsidiary undertaking or any holding company or holding undertaking or any connected company from time to time of that company.</li>
                                            <li>
                                                An undertaking is a parent undertaking in relation to another undertaking, a subsidiary undertaking, if

                                                <ol>
                                                    <li>a. it holds a majority of the voting rights in the undertaking, or
                                                    </li>
                                                    <li>b. it is a member of the undertaking and has the right to appoint or remove a majority of its board of directors, or</li>
                                                    <li>c. it has the right to exercise a dominant influence over the undertaking—
                                                    </li>
                                                    <li>d. by virtue of provisions contained in the undertaking's articles, or</li>
                                                    <li>e. by virtue of a control contract, or</li>
                                                    <li>f. it is a member of the undertaking and controls alone, pursuant to an agreement with other shareholders or members, a majority of the voting rights in the undertaking.</li>
                                                </ol>
                                            </li>
                                            <li>
                                                For the purposes of the above an undertaking shall be treated as a member of another undertaking—

                                                <ol>
                                                    <li>a. if any of its subsidiary undertakings is a member of that undertaking, or</li>
                                                    <li>b. if any shares in that other undertaking are held by a person acting on behalf of the undertaking or any of its subsidiary undertakings.
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>A parent undertaking shall be treated as the parent undertaking of undertakings in relation to which any of its subsidiary undertakings are, or are to be treated as, parent undertakings; and references to its
                                                subsidiary undertakings shall be construed accordingly.</li>
                                            <li>
                                                A company is connected with another company if:

                                                <ol>
                                                    <li>a. the same person has direct or indirect control of both companies,
                                                    </li>
                                                    <li>b. a person (“A”) has control of one company and persons connected with A have control of the other company,</li>
                                                    <li>c. A has control of one company and A together with persons connected with A have control of the other company, or</li>
                                                    <li>d. a group of two or more persons has control of both companies and the groups either consist of the same persons or could be so regarded if (in one or more cases) a member of either group were replaced
                                                        by a person with whom the member is connected.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
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