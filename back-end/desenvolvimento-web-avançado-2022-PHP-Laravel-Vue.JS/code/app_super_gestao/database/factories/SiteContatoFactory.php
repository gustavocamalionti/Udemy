<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\SiteContato;
use Faker\Generator as Faker;

$factory->define(SiteContato::class, function (Faker $faker) {
    return [
        'nome' => $faker->name,
        'telefone' => $faker->tollFreePhoneNumber,
        'email' => $faker->unique()->email, //unique: o email não irá se repetir
        'motivo_contato' => $faker->numberBetween(1,3), //valor inteiro que pode variar de 1 a 3 inclusive
        'mensagem' => $faker->text(200)
    ];
});
