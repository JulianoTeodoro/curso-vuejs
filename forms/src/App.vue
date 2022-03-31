<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar" @reset="resetar">

            <div class="form-group">
              <label>Nome:</label>
              <input type="text" class="form-control" v-model.lazy.trim="desenvolvedor.nome" placeholder="Seu nome">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input type="email" class="form-control" v-model.lazy.trim="desenvolvedor.email" placeholder="Seu email">
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input type="number" class="form-control" v-model.number.lazy="desenvolvedor.idade" placeholder="Sua idade">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" v-model="desenvolvedor.genero" value="Masculino">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" v-model="desenvolvedor.genero" value="Feminino">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email" v-model="desenvolvedor.ocupacao">
                <option v-for="(ocupacao, indice) in desenvolvedor.ocupacoes"
                :key="indice"
                :value="ocupacao">{{ocupacao}}</option>
              </select>
            </div>  
<!---:selected="ocupacao === 'Desenvolvedor Back'"----->
            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline" >
                <input type="checkbox" class="form-check-input" value="JavaScript" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline"  >
                <input type="checkbox" class="form-check-input" value="Vue JS" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline" >
                <input type="checkbox" class="form-check-input" value="Vuex" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vue Router" v-model="desenvolvedor.tecnologias">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea class="form-control" placeholder="Conte-nos um pouco sobre você..." v-model.lazy="desenvolvedor.descricao"></textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" v-model="desenvolvedor.notificacoes" true-value="Sim" false-value="Não">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary" type="reset">Resetar</button>
            <button class="btn btn-success" type="submit">Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome:</strong> {{desenvolvedor.nome}}</li>
              <li class="list-group-item"><strong>Email: </strong>{{desenvolvedor.email}} </li>
              <li class="list-group-item"><strong>Idade: </strong>{{desenvolvedor.idade}}</li>
              <li class="list-group-item"><strong>Gênero: </strong>{{desenvolvedor.genero}}</li>
              <li class="list-group-item"><strong>Ocupação: </strong>{{desenvolvedor.ocupacao}}</li>
              <li class="list-group-item"><strong>Tecnologias:</strong> {{desenvolvedor.tecnologias}} </li>
              <li class="list-group-item"><strong>Biografia:</strong> {{desenvolvedor.descricao}} </li>
              <li class="list-group-item"><strong>Receber notificações?</strong> {{desenvolvedor.notificacoes}} </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ {'nome': desenvolvedor.nome, 
                             'email': desenvolvedor.email,
                             'idade': desenvolvedor.idade,
                             'genero': desenvolvedor.genero,
                             'ocupacao': desenvolvedor.ocupacao,
                             'tecnologias' : desenvolvedor.tecnologias,
                             'notificacoes': desenvolvedor.notificacoes,
                             'resumo': desenvolvedor.descricao } }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      desenvolvedor: {},
      ValoresPadroes: {
        nome: '',
        email: '',
        idade: '',
        genero: '',
        ocupacoes: [
          'Desenvolvedor Front',
          'Desenvolvedor Back',
          'Desenvolvedor FullStack',
          'Desenvolvedor Mobile'
        ],
        ocupacao: '',
        notificacoes: "Não",
        tecnologias: [],
        descricao: ''
      }
    }
  },
  methods: {
    enviar(){
      const formularioEnviado = Object.assign({}, this.desenvolvedor);
      console.log('Formulario enviado! ', formularioEnviado)
    },
    resetar(){
      this.desenvolvedor = Object.assign({}, this.ValoresPadroes);
    }
  },
  created(){
    this.resetar();
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
</style>