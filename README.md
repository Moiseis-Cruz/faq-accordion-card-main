# faq-accordion-card-main

<br>

<img src="./src/images/faq-acordion.gif" alt="faq-acordion">

<br>

Esse o um dos meus primeiro projetos, do Frontend Mentor, envolvendo uma liguagem de programação ``` Javascript ```. Nele criei um acordeon com as opções de um FAQ.

Usei o querySelectorAll para selecionar todos os elementos através do DOM. E poder manipulá-los através do laço de repetição forEach. Onde adicionei um parâmetro – que o chamei de “itemSelected” - para poder trabalhar com cada elemento individualmente usando um evento de clique.

Neste evento de clique adiciono uma classe do CSS ao elemento clicado, ou no caso de uma tela touch ser tocado, que faz com que seja expandido determinada questão. E clicando em outro tópico o anterior é fechado. Ou o atual se fecha ao ser clicado novamente nele, isso acontece por conta da condição que criei dentro do evento de clique.

## Minhas Dificuldades:

A minha maior dificuldade ficou por conta da exibição das imagens no card que são alteradas dependendo do tamanho da tela em que seja exibida. Problema resolvido usando a propriedade display com o valor que o torna existente ou não, dependendo do tamanho da tela a ser exibido.

Também desafiador utilizar os backgrounds posicionados no lugar correto. Para resolver isso, use a propriedade ``background`` com valores para, tamanho, posicionamento, repetição e endereço de imagens.

No restante da responsividade não tive maiores problemas. 

## Linguagens Utilizadas:

- HTML;
- CSS;
- Javascripr;
