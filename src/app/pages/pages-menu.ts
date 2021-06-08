import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ORIG: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];





export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OPCIONES',
    group: true,
  },

  {
    title: 'Ahorra',
    icon: 'lock-outline',
    children: [
      {
        title: 'Consejos',
        link: '/pages/busca',
      },
      {
        title: 'Ahorro',
        link: '/pages/cuida-ahorra-tipcoin',
      }
    ],
  },

  {
    title: 'Invierte',
    icon: 'lock-outline',
    children: [
      {
        title: 'Asesoramiento',
        link: '/pages/sube',
      },
      {
        title: 'Invierte',
        link: '/pages/crece-invierte-tipcoin',
      },

    ],
  },
  {
    title: 'Tokens',
    icon: 'lock-outline',
    children: [
      {
        title: 'Saldo',
        link: '/pages/tipcoin-saldo',
      },
      {
        title: 'Simula',
        link: '/pages/tipcoin-simula',
      },
      {
        title: 'Regala',
        link: '/pages/tipcoin-regala',
      },
      {
        title: 'Analiza',
        link: '/pages/analiza',
      },

    ],
  },
  {
    title: 'PERFIL',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
