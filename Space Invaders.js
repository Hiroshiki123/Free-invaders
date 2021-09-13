class jogo 
{
    jogando;
    derrota;
    pontuacao;
    pausado;

    constructor(jogando, derrota, pontuacao, pausado)
    {
        this.jogando = jogando;
        this.derrota = derrota;
        this.pontuacao = pontuacao;
        this.pausado = pausado;
    }

    reiniciar()
    {
        //reinicia o jogo
    }
    iniciarjogo()
    {
        //inicia o jogo
    }
    pausarjogo()
    {
        //pausa o jogo
    }
    mostrarDerrota()
    {
        //mostra a derrota quando as vidas do jogador acabam
    }
    alterarPontuacao()
    {
        // altera a pontuação quando o jogador acerta um inimigo
    }
}
class painel
{
    colisao;
    vidas;
    grid;
    inimigo;
    Jogador;
    quantidadeDeInimigos;

    constructor(colisao, vidas, grid, inimigo, Jogador, quantidadeDeInimigos)
    {
        this.colisao = colisao;
        this.vidas = vidas;
        this.grid = grid;
        this.inimigo = inimigo;
        this.Jogador = Jogador;
        this.quantidadeDeInimigos = quantidadeDeInimigos;
    }
    reposicionarInimigos()
    {
        // faz com que o inimigo seja reposicionado no painel
    }
    aumentarVelocidade()
    {
        // aumenta a velocidade dos inimigos com o passar do tempo
    }
}
class Barreira
{
    resistencia;
    posicaox;
    posicaoy;
    formato;

    constructor(resistencia, posicaox, posicaoy, formato)
    {
        this.resistencia = resistencia;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.formato = formato;
    }

    danificar()
    {
        //ao ser atingida começa a danificar a barreira
    }
    destruir()
    {
        //depois de ser atingida umcerto numero de vezes ela é destruida
    }
}
class Jogador
{
    vidas;
    posicaox;
    posicaoy;
    tamanho;
    velocidade;
    tiroAliado;
    atirarCooldown;

    constructor(vidas, posicaox, posicaoy, tamanho, velocidade, tiroAliado, atirarCooldown)
    {
        this.vidas = vidas;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.tiroAliado = tiroAliado;
        this.atirarCooldown = atirarCooldown; 
    }

    atirar()
    {
        // faz com que o jogador atire
    }
    atualizarVidas()
    {
        //diminui o numero de vidas quando o jogador é atingido
    }
    perderVida()
    {
        //quando o jogador é atingido ele não pode se mecher até que o numero de vidas seja alterado e ele reviva
    }
    movimentar()
    {
        //movimenta o personagem
    }

}
class projetil
{
    posicaox;
    posicaoy;
    tamanho;
    velocidade;
    tiroInimigo;

    constructor(posicaox, posicaoy, tamanho, velocidade, tiroInimigo)
    {
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.tiroInimigo = tiroInimigo;
    }

    mover()
    {
        //move o projetil
    }
    destruirAoContato()
    {
        //ao colidir com algo é destruido
    }
}
class inimigo
{
    tipoDeInimigo;
    posicaox;
    posicaoy;
    tamanho;
    velocidade;

    constructor(tipoDeInimigo, posicaox, posicaoy, tamanho, velocidade)
    {
        this.tipoDeInimigo = tipoDeInimigo;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    atirar()
    {
        //faz o inimigo atirar
    }
    destruir()
    {
        //ao ser acertado por um projetir ser destruido 
    }
    movimentar()
    {
        //movimenta o inimigo
    }

}
