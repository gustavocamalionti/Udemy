<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <!-- Inicio do card de busca -->
                <card-component titulo="Busca de marcas">
                    conteudo
                    <template v-slot:conteudo>
                        <div class="form row">
                            <div class="col mb-3">
                                <input-container-component id="inputId" titulo="ID" id-help="idHelp"
                                    texto-ajuda="Opcional. Informe o ID da marca">

                                    <input type="number" class="form-control" id="inputId" aria-describedby="idHelp"
                                        palceholder="ID">
                                </input-container-component>
                            </div>
                            <div class="col mb-3">
                                <input-container-component id="inputNome" titulo="Nome" id-help="nomeHelp"
                                    texto-ajuda="Opcional. Informe o nome da marca">

                                    <input type="text" class="form-control" id="inputNome" aria-describedby="nomeHelp"
                                        palceholder="Nome da marca">
                                </input-container-component>

                            </div>
                        </div>
                    </template>

                    <template v-slot:rodape>
                        <button type="submit" class="btn btn-primary btn-sm ">Pesquisar</button>
                    </template>
                    rodape
                </card-component>
                <!-- Fim do card de busca -->

                <!-- Inicio do card de listagem de marcas -->
                <card-component titulo="Relação de Marcas">
                    <template v-slot:conteudo>
                        <table-component></table-component>
                    </template>

                    <template v-slot:rodape>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#modalMarca">Adicionar</button>
                    </template>
                </card-component>



                <!-- Fim do card de listagem de marcas -->
            </div>
        </div>

        <!-- Modal -->
        <modal-component id="modalMarca" titulo="Adicionar Marca">
            <template v-slot:conteudo>
                <div class="form-group">
                    <input-container-component id="novoNome" titulo="Nome da marca" id-help="NovoNomeHelp"
                        texto-ajuda="Informe o nome da marca">

                        <input type="text" class="form-control" id="novoNome" aria-describedby="NovoNomeHelp"
                            palceholder="Informe o nome da marca" v-model="nomeMarca">
                    </input-container-component>
                    {{ nomeMarca }}
                </div>

                <div class="form-group">
                    <input-container-component id="novoImagem" titulo="Imagem" id-help="Selecione uma imagem no formato PNG"
                        texto-ajuda="Opcional. Informe o ID da marca">

                        <input type="file" class="form-control" id="novoImagem" aria-describedby="NovoImagemHelp"
                            palceholder="Selecione uma imagem" v-on:change="carregarImagem($event)">
                    </input-container-component>
                    {{ arquivoImagem }}
                </div>
            </template>

            <template v-slot:rodape>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary" v-on:click="salvar()">Salvar</button>
            </template>
        </modal-component>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            urbBase: 'http://localhost:8000/api/v1/marca',
            nomeMarca: '',
            arquivoImagem: []
        }
    },
    methods: {
        carregarImagem(e) {
            this.arquivoImagem = e.target.files;
        },

        salvar() {
            console.log(this.nomeMarca, this.arquivoImagem[0]);

            axios.post(this.urlBase, )
        }
    }
}

</script>
