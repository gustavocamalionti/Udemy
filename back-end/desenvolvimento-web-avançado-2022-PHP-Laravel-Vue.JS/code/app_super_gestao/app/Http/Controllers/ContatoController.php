<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SiteContato;
use App\MotivoContato;

class ContatoController extends Controller
{
    public function contato(Request $request) {
        //var_dump($_POST);
        //dd($request);

        // echo '<pre>';
        //     print_r($request->all());

        // echo '</pre>';

        // echo $request->input('nome');
        // echo '<br>';
        
        // echo $request->input('mensagem');
        // echo '<br>';

        //$contato = new SiteContato();
        //$contato-> nome = $request->input('nome');
        //$contato-> telefone  = $request->input('telefone');
        //$contato-> email  = $request->input('email');
        //$contato-> motivo_contato  = $request->input('motivo_contato');
        //$contato-> mensagem  = $request->input('mensagem');

        //$contato = new SiteContato();
        //$contato->fill($request->all());

        //print_r($contato->getAttributes());
        //$contato->save();
        $motivo_contatos = MotivoContato::all();

        return view('site.contato', ['titulo' => 'Contato (teste)', 'motivo_contatos' => $motivo_contatos]);
    }

    public function salvar(Request $request) {
        //Realizar a validação dos dados do formulário recebidos no request
        $regras = [
            'nome' => 'required|min:3|max:40|unique:site_contatos', //Nomes com no mínimo 3 caracteres e no máximo 40
            'telefone' => 'required',
            'email' => 'email',
            'motivo_contatos_id' => 'required',
            'mensagem' => 'required|max:2000'
        ];

        $feedback = [
            'nome.required' => 'O campo nome precisa ser preenchido.',
            'nome.min' => 'O campo nome precisa ter no mínimo 3 caracteres.',
            'nome.max' => 'O campo nome deve ter no máximo 40 caracteres.',
            'nome.unique' => 'O nome informado já está em uso.',

            'telefone.required' => 'O campo telefone precisa ser preenchido.',
            
            'email.email' => 'O email informado não é válido.',

            'mensagem.max' => 'A mensagem deve ter no máximo 2000 caracteres',

            'required' => 'O campo :attribute deve ser preenchido.'
        ];

        $request->validate($regras, $feedback);
    
        SiteContato::create($request->all());
        return redirect()->route('site.index');
    }
};
