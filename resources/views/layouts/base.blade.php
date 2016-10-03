<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('meta.title', 'Wum Project - The warmest site on the Internet')</title>
    <meta name="description" content="@yield('meta.description', 'Wum Project - The warmest site on the Internet')">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300italic,300,400italic,700,700italic'
          rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic'
          rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="/app.css">
</head>
<body>
@yield('content')
@yield('scripts.footer')
</body>
</html>