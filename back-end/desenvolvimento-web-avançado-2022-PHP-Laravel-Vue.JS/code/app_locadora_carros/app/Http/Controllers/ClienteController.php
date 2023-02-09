<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Repositories\ClienteRepository;
use App\Http\Requests\StoreClienteRequest;
use App\Http\Requests\UpdateClienteRequest;

class ClienteController extends Controller
{
    protected $cliente;
    public function __construct(Cliente $cliente){
        $this->cliente = $cliente;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $clienteRepository = new ClienteRepository($this->cliente);
        
        if($request->has('filtro')){
           $clienteRepository->filtro($request->filtro);
        }

        if ($request->has('atributos')) {
            $clienteRepository->selectAtributos($request->atributos);
        } 
        
        return response()->json([
            'msg' => 'Recursos encontrados.',
            'data' => $clienteRepository->getResultado()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreClienteRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreClienteRequest $request)
    {
        $cliente = $this->cliente->create([
            'nome' => $request->nome,
        ]);


        return response()->json([
            'msg' => 'Criado com sucesso.',
            'data' => $cliente
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cliente = $this->cliente->find($id);
       
       if ($cliente === null) {
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ], 404);
        }
       return response()->json([
            'msg' =>'Recurso encontrado.',
            'data' => $cliente
       ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateClienteRequest  $request
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateClienteRequest $request, $id)
    {
        $cliente = $this->cliente->find($id);
        if($cliente == null) {
            return response()->json([
                'msg' => 'Impossível realizar a atualização. O recurso solicitado não existe'
            ], 404);
        }   
            
        //preencher o objeto $marca com os dados do request
        $cliente->fill($request->all());
        $cliente->save(); //Se existir id nos atributos, o eloquent tem a inteligência de atualizar(UPDATE) o registro, caso contrário, inserção(INSERT).
        

        // $marca->update([
        //     'nome' => $request->nome,
        //     'imagem' => $imagem_urn,
        // ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'data' => $cliente
            ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cliente = $this->cliente->find($id);
        $cliente->delete();
        if($cliente == null) {
            return response()->json([
                'msg' => 'Impossível realizar a exclusão. O recurso solicitado não existe'
            ], 404);
        }
        
        return response()->json([
            'msg'=> 'O cliente foi removido com sucesso!']
            , 200);
    }
}
