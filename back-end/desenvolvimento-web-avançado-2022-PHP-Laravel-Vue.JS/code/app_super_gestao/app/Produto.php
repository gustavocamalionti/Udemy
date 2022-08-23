<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $fillable = ['nome', 'descricao', 'peso', 'unidade_id'];

    public function produtoDetalhe() {
        return $this->hasOne('App\ProdutoDetalhe');

        //Produto tem1 produtoDetalhe

        //O Eloquent vai procurar 1 registro relacionado em produto_detalhes com base na (fk) -> produto_id
        //produtos (pk) -> id
    }
}
