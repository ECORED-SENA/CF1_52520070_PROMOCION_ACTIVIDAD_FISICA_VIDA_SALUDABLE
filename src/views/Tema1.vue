<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Salud
    
    p.mb-4(data-aos="fade-down") De acuerdo con la Organización Mundial de la Salud (OMS), la salud es un estado de completo bienestar físico, mental y social, y no solo la ausencia de enfermedad o dolencia. Así, sentirse saludable refleja una sensación de bienestar en todas las dimensiones del ser humano y su relación con el entorno. Este concepto se considera integral, ya que no se limita a la ausencia de enfermedades, sino que aborda al ser humano de manera holística.

    .row
      .col-lg-5.mb-4(data-aos="fade-right")
        .fondo-color-sistema-k.h-100.p-4.align-content-center.borde-14
          p.mb-3 La salud debe comprenderse en términos relativos y dinámicos, tanto a nivel individual como social, debido a su constante evolución. Se asocia con una mejor calidad de vida y con mayores oportunidades de desarrollo humano.
          figure.mb-4.mb-lg-0
            img.me-auto(src="@/assets/curso/temas/4.svg",style="max-width: 127px;")
      .col-lg-3.align-content-center.mb-4(data-aos="fade-up")
        figure
          img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 295px;")
      .col-lg-4.mb-4(data-aos="fade-left")
        .fondo-color-sistema-l.h-100.align-content-center.borde-14.p-3
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 63px;")
            .col.ps-md-0
              p.mb-0 Es crucial promover la actividad física como una herramienta que permita empoderar a las personas para impactar positivamente en la sociedad, generando estrategias que fomenten cambios en los hábitos y estilos de vida orientados a promover el bienestar y la salud de la comunidad.
    
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1.] La fórmula para una vida saludable
    
    .fondo-color-sistema-m.p-4(data-aos="zoom-in-out")
      figure
        img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/40.svg",style="max-width: 1059px;",alt="La figura ilustra una ecuación donde  la alimentación sana sumada al ejercicio físico resulta en salud.")
        img.mx-auto.d-lg-none(src="@/assets/curso/temas/41.svg",style="max-width: 393px;",alt="La figura ilustra una ecuación donde  la alimentación sana sumada al ejercicio físico resulta en salud.")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Actividad física
    
    p.mb-4(data-aos="fade-right") La actividad física se define como cualquier movimiento corporal producido por los músculos esqueléticos que resulta en un gasto de energía superior al metabolismo basal. Está asociada a cuatro elementos esenciales para su prescripción, que son:

    .row(data-aos="flip-up")
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.pe-md-4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              .figu-1.mx-auto.mx-md-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 43px;")
            .col
              h4.bg-white.p-1.mb-0.text-center Frecuencia
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.pe-md-4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              .figu-1.mx-auto.mx-md-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 41px;")
            .col
              h4.bg-white.p-1.mb-0.text-center Duración
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.pe-md-4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              .figu-1.mx-auto.mx-md-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 46px;")
            .col
              h4.bg-white.p-1.mb-0.text-center Intensidad
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.pe-md-4
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              .figu-1.mx-auto.mx-md-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 42px;")
            .col
              h4.bg-white.p-1.mb-0.text-center Tipo
    
    p.mb-4.c-color-sistema-n.fw-bold(data-aos="fade") Se clasifica en cuatro dominios principales:

    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido.pt-4
        .row.justify-content-center
          .col-lg-3.col-md-6.col-sm-9.mb-4(data-aos="fade-up")
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/12.png")
              p.mb-0.text-center.p-4.fw-bold Tiempo libre o recreación
          .col-lg-3.col-md-6.col-sm-9.mb-4(data-aos="fade-down")
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/13.png")
              p.mb-0.text-center.p-4.fw-bold Contexto laboral
          .col-lg-3.col-md-6.col-sm-9.mb-4(data-aos="fade-up")
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/14.png")
              p.mb-0.text-center.p-4.fw-bold Actividades del hogar
          .col-lg-3.col-md-6.col-sm-9.mb-4(data-aos="fade-down")
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/15.png")
              p.mb-0.text-center.p-4.fw-bold Transporte
    
        p.mt-3(data-aos="fade-left") En este contexto, la actividad física es un factor relevante en la vida de las personas, ya que su integración abarca las actividades cotidianas en los cuatro dominios mencionados: uso del tiempo libre o recreación, transporte, trabajo y hogar. Es importante que tanto el sector público como el privado implementen programas que promuevan la participación en la actividad física, fomentando buenas prácticas que favorezcan la adherencia al ejercicio y contribuyan a la adopción de hábitos y estilos de vida saludables en la población.
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2 1.2 Beneficios de la actividad física
    
    p.mb-4(data-aos="fade-left") Para obtener mayores beneficios, se requiere una actividad física que implique un incremento en la frecuencia, duración e intensidad.

    .fondo-personalizado-1.f3(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Favorece
                ul.lista-ul.mb-0.pb-0
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La formación de huesos, músculos y articulaciones saludables.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span El control del peso corporal.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span Una sensación de bienestar psicológico.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La mejora en la calidad de vida.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span El desarrollo de fuerza y agilidad.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 412px;")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Disminuye
                ul.lista-ul.mb-0.pb-0
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span Los niveles de presión arterial en personas con hipertensión.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La sensación de depresión y ansiedad.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 412px;")
            .row.justify-content-center.align-items-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Reduce
                ul.lista-ul.mb-0.pb-0
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La muerte prematura.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La mortalidad temprana por enfermedades cardíacas.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La diabetes.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span La hipertensión arterial.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span El cáncer de colon.
                  li.d-flex.align-items-start.mb-2
                    img.me-2.mt-1(src="@/assets/curso/temas/17.svg",style="max-width: 11px;")
                    span Las alteraciones osteomusculares.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 412px;")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Ejercicio físico
    
    p.mb-4(data-aos="fade-right") El ejercicio se define como una actividad física planificada, estructurada y repetitiva, cuyo objetivo es mejorar la aptitud física.

    .row
      .col-lg-7(data-aos="fade-down")
        .fondo-color-sistema-o.p-3.borde-10.mb-4
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 75px;")
            .col.ps-md-0
              p.mb-0 Su finalidad es desarrollar o mantener uno o más componentes de la aptitud física relacionados con la salud y el rendimiento deportivo.
        p.mb-0 Es importante no confundir ejercicio con actividad física, ya que esta última no necesariamente tiene una finalidad específica. La actividad física puede realizarse durante el tiempo libre o como recreación, ayudando a liberar el estrés diario o a mejorar la salud. Por su parte, el ejercicio físico está dirigido específicamente a mejorar o mantener la condición física del individuo.
      .col-lg-5.order-first.order-lg-last(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 505px;")
    
    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Deporte
    
    p.mb-4(data-aos="fade") El deporte es un ejercicio estructurado con fines competitivos, que involucra competencia, puntuación, reglas y la especialización de una o más cualidades físicas.
    p.mb-4(data-aos="fade") Según la Ley 181 de 1995, en su artículo 16, el deporte se desarrolla en diversas modalidades:

    .row.align-items-center
      .col-lg-6(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 610px;")
      .col-lg-6(data-aos="zoom-in-out")
        .row
          .col-md-6.mb-3.mb-md-0
            .fondo-color-sistema-p.borde-10.p-2.mb-3
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte social comunitario.
            .fondo-color-sistema-l.borde-10.p-2.mb-3
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte de alto rendimiento.
            .fondo-color-sistema-l.borde-10.p-2.mb-3
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte universitario.
            .fondo-color-sistema-l.borde-10.p-2
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte profesional.
          .col-md-6
            .fondo-color-sistema-l.borde-10.p-2.mb-3
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/29.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte competitivo.     
            .fondo-color-sistema-l.borde-10.p-2.mb-3
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte asociado.     
            .fondo-color-sistema-l.borde-10.p-2
              .row.align-items-center
                .col-md-auto.pe-md-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 100px")
                .col.ps-md-0
                  p.mb-0.p-3.p-md-0 Deporte aficionado. 

    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Sedentarismo

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .fondo-color-sistema-o.p-4.borde-10.align-content-center.mb-4
          p.mb-0 El sedentarismo se refiere a una conducta caracterizada por la realización de actividades que requieren un bajo gasto de energía (dormir, estar sentado, ver televisión, entre otros), con un nivel de gasto energético muy cercano al metabolismo basal. Actualmente, se considera al sedentarismo un factor de riesgo independiente para la salud.
        p.mb-4 La prevalencia del sedentarismo o una baja aptitud física en las personas puede aumentar el riesgo de padecer enfermedades no transmisibles o trastornos degenerativos, particularmente enfermedades coronarias y mortalidad prematura.

        p.fw-bold.mb-0 Existen factores de riesgo predisponentes que actúan de forma multifactorial. Entre ellos se incluyen:

      .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 505px;")
    
    .row(data-aos="zoom-in-out")
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/33.svg",style="max-width: 53px")
            .col
              p.mb-0 Factores del comportamiento
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 53px")
            .col
              p.mb-0 Factores socioeconómicos
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 53px")
            .col
              p.mb-0 Raza
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 53px")
            .col
              p.mb-0 Sexo masculino
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 53px")
            .col
              p.mb-0 Historia familiar de enfermedad coronaria precoz
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 53px")
            .col
              p.mb-0 Obesidad
      .col-lg-3.col-md-6.mb-3
        .fondo-color-sistema-p.borde-10.p-3.align-content-center.h-100
          .row.align-items-center
            .col-md-auto
              .d-inline-flex
                figure.sombra-p-2.rounded-circle
                  img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 53px")
            .col
              p.mb-0 Estados posmenopáusicos
    
    p.mt-2.mb-0(data-aos="fade-left") El sedentarismo puede afectar diversos órganos y sistemas del cuerpo humano, provocando alteraciones y enfermedades no transmisibles que pueden mitigarse mediante la implementación de programas de ejercicio físico. Estos programas son considerados altamente eficaces para intervenir en estos factores de riesgo, mejorando la calidad de vida de las personas a través de la práctica continua, enfocándose en la promoción y prevención frente a estos agentes de riesgo.

    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Aptitud física o condición física
    
    .fondo-personalizado-1.pos-bottom.size-full.med.f2
      .fondo-personalizado-1__contenido
        p.mb-5(data-aos="fade") La aptitud física se refiere a los atributos relacionados con la capacidad de realizar las actividades cotidianas con energía y vitalidad. Los componentes que deben estar interrelacionados en la prescripción de un plan de entrenamiento físico son:

        .row.justify-content-center(data-aos="fade-down")
          .col-lg-3.col-md-6.col-sm-9.mb-4
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/42.svg")
              p.mb-0.text-center.p-4.fw-bold Composición corporal
          .col-lg-3.col-md-6.col-sm-9.mb-4
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/43.svg")
              p.mb-0.text-center.p-4.fw-bold Resistencia cardiorrespiratoria
          .col-lg-3.col-md-6.col-sm-9.mb-4
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/44.svg")
              p.mb-0.text-center.p-4.fw-bold Fuerza y resistencia muscular
          .col-lg-3.col-md-6.col-sm-9.mb-4
            .bg-white.borde-14.sombra-p-1
              figure
                img.mx-auto(src="@/assets/curso/temas/45.svg")
              p.mb-0.text-center.p-4.fw-bold Flexibilidad
        
        p.mb-0.pt-1(data-aos="fade") La evaluación de la condición física está influenciada por factores como los hábitos y estilos de vida, el nivel de actividad física realizado y el grupo poblacional al que se aplican las pruebas. Esta evaluación proporciona información relevante sobre el estado de salud, la calidad de vida y la condición motriz de cada individuo, lo que permite diseñar programas dirigidos a mejorar la calidad de vida de las personas.
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Hábitos saludables
    
    p.mb-4(data-aos="fade-left") El término #[b "hábitos saludables"] surge de la conjunción de los conceptos #[b "hábitos de salud" y "hábitos de vida"], ya que ambos están estrechamente relacionados. Se refiere a las pautas de comportamiento diario que una persona sigue para mejorar su salud.

    .row
      .col-lg-4.mb-4(data-aos="fade-right")
        .fondo-color-sistema-k.p-4.borde-14.h-100.align-content-center
          p.mb-3 El conocimiento de los factores que influyen en la dinámica de los esfuerzos físicos hará que las actividades realizadas sean más o menos beneficiosas para la salud. Uno de los hábitos considerados clave para lograr estilos de vida saludables y mejorar la calidad de vida es #[b la práctica de actividad física, realizada con la frecuencia, intensidad y duración adecuadas].
          figure
            img.ms-auto(src="@/assets/curso/temas/46.svg",style="max-width: 79px;")
      .col-lg-4.mb-4(data-aos="fade")
        figure
          img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 400px;")
      .col-lg-4.mb-4(data-aos="fade-left")
        .fondo-color-sistema-l.p-4.borde-14.h-100.align-content-center
          p.mb-3 Actualmente, la tecnología ocupa un lugar importante en la vida de las personas, aportando de manera significativa al desarrollo humano al facilitar diversas tareas. Sin embargo, el uso excesivo de herramientas tecnológicas ha tenido efectos negativos en los hábitos, condiciones y estilos de vida, creando un entorno sedentario y poco saludable que genera factores de riesgo asociados a enfermedades, lo que se traduce en un problema de salud pública.
    
    p.mb-4(data-aos="fade") Ante esto, el aumento del sobrepeso y la obesidad a nivel mundial es preocupante. Según la Organización Panamericana de la Salud (OPS) y la Organización Mundial de la Salud (OMS), tres cuartos de la población mundial llevan un estilo de vida sedentario.
    
    .row(data-aos="flip-up")
      .col-lg-8.pe-lg-0
        .fondo-color-sistema-o.p-4.px-lg-5.h-100.align-content-center
          p.mb-0 Esta situación no afecta solo a los adultos, sino que se extiende a todas las edades, siendo las mujeres y la población de bajos recursos quienes tienden más a adoptar un estilo de vida sedentario. Por lo tanto, es crucial promover alternativas que fomenten estilos de vida saludables mediante la actividad física, reduciendo así estos riesgos.
      .col-lg-4.ps-lg-0.order-first.order-lg-last
        .fondo-color-secundario.borde-p-2.align-content-center.h-100
          figure
            img.mx-auto(src="@/assets/curso/temas/48.png")
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 #[em Fitness y wellness]
    
    p.mb-4(data-aos="fade") El #[em fitness y el wellness] son pilares fundamentales para lograr un equilibrio entre el cuerpo y la mente. A través de ellos, es posible mejorar tanto la salud física como la emocional, lo que permite llevar una vida más plena y con mayor energía.

    figure.mb-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. #[em Fitness y wellness]
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
