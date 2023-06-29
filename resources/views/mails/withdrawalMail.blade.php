<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap cdn file-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Withdrawal Request</title>
</head>

<body>
    <section style="padding-top:10px;">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 offset-1">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Withdrawal Request details</h1>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Name: {{ Str::title($details['name']) }}</p>
                            <p class="card-text">Email {{ $details['email'] }}</p>
                            <p class="card-text">Phone: {{ $details['phone'] }}</p>
                            <p class="card-text">Amount: ${{ $details['amount'] }}</p>
                            <p class="card-text">Selected Crypto: {{ Str::upper($details['crypto']) }}</p>
                            <p class="card-text">Withdrawal from: {{ Str::ucfirst($details['wallet']) }}</p>
                            <p class="card-text">Wallet Address: {{ $details['wallet_address'] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section>
</body>
<!-- Bootstrap 5 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</html>