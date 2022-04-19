import { addDays, format } from 'date-fns';

export const formatDate = (date: Date, typeFormat = 'dd/MM/yyy'): string => format(date, typeFormat);

export const generateDateId = (): string => new Date().getTime().toString();

export const calculateDays = (date: string, days: number): Date => addDays(new Date(date), days);
