import { Admin, Aviso, Employee, HRDocument, EPI, NR, ASO, Notification } from '../types';

export const initialAdmins: Admin[] = [
  {
    id: 'adm-001',
    name: 'Administrador',
    login: '14027455916',
    password: '45032010',
  },
];

export const initialEmployees: Employee[] = [
  {
    id: 'emp-001',
    name: 'usuario-comum',
    login: '05347357975',
    password: '123456',

  }
];
export const initialDocuments: HRDocument[] = [];
export const initialEPIs: EPI[] = [];
export const initialNRs: NR[] = [];
export const initialASOs: ASO[] = [];
export const initialAvisos: Aviso[] = [];
export const initialNotifications: Notification[] = [];
