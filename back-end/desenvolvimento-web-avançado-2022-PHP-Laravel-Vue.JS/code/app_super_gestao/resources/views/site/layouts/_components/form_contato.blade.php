{{ $slot }}

<form action={{ route('site.contato') }} method="POST">
    @csrf
    <input name="nome" value="{{ old('nome') }}" type="text" placeholder="Nome" class="{{ $classe }}">
    <br>
    <input name="telefone" value="{{ old('telefone') }}" type="text" placeholder="Telefone" class="{{ $classe }}">
    <br>
    <input name="email" value="{{ old('email') }}" type="text" placeholder="E-mail" class="{{ $classe }}">
    
    <br>

    <select name="motivo_contato" class="{{ $classe }}">
        <option value="">Qual o motivo do contato?</option>

        @foreach($motivo_contatos as $key => $motivo_contatos)
            <option value="{{$key}}" {{ old('motivo_contato') == $key ? 'selected' : ''}}>{{$motivo_contatos}}</option>
        @endforeach
    </select>

    <br>

    <textarea name="mensagem" class="borda-preta">@if(old('mensagem') != ''){{ old('mensagem') }}@else Preencha aqui a sua mensagem @endif
    </textarea>
    <br>
    <button type="submit" class="borda-preta">ENVIAR</button>
</form>

<div style="position:absolute; top:0px; left:0px; width:100%; background:red;">
    <pre>
    {{ print_r($errors) }}
    </pre>
</div>