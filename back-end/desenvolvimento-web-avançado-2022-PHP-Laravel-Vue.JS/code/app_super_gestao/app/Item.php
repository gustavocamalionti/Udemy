<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'produtos';
    protected $fillable = ['nome', 'descricao', 'peso', 'unidade_id', 'fornecedor_id'];

    public function ItemDetalhe() {
        return $this->hasOne('App\ItemDetalhe', 'produto_id', 'id');
    }

    public function fornecedor() {
        return $this->belongsTo('App\Fornecedor','fornecedor_id', 'id');
    }
    
    public function Pedidos() {
        return $this->belongsToMany('App\Pedido', 'pedido_produtos', 'produto_id', 'pedido_id');

        /*
        3 - Representa o nome da FK da tabela mapeada pelo model na tabela de de relacionamento
        4 - Representa o nome da FK da tabela mapeada pelo model no relacionamento que estamos implementando
        */
    }
}
