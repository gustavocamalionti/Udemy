<h3>Fornecedor</h3>

@php
    /* 
    if(empty(variavel)) {} //retorna true se a variável estiver vazia
    
    Situações que o empty retornará True
    - ''
    - 0
    - 0.0
    - '0'
    - null
    - false
    - array()
    - $var 
    */
@endphp


@isset($fornecedores)

    @forelse($fornecedores as $indice => $fornecedor)

       {{-- @dd($loop) --}}
        Iteração atual: {{ $loop -> iteration }}
        <br>
        Fornecedor: {{ $fornecedor['nome'] }}
        @php $fornecedor['nome'] = 'Outro nome para o fornecedor' @endphp
        <br>
        Status: {{ $fornecedor['status'] }}
        <br>
        CNPJ: {{ $fornecedor['cnpj'] ?? '' }}
        <br>
        Telefone: ({{$fornecedor['ddd'] ?? ''}}) ({{ $fornecedor['telefone'] ?? '' }})
        <br>

        @if($loop->first)
            Primeira Iteração do Loop
        @endif

        @if($loop->last)
            Última Iteração do Loop
            <br>
            Total de Registros: {{ $loop -> count}}
        @endif

       
        <hr>
    @empty
        Não existem fornecedores cadastrados!!
    @endforelse
@endisset

