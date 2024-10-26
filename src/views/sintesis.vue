<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-i.py-5.px-4
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis explica el concepto de actividad física, definido como cualquier movimiento corporal que aumenta el gasto de energía. Se destacan varios conceptos relacionados, como salud, ejercicio físico, deporte, fitness y condición física. Los beneficios de la actividad física incluyen la mejora del bienestar psicológico y la reducción de riesgos de enfermedades como diabetes, hipertensión y obesidad. También se mencionan las políticas públicas en salud que promueven hábitos saludables y controlan ambientes libres de tabaco, además de abordar el sedentarismo, que puede causar enfermedades no transmisibles si no se mitiga con programas de ejercicio físico.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
