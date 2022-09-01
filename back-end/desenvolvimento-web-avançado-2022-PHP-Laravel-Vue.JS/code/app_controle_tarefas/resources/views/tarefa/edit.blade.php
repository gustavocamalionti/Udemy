@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Atualizar Tarefa</div>

                <div class="card-body">
                    <form method="post" action="{{ route('tarefa.update', ['tarefa' => $tarefa->id]) }}">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="tarefa" class="form-label">Tarefa</label>
                            <input type="text" class="form-control" id="tarefa" name="tarefa" value="{{$tarefa->tarefa}}">
                            @if($errors->has('tarefa'))
                                {{ $errors->first('tarefa') }}
                            @endif
              
                        </div>
                        <div class="mb-3">
                            <label for="data_limite_conclusao" class="form-label">Data Limite de Conclusão</label>
                            <input type="date" class="form-control" id="data_limite_conclusao" name="data_limite_conclusao" value="{{$tarefa->data_limite_conclusao}}">
                            @if($errors->has('data_limite_conclusao'))
                                {{ $errors->first('data_limite_conclusao') }}
                            @endif
                        </div> 
                        <button type="submit" class="btn btn-primary">Atualizar</button>
                      </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection