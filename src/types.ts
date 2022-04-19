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
}

export type SortByList = 'name' | 'lastInsemination' | 'ovulation';
