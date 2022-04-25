export interface Insemination {
  id: string;
  date: string;
}

export interface Entry {
  id?: string;
  name: string;
  ovulation: string;
  lastInsemination: string;
  inseminations: Insemination[];
  ovulationDays: number;
  inseminationDays: number;
}

export type SortByList = 'name' | 'lastInsemination' | 'ovulation';
