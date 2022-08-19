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

        //$request - manipular
        //return $next($request);

        //dd($request);  //nos parametros de server, temos o REMOTE_ADDR
        $ip = $request->server->get('REMOTE_ADDR');
        $rota = $request->getRequestUri(); //é escrito dessa forma porque seria um "parametro" principal e direto.
        LogAcesso::create(['log' => "IP $ip requisitou a rota $rota"]);
        
        return $next($request);
        //return Response('Chegamos no middleware e finalizamos no próprio Middleware');
    }
}
