<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Actividad física, salud y normativa pública',
      titulo: 'Cuestionario',
      introduccion:
        'Reconocer los conceptos clave relacionados con la actividad física, la salud, los beneficios del ejercicio, el sedentarismo y las normativas públicas que promueven estilos de vida saludables.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la actividad física?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Movimientos planificados y repetitivos sin gasto energético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Movimientos que únicamente ocurren en el deporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cualquier movimiento corporal que produce un gasto de energía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cualquier actividad relacionada con el ejercicio físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un beneficio de la actividad física?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa el riesgo de enfermedades cardíacas.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Aumenta la fatiga física.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Disminuye la calidad de vida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuye la presión arterial en hipertensos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cómo se define la salud según la OMS?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una condición física sin dolencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado de completo bienestar físico, mental y social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La ausencia de enfermedades graves.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad de mantener un estilo de vida activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes no es un dominio en el que se desarrolla la actividad física?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'En el hogar.', esCorrecta: false },
            { id: 'b', texto: 'En el contexto laboral.', esCorrecta: false },
            { id: 'c', texto: 'En el transporte.', esCorrecta: false },
            { id: 'd', texto: 'En actividades escolares.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué término describe un estilo de vida con actividades que requieren un bajo gasto de energía?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejercicio físico.', esCorrecta: false },
            { id: 'b', texto: 'Sedentarismo.', esCorrecta: true },
            { id: 'c', texto: 'Deporte.', esCorrecta: false },
            { id: 'd', texto: 'Aptitud física.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El ejercicio físico se caracteriza por ser una actividad:',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Espontánea y sin planificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planeada, estructurada y repetitiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente de competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De bajo esfuerzo y sin intensidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es un componente de la aptitud física?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resistencia cardiorrespiratoria.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Velocidad.', esCorrecta: false },
            { id: 'c', texto: 'Coordinación.', esCorrecta: false },
            { id: 'd', texto: 'Precisión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué busca el concepto de "Wellness"?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar solo la condición física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollar únicamente la fuerza muscular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Optimizar la capacidad atlética.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Equilibrar cuerpo y mente.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El sedentarismo es considerado un factor de riesgo independiente para la salud.',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Según el material, la actividad física en el tiempo libre es el único dominio donde se realiza.',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
