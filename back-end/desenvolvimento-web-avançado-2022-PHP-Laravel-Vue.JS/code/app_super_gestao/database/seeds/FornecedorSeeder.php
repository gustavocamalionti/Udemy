<?php

use Illuminate\Database\Seeder;
use App\Fornecedor; //trazendo o model para o contexto

class FornecedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //1°forma: instanciando o objeto
        $fornecedor = new Fornecedor();
        $fornecedor-> nome = 'Fornecedor 100';
        $fornecedor-> site = 'fornecedor100.com.br';
        $fornecedor-> uf = 'CE';
        $fornecedor-> email = 'contato@fornecedor100.com.br';
        $fornecedor->save();

        //Fornecedor extend model
        //2°forma: o método create (atenção para o atributo fillable da classe)
        Fornecedor::create([
            'nome' => 'Fornecedor 200',
            'site' => 'fornecedor200.com.br',
            'uf' => 'MG',
            'email' => 'contato@fornecedor200.com.br'
        ]);

        //3°forma: insert (ele não popula a coluna updated_at e created_at - não recomendado)
        DB::table('fornecedores')->insert([
            'nome' => 'Fornecedor 300',
            'site' => 'fornecedor300.com.br',
            'uf' => 'SP',
            'email' => 'contato@fornecedor300.com.br'
        ]);

    }
}
