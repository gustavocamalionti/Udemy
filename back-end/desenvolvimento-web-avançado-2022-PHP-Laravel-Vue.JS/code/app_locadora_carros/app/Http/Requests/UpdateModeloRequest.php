<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateModeloRequest extends FormRequest
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
                'marcas_id' => 'exists:marcas,id',
                'imagem' => 'file|mimes:png',
                'nome' => 'unique:marcas,nome,'.$this->marca,
                'numero_portas' => 'integer|digits_between:1,5', //(1,2,3,4,5)
                'lugares' => 'integer|digits_between:1,20',
                'air_bag' => 'boolean',
                'abs' => 'boolean' 
    
            ];
        } else {
            return [
                //Buscando a variável protected $marca em MarcaController, ou seja, seu controlador pai.
                'marcas_id' => 'exists:marcas,id',
                'nome' => 'required|unique:marcas,nome,'.$this->marca,
                'imagem' => 'required|file|mimes:png',
                'numero_portas' => 'required|integer|digits_between:1,5', //(1,2,3,4,5)
                'lugares' => 'required|integer|digits_between:1,20',
                'air_bag' => 'required|boolean',
                'abs' => 'required|boolean' 
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
            'unique' => 'O atributo :attribute deve ser único.'
        ];
    }
}
