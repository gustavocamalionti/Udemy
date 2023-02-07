<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreModeloRequest;
use App\Http\Requests\UpdateModeloRequest;
use App\Models\Modelo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ModeloController extends Controller
{
    protected $modelo;

    public function __construct(Modelo $modelo) {
        $this->modelo = $modelo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $modelos = $this->modelo->with('marca')->get();
        //all() -> criando um obj de consulta + get() = collection
        //get() -> Posssibilidade de modificar a consulta -> collection 
        return response()->json([
            'status' => 'Recursos Encontrados.',
            'data' => $modelos
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreModeloRequest $request)
    {
  
        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/modelos', 'public');


        $modelo = $this->modelo->create([
            'marca_id' => $request->marca_id,
            'nome' => $request->nome,
            'imagem' => $imagem_urn,
            'numero_portas' => $request->numero_portas,
            'lugares' => $request->lugares,
            'air_bag' => $request->air_bag,
            'abs' => $request->abs,
            
        ]);

        return response()->json([
            'status' => 'Criado com sucesso',
            'data' => $modelo
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $modelo = $this->modelo->with('marca')->find($id);

        if ($modelo == null) { 
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ]
            , 404);
        }

        return response()->json([
            'status' => 'Recurso encontrado.',
            'data' => $modelo
        ]
        , 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateModeloRequest $request, $id)
    {
       
        $modelo = $this->modelo->find($id);

        if ($modelo == null) {
            return response()->json([
                'msg' => 'Impossível realizar a atualização. O recurso solicitado não existe'
            ],404);
        }

        $imagem_urn = $modelo->imagem;
        $imagem = $request->file('imagem');

        //REMOVE O ARQUIVO ANTIGO E CRIA UM NOVO ARQUIVO.
        if($imagem !== null) {
            Storage::disk('public')->delete($modelo->imagem);
            $imagem_urn = $imagem->store('imagens/modelos', 'public');
        };

        $modelo->fill($request->all());
        $modelo->imagem = $imagem_urn;
        $modelo->save();

        // $modelo->update([
        //         'marca_id' => $request->marca_id,
        //         'nome' => $request->nome,
        //         'imagem' => $imagem_urn,
        //         'numero_portas' => $request->numero_portas,
        //         'lugares' => $request->lugares,
        //         'air_bag' => $request->air_bag,
        //         'abs' => $request->abs,
        //     ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'data' => $modelo
            ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $modelo = $this->modelo->find($id);
        
        if ($modelo == null) {
            return response()->json([
                'msg' => 'Impossível realizar a Exclusão. O recurso solicitado não existe'
            ], 404);
        }

        //REMOVE O ARQUIVO ANTIGO E REMOVE O REGISTRO.
        Storage::disk('public')->delete($modelo->imagem);
        $modelo->delete();

        return response()->json([
            'msg'=> 'O modelo foi removido com sucesso!'
        ],200);
    }
}
