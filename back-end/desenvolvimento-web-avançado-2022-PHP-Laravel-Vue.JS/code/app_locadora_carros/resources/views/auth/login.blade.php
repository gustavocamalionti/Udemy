@extends('layouts.app')

@section('content')
    {{-- @csrf <!-- Recuperamos um input hidden com as informações já atribuida--> --}}
    {{-- {{  @csrf_token() }} <!---Recupera apenas o token--> --}}
    <login-component csrf_token="{{ @csrf_token() }}"></login-component>
@endsection
