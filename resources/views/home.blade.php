@extends('layouts/base')

@section('content')
    <header>
        <div class="logo">
            <a href="/">
                <h1>WUM</h1>
                <small>Warm Ukrainian Manufacturer</small>
            </a>
        </div>
        @include('menu/main')
    </header>
@endsection

@section('scripts.footer')
    <script src="/index.js"></script>
@endsection
