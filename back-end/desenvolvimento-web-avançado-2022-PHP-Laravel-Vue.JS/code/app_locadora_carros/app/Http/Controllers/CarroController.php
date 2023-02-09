<?php

namespace App\Http\Controllers;

use App\Models\Carro;
use Illuminate\Http\Request;
use App\Repositories\CarroRepository;
use App\Http\Requests\StoreCarroRequest;
use App\Http\Requests\UpdateCarroRequest;

class CarroController extends Controller
{   
    protected $carro;

    public function __construct(Carro $carro) {
        $this->carro = $carro;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $carroRepository = new CarroRepository($this->carro);
        if($request->has('atributos_modelo')) {
            $atributos_modelo = 'modelo:id,' . $request->atributos_modelo;
            $carroRepository->selectAtributosRegistrosRelacionados($atributos_modelo);
        } else {
            $carroRepository->selectAtributosRegistrosRelacionados('modelos');
        };

        if($request->has('filtro')){
           $carroRepository->filtro($request->filtro);
        }

        if ($request->has('atributos')) {
            $carroRepository->selectAtributos($request->atributos);
        } 
        
        return response()->json([
            'msg' => 'Recursos encontrados.',
            'data' => $carroRepository->getResultado()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCarroRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCarroRequest $request)
    {
       
        $carro = $this->carro->create([
            'modelo_id' => $request->modelo_id,
            'placa' => $request->placa,
            'disponivel' => $request->disponivel,
            'km' => $request->km
            
        ]);


        return response()->json([
            'msg' => 'Criado com sucesso.',
            'data' => $carro
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
       $carro = $this->carro->with('modelo')->find($id);
       
       if ($carro === null) {
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ], 404);
        }
       return response()->json([
            'msg' =>'Recurso encontrado.',
            'data' => $carro
       ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCarroRequest  $request
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCarroRequest $request, $id)
    {
        $carro = $this->carro->find($id);
        if($carro == null) {
            return response()->json([
                'msg' => 'Impossível realizar a atualização. O recurso solicitado não existe'
            ], 404);
        }   
            
        //preencher o objeto $marca com os dados do request
        $carro->fill($request->all());
        $carro->save(); //Se existir id nos atributos, o eloquent tem a inteligência de atualizar(UPDATE) o registro, caso contrário, inserção(INSERT).
        

        // $marca->update([
        //     'nome' => $request->nome,
        //     'imagem' => $imagem_urn,
        // ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'data' => $carro
            ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $carro = $this->carro->find($id);
        $carro->delete();
        if($carro == null) {
            return response()->json([
                'msg' => 'Impossível realizar a exclusão. O recurso solicitado não existe'
            ], 404);
        }
        
        return response()->json([
            'msg'=> 'O carro foi removido com sucesso!']
            , 200);
    }
}
