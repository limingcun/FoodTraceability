<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @if(env('APP_DEBUG'))
            <link href="http://localhost:8080/build/css/index.css" rel="stylesheet">
        @else
            <link rel="stylesheet" href="{{ elixir('build/css/index.css') }}">
        @endif

        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>;
        </script>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>
        @if(env('APP_DEBUG'))
            <script src="http://localhost:8080/build/js/vendor-bundle.js"></script>
            <script src="http://localhost:8080/build/js/index.js"></script>
        @else
            <script src="{{ elixir('build/js/vendor-bundle.js') }}"></script>
            <script src="{{ elixir('build/js/index.js') }}"></script>
        @endif
    </body>
</html>
