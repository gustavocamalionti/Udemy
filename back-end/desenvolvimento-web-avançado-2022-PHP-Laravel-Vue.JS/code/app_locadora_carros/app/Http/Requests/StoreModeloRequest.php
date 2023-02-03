<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreModeloRequest extends FormRequest
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
            'marcas_id' => 'exists:marcas,id',
            'nome' => 'required|min:3|unique:marcas',
            'imagem' => 'required|file|mimes:png',
            'numero_portas' => 'required|integer|digits_between:1,5', //(1,2,3,4,5)
            'lugares' => 'required|integer|digits_between:1,20',
            'air_bag' => 'required|boolean',
            'abs' => 'required|boolean' //true, false, 0, 1, "1", "0"
        ];
    }

    public function messages()
    {
        return [
            'required' => ':attribute é obrigatório.',
            'mimes' => ':attribute só aceita arquivos do tipo: :values',
            'unique' => ':attribute é Único.',
            'min' => ':attribute precisa ter no mínimo :min caracteres.',
            'boolean' => ':attribute precisa ser booleano.',
            // 'digits_between' => ':attribute é entre '
        ];
    }
}
