<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;
use App\Repositories\MarcaRepository;
use Illuminate\Support\Facades\Storage;
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
    public function index(Request $request)
    {

        $marcaRepository = new MarcaRepository($this->marca);
        if($request->has('atributos_modelos')) {
            $atributos_modelos = 'modelos:id,' . $request->atributos_modelos;
            $marcaRepository->selectAtributosRegistrosRelacionados($atributos_modelos);
        } else {
            $marcaRepository->selectAtributosRegistrosRelacionados('modelos');
        };

        if($request->has('filtro')){
           $marcaRepository->filtro($request->filtro);
        }

        if ($request->has('atributos')) {
            $marcaRepository->selectAtributos($request->atributos);
        } 
        
        return response()->json([
            'msg' => 'Recursos encontrados.',
            'data' => $marcaRepository->getResultado()
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
            'data' => $marca
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
       $marca = $this->marca->with('modelos')->find($id);
       
       if ($marca === null) {
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ], 404);
        }
       return response()->json([
            'msg' =>'Recurso encontrado.',
            'data' => $marca
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
            
        //preencher o objeto $marca com os dados do request
        $marca->fill($request->all());
        $marca->imagem = $imagem_urn;
        $marca->save(); //Se existir id nos atributos, o eloquent tem a inteligência de atualizar(UPDATE) o registro, caso contrário, inserção(INSERT).
        

        // $marca->update([
        //     'nome' => $request->nome,
        //     'imagem' => $imagem_urn,
        // ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'data' => $marca
            ], 200);
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
