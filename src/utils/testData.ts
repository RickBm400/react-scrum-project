interface Comment {
  author: string;
  message: string;
  timeStamp: string;
}

interface Inside {
  title: string;
  description: string;
  storyPoints: number;
  assignedTo: string;
  createdAt: string;
  dueDate: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  category: 'FRONT_END' | 'BACK_END' | 'FULL_STACK' | 'DESIGN';
  comments: Comment[];
}

interface TaskBoard {
  HEADER: 'por hacer' | 'detenido' | 'En curso' | 'hechos';
  insides: Inside[];
}

export const task_board: TaskBoard[] = [
  {
    HEADER: 'por hacer',
    insides: [
      {
        title: 'Crear formulario de registro',
        description: 'Desarrollar el formulario de registro con validación.',
        storyPoints: 5,
        assignedTo: 'Ricardo BM.',
        createdAt: '2024-09-22',
        dueDate: '2024-10-05',
        priority: 'HIGH',
        category: 'FRONT_END',
        comments: [
          {
            author: 'Jose JB',
            message: 'Se necesita confirmar los campos obligatorios.',
            timeStamp: '2024-09-22T10:00:00Z',
          },
          {
            author: 'Carlos MH',
            message:
              'Agregué validaciones iniciales, falta conectar al backend.',
            timeStamp: '2024-09-23T12:30:00Z',
          },
          {
            author: 'Ana LV',
            message: 'Verificar estilos para el formulario, están en Figma.',
            timeStamp: '2024-09-24T09:45:00Z',
          },
        ],
      },
      {
        title: 'Implementar autenticación',
        description: 'Agregar autenticación JWT para proteger las rutas.',
        storyPoints: 8,
        assignedTo: 'Ricardo BM.',
        createdAt: '2024-09-22',
        dueDate: '2024-10-12',
        priority: 'MEDIUM',
        category: 'BACK_END',
        comments: [
          {
            author: 'Jose JB',
            message:
              'Revise la documentación de autenticación, falta integrarlo.',
            timeStamp: '2024-09-23T14:00:00Z',
          },
          {
            author: 'Carlos MH',
            message: 'Se completó la configuración del JWT.',
            timeStamp: '2024-09-24T10:00:00Z',
          },
          {
            author: 'Ana LV',
            message: 'Faltan algunas pruebas unitarias para la autenticación.',
            timeStamp: '2024-09-25T11:15:00Z',
          },
        ],
      },
    ],
  },
  {
    HEADER: 'detenido',
    insides: [
      {
        title: 'Integrar pagos con Stripe',
        description: 'Configurar pagos recurrentes con Stripe.',
        storyPoints: 13,
        assignedTo: 'Laura GZ.',
        createdAt: '2024-09-20',
        dueDate: '2024-10-15',
        priority: 'HIGH',
        category: 'BACK_END',
        comments: [
          {
            author: 'Jose JB',
            message: 'Hay un problema con el webhook de Stripe.',
            timeStamp: '2024-09-22T10:00:00Z',
          },
          {
            author: 'Laura GZ',
            message: 'Estamos esperando confirmación del equipo de soporte.',
            timeStamp: '2024-09-23T12:30:00Z',
          },
          {
            author: 'Carlos MH',
            message: 'Se está revisando la documentación adicional.',
            timeStamp: '2024-09-24T09:45:00Z',
          },
        ],
      },
    ],
  },
  {
    HEADER: 'En curso',
    insides: [
      {
        title: 'Crear dashboard de análisis',
        description: 'Diseñar y desarrollar el dashboard de métricas.',
        storyPoints: 10,
        assignedTo: 'Carlos MH.',
        createdAt: '2024-09-21',
        dueDate: '2024-10-10',
        priority: 'MEDIUM',
        category: 'FULL_STACK',
        comments: [
          {
            author: 'Jose JB',
            message: 'La maqueta del dashboard está lista.',
            timeStamp: '2024-09-22T10:00:00Z',
          },
          {
            author: 'Carlos MH',
            message: 'Conectando las APIs para las métricas.',
            timeStamp: '2024-09-23T12:30:00Z',
          },
          {
            author: 'Ana LV',
            message: 'Faltan algunos ajustes de diseño responsive.',
            timeStamp: '2024-09-24T09:45:00Z',
          },
        ],
      },
    ],
  },
  {
    HEADER: 'hechos',
    insides: [
      {
        title: 'Diseñar logo del sitio',
        description: 'Crear el logo y definir la paleta de colores.',
        storyPoints: 3,
        assignedTo: 'Ana LV.',
        createdAt: '2024-09-15',
        dueDate: '2024-09-18',
        priority: 'LOW',
        category: 'DESIGN',
        comments: [
          {
            author: 'Jose JB',
            message: 'El primer boceto está en revisión.',
            timeStamp: '2024-09-16T10:00:00Z',
          },
          {
            author: 'Ana LV',
            message: 'Logo finalizado y aprobado.',
            timeStamp: '2024-09-17T12:30:00Z',
          },
          {
            author: 'Laura GZ',
            message: 'Paleta de colores integrada al branding.',
            timeStamp: '2024-09-18T09:45:00Z',
          },
        ],
      },
    ],
  },
];

