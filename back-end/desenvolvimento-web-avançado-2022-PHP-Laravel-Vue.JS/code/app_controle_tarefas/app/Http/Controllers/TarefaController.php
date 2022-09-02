<?php

namespace App\Http\Controllers;

use Mail;
use App\Mail\NovaTarefaMail;
use App\Models\Tarefa;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Auth;
use App\Exports\TarefasExport;
use Excel;
use PDF;



class TarefaController extends Controller
{
    public function __construct() {
       $this->middleware('auth');
       $this->middleware('verified');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //if(Auth::check()) {
            $user_id = auth()->user()->id;
            $tarefas = Tarefa::where('user_id', $user_id)->paginate(10);
            return view('tarefa.index', ['tarefas' => $tarefas]);
       // } else {
       //     return 'Você não está logado no sistema.';
       // };
        /*
        if(auth()->check()) {
            $id = auth()->user()->id;
            $name = auth()->user()->name;
            $email = auth()->user()->email;

            return "ID: $id | Nome: $name | Email: $email";
        } else {
            return 'Você não está logado no sistema.';
        };
        */
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('tarefa.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $regras = [
            'tarefa' => 'required|min:3|max:150',
            'data_limite_conclusao' => 'required'
            ];
            
            $feedback = [
                'required' => 'O campo ":attribute" deve possuir um valor válido',
                'tarefa.min' => "O valor mínimo para esse campo precisa ser de 3 caracteres",
                'tarefa.max' => "O valor máximo para esse campo precisa ser de 150 caracteres"
            ];
    
        $request->validate($regras,$feedback);

        $dados = $request->all('tarefa', 'data_limite_conclusao');
        $dados['user_id'] = auth()->user()->id;
        
        $tarefa = Tarefa::create($dados);
        $destinatario = auth()->user()->email; //e-mail do usuário logado (autenticado)
        Mail::to($destinatario)->send(new NovaTarefaMail($tarefa));

        return redirect()->route('tarefa.show', ['tarefa' => $tarefa->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tarefa $tarefa 
     * @return \Illuminate\Http\Response
     */
    public function show(Tarefa $tarefa)
    {
        return view('tarefa.show', ['tarefa' => $tarefa]);
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tarefa $tarefa 
     * @return \Illuminate\Http\Response
     */
    public function edit(Tarefa $tarefa)
    {

        $user_id = auth()->user()->id;
        if($tarefa->user_id == $user_id) {
            return view('tarefa.edit', ['tarefa' => $tarefa]);
        }

        return view('acesso-negado');
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tarefa $tarefa 
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tarefa $tarefa)
    {
        /*
       print_r($request->all());
       echo '<hr>';
       print_r($tarefa->getAttributes());
       */

        $regras = [
        'tarefa' => 'required|min:3|max:150',
        'data_limite_conclusao' => 'required'
        ];
        
        $feedback = [
            'required' => 'O campo ":attribute" deve possuir um valor válido',
            'tarefa.min' => "O valor mínimo para esse campo precisa ser de 3 caracteres",
            'tarefa.max' => "O valor máximo para esse campo precisa ser de 150 caracteres"
        ];

        $request->validate($regras,$feedback);


        $user_id = auth()->user()->id;
        if(!$tarefa->user_id == $user_id) {
            return view('acesso-negado');
        }

        $tarefa->update($request->all());
        return redirect()->route('tarefa.show', ['tarefa' => $tarefa->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tarefa $tarefa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tarefa $tarefa)
    {
       
        if(!$tarefa->user_id == auth()->user()->id) {
            return view('acesso-negado');
        }

        $tarefa->delete();
        return redirect()->route('tarefa.index');


    }

    public function exportacao($extensao) {
        if(in_array($extensao, ['csv','xlsx','pdf'])) {
            return Excel::download(new TarefasExport, 'lista_de_tarefas.' . $extensao);
        }
        return redirect()->route('tarefa.index');
    }

    public function exportar() {
        //echo 'Chegamos até aqui!';

        $tarefas = auth()->user()->tarefas()->get();
        $pdf = PDF::loadView('tarefa.pdf', ['tarefas' => $tarefas]);

        $pdf->setPaper('A4','landscape');
        //Tipo de papel: a4, letter
        //orientacao: landscape (paisagem), portrait (retrato)

        //return $pdf->download('lista_de_tarefas.pdf');
        return $pdf->stream('lista_de_tarefas.pdf');

    }
}
