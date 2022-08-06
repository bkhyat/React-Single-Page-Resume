export interface mainTitleInterface {
  fullName?: string;
  currentDesignation?: string;
  extra?: string;
  address?: string;
}

interface extraContact {
  contact?: string;
  link?: string;
}

export interface extraContacts extends Array<extraContact> {}

export interface contactsInterface {
  [index: string]: any;
}

export interface titleInterface extends mainTitleInterface {
  contacts?: contactsInterface;
}

export interface iconTextInterface {
  icon?: string;
  text?: string;
  tooltip?: string;
  link?: string;
}

export interface sectionHeaderInterface {
  header?: string;
  styles?: any;
}

export interface profileInterface {
  string: [];
}

interface techSkill {
  name?: string;
  level?: number;
}

interface techSkills extends Array<techSkill> {}

export interface techSkillInterface {
  [index: string]: techSkills;
}

export interface educationItemInterface {
  university: string;
  school: string;
  address: string;
  course: string;
  level: string;
  start_date: string;
  end_date: string;
  score: string;
  description: string;
}

export interface educationListInterface extends Array<educationItemInterface> {}

interface achievement {
  bullet: string;
  link?: string | null;
}

export interface achievementInterface extends Array<achievement> {}

export interface experienceItemInterface {
  skills: string[];
  bullets: string[];
  designation: string;
  organization: string;
  address: string;
  job_type: string;
  job_model: string;
  start_date: string;
  end_date?: string | null;
}


export interface experienceListInterface extends Array<experienceItemInterface> {
}
