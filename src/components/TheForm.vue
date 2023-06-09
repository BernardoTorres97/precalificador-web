<template>
  <section class="py-16">
    <h2 class="text-center font-bold mb-2" style="font-size: 42px">
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
          <form @submit.prevent>
            <p class="input-label">
              ¿En qué estado de la República mexicana laboras?
              <span class="text-red-500 text-lg">*</span>
            </p>
            <select v-model="form.step0_estadoLabora" class="input">
              <option value="Veracruz">Veracruz</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Puebla">Puebla</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Otro">Otro</option>
            </select>
            <errors-list :errors="v$.form.step0_estadoLabora.$errors" />
          </form>
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <p class="input-label">
            ¿Laboras en algunas de las siguientes empresas, dependencias o
            sindicatos en Veracruz? <span class="text-red-500 text-lg">*</span>
          </p>
          <div class="radio-group">
            <div>
              <input
                type="radio"
                name="ipe"
                value="ipe"
                v-model="form.step1_entidad"
              />
              <label for="ipe"
                >IPE (Instituto de Pensiones del Estado de Veracruz)</label
              >
            </div>
            <div>
              <input
                type="radio"
                name="uv"
                value="uv"
                v-model="form.step1_entidad"
              />
              <label for="uv">UV (Universidad Veracruzana)</label>
            </div>
            <div>
              <input
                type="radio"
                name="gob"
                value="gob"
                v-model="form.step1_entidad"
              />
              <label for="gob">Gobierno del Estado de Veracruz</label>
            </div>
            <div>
              <input
                type="radio"
                name="congreso"
                value="congreso"
                v-model="form.step1_entidad"
              />
              <label for="congreso">Congreso del Estado de Veracruz</label>
            </div>
            <div>
              <input
                type="radio"
                name="magisterio"
                value="magisterio"
                v-model="form.step1_entidad"
              />
              <label for="magisterio">Magisterio Estatal de Veracruz</label>
            </div>
            <div>
              <input
                type="radio"
                name="snt32"
                value="snt32"
                v-model="form.step1_entidad"
              />
              <label for="snt32">SNTE 32</label>
            </div>
            <div>
              <input
                type="radio"
                name="sesver"
                value="sesver"
                v-model="form.step1_entidad"
              />
              <label for="sesver"
                >Secretaría de Salud de Veracruz (SESVER)</label
              >
            </div>
            <div>
              <input
                type="radio"
                name="ivec"
                value="ivec"
                v-model="form.step1_entidad"
              />
              <label for="ivec"
                >IVEC (Instituto veracruzano de la Cultura)</label
              >
            </div>
            <div>
              <input
                type="radio"
                name="ux"
                value="ux"
                v-model="form.step1_entidad"
              />
              <label for="ux">Universidad de Xalapa</label>
            </div>
            <div>
              <input
                type="radio"
                name="cfe"
                value="cfe"
                v-model="form.step1_entidad"
              />
              <label for="cfe">CFE</label>
            </div>
            <div>
              <input
                type="radio"
                name="secretariaSeguridad"
                value="secretariaSeguridad"
                v-model="form.step1_entidad"
              />
              <label for="secretariaSeguridad"
                >Secretaría de Seguridad Publica de Veracruz</label
              >
            </div>
            <div>
              <input
                type="radio"
                name="ninguna"
                value="ninguna"
                v-model="form.step1_entidad"
              />
              <label for="ninguna">Ninguna de las mencionadas</label>
            </div>
          </div>
          <errors-list :errors="v$.form.step1_entidad.$errors" />
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <h3 class="form-title">¿Cómo te podemos ayudar?</h3>
          <div class="mt-4">
            <p class="input-label">
              Tipo de contrato <span class="text-red-500 text-lg">*</span>
            </p>
            <div class="radio-group">
              <div>
                <input
                  type="radio"
                  name="eventual"
                  value="eventual"
                  v-model="form.step2_tipoContrato"
                />
                <label for="eventual">Eventual / Interinato</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="basePlaza"
                  value="basePlaaza"
                  v-model="form.step2_tipoContrato"
                />
                <label for="basePlaza">Base / Plaza</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="personalContrato"
                  value="personalContrato"
                  v-model="form.step2_tipoContrato"
                />
                <label for="personalContrato"
                  >Personal de contrato o confianza</label
                >
              </div>
              <div>
                <input
                  type="radio"
                  name="pensionado"
                  value="pensionado"
                  v-model="form.step2_tipoContrato"
                />
                <label for="pensionado">Pensionado</label>
              </div>
            </div>
            <errors-list :errors="v$.form.step2_tipoContrato.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Indica el monto del crédito que quieres solicitar (sin coma ni
              punto): <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="number"
              placeholder="50000"
              class="input w-20"
              v-model="form.step2_montoCredito"
            />
            <span class="input-hint">Pesos</span>
          </div>
          <errors-list :errors="v$.form.step2_montoCredito.$errors" />
          <div class="mt-4">
            <p class="input-label">
              Indica tu ingreso promedio MENSUAL (sin coma ni punto):
              <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="number"
              placeholder="12000"
              class="input w-20"
              v-model="form.step2_ingresoMensual"
            />
            <span class="input-hint">Pesos</span>
          </div>
          <errors-list :errors="v$.form.step2_ingresoMensual.$errors" />
          <div class="mt-4">
            <p class="input-label">
              Indica el plazo de pago deseado:
              <span class="text-red-500 text-lg">*</span>
            </p>
            <div class="radio-group">
              <div>
                <input
                  type="radio"
                  name="24"
                  value="24"
                  v-model="form.step2_plazoPago"
                />
                <label for="24">24 quincenas</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="36"
                  value="36"
                  v-model="form.step2_plazoPago"
                />
                <label for="36">36 quincenas</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="48"
                  value="48"
                  v-model="form.step2_plazoPago"
                />
                <label for="48">48 quincenas</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="72"
                  value="72"
                  v-model="form.step2_plazoPago"
                />
                <label for="72">72 quincenas</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="96"
                  value="96"
                  v-model="form.step2_plazoPago"
                />
                <label for="96">96 quincenas</label>
              </div>
            </div>
            <errors-list :errors="v$.form.step2_plazoPago.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">¿Eres o has sido cliente de Intermercado?</p>
            <div class="radio-group">
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
            <p class="input-label">
              ¿En caso de ser aprobado tu crédito, para qué lo utilizarás? (Para
              fines informativos: tu respuesta no afecta la aprobación)
            </p>
            <div class="radio-group">
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
                <input type="text" placeholder="otro" class="input" />
              </div>
            </div>
          </div>
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <h3 class="form-title">Datos generales</h3>
          <div class="mt-4">
            <p class="input-label">
              Género <span class="text-red-500 text-lg">*</span>
            </p>
            <div class="radio-group">
              <div>
                <input
                  type="radio"
                  name="eventual"
                  value="hombre"
                  v-model="form.step3_genero"
                />
                <label for="eventual">Hombre</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="basePlaza"
                  value="basePlaza"
                  v-model="form.step3_genero"
                />
                <label for="basePlaza">Mujer</label>
              </div>
            </div>
            <errors-list :errors="v$.form.step3_genero.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Edad <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="number"
              placeholder="ej: 40"
              class="w-20 input"
              v-model="form.step3_edad"
            />
            <errors-list :errors="v$.form.step3_edad.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              RFC <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="text"
              class="input"
              v-model="form.step3_rfc"
              @input="toUpperCase"
            />
            <span class="input-hint">13 dígitos, con homoclave</span>
            <errors-list :errors="v$.form.step3_rfc.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Nombre(s) <span class="text-red-500 text-lg">*</span>
            </p>
            <input type="text" class="input" v-model="form.step3_nombre" />
            <errors-list :errors="v$.form.step3_nombre.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Apellido paterno <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="text"
              class="input"
              v-model="form.step3_apellidoPaterno"
            />
            <errors-list :errors="v$.form.step3_apellidoPaterno.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">Apellido materno:</p>
            <input type="text" class="input" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Correo electrónico: <span class="text-red-500 text-lg">*</span>
            </p>
            <input
              type="text"
              class="input"
              placeholder="ej: minombre@ejemplo.com"
              v-model="form.step3_correo"
            />
            <errors-list :errors="v$.form.step3_correo.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">Número de teléfono de casa:</p>
            <input type="text" class="input" v-model="form.step3_numCasa" />
            <span class="text-xs block mt-1">10 dígitos, con clave LADA</span>
            <errors-list :errors="v$.form.step3_numCasa.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              Número de teléfono de celular:
              <span class="text-red-500 text-lg">*</span>
            </p>
            <input type="text" class="input" v-model="form.step3_numCelular" />
            <span class="text-xs block mt-1">10 dígitos, con clave LADA</span>
            <errors-list :errors="v$.form.step3_numCelular.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">
              ¿Por qué medio prefieres que te contactemos?
              <span class="text-red-500 text-lg">*</span>
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
            <input type="checkbox" name="aviso" v-model="form.step3_aviso" />
            <label for="aviso"
              >Estoy de acuerdo con el Aviso de Privacidad de GB Plus SA de CV
              SOFOM ENR <span class="text-red-500 text-lg">*</span></label
            >
            <errors-list :errors="v$.form.step3_aviso.$errors" />
          </div>
        </div>
      </div>
      <div class="px-6 pb-8">
        <button
          v-if="currentStep > 0"
          class="btn btn-text"
          @click="btnAnterior"
        >
          Anterior
        </button>
        <button
          v-if="currentStep < 3"
          class="btn btn-primary"
          @click="btnSiguiente"
        >
          Siguiente
        </button>
        <button
          v-if="currentStep >= 3"
          class="btn btn-primary"
          @click="btnSiguiente"
        >
          Enviar solicitud de crédito
        </button>
      </div>
    </div>
  </section>
</template>

<script>
const rfc = helpers.regex(
  /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
);

import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  sameAs,
  minValue,
  maxValue,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";
import ErrorsList from "./ErrorsList.vue";

export default {
  name: "TheForm",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    ErrorsList,
  },
  data() {
    return {
      currentStep: 0,
      form: {
        step0_estadoLabora: null,
        step1_entidad: null,
        step2_tipoContrato: null,
        step2_montoCredito: null,
        step2_ingresoMensual: null,
        step2_plazoPago: null,
        step3_genero: null,
        step3_edad: null,
        step3_rfc: null,
        step3_nombre: null,
        step3_apellidoPaterno: null,
        step3_correo: null,
        step3_numCelular: null,
        step3_aviso: false,
        step3_numCasa: null,
      },
    };
  },
  validations() {
    return {
      form: {
        step0_estadoLabora: {
          required: helpers.withMessage("Selecciona un estado", required),
        },
        step1_entidad: {
          required: helpers.withMessage(
            "Selecciona la entidad donde trabajas",
            required
          ),
        },
        step2_tipoContrato: {
          required: helpers.withMessage(
            "Selecciona el tipo de contrato",
            required
          ),
        },
        step2_montoCredito: {
          required: helpers.withMessage("Ingresa el monto deseado", required),
          minValue: helpers.withMessage(
            "El monto mínimo es de $2,000 pesos",
            minValue(2000)
          ),
          maxValue: helpers.withMessage(
            "El monto máximo es de $300,000 pesos",
            maxValue(300000)
          ),
        },
        step2_ingresoMensual: {
          required: helpers.withMessage(
            "Ingresa tu promedio mensual",
            required
          ),
          minValue: helpers.withMessage(
            "El ingreso mínimo es de $6,000 pesos",
            minValue(6000)
          ),
        },
        step2_plazoPago: {
          required: helpers.withMessage(
            "Selecciona el plazo deseado",
            required
          ),
        },
        step3_genero: {
          required: helpers.withMessage("Selecciona tu género", required),
        },
        step3_edad: {
          required: helpers.withMessage("Ingresa tu edad", required),
          minValue: helpers.withMessage(
            "Debes de ser mayor de edad para poder solicitar un crédito",
            minValue(18)
          ),
        },
        step3_rfc: {
          required: helpers.withMessage("Ingresa tu RFC", required),
          rfc: helpers.withMessage("Ingresa un RFC válido", rfc),
        },
        step3_nombre: {
          required: helpers.withMessage("Ingresa tu nombre", required),
        },
        step3_apellidoPaterno: {
          required: helpers.withMessage(
            "Ingresa tu apellido paterno",
            required
          ),
        },
        step3_correo: {
          required: helpers.withMessage("Ingresa tu correo", required),
          email: helpers.withMessage("Ingresa un correo válido", email),
        },
        step3_numCasa: {
          minLength: helpers.withMessage(
            "Ingresa un número de 10 dígitos",
            minLength(10)
          ),
          maxLength: helpers.withMessage(
            "Ingresa un número de 10 dígitos",
            maxLength(10)
          ),
          numeric: helpers.withMessage("Ingresa un número válido", numeric),
        },
        step3_numCelular: {
          required: helpers.withMessage(
            "Ingresa tu número de celular",
            required
          ),
          minLength: helpers.withMessage(
            "Ingresa un número de 10 dígitos",
            minLength(10)
          ),
          maxLength: helpers.withMessage(
            "Ingresa un número de 10 dígitos",
            maxLength(10)
          ),
          numeric: helpers.withMessage("Ingresa un número válido", numeric),
        },
        step3_aviso: {
          sameAs: helpers.withMessage(
            "Debes aceptar el acuerdo de privacidad",
            sameAs(() => true)
          ),
        },
      },
    };
  },
  mounted() {
    this.changeHeight();
  },
  methods: {
    toUpperCase() {
      event.target.value = event.target.value.toUpperCase();
    },
    btnEnviar() {},
    btnSiguiente() {
      if (this.currentStep > 3) return;
      if (!this.validForm()) return;
      this.currentStep += 1;
      this.changeHeight();
    },
    btnAnterior() {
      if (this.currentStep <= 0) return;
      if (!this.validForm()) return;
      this.currentStep -= 1;
      this.changeHeight();
    },
    changeHeight() {
      this.$refs.stepsWrapper.style.transform = `translateX(-${
        this.currentStep * 100
      }%)`;
      this.$refs.stepsWrapper.style.height = `${
        this.$refs.stepsWrapper.childNodes[this.currentStep].offsetHeight
      }px`;
    },
    validForm() {
      const fields = Object.keys(this.v$.form).filter((field) =>
        field.includes(`step${this.currentStep}`)
      );

      let valid = true;
      fields.forEach((field) => {
        this.v$.form[field].$touch();
        if (this.v$.form[field].$errors.length > 0) valid = false;
      });
      this.$nextTick(() => this.changeHeight());
      return valid;
    },
  },
};
</script>

<style scoped>
input[type="checkbox"],
input[type="radio"] {
  margin-right: 8px;
}

label {
  font-size: 14px;
}
</style>