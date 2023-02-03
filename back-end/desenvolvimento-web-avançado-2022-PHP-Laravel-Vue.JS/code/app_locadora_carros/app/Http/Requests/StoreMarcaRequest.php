<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMarcaRequest extends FormRequest
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
            'nome' => 'required|min:3|unique:marcas',
            'imagem' => 'required|file|mimes:png'
        ];
    }

    public function messages()
    {
        return [
            'required' => ':attribute é obrigatório.',
            'mimes' => ':attribute só aceita arquivos do tipo: :values',
            'unique' => ':attribute é Único.',
            'min' => ':attribute precisa ter no mínimo :min caracteres.',
            
            
        ];
    }
}
