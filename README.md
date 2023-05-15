# APLICAÇÃO REACT COM THREEJS - LOJA VIRTUAL

Foi elaborado neste projeto uma loja virtual da Playstation, fazendo uma apresentação do console de última geração lançado pela empresa SONY que é o Playstation 5. Escolhi este produto para a loja virtual pois tenho uma admiração pelo mundo dos videogames e jogos eletrônicos, além de ter relação com a matéria de computação gráfica que estou aprendendo na faculdade.

No site podemos visualizar uma loja virtual com a logo da Playstation, uma mensagem característica para a apresentação do video game, ícones de pesquisa e compra no canto superior esquerdo e o console sendo apresentado no centro da página, a versão física e digital.

Para a elaboração deste projeto, primeiro precisei escolher um modelo 3D no site https://sketchfab.com/ e fazer o download em formato glTF, pois precisei pegar os arquivos "textures" que contém as cores e texturas de nosso modelo 3D, "license.txt" que são as licenças que precisamos para utilizar o modelo 3D de forma adequada, "scene.bin" que contém dados binários com informações de vértices, texturas e materiais, e por fim o "scene.gltf", que é nosso modelo 3D compactado. O símbolo da Playstation foi retirado do site https://logosmarcas.net/wp-content/uploads/2020/04/Vans-Logo.png.

## Vídeo da Aplicação

https://github.com/BrunoLima19/Loja_Virtual/assets/70240811/8810a289-fcae-483d-999a-677951887cb6

## Link da Aplicação Online

https://loja-virtual-9fh7-hpvmtuwpm-brunolima19.vercel.app

## Ferramentas Utilizadas

Para a elaboração deste projeto, foi utilizamos as seguintes ferramentas:

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

Foi utilizado para a codificação do projeto.

##

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

Uma biblioteca JavaScript de código aberto utilizada para criar interfaces de usuário interativas e reativas, criando componentes reutilizáveis que facilitam muito a manutenção e escalabilidade das aplicações. Com o React, é possível criar componentes que encapsulam toda a lógica e estilo, tornando o código mais organizado e fácil de entender, utilizamos duas dependência junto com o React:

* React-Icons: Uma biblioteca de ícones para React que fornece uma ampla variedade de ícones populares e amplamente utilizados em várias aplicações web e móveis, usamos para adicionar os ícones de carrinho e lupa para comprar e pesquisar.
* Styled Components: Uma biblioteca popular para React que permite estilizar componentes React utilizando CSS e JavaScript.

##

![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

Uma biblioteca JavaScript de código aberto para a criação de gráficos em 3D em navegadores web. Com ela, conseguimos criar modelos em 3D, animações, efeitos de luz, sombras e interações em tempo real, tudo diretamente no navegador. Esta ferramenta possibilita a manipulação de cena, câmera, luzes, mesh, render, entre outros. Junto com a Three Js, utilizamos três dependências desta biblioteca:

* Recat Three Fiber: Utilizada para criar modelos em 3D, aplicar texturas e materiais, adicionar efeitos de luz e sombra, entre outros recursos, tudo isso utilizando a abordagem familiar de componentes do React.
* Drei: Fornece uma série de componentes úteis e prontos para uso em aplicações React que utilizam o Three.js para criar gráficos em 3D. Esses componentes incluem objetos 3D, como cubos, esferas e cilindros, bem como recursos adicionais, como controles de câmera, iluminação, sombras e modelos em 3D pré-fabricados.
* Cannon: Criar objetos físicos em 3D, como esferas, cubos e planos, aplicar forças e torque, detectar colisões e interações com outros objetos físicos, além de simular a gravidade e a fricção.

## Licenças

O modelo 3D que eu peguei do Playstation 5 é do tipo CC-BY-4.0, o que significa que o modelo pode ser usado em projetos comerciais, desde que o autor original seja creditado. A licença também fala que se o modelo for usado em meu próprio projeto, devo colocar o crédito na obra final para dar o devido crédito ao autor original.

## Créditos
Autor responsável pelo modelo 3D utilizado neste projeto:

Unconid (https://sketchfab.com/unconid)
