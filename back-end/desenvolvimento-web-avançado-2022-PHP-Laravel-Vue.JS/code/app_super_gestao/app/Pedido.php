<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    public function Produtos() {
        return $this->belongsToMany('App\Item', 'pedido_produtos', 'pedido_id', 'produto_id');
        /*
        1 - modelo do relacionamento NxN em relação o modelo que estamos implementando
        2 - É a tabela auxiliar que armazena os registros de relacionamento
        3 - Representaon nome da fk da tabela mapeada pelo modelo na tabela de relacionamento
        4 - Representa o nome da fk da tabela mapeada pelo model utilizado no relacionamento 
        */
    }
}
