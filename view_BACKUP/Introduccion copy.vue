<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        p.mb-3 La ciencia, la tecnología y la innovación (CTeI), son pilares esenciales para el desarrollo de las naciones, puesto que permiten abordar retos globales y locales a través de soluciones sostenibles y creativas. En Colombia, el ecosistema de CTeI ha evolucionado significativamente en las últimas décadas, consolidándose como un motor de transformación social y económica. Sin embargo, su desarrollo enfrenta desafíos relacionados con la inversión, la equidad de género, las brechas regionales y la articulación de actores claves.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #ecd4fe " )
          p.mb-0 El marco legal, las políticas públicas y los instrumentos de gestión, como el CONPES 4069, las plataformas SIGP y ScienTI, y el Fondo de Regalías, han sido fundamentales para fortalecer el sistema de CTeI en el país. Estas herramientas no solo han promovido la descentralización del conocimiento, sino que también han permitido un acceso más equitativo a la educación científica y al desarrollo tecnológico, en comunidades vulnerables.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.svg', alt='')
    
    
    .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A pesar de los retos, Colombia cuenta con un gran potencial en áreas estratégicas como la biodiversidad, las energías renovables y el emprendimiento innovador. Aprovechar estas oportunidades, junto con el fortalecimiento de la participación social y el acceso abierto al conocimiento, permitirá al país consolidarse como un referente en innovación y sostenibilidad en la región.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
