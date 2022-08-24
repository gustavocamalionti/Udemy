@extends('app/layouts.basico')

@section('titulo', 'pedido')

@section('conteudo')

    <div class="conteudo-pagina">

        <div class="titulo-pagina-2">
            <p>Listagem de Pedidos</p>
        </div>

        <div class="menu">
            <ul>    
                <li><a href="{{ route('pedido.create') }}">Novo</a></li>
                <li><a href="">Consulta</a></li>
            </ul>

        </div>

        <div class="informacao-pagina">
            <div style="width:90%; margin-left:auto; margin-right:auto;">
                <table border="1" width="100%">
                    <thead>
                        <th>ID Pedido</th>
                        <th>Cliente</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </thead>

                    <tbody>
                        @foreach($pedidos as $pedido)
                        <tr>
                            <td>{{ $pedido -> id }} </td>
                            <td>{{ $pedido -> cliente_id }}</td>
                            <td><a href="{{ route('pedido-produto.create', ['pedido' => $pedido->id]) }}">Adicionar Produtos</a></td>
                            <td><a href="{{ route('pedido.show', ['pedido' => $pedido->id]) }}">Visualizar</a></td>
                            <td>
                                <form id ="form_{{$pedido->id}}" action="{{ route('pedido.destroy', ['pedido' => $pedido->id]) }}" method="post">
                                    @method('DELETE')
                                    @csrf 
                                   
                                   <a href="#" onclick="document.getElementById('form_{{$pedido->id}}').submit()">Excluir</a>
                                </form>
                            </td>
                            <td><a href="{{ route('pedido.edit', ['pedido' => $pedido->id]) }}">Editar</a></td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                
                {{ $pedidos -> appends($request) -> links() }}
                <br>
                
                <!--
                {{ $pedidos -> count() }} - Total de registros por página
                {{ $pedidos -> total() }} - Total de registros da consulta
                {{ $pedidos -> firstItem() }} - Número do primeiro registro da página (não há relação com o id)
                {{ $pedidos -> lastItem() }} - Número do último registro da página (não há relação com o id)
                -->


                <br>
                Exibindo {{ $pedidos -> count() }} pedidos de {{ $pedidos -> total() }} (de  {{ $pedidos -> firstItem() }} a {{ $pedidos -> lastItem() }})
               
            </div>
        </div>

    </div>

@endsection