<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        .row.mb-4.align-items-center(data-aos="fade-left")
          .col-md-auto
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 85px;")
          .col
            p.mb-0 La actividad física desempeña un papel fundamental en la promoción de la salud y el bienestar de las personas. Involucra cualquier movimiento corporal que genera un gasto energético, lo que contribuye al mejoramiento de la condición física, la prevención de enfermedades y el fomento de hábitos saludables. Su práctica regular es clave para mantener un equilibrio entre el cuerpo y la mente.
        
        .row.align-items-center
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 505px;")
          .col-lg-7
            .fondo-color-sistema-j.borde-p-1.p-4.borde-10.mb-4(data-aos="fade-left")
              p.mb-0 Este componente formativo ofrece una visión integral sobre los beneficios de la actividad física, el ejercicio físico y el deporte. También se abordan temas como el sedentarismo y su impacto en la salud, así como la importancia de establecer hábitos saludables. Además, se proporciona un marco normativo que regula la promoción de la actividad física y estilos de vida saludables en la sociedad.

            p.mb-0(data-aos="fade-down") Conocer estos conceptos y aplicarlos es esencial para los profesionales del deporte y la salud. A través de estrategias adecuadas, se pueden promover cambios positivos en el comportamiento de las personas, contribuyendo así a la mejora de la calidad de vida y a la prevención de enfermedades no transmisibles relacionadas con el estilo de vida.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
