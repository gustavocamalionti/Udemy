<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Marca;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMarcaRequest;
use App\Http\Requests\UpdateMarcaRequest;

class MarcaController extends Controller
{
    protected $marca;

    public function __construct(Marca $marca){
        $this->marca = $marca;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $marcas = $this->marca->all();
        return response()->json([
            'msg' => 'Recursos encontrados.',
            'retorno' => $marcas
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMarcaRequest $request)
    {
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens', 'public');
        
        // $marca->nome = $request->nome;
        // $marca->imagem = $imagem_urn;
        // $marca->save();

        $marca = $this->marca->create([
            'nome' => $request->nome,
            'imagem' => $imagem_urn
        ]);


        return response()->json([
            'msg' => 'Criado com sucesso.',
            'retorno' => $marca
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer 
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
       $marca = $this->marca->find($id);
       
       if ($marca === null) {
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ], 404);
        }
       return response()->json([
            'msg' =>'Recurso encontrado.',
            'retorno' => $marca
       ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMarcaRequest $request, $id)
    {
        $marca = $this->marca->find($id);
        if($marca == null) {
            return response()->json([
                'msg' => 'Impossível realizar a atualização. O recurso solicitado não existe'
            ], 404);
        }   

        $imagem_urn = $marca->imagem;
        $imagem = $request->file('imagem');

        //REMOVE O ARQUIVO ANTIGO E CRIA UM NOVO ARQUIVO.
        if($imagem !== null) {
            Storage::disk('public')->delete($marca->imagem);
            $imagem_urn = $imagem->store('imagens', 'public');

        } 
            
        $marca->update([
            'nome' => $request->nome,
            'imagem' => $imagem_urn,
        ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'retorno' => $marca]
        , 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer  
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $marca = $this->marca->find($id);
        
        if($marca == null) {
            return response()->json([
                'msg' => 'Impossível realizar a exclusão. O recurso solicitado não existe'
            ], 404);
        }

        //REMOVE O ARQUIVO ANTIGO E REMOVE O REGISTRO.
        Storage::disk('public')->delete($marca->imagem);
        $marca->delete();
        
        return response()->json([
            'msg'=> 'A marca foi removida com sucesso!']
            , 200);
    }
}
