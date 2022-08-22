<?php

namespace App\Http\Middleware;

use Closure;
use App\LogAcesso;
use Mockery\Generator\StringManipulationGenerator;

class LogAcessoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $ip = $request->server->get('REMOTE_ADDR');
        $rota = $request->getRequestUri(); //é escrito dessa forma porque seria um "parametro" principal e direto.
        LogAcesso::create(['log' => "IP $ip requisitou a rota $rota"]);
        

        $resposta = $next($request);

        $resposta -> setStatusCode(201, 'O status da resposta e o texto da resposta foram modificados!!!');
        //dd($resposta);
        return $resposta;
    }
}
