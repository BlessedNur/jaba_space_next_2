export interface ObjectiveItem {
  number: string;
  title: string;
  description: string;
  variant: 'default' | 'dark' | 'orange';
}

export interface ServiceItem {
  name: string;
  active: boolean;
}

export interface SectorItem {
  name: string;
  icon: string;
  active: boolean;
}

export interface ActivityItem {
  image: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
}

export interface ExpertItem {
  image: string;
  title: string;
  description: string;
  name: string;
  company: string;
  variant: 'default' | 'dark';
}

export interface StatisticItem {
  value: string;
  label: string;
}