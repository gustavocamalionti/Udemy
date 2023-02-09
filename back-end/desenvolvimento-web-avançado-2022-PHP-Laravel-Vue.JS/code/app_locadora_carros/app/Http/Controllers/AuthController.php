<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function login(Request $request) {
       
        $credencials = $request->all(['email', 'password']);

        //Autenticação do Usuário (email e senha)
        $token = auth('api')->attempt($credencials); //Tentativa de autenticação
        
        if($token == false) {
            return response()->json([
                'status' => 'A autenticação falhou! Por favor, verifique suas credenciais.'
            ],403); 
        }
        
        //401 - Unauthorized -> não autorizado (Autenticado, porém não possui permissão de acesso)
        //403 - forbidden -> Proibido (login inválido)
        

        return response()->json([
            'status' => 'A autenticação foi realizada com sucesso',
            'token' => $token
        ],200);
    }

    public function logout() {
        return 'logout';
    }

    public function refresh() {
        return 'refresh';
    }

    public function me() {
        return response()->json([auth()->user()],200);
        return 'me';
    }
}
