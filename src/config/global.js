export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conocimiento científico en Colombia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciencia, tecnología e innovación, en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Marco legal y políticas públicas de CTeI la investigación científica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Educación y formación en CTeI',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Retos y oportunidades de CTeI en Colombia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: ' Sistemas de información en CTeI',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos para la divulgación científica y tecnológica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Red Colombiana de Información Científica (RedCol)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acevedo-Jaramillo, M., González-Arango, Ó. & Zamudio-Cárdenas, L. (2022). El Sistema Nacional de Ciencia, Tecnología e Innovación en Colombia: Una perspectiva evolutiva. Revista Colombiana de Ciencias Sociales, 13(1), pp. 145-168.',
      link: '',
    },
    {
      referencia:
        'Banco Mundial. (2023). Indicadores de Ciencia y Tecnología: Colombia.',
      link:
        'https://datos.bancomundial.org/indicator/GB.XPD.RSDV.GD.ZS?locations=CO',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1286 de 2009: Por la cual se modifica la Ley 29 de 1990, se transforma a Colciencias en Departamento Administrativo y se fortalece el Sistema Nacional de Ciencia, Tecnología e Innovación en Colombia. Diario Oficial.',
      link: 'https://minciencias.gov.co/normatividad/ley-1286-2009',
    },
    {
      referencia:
        'Departamento Nacional de Planeación [DNP]. (2022). CONPES 4069: Nueva política de ciencia, tecnología e innovación 2022-2031. Ministerio de Ciencia, Tecnología e Innovación.',
      link:
        'https://minciencias.gov.co/conpes-4069-nueva-politica-ciencia-tecnologia-e-innovacion-2022-2031',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2021). Decreto 1666 de 2021: Por el cual se modifica el Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTI).',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=173951',
    },
    {
      referencia:
        'Germán García, E. Campo González, D. & Solarte, M. C. (2022). Conocimiento científico y educación ambiental para la formación de profesores. Programa Editorial Universidad del Valle.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/269634',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2023). Norma Técnica Colombiana NTC 1486: Documentación, presentación de tesis, trabajos de grado y otros trabajos de investigación.',
      link:
        'https://tienda.icontec.org/gp-ntc-documentacion-presentacion-de-trabajos-academicos-y-referencias-bibliograficas-ntc1486-2022.html',
    },
    {
      referencia:
        'López Cantos, F. J. (2018). Cultura visual y conocimiento científico: comunicación transmedia de la ciencia en la era Big Data. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116307',
    },
    {
      referencia:
        'Maz-Machado, A., Jiménez-Fanjul, N. N, & Villarraga Rico, M. E. (2022). La producción científica colombiana en SciELO: un análisis bibliométrico. Revista Interamericana de Bibliotecología, 39(2).',
      link: 'https://doi.org/10.17533/udea.rib.v39n2a03',
    },
    {
      referencia:
        'Observatorio Colombiano de Ciencia y Tecnología [OCyT]. (2023). Indicadores de Ciencia, Tecnología e Innovación Colombia 2023.',
      link:
        'https://ocyt.org.co/wp-content/uploads/2024/04/INFORME-DE-GESTION-2023.pdf',
    },
    {
      referencia:
        'Zamora Bonilla, J. P. (2022). La lonja del saber: introducción a la economía del conocimiento científico. UNED - Universidad Nacional de Educación a Distancia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217783',
    },
  ],
  glosario: [
    {
      termino: 'Bioeconomía',
      significado:
        'Sistema económico que utiliza los recursos biológicos renovables, para producir alimentos, energía, productos y servicios, de manera sostenible.',
    },
    {
      termino: 'Ciencia ciudadana',
      significado:
        'Práctica científica que involucra la participación activa del público general, en actividades de investigación científica.',
    },
    {
      termino: 'CTeI',
      significado:
        'Sigla que hace referencia a Ciencia, Tecnología e Innovación.',
    },
    {
      termino: 'CvLAC',
      significado:
        'Currículum Vitae de Latinoamérica y el Caribe, plataforma para el registro y visualización de hojas de vida de investigadores.',
    },
    {
      termino: 'DOI',
      significado:
        'Identificador de Objeto Digital (<i>Digital Object Identifier</i>), código único que se utiliza para identificar de manera permanente, documentos digitales.',
    },
    {
      termino: 'Ecosistema de innovación',
      significado:
        'Red de organizaciones, instituciones y personas, que interactúan para facilitar la generación y aplicación de innovaciones.',
    },
    {
      termino: 'GrupLAC',
      significado:
        'Plataforma para el registro y visualización de información de grupos de investigación en Latinoamérica y el Caribe.',
    },
    {
      termino: 'I+D',
      significado:
        'Sigla que significa Investigación y Desarrollo, actividades sistemáticas que incrementan el volumen de conocimientos.',
    },
    {
      termino: 'I+D+i',
      significado:
        'Investigación, Desarrollo e innovación, concepto que añade la aplicación práctica de los conocimientos.',
    },
    {
      termino: 'InstituLAC',
      significado:
        'Sistema de información para el registro y visualización de instituciones del sistema CTI.',
    },
    {
      termino: 'IoT',
      significado:
        'Internet de las cosas (iot), red de objetos físicos conectados por sensores, <i>software</i> y otras tecnologías.',
    },
    {
      termino: 'NTC 1486:2022',
      significado:
        'Norma Técnica Colombiana que establece los requisitos para la presentación de trabajos académicos.',
    },
    {
      termino: 'ORCID',
      significado:
        'Identificador único para investigadores académicos (<i>Open Researcher and Contributor ID</i>).',
    },
    {
      termino: 'Publindex',
      significado:
        'Sistema Nacional de Indexación de Revistas Científicas Colombianas.',
    },
    {
      termino: 'RedCol',
      significado:
        'Red Colombiana de Información Científica, infraestructura que integra repositorios y sistemas de información científica.',
    },
    {
      termino: 'RENATA',
      significado:
        'Red Nacional Académica de Tecnología Avanzada, infraestructura tecnológica que conecta instituciones académicas.',
    },
    {
      termino: 'Repositorio institucional',
      significado:
        'Plataforma digital que almacena, preserva y difunde la producción académica de una institución.',
    },
    {
      termino: 'SGR',
      significado:
        'Sistema General de Regalías, mecanismo de distribución de los ingresos, provenientes de la explotación de recursos naturales.',
    },
    {
      termino: 'SNCTI',
      significado: 'Sistema Nacional de Ciencia, Tecnología e Innovación.',
    },
    {
      termino: '<i>Spin-off</i>',
      significado:
        'Empresa derivada que surge a partir de una organización existente, generalmente una universidad o centro de investigación.',
    },
    {
      termino: '<i>Startup</i>',
      significado:
        'Empresa emergente que busca arrancar, emprender o montar un nuevo negocio, basado en innovación.',
    },
    {
      termino: 'STEM',
      significado:
        'Sigla en inglés que representa Ciencia, Tecnología, Ingeniería y Matemáticas (<i>Science, Technology, Engineering, Mathematics</i>).',
    },
    {
      termino: 'Vigilancia tecnológica',
      significado:
        'Proceso organizado de observación y análisis del entorno científico y tecnológico, para la toma de decisiones.',
    },
    {
      termino: '<i>Web of Science</i>',
      significado:
        'Base de datos de referencias bibliográficas y citas de publicaciones periódicas que recopila información sobre investigación multidisciplinaria.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
