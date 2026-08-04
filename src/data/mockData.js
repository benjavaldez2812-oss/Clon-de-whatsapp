export const contacts = [
  {
    id: 'laura',
    name: 'Laura Gonzalez',
    avatar: null,
    lastSeen: 'últ. vez hoy 18:45',
    unread: 3,
  },
  {
    id: 'damian',
    name: 'Damian Ricardo',
    avatar: null,
    lastSeen: 'últ. vez hoy 15:30',
    unread: 0,
  },
  {
    id: 'grupo',
    name: 'Grupo de T.P.',
    avatar: null,
    lastSeen: '',
    isGroup: true,
    unread: 5,
  },
  {
    id: 'mariana',
    name: 'Mariana Ruiz',
    avatar: null,
    lastSeen: 'últ. vez hoy 10:00',
    unread: 0,
  },
  {
    id: 'sergio',
    name: 'Sergio López',
    avatar: null,
    lastSeen: 'últ. vez hoy 09:15',
    unread: 1,
  },
];

export const initialConversations = {
  laura: [
    {
      id: 1,
      text: 'Todo bien, gracias. ¿Qué tal el proyecto?',
      time: '18:27',
      fromMe: false,
    },
    {
      id: 2,
      text: 'Hola Laura, ¿cómo estás?',
      time: '18:25',
      fromMe: true,
    },
    {
      id: 3,
      text: 'Claro, te lo mando en un rato. Nos vemos a las 5.',
      time: '18:30',
      fromMe: false,
    },
    {
      id: 4,
      text: 'Avanzando. Necesito que me envíes el documento.',
      time: '18:28',
      fromMe: true,
    },
  ],
  damian: [
    {
      id: 1,
      text: 'El reporte está listo.',
      time: '14:20',
      fromMe: false,
    },
    {
      id: 2,
      text: 'Perfecto, lo reviso ahora.',
      time: '14:22',
      fromMe: true,
    },
  ],
  grupo: [
    {
      id: 1,
      text: 'Reunión cancelada.',
      time: '09:15',
      fromMe: false,
      sender: 'Mariana',
    },
    {
      id: 2,
      text: '¿Reprogramamos para mañana?',
      time: '09:20',
      fromMe: true,
    },
    {
      id: 3,
      text: 'Dale, aviso al resto.',
      time: '09:22',
      fromMe: false,
      sender: 'Sergio',
    },
  ],
  mariana: [
    {
      id: 1,
      text: 'Perfecto, gracias.',
      time: '11:00',
      fromMe: false,
    },
    {
      id: 2,
      text: 'Te mandé los archivos por mail.',
      time: '10:55',
      fromMe: true,
    },
  ],
  sergio: [
    {
      id: 1,
      text: 'Te llamo en 5.',
      time: '10:05',
      fromMe: false,
    },
    {
      id: 2,
      text: 'Dale, estoy disponible.',
      time: '10:06',
      fromMe: true,
    },
  ],
};

// Helper to get last message for a contact
export const getLastMessage = (conversations, contactId) => {
  const msgs = conversations[contactId];
  if (!msgs || msgs.length === 0) return { text: '', time: '' };
  return msgs[msgs.length - 1];
};

// Helper to get last time for sorting
export const getLastTime = (conversations, contactId) => {
  const msgs = conversations[contactId];
  if (!msgs || msgs.length === 0) return '';
  return msgs[msgs.length - 1].time;
};
