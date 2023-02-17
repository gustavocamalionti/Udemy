<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\JWT;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {

        $credencials = $request->all(['email', 'password']);

        //Autenticação do Usuário (email e senha)
        $token = auth('api')->attempt($credencials); //Tentativa de autenticação

        if ($token == false) {
            return response()->json([
                'status' => 'A autenticação falhou! Por favor, verifique suas credenciais.'
            ], 403);
        }

        //401 - Unauthorized -> não autorizado (Autenticado, porém não possui permissão de acesso)
        //403 - forbidden -> Proibido (login inválido)


        return response()->json([
            'status' => 'A autenticação foi realizada com sucesso',
            'time_limit_(s)' => (env('JWT_TTL'))*60,
            'token' => $token
        ], 200);
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json([
            'status' => 'Logout foi realizado com sucesso!',
        ], 200);
    }

    public function refresh()
    {
        $refresh_token =  auth('api')->refresh();
        return response()->json([
            'status' => 'token de acesso atualizado!',
            'time_limit_(s)' => (env('JWT_TTL'))*60,
            'data' => $refresh_token
        ], 200);
        //cliente encaminhe um jwt válido
    }

    public function me()
    {
        return response()->json([auth()->user()], 200);
    }
}
