interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Recursos'
  },
  {
    name: 'Usuários',
    url: '/usuario',
    icon: 'icon-user',
    children: [
      {
        name: 'Novo usuário',
        url: '/usuario/novo',
        icon: 'icon-user-follow'
      }
    ]
  },
  {
    name: 'Professores',
    url: '/professor',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Novo professor',
        url: '/professor/novo',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Cursos',
    url: '/curso',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Novo curso',
        url: '/curso/novo',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'Estudantes',
    url: '/estudante',
    icon: 'icon-user-female',
    children: [
      {
        name: 'Novo estudante ',
        url: '/estudante/novo',
        icon: 'icon-user-female'
      }
    ]
  },
  {
    name: 'Graficos',
    url: '/graficos',
    icon: 'icon-chart',
  }
];
