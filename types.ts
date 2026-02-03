
export enum SlideId {
  FRONT = 'frnt',
  ABOUT = 'about',
  BILLION = 'billion $ prjkts',
  LATEST = 'latest prjkt'
}

export interface NavItem {
  id: SlideId;
  label: string;
}
