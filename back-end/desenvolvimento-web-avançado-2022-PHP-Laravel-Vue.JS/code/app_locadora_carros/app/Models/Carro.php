<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    use HasFactory;

   protected $fillable = ['id', 'modelo_id', 'placa', 'disponivel', 'km'];

   public function modelo(){
    return $this->belongsTo('App\Models\Modelo');  //UM carro PERTENCE a UM modelo
   }
}
