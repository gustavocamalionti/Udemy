<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCarroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {   
        //É necessário essa condição abaixo para diferenciar PATCH DE PUT, sendo que:
            //PATCH = PARTE DOS ATRIBUTOS
            //PUT = TODOS OS ATRIBUTOS
          
        if ($this->method() == 'PATCH') {
            return [
                'modelo_id' => 'exists:modelos,id'    
            ];
        } else {
            return [
                //Buscando a variável protected $marca em MarcaController, ou seja, seu controlador pai.
                'modelo_id' => 'exists:modelos,id',
                'placa' => 'required',
                'disponivel' => 'required',
                'km' => 'required'
            ];
        }
       
    }

    /**
     * Explicação sobre o unique:marcas,nome, $this->marca
     * 1) Tabela
     * 2) nome da coluna qu eserá pesquisada na tabela
     * 3) id do registro que será desconsiderado na pesquisa
     */

    public function messages() 
    {
        return [
            'required' => 'O atributo :attribute é obrigatório.',
        ];
    }
}
