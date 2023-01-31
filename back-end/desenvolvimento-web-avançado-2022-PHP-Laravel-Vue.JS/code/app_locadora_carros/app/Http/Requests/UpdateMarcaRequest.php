<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMarcaRequest extends FormRequest
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
        return [
            //Buscando a variável protected $marca em MarcaController, ou seja, seu controlador pai.
            'nome' => 'required|unique:marcas,nome,'.$this->marca,
            'imagem' => 'required'
        ];
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
            'unique' => 'O atributo :attribute deve ser único.'
        ];
    }
}
