<template>
  <header class="py-16">
    <div class="flex align-center max-w-5xl mx-auto">
      <div class="flex h-100 justify-center flex-col text-white w-1/2 pr-12">
        <h1 class="text-7xl font-semibold mb-10">
          Solicita tu préstamo en minutos
        </h1>
        <p class="text-lg font-bold">
          Obtén un préstamo personal desde $2,000 hasta $300,000 sin aval, sin
          garantía ni dinero por adelantado
        </p>
      </div>
      <div class="w-1/2">
        <img
          src="https://intermercado.com.mx/wp-content/uploads/2022/01/calculadora.gif"
          alt="Préstamo hasta de $300,000"
        />
      </div>
    </div>
  </header>

  <section class="py-16">
    <h2 class="text-4xl text-center font-bold mb-2">
      ¡Solicita aquí tu <span class="text-orange-500">préstamo!</span>
    </h2>
    <h3 class="text-center font-bold text-xl">
      Es muy fácil y rápido, sólo ingresa tus datos.
    </h3>
    <div class="shadow-lg rounded max-w-3xl mx-auto my-16 overflow-hidden">
      <div
        class="relative flex top-0 left-0 transition-all duration-500 ease"
        ref="stepsWrapper"
      >
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <p class="text-lg font-bold mb-1">
            ¿En qué estado de la República mexicana laboras?*
          </p>
          <select
            v-model="form.estadoRepLabora"
            class="border-1 border-gray-400 border rounded w-64 p-1 text-sm"
          >
            <option value="Veracruz">Veracruz</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Puebla">Puebla</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <p class="text-lg font-bold mb-1">
            ¿Laboras en algunas de las siguientes empresas, dependencias o
            sindicatos en Veracruz?*
          </p>
          <div class="flex flex-col gap-2 mt-2">
            <div>
              <input type="radio" name="ipe" />
              <label for="ipe"
                >IPE (Instituto de Pensiones del Estado de Veracruz)</label
              >
            </div>
            <div>
              <input type="radio" name="uv" />
              <label for="uv">UV (Universidad Veracruzana)</label>
            </div>
            <div>
              <input type="radio" name="gob" />
              <label for="gob">Gobierno del Estado de Veracruz</label>
            </div>
            <div>
              <input type="radio" name="congreso" />
              <label for="congreso">Congreso del Estado de Veracruz</label>
            </div>
            <div>
              <input type="radio" name="magisterio" />
              <label for="magisterio">Magisterio Estatal de Veracruz</label>
            </div>
            <div>
              <input type="radio" name="snt32" />
              <label for="snt32">SNTE 32</label>
            </div>
            <div>
              <input type="radio" name="sesver" />
              <label for="sesver"
                >Secretaría de Salud de Veracruz (SESVER)</label
              >
            </div>
            <div>
              <input type="radio" name="ivec" />
              <label for="ivec"
                >IVEC (Instituto veracruzano de la Cultura)</label
              >
            </div>
            <div>
              <input type="radio" name="ux" />
              <label for="ux">Universidad de Xalapa</label>
            </div>
            <div>
              <input type="radio" name="cfe" />
              <label for="cfe">CFE</label>
            </div>
            <div>
              <input type="radio" name="secretariaSeguridad" />
              <label for="secretariaSeguridad"
                >Secretaría de Seguridad Publica de Veracruz</label
              >
            </div>
            <div>
              <input type="radio" name="ninguna" />
              <label for="ninguna">Ninguna de las mencionadas</label>
            </div>
          </div>
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <h3 class="text-lg text-center uppercase font-bold">
            ¿Cómo te podemos ayudar?
          </h3>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Tipo de contrato*</p>
            <div class="flex flex-col gap-2 mt-2">
              <div>
                <input type="radio" name="eventual" />
                <label for="eventual">Eventual / Interinato</label>
              </div>
              <div>
                <input type="radio" name="basePlaza" />
                <label for="basePlaza">Base / Plaza</label>
              </div>
              <div>
                <input type="radio" name="personalContrato" />
                <label for="personalContrato"
                  >Personal de contrato o confianza</label
                >
              </div>
              <div>
                <input type="radio" name="pensionado" />
                <label for="pensionado">Pensionado</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              Indica el monto del crédito que quieres solicitar (sin coma ni
              punto):*
            </p>
            <input
              type="number"
              placeholder="50000"
              class="border border-1 border-gray-400 rounded p-1 w-20"
            />
            <span class="text-xs block mt-1">Pesos</span>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              Indica tu ingreso promedio MENSUAL (sin coma ni punto):*
            </p>
            <input
              type="number"
              placeholder="12000"
              class="border border-1 border-gray-400 rounded p-1 w-20"
            />
            <span class="text-xs block mt-1">Pesos</span>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              Indica el plazo de pago deseado:*
            </p>
            <div class="flex flex-col gap-2 mt-2">
              <div>
                <input type="radio" name="24" />
                <label for="24">24 quincenas</label>
              </div>
              <div>
                <input type="radio" name="36" />
                <label for="36">36 quincenas</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">48 quincenas</label>
              </div>
              <div>
                <input type="radio" name="72" />
                <label for="72">72 quincenas</label>
              </div>
              <div>
                <input type="radio" name="96" />
                <label for="96">96 quincenas</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              ¿Eres o has sido cliente de Intermercado?
            </p>
            <div class="flex flex-col gap-2 mt-2">
              <div>
                <input type="radio" name="24" />
                <label for="24">Si</label>
              </div>
              <div>
                <input type="radio" name="36" />
                <label for="36">No</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">No recuerdo</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              ¿En caso de ser aprobado tu crédito, para qué lo utilizarás? (Para
              fines informativos: tu respuesta no afecta la aprobación)
            </p>
            <div class="flex flex-col gap-2 mt-2">
              <div>
                <input type="radio" name="24" />
                <label for="24">Vacaciones, viaje</label>
              </div>
              <div>
                <input type="radio" name="36" />
                <label for="36">Comprar, repara un vehículo</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">Invertir en un negocio</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">Renovación de casa</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">Evento, celebración</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">Pagar unos imprevistos</label>
              </div>
              <div>
                <input type="radio" name="48" />
                <label for="48">Unificar deudas</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="otro"
                  class="p-1 border border-1 border-gray-400 rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <h3 class="text-lg text-center uppercase font-bold">
            Datos generales
          </h3>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Género*</p>
            <div class="flex flex-col gap-2 mt-2">
              <div>
                <input type="radio" name="eventual" />
                <label for="eventual">Hombre</label>
              </div>
              <div>
                <input type="radio" name="basePlaza" />
                <label for="basePlaza">Mujer</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Edad*</p>
            <input
              type="number"
              placeholder="ej: 40"
              class="w-20 border border-1 border-gray-400 p-1 rounded"
            />
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">RFC*</p>
            <input
              type="text"
              class="w-20 border border-1 border-gray-400 p-1 rounded"
            />
            <span class="text-xs block mt-1">13 dígitos, con homoclave</span>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Nombre(s)*</p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
            />
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Apellido paterno*</p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
            />
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Apellido materno:</p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
            />
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Correo electrónico: *</p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
              placeholder="ej: minombre@ejemplo.com"
            />
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">Número de teléfono de casa:</p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
            />
            <span class="text-xs block mt-1">10 dígitos, con clave LADA</span>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              Número de teléfono de celular: *
            </p>
            <input
              type="text"
              class="w-64 border border-1 border-gray-400 p-1 rounded"
            />
            <span class="text-xs block mt-1">10 dígitos, con clave LADA</span>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold mb-1">
              ¿Por qué medio prefieres que te contactemos? *
            </p>
            <div>
              <div>
                <input type="checkbox" name="correo" />
                <label for="correo">Correo electrónico</label>
              </div>
              <div>
                <input type="checkbox" name="telCasa" />
                <label for="telCasa">Teléfono de casa</label>
              </div>
              <div>
                <input type="checkbox" name="telCel" />
                <label for="telCel">Teléfono celular</label>
              </div>
              <div>
                <input type="checkbox" name="whats" />
                <label for="whats">WhatsApp</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <input type="checkbox" name="aviso" />
            <label for="aviso"
              >Estoy de acuerdo con el Aviso de Privacidad de GB Plus SA de CV
              SOFOM ENR *</label
            >
          </div>
        </div>
      </div>
      <div class="px-6 pb-8">
        <button
          v-if="currentStep > 0"
          class="text-xs font-bold text-orange-500 rounded-full py-2 px-6 mr-1"
          @click="btnAnterior"
        >
          Anterior
        </button>
        <button
          v-if="currentStep < 3"
          class="text-xs font-bold text-white bg-orange-500 rounded-full py-2 px-6"
          @click="btnSiguiente"
        >
          Siguiente
        </button>
        <button
          v-if="currentStep >= 3"
          class="text-xs font-bold text-white bg-orange-500 rounded-full py-2 px-6"
          @click="btnAnterior"
        >
          Enviar solicitud de crédito
        </button>
      </div>
    </div>
  </section>
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
export default {
  data() {
    return {
      currentStep: 0,
      form: {
        estadoRepLabora: null,
      },
    };
  },
  computed: {
    getHeight() {
      return this.currentStep;
    },
  },
  mounted() {
    this.$refs.stepsWrapper.style.height = `${
      this.$refs.stepsWrapper.childNodes[this.currentStep].offsetHeight
    }px`;
  },
  methods: {
    btnSiguiente() {
      if (this.currentStep >= 3) return;
      this.currentStep += 1;
      this.$refs.stepsWrapper.style.transform = `translateX(-${
        this.currentStep * 100
      }%)`;
      this.$refs.stepsWrapper.style.height = `${
        this.$refs.stepsWrapper.childNodes[this.currentStep].offsetHeight
      }px`;
    },
    btnAnterior() {
      if (this.currentStep <= 0) return;
      this.currentStep -= 1;
      this.$refs.stepsWrapper.style.transform = `translateX(-${
        this.currentStep * 100
      }%)`;
      this.$refs.stepsWrapper.style.height = `${
        this.$refs.stepsWrapper.childNodes[this.currentStep].offsetHeight
      }px`;
    },
  },
};
</script>


<style scoped>
header {
  background-image: url("http://intermercado.com.mx/wp-content/uploads/2020/08/loans4-sectionbg1.png");
  background-size: cover;
  background-position: bottom;
}
</style>