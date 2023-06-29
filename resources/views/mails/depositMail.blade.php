<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deposit Form</title>
</head>
<body>
    <h1>Deposit Message</h1>
    <p>Name: {{ $details['name'] }}</p>
    <p>Email {{ $details['email'] }}</p>
    <p>Phone: {{ $details['phone'] }}</p>
    <p>Amount: {{ $details['amount'] }}</p>
    <p>Payment type: {{ $details['pay_type'] }}</p>
</body>
</html>