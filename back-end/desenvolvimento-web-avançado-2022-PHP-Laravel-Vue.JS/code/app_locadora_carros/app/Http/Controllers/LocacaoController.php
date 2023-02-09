<?php

namespace App\Http\Controllers;

use App\Models\Locacao;
use Illuminate\Http\Request;
use App\Repositories\LocacaoRepository;
use App\Http\Requests\StoreLocacaoRequest;
use App\Http\Requests\UpdateLocacaoRequest;

class LocacaoController extends Controller
{
    protected $locacao;

    public function __construct(Locacao $locacao) {
        $this->locacao = $locacao;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $LocacaoRepository = new LocacaoRepository($this->locacao);

        if($request->has('filtro')){
           $LocacaoRepository->filtro($request->filtro);
        }

        if ($request->has('atributos')) {
            $LocacaoRepository->selectAtributos($request->atributos);
        } 
        
        return response()->json([
            'msg' => 'Recursos encontrados.',
            'data' => $LocacaoRepository->getResultado()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLocacaoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLocacaoRequest $request)
    {
        $locacao = $this->locacao->create([
            'cliente_id' => $request->cliente_id,
            'carro_id' => $request->carro_id,
            'data_inicio_periodo' => $request->data_inicio_periodo,
            'data_final_previsto_periodo' => $request->data_final_previsto_periodo,
            'data_final_realizado_periodo' => $request->data_final_realizado_periodo,
            'valor_diaria' => $request->valor_diaria,
            'km_inicial' => $request->km_inicial,
            'km_final' => $request->km_final,
            
        ]);


        return response()->json([
            'msg' => 'Criado com sucesso.',
            'data' => $locacao
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Locacao  $locacao
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $locacao = $this->locacao->find($id);
       
       if ($locacao === null) {
            return response()->json([
                'msg' => 'Recurso pesquisado não existe'
            ], 404);
        }
       return response()->json([
            'msg' =>'Recurso encontrado.',
            'data' => $locacao
       ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLocacaoRequest  $request
     * @param  \App\Models\Locacao  $locacao
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLocacaoRequest $request, $id)
    {
        
        $locacao = $this->locacao->find($id);
        if($locacao == null) {
            return response()->json([
                'msg' => 'Impossível realizar a atualização. O recurso solicitado não existe'
            ], 404);
        }   
            
        //preencher o objeto $marca com os dados do request
        $locacao->fill($request->all());
        $locacao->save(); //Se existir id nos atributos, o eloquent tem a inteligência de atualizar(UPDATE) o registro, caso contrário, inserção(INSERT).
        

        // $marca->update([
        //     'nome' => $request->nome,
        //     'imagem' => $imagem_urn,
        // ]);
       
        return response()->json([
            'msg' => 'Recurso atualizado com sucesso.',
            'data' => $locacao
            ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Locacao  $locacao
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $locacao = $this->locacao->find($id);
        $locacao->delete();
        if($locacao == null) {
            return response()->json([
                'msg' => 'Impossível realizar a exclusão. O recurso solicitado não existe'
            ], 404);
        }
        
        return response()->json([
            'msg'=> 'A locação foi removida com sucesso!']
            , 200);
    }
}
