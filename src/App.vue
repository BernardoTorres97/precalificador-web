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
          class="text-xs font-bold text-orange-500 rounded-full py-2 px-6 mr-1"
          @click="btnAnterior"
        >
          Anterior
        </button>
        <button
          class="text-xs font-bold text-white bg-orange-500 rounded-full py-2 px-6"
          @click="btnSiguiente"
        >
          Siguiente
        </button>
      </div>
    </div>
  </section>
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