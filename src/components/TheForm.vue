<template>
  <section class="md:py-16 my-10">
    <h2
      class="text-center font-bold mb-2 md:text-4xl text-2xl w-52 md:w-full mx-auto"
    >
      ¡Solicita aquí tu <span class="text-orange-500">préstamo!</span>
    </h2>
    <h3 class="text-center font-bold md:text-xl text-sm w-52 md:w-full mx-auto">
      Es muy fácil y rápido, sólo ingresa tus datos.
    </h3>
    <div
      class="shadow-lg rounded max-w-3xl mx-auto my-16 overflow-hidden md:w-full w-80 mx-auto"
    >
      <div v-show="noAplica" class="p-8" ref="noAplica">
        <p v-html="mensaje"></p>
      </div>
      <div
        v-show="!noAplica"
        class="relative flex top-0 left-0 transition-all duration-500 ease"
        ref="stepsWrapper"
      >
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <p class="input-label">
            ¿En qué estado de la República mexicana laboras?
            <span class="text-red-500 text-lg">*</span>
          </p>
          <select v-model="form.step0_estadoLabora" class="input">
            <option value="Veracruz">Veracruz</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Puebla">Puebla</option>
            <option value="Guerrero">Guerrero</option>
            <option value="otro">Otro</option>
          </select>
          <errors-list :errors="v$.form.step0_estadoLabora.$errors" />
        </div>
        <div class="step min-w-full py-8 px-6" style="height: min-content">
          <p class="input-label">
            ¿Laboras en algunas de las siguientes empresas, dependencias o
            sindicatos en {{ form.step0_estadoLabora }}?
            <span class="text-red-500 text-lg">*</span>
          </p>
          <div class="radio-group">
            <div v-for="radio in radioGroupEntidad" :key="radio.name">
              <label>
                <input
                  type="radio"
                  :value="radio.name"
                  v-model="form.step1_entidad"
                />
                {{ radio.label }}</label
              >
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
                <label>
                  <input
                    type="radio"
                    value="eventual"
                    v-model="form.step2_tipoContrato"
                  />
                  Eventual / Interinato</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="basePlaaza"
                    v-model="form.step2_tipoContrato"
                  />
                  Base / Plaza</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="personalContrato"
                    v-model="form.step2_tipoContrato"
                  />
                  Personal de contrato o confianza</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="pensionado"
                    v-model="form.step2_tipoContrato"
                  />
                  Pensionado</label
                >
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
                <label>
                  <input
                    type="radio"
                    value="24"
                    v-model="form.step2_plazoPago"
                  />24 quincenas</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="36"
                    v-model="form.step2_plazoPago"
                  />36 quincenas</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="48"
                    v-model="form.step2_plazoPago"
                  />48 quincenas</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="72"
                    v-model="form.step2_plazoPago"
                  />72 quincenas</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="96"
                    v-model="form.step2_plazoPago"
                  />96 quincenas</label
                >
              </div>
            </div>
            <errors-list :errors="v$.form.step2_plazoPago.$errors" />
          </div>
          <div class="mt-4">
            <p class="input-label">¿Eres o has sido cliente de Intermercado?</p>
            <div class="radio-group">
              <div>
                <label>
                  <input
                    type="radio"
                    value="si"
                    v-model="form.step2_clientePrevio"
                  />
                  Si</label
                >
              </div>
              <div>
                <label>
                  <input type="radio" value="no" />
                  No</label
                >
              </div>
              <div>
                <label>
                  <input type="radio" value="noRecuerdo" />
                  No recuerdo</label
                >
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
                <label>
                  <input
                    type="radio"
                    value="vacaciones"
                    v-model="form.step2_intencionCredito"
                  />
                  Vacaciones, viaje</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="vehiculo"
                    v-model="form.step2_intencionCredito"
                  />
                  Comprar, reparar un vehículo</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="negocio"
                    v-model="form.step2_intencionCredito"
                  />
                  Invertir en un negocio</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="renovacionCasa"
                    v-model="form.step2_intencionCredito"
                  />
                  Renovación de casa</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="evento"
                    v-model="form.step2_intencionCredito"
                  />
                  Evento, celebración</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="imprevistos"
                    v-model="form.step2_intencionCredito"
                  />
                  Pagar unos imprevistos</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="unificarDeudas"
                    v-model="form.step2_intencionCredito"
                  />
                  Unificar deudas</label
                >
              </div>
              <div>
                <input
                  type="radio"
                  value="otro"
                  v-model="form.step2_intencionCredito"
                />
                <input
                  type="text"
                  placeholder="otro"
                  class="input"
                  :disabled="getOtroSeleccionado"
                />
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
                <label>
                  <input
                    type="radio"
                    value="hombre"
                    v-model="form.step3_genero"
                  />Hombre</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="basePlaza"
                    v-model="form.step3_genero"
                  />
                  Mujer</label
                >
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
            <input
              type="text"
              class="input"
              v-model="form.step3_apellidoMaterno"
            />
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
                <label>
                  <input
                    type="checkbox"
                    v-model="form.step3_medioContacto.correo"
                  />
                  Correo electrónico</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    v-model="form.step3_medioContacto.telCasa"
                  />
                  Teléfono de casa</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    v-model="form.step3_medioContacto.celular"
                  />
                  Teléfono celular</label
                >
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    v-model="form.step3_medioContacto.whats"
                  />
                  WhatsApp</label
                >
              </div>
            </div>
            <errors-list :errors="medioContactoErrors" />
          </div>
          <div class="mt-4">
            <label>
              <input type="checkbox" v-model="form.step3_aviso" />
              Estoy de acuerdo con el
              <a
                href="http://intermercado.com.mx/aviso-de-privacidad/"
                target="_blank"
                class="font-weight-black text-cyan-500"
                >Aviso de Privacidad</a
              >
              de GB Plus SA de CV SOFOM ENR
              <span class="text-red-500 text-lg">*</span></label
            >
            <errors-list :errors="avisoPrivacidadErrors" />
          </div>
        </div>
      </div>
      <div class="px-6 pb-8" v-if="!noAplica">
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
          @click="btnEnviar"
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
      avisoPrivacidadErrors: [],
      medioContactoErrors: [],
      mensaje: "",
      radioGroupEntidad: [],
      currentStep: 0,
      noAplica: false,
      form: {
        step0_estadoLabora: null,
        step1_entidad: null,
        step2_tipoContrato: null,
        step2_montoCredito: null,
        step2_ingresoMensual: null,
        step2_plazoPago: null,
        step2_clientePrevio: null,
        step2_intencionCredito: null,
        step3_genero: null,
        step3_edad: null,
        step3_rfc: null,
        step3_nombre: null,
        step3_apellidoPaterno: null,
        step3_apellidoMaterno: null,
        step3_correo: null,
        step3_numCelular: null,
        step3_aviso: false,
        step3_numCasa: null,
        step3_medioContacto: {
          correo: false,
          whats: false,
          telCasa: false,
          celular: false,
        },
      },
    };
  },
  computed: {
    getOtroSeleccionado() {
      return this.form.step2_intencionCredito !== "otro";
    },
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
            required,
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
    checkStep() {
      this.checkEstado();
      this.checkEntidad();
      this.checkTipoContrato();
    },
    checkTipoContrato() {
      if (this.currentStep !== 3) return;
      if (this.form.step2_tipoContrato === "eventual") {
        this.noAplica = true;
        this.mensaje = `
          Lo sentimos, en este momento otorgamos créditos exclusivamente a trabajadores del sector público con base/plaza, o personal de confianza/contrato con más de 3 años de antiguedad o bien pensionados, que laboran en las dependencias mencionadas.
          <br /><br />
          Te invitamos a seguirnos en Facebook para no perderte nuestras próximas aperturas de convenios.
        `;
      }
    },
    checkEntidad() {
      if (this.currentStep !== 2) return;
      if (this.form.step1_entidad === "ninguna") {
        this.noAplica = true;
        this.mensaje = `
          Lo sentimos, en este momento otorgamos créditos exclusivamente a trabajadores del sector público con base/plaza, o personal de confianza/contrato con más de 3 años de antiguedad o bien pensionados, que laboran en las dependencias mencionadas.
          <br /><br />
          Te invitamos a seguirnos en Facebook para no perderte nuestras próximas aperturas de convenios.
        `;
      }
    },
    checkEstado() {
      if (this.currentStep !== 1) return;
      if (this.form.step0_estadoLabora === "Veracruz") {
        this.radioGroupEntidad = [
          {
            name: "ipe",
            label: "IPE (Instituto de Pensiones del Estado de Veracruz)",
          },
          {
            name: "uv",
            label: "UV (Universidad Veracruzana)",
          },
          {
            name: "gob",
            label: "Gobierno del Estado de Veracruz",
          },
          {
            name: "congresoVeracruz",
            label: "Congreso del Estado de Veracruz",
          },
          {
            name: "magisterioEstatalVeracruz",
            label: "Magisterio Estatal de Veracruz",
          },
          {
            name: "snte32",
            label: "SNTE 32",
          },
          {
            name: "sesver",
            label: "Secretaría de Salud de Veracruz (SESVER)",
          },
          {
            name: "ivec",
            label: "IVEC (Instituto veracruzano de la Cultura)",
          },
          {
            name: "ux",
            label: "Universidad de Xalapa",
          },
          {
            name: "cfe",
            label: "CFE",
          },
          {
            name: "sspv",
            label: "Secretaría de Seguridad Publica de Veracruz",
          },
          {
            name: "ninguna",
            label: "Ninguna de las mencionadas",
          },
        ];
      }
      if (this.form.step0_estadoLabora === "Guanajuato") {
        this.radioGroupEntidad = [
          {
            name: "snte13",
            label: "SNTE 13",
          },
          {
            name: "snte45",
            label: "SNTE 45",
          },
          {
            name: "poderJudicialGuanajuato",
            label: "Poder Judicial del Estado de Guanajuato",
          },
          {
            name: "sabes",
            label: "SABES",
          },
          {
            name: "gobGuanajuato",
            label: "Gobierno del Estado de Guanajuato",
          },
          {
            name: "secretariaSaludGuanajuato",
            label: "Secretaría de Salud de Guanajuato",
          },
          {
            name: "ninguna",
            label: "Ninguna",
          },
        ];
      }
      if (this.form.step0_estadoLabora === "Puebla") {
        this.radioGroupEntidad = [
          {
            name: "gobPuebla",
            label: "Gobierno del Estado de Puebla",
          },
          {
            name: "snte23",
            label: "SNTE 23 (Magisterio federal de Puebla)",
          },
          {
            name: "snte51",
            label: "SNTE 51 (Magisterio estatal de Puebla)",
          },
          {
            name: "buap",
            label: "BUAP (Benemérita Universidad Autónoma de Puebla)",
          },
          {
            name: "issstep",
            label: "ISSSTEP (Trabajador activo, pensionado o jubilado)",
          },
          {
            name: "sectorSaludPuebla",
            label: "Sector Salud de Puebla (Trabajadores Federales)",
          },
          {
            name: "cecytePuebla",
            label: "CECyTE Puebla",
          },
          {
            name: "ayuntamientoPuebla",
            label: "H. Ayuntamiento de Puebla",
          },
          {
            name: "cobaep",
            label: "COBAEP - Colegio de Bachilleres de Estado de Puebla",
          },
          {
            name: "ninguna",
            label: "Ninguna de las mencionadas",
          },
        ];
      }
      if (this.form.step0_estadoLabora === "Guerrero") {
        this.radioGroupEntidad = [
          {
            name: "gobGuerrero",
            label: "Gobierno del Estado de Guerrero",
          },
          {
            name: "magisterioGuerrero",
            label: "Magisterio Estatal de Guerrero",
          },
          {
            name: "ninguna",
            label: "Ninguna de las mencionadas",
          },
        ];
      }
      if (this.form.step0_estadoLabora === "otro") {
        this.noAplica = true;
        this.mensaje = `
          Lo sentimos, en este momento otorgamos créditos exclusivamente a trabajadores del sector público en los estados de Guanajuato, Puebla, Veracruz y Guerrero.
          <br /><br />
          Te invitamos a seguirnos en Facebook para no perderte nuestras próximas aperturas de convenios.
        `;
      }
    },
    toUpperCase() {
      event.target.value = event.target.value.toUpperCase();
    },
    btnEnviar() {
      if (!this.validForm()) return;
      alert(
        "Tu crédito se solicitó con éxito. Un asesor se comunicará contigo lo más pronto posible"
      );
    },
    btnSiguiente() {
      if (this.currentStep > 3) return;
      if (!this.validForm()) return;
      this.currentStep += 1;
      this.checkStep();
      this.changeHeight();
    },
    btnAnterior() {
      if (this.currentStep <= 0) return;
      this.currentStep -= 1;
      this.checkStep();
      this.changeHeight();
    },
    changeHeight() {
      if (this.noAplica) return;
      this.$refs.stepsWrapper.style.transform = `translateX(-${
        this.currentStep * 100
      }%)`;
      this.$refs.stepsWrapper.style.height = `${
        this.$refs.stepsWrapper.childNodes[this.currentStep].offsetHeight
      }px`;
    },
    validForm() {
      let validForm = true;

      if (this.currentStep === 3) {
        this.medioContactoErrors = [];
        this.avisoPrivacidadErrors = [];

        if (!this.form.step3_aviso) {
          validForm = false;
          this.avisoPrivacidadErrors = [
            {
              $message:
                "Debes aceptar el aviso de privacidad para poder solicitar tu crédito",
            },
          ];
        }

        const mediosSeleccionados = Object.values(
          this.form.step3_medioContacto
        ).filter((medio) => medio);

        if (mediosSeleccionados.length === 0) {
          validForm = false;
          this.medioContactoErrors = [
            { $message: "Selecciona un medio para poder contactarte" },
          ];
        }
      }

      const fields = Object.keys(this.v$.form).filter((field) =>
        field.includes(`step${this.currentStep}`)
      );

      fields.forEach((field) => {
        this.v$.form[field].$touch();
        if (this.v$.form[field].$errors.length > 0) validForm = false;
      });
      this.$nextTick(() => this.changeHeight());

      return validForm;
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

.radio-group label {
  @apply text-xs md:text-sm;
}
</style>