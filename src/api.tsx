export interface GearUser {
  email: string;
  name: string;
  locked: number;
  avatar?: string;
  roles?: RoleMapping[];
}
export interface RoleMapping {
  id: number;
  userEmail: string;
  role: string;
  environment?: string;
  user?: GearUser;
}
export enum UserRole {
  Authenticated = 'authenticated',
  Member = 'member',
  Ci = 'ci',
  System = 'system',
  DataEditor = 'data-editor',
  DataAdmin = 'data-admin',
  ProtoAdmin = 'proto-admin',
  Admin = 'admin',
  Deployer = 'deployer',
  CsViewer = 'cs-viewer',
  CsEditor = 'cs-editor',
  OdlEditor = 'odl-editor',
  OdlAdmin = 'odl-admin',
}

export interface UserRoleMapping {
  role: UserRole;
  environments?: string[];
  isBaseRole?: string;
}
export interface Role {
  name: string;
  title: string;
  description: string;
  isDefault?: boolean;
  environmentSpecific?: boolean;
  includes?: string[];
}
