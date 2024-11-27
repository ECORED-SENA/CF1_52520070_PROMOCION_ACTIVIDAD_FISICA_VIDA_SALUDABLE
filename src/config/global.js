export default {
  global: {
    componenteFormativo: 'Actividad física, beneficios y política pública',
    descripcionCurso:
      'Este componente formativo aborda los conceptos de actividad física, salud, ejercicio físico, y deporte, detallando los beneficios de la actividad física para el bienestar general. También explora los hábitos saludables, el sedentarismo, y las normativas públicas relacionadas con la promoción de estilos de vida saludables, alimentación adecuada y control del tabaquismo. Es una guía para profesionales del deporte y la salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actividad física',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Beneficios de la actividad física',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ejercicio físico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>Fitness y wellness</em>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normas, promoción de hábitos y condiciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ambientes saludables y actividad física',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normatividad sobre alimentación saludable',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52520070_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Salud',
      referencia:
        'Dr. Carlos Jaramillo. (2020). LOS 5 PILARES DE LA SALUD - Dr. Carlos Jaramillo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MB4JWQZjbGE&ab_channel=Dr.CarlosJaramillo',
    },
    {
      tema: 'Actividad física',
      referencia:
        'RevistaSemana.  (2023). .¿Caminar cuenta como actividad física? | Carlos Jaramillo en Educando ConCiencia - Semana Play. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FiczO1NgjLw&ab_channel=RevistaSemana',
    },
    {
      tema: 'Beneficios de la actividad física',
      referencia:
        'Aprendemos Juntos 2030. (2020).  Los beneficios del ejercicio para tu cerebro. Wendy Suzuki, neurocientífica. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=PXvz8zyuob0&ab_channel=AprendemosJuntos2030',
    },
    {
      tema: 'Ejercicio físico',
      referencia:
        'Ministerio de Sanidad. (s.f.). Conceptos importantes en materia de Actividad Física y de Condición Física.',
      tipo: 'Documento',
      link:
        'https://www.sanidad.gob.es/areas/promocionPrevencion/actividadFisica/guiaInfanciaAdolescencia/docs/capitulo1_Es.pdf',
    },
    {
      tema: '<em>Fitness y wellness</em>',
      referencia:
        'GYM en CASA con Alejo Wellness (2021). Que es WELLNESS? como vivir el WELLNESS?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=u0UeRNGdtbU&ab_channel=GYMenCASAconAlejoWellness',
    },
    {
      tema: 'Normatividad sobre alimentación saludable',
      referencia:
        'Universidad UNAB (2023).Te contamos sobre la Ley de etiquetado de alimentos en Colombia. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=QMVKj63ADSI&ab_channel=Vor%C3%A1gine',
    },
  ],
  glosario: [
    {
      termino: 'Actividad física',
      significado:
        'cualquier movimiento corporal que produce un gasto de energía por encima del metabolismo basal.',
    },
    {
      termino: 'Aptitud física',
      significado:
        'conjunto de atributos relacionados con la capacidad de realizar actividades cotidianas con vigor y sin fatiga.',
    },
    {
      termino: 'Deporte',
      significado:
        'ejercicio estructurado con fines competitivos que involucra reglas, puntuación y especialización de habilidades físicas.',
    },
    {
      termino: 'Ejercicio físico',
      significado:
        'actividad física planeada, estructurada y repetitiva que tiene como objetivo mejorar o mantener la condición física.',
    },
    {
      termino: 'Fitness',
      significado:
        'estado físico que se obtiene a través de la actividad física regular y que mejora la resistencia, fuerza y flexibilidad.',
    },
    {
      termino: 'Hábitos saludables',
      significado:
        'pautas de comportamiento que contribuyen a mejorar la salud y el bienestar, como la actividad física regular y la alimentación adecuada.',
    },
    {
      termino: 'Normativa pública',
      significado:
        'conjunto de leyes y regulaciones que promueven y protegen la salud pública mediante la promoción de estilos de vida saludables y la prevención de riesgos.',
    },
    {
      termino: 'Salud',
      significado:
        'estado de completo bienestar físico, mental y social, y no meramente la ausencia de enfermedad o dolencia.',
    },
    {
      termino: 'Sedentarismo',
      significado:
        'conducta caracterizada por la realización de actividades que implican un bajo gasto de energía, como estar sentado o ver televisión.',
    },
    {
      termino: '<em>Wellness</em>',
      significado:
        'búsqueda del equilibrio integral entre cuerpo y mente, más allá del estado físico, para alcanzar bienestar mental, emocional y físico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andujar, A. J. C. (2010). <em>El desarrollo de la condición física para la mejora de la salud en adultos y personas mayores</em>. Actividad física, salud y calidad de vida.',
      link: '',
    },
    {
      referencia:
        'Barroso, G. V. (s.f.). <em>Calidad de vida: hábitos y estilos de vida saludables</em>. Gema Vílchez Barroso.',
      link: '',
    },
    {
      referencia:
        'Blasco, T., Ortís, L. C., y Feliu, J. C. (1994). Relaciones entre actividad física y salud. <em>Anuario de psicología /The UB Journal of psychology, 61</em>, 19-24.',
      link: '',
    },
    {
      referencia:
        'Caspersen, J. C., Powel, E. K., y Christenson, M. G. (1985). Actividad física, ejercicio y condición física: Definiciones y distinciones para la investigación relacionada a la salud. <em>Public Health Reports</em>, 100(2), 126-131.',
      link: '',
    },
    {
      referencia:
        'Cortés Castañeda, Ó. B., y Martínez Ostos, L. (s.f.). Factores de riesgo de enfermedad cardiovascular, en las secretarias del área administrativa de la Fundación Universitaria del Área Andina sede Bogotá.',
      link: '',
    },
    {
      referencia:
        'Corrales, A. R. (2009). Hábitos saludables de la población relacionados con la actividad física como ocio. <em>Trances, 1</em>(2), 80-91.',
      link: '',
    },
    {
      referencia:
        'Isidro, F. (2007). <em>Manual del entrenador personal. Del fitness al wellness (Color) (Vol. 93)</em>. Editorial Paidotribo.',
      link: '',
    },
    {
      referencia:
        'López Miñarro, P. A., y Rodríguez García, P. L. (2001). Ejercicios físicos desaconsejados para la columna vertebral y alternativas para su corrección. <em>Selección: Revista española de medicina de la educación física y el deporte, 10</em>(1), 9-19.',
      link: '',
    },
    {
      referencia:
        'Quijano, M., y Andrés, R. (2015). Análisis del proceso de formulación de planes decenales para los entes territoriales en el departamento de Risaralda: Plan decenal en deporte, recreación, actividad física y educación física.',
      link: '',
    },
    {
      referencia:
        'Rangel Caballero, L. G., Rojas Sánchez, L. Z., y Gamboa Delgado, E. M. (2015). Actividad física y composición corporal en estudiantes universitarios de cultura física, deporte y recreación. <em>Revista de la Universidad Industrial de Santander. Salud, 47</em>(3), 281-290.',
      link: '',
    },
    {
      referencia:
        'Tamayo, D. M., y Romero Murillo, H. A. (2009). Riesgo cardiovascular en practicantes de clases grupales de fin de semana de la Villa Olímpica (aerobistas novatos) del proyecto "La Villa" de la Secretaria Municipal de Deporte y Recreación Pereira 2009.',
      link: '',
    },
    {
      referencia:
        'Zaragoza Casterad, J., Serrano Ostariz, E., y Generelo Lanaspa, E. (2004). Dimensiones de la condición física saludable: evolución según edad y género. <em>Dimensions of the healthy physical fitness: Evolution for age and gender</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy del Pilar Aguirre Caicedo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo ',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locución ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
