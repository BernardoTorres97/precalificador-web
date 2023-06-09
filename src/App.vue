<template>
  <header class="py-16">
    <div class="flex align-center max-w-5xl mx-auto">
      <div class="flex h-100 justify-center flex-col text-white w-1/2 pr-12">
        <h1 class="text-6xl font-bold mb-10">
          Solicita tu préstamo en minutos
        </h1>
        <p class="font-bold">
          Obtén un préstamo personal desde $2,000 hasta $300,000 sin aval, sin
          garantía ni dinero por adelantado
        </p>
      </div>
      <div class="w-1/2">
        <img
          src="https://intermercado.com.mx/wp-content/uploads/2022/01/calculadora.gif"
          alt="Préstamo hasta de $300,000"
          class="h-auto block"
          style="max-width: 490px"
        />
      </div>
    </div>
  </header>

  <the-form />

  <section class="mx-auto max-w-5xl mb-24 flex mt-8">
    <div class="w-1/4">
      <img
        src="https://intermercado.com.mx/wp-content/uploads/elementor/thumbs/icono_respuesta-p9cb3h8y623q544bwrch1l5n9ohqxnycq5dbkw1fjc.png"
        class="mx-auto mb-4"
      />
      <span class="font-bold text-xl text-center block"
        >Respuesta inmediata</span
      >
    </div>
    <div class="w-1/4">
      <img
        src="https://intermercado.com.mx/wp-content/uploads/elementor/thumbs/icono_buro-p9cb4rb1gxury09fft96xrj8dk6qeu178hc43g552g.png"
        class="mx-auto mb-4"
      />
      <span class="font-bold text-xl text-center block">Sin revisar buró*</span>
    </div>
    <div class="w-1/4">
      <img
        src="https://intermercado.com.mx/wp-content/uploads/elementor/thumbs/icono_requisitos-p9cb5et07sqy09bamlev63lr86ywr9mhnpn93d6aqw.png"
        class="mx-auto mb-4"
      />
      <span class="font-bold text-xl text-center block"
        >Requisitos mínimos</span
      >
    </div>
    <div class="w-1/4">
      <img
        src="https://intermercado.com.mx/wp-content/uploads/elementor/thumbs/icono_comision-p9cb5yjm7bhys2imfby14gmfpa9m8wsuqfcg66d148.png"
        class="mx-auto mb-4"
      />
      <span class="font-bold text-xl text-center block"
        >Sin comisión por apertura</span
      >
    </div>
  </section>
  <footer style="background: #1e2452" class="text-white">
    <div class="flex justify-center max-w-5xl mx-auto py-32">
      <div class="w-1/3">
        <h3 class="text-4xl mb-4">800 500 91 95</h3>
        <a href="" class="font-weight-bold">micredito@intermercado.com.mx</a>
      </div>
      <div class="w-1/3">
        <ul>
          <li><a href="">Buró de Entidades Financieras</a></li>
          <li><a href="">Aviso de privacidad </a></li>
          <li><a href="">Unidad Especializada de Atención a Usuarios</a></li>
          <li><a href="">Registro de Despachos de Cobranza</a></li>
          <li><a href="">Trabaja con nosotros</a></li>
          <li><a href="">Despacho de Cobranza</a></li>
        </ul>
      </div>
      <div class="w-1/3">
        <ul>
          <li>
            <a href=""
              >Comisión Nacional para la Protección y Defensa de los Usuarios de
              Servicios Financieros</a
            >
          </li>
          <li><a href="">Términos y condiciones</a></li>
          <li><a href="">Productos y comisiones</a></li>
          <li><a href="">Derechos ARCO</a></li>
        </ul>
      </div>
    </div>
    <hr class="border-1 border-gray-600" />
    <div class="max-w-5xl mx-auto py-8 text-gray-400 flex items-center">
      <span class="text-sm font-medium mr-8"
        >© 2023 Intermercado es una marca de GB Plus S.A. de C.V. SOFOM E.N.R.
        Todos los derechos reservados</span
      >
      <div class="flex gap-4 text-sm text-gray-500">
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-play"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      <div class="text-2xl text-gray-500 ml-auto">
        <a href="#"><i class="fa-solid fa-chevron-up"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
import TheForm from "./components/TheForm.vue";

export default {
  components: { TheForm },
};
</script>


<style scoped>
header {
  background-image: url("http://intermercado.com.mx/wp-content/uploads/2020/08/loans4-sectionbg1.png");
  background-size: cover;
  background-position: bottom;
}
</style>