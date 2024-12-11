<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normas, promoción de hábitos y condiciones
    
    p.mb-4(data-aos="fade") Las normas relacionadas con la promoción de hábitos y condiciones en Colombia están respaldadas por la Constitución Política:

    TabsB.color-acento-contenido.tabs-p-1(data-aos="zoom-in-out")
      .fondo-color-sistema-q.py-5.px-4.px-lg-5(titulo="Artículo 49" :icono="require('@/assets/curso/temas/50.svg')")
        .row.justify-content-center
          .col-lg-6
            h4.mb-4 Artículo 49
            p.mb-0 Establece que es responsabilidad del Estado garantizar a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud. Asimismo, señala que cada persona tiene el deber de procurar el cuidado integral de su salud y la de su comunidad.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 412px;")
      .fondo-color-sistema-q.py-5.px-4.px-lg-5(titulo="Artículo 52" :icono="require('@/assets/curso/temas/50.svg')")
        .row.justify-content-center
          .col-lg-6
            h4.mb-4 Artículo 52
            p.mb-0 Determina que el ejercicio del deporte, en sus manifestaciones recreativas, competitivas y autóctonas, tiene la función de contribuir a la formación integral de las personas y a preservar y mejorar la salud humana.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 412px;")
      .fondo-color-sistema-q.py-5.px-4.px-lg-5(titulo="Artículo 79" :icono="require('@/assets/curso/temas/50.svg')")
        .row.justify-content-center
          .col-lg-6
            h4.mb-4 Artículo 79
            p.mb-0 Afirma que todas las personas tienen derecho a disfrutar de un ambiente sano.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 412px;")
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Ambientes saludables y actividad física
    
    p.mb-4(data-aos="fade-right") La normativa que regula la promoción de hábitos, condiciones y estilos de vida saludables, relacionada con la práctica de actividad física, el fomento de una alimentación saludable y el control de ambientes libres de tabaco incluye:

    .row.align-items-center
      .col-lg-3(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 295px;")
      .col-lg-9(data-aos="fade-left")
        AcordionA.acordion-personalizado-1.mb-0(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Ley General de la Educación (Ley 115)")
            .ps-md-5.ms-md-3
              p Reconoce la educación física, la recreación y el uso adecuado del tiempo libre como uno de los fines de la educación en Colombia. Además, establece su carácter como un proyecto pedagógico transversal y obligatorio dentro del currículo de la educación preescolar, básica y media.
          .div(titulo="Ley 715 de 2001 (artículo 74, numeral 12)")
            .ps-md-5.ms-md-3
              p Dicta normas orgánicas sobre recursos y competencias, y estipula que es función de los departamentos coordinar acciones entre los municipios para desarrollar programas y actividades que promuevan la práctica del deporte, la recreación y el aprovechamiento del tiempo libre en el territorio.
          .div(titulo="Ley 9 de 1979")
            .ps-md-5.ms-md-3
              p Establece normas para preservar, conservar y mejorar la salud de los individuos en sus actividades laborales. Estas normas incluyen la protección contra riesgos relacionados con agentes físicos, químicos, biológicos, orgánicos y mecánicos, entre otros. También regula la eliminación o control de agentes nocivos en los lugares de trabajo y protege a los trabajadores y a la población contra riesgos derivados de sustancias peligrosas para la salud pública en su producción, almacenamiento, transporte, venta, uso o disposición.
          .div(titulo="Ley General de la Cultura (Ley 397 de 1997)")
            .ps-md-5.ms-md-3
              p Establece diversas alternativas para promover la práctica de la actividad física, dado que múltiples expresiones culturales están basadas en el movimiento.
          .div(titulo="Ley 375 de 1997 (Ley de Juventud)")
            .ps-md-5.ms-md-3
              p Dispone que el Estado debe garantizar el derecho de los jóvenes a la recreación, la práctica del deporte y el aprovechamiento creativo del tiempo libre, asignando los recursos físicos, económicos y humanos necesarios para ello.
          .div(titulo="Ley 185 de 1985 (artículo 3, numeral 5)")
            .ps-md-5.ms-md-3
              p Señala como uno de los objetivos del Estado garantizar el acceso de las personas a la práctica del deporte y la recreación, y fomentar la creación de espacios que faciliten la actividad física, el deporte y la recreación.
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Normatividad sobre alimentación saludable
    
    p.mb-4(data-aos="fade-up") En Colombia, se han implementado diversas normativas para promover la salud pública y estilos de vida saludables. Estas leyes y decretos abordan temas como la seguridad alimentaria, el control del tabaco, la lucha contra la obesidad, y la promoción de la actividad física, coordinando acciones entre diferentes sectores para mejorar la calidad de vida de la población.

    .fondo-personalizado-1.f3.mb-5(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Decreto 2055 de 2009
                p.mb-0 Crea la Comisión Intersectorial de Seguridad Alimentaria y Nutricional (CISAN), encargada de la coordinación y seguimiento de la Política Nacional de Seguridad Alimentaria y Nutricional (PNSAN). Facilita la concertación entre sectores y apoya el mejoramiento de capacidades institucionales en seguridad alimentaria y nutricional a nivel territorial.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Resolución 333 de 2011
                p.mb-0 Establece el reglamento técnico sobre los requisitos de rotulado o etiquetado nutricional que deben cumplir los alimentos envasados para consumo humano.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Ley 1109 de 2006
                p.mb-0 Aprueba el "Convenio Marco de la OMS para el Control del Tabaco", firmado en Ginebra el 21 de mayo de 2003.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Decreto 2871 de 2008
                p.mb-0 Promulga el "Convenio Marco de la OMS para el Control del Tabaco", hecho en Ginebra el 21 de mayo de 2003.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Resolución 2010t-380001134-6 de 2010
                p.mb-0 Reglamenta la emisión de mensajes institucionales de prevención contra el consumo de tabaco y sus derivados en el servicio público de televisión.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Ley 1335 de 2009
                p.mb-0 Declara la obesidad como una enfermedad crónica de salud pública, causante de diversas enfermedades como cardíacas, hipertensión, diabetes y cáncer, incrementando la tasa de mortalidad en Colombia.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 412px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Decreto 2171 del 30 de julio de 2008
                p.mb-0 Establece la Comisión Nacional Intersectorial para la Coordinación y Orientación Superior del Fomento, Desarrollo y Medición de Impacto de la Actividad Física (CONIAF), responsable de coordinar estrategias para promover estilos de vida saludables y controlar enfermedades no transmisibles.
              .col-lg-5
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 412px;")
    
    p.mb-4(data-aos="fade-right") Entre el 6 y el 18 de septiembre se llevó a cabo en Bogotá la #[b primera cumbre de programas gubernamentales de la actividad física de las Américas]. Durante este evento, la #[b Declaración de Bogotá] reafirmó el compromiso de los gobiernos latinoamericanos para fortalecer las intervenciones en la promoción de la actividad física, con el propósito de crear un continente más activo y saludable, al mismo tiempo que se impulsan acciones que contribuyan a la paz. Esta declaración se emitió el 8 de septiembre de 2023.

    .row.mb-4
      .col-lg-4(data-aos="fade-right")
        .fondo-color-sistema-k.p-4.borde-14.h-100.align-content-center
          p.mb-4 Los países que participaron en la cumbre incluyen: Argentina, Bolivia, Brasil, Colombia, Chile, Cuba, El Salvador, Guatemala, Paraguay, Perú, República Dominicana y Venezuela.
          figure
            img.ms-auto(src="@/assets/curso/temas/61.svg",style="max-width: 94px;")
      .col-lg-8.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 821px;")
    
    p.mb-0(data-aos="fade-left") Actualmente, el #[b Plan Decenal del Deporte, la Recreación, la Educación Física y la Actividad Física para el Desarrollo Humano, la Convivencia y la Paz 2020-2030] considera la actividad física como una estrategia clave para promover estilos de vida saludables. Además, sigue siendo una herramienta esencial para mejorar la salud, educación y bienestar, y una base sólida para el desarrollo de la condición física en la recreación, la educación física y la práctica formal e informal de deportes.



</template>

<script>
export default {
  name: 'Tema2',
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
