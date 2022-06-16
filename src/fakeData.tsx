export const allRole = [
  { name: 'member', title: 'Member', description: 'Readonly' },
  { name: 'ci', title: 'CI', description: 'CI APIs', includes: ['member'] },
  {
    name: 'system',
    title: 'System',
    description: 'System related',
    includes: ['ci'],
  },
  {
    name: 'data-editor',
    title: 'Data Editor',
    description: 'Can update Blueprint Data',
    includes: ['member'],
  },
  {
    name: 'data-admin',
    title: 'Data Admin',
    description: 'Can update Blueprint Data and Blueprint Version',
    includes: ['member', 'data-editor'],
  },
  {
    name: 'proto-admin',
    title: 'Proto Admin',
    description: 'Can sync/update Blueprint Proto',
    includes: ['member'],
  },
  {
    name: 'admin',
    title: 'Admin',
    description: 'Equals Data Admin and Proto Admin',
    includes: ['member', 'data-admin', 'proto-admin'],
  },
  {
    name: 'deployer',
    title: 'Deployer',
    description: 'Can deploy Blueprint Data and update Game Config',
    environmentSpecific: true,
    includes: ['member'],
  },
  {
    name: 'cs-viewer',
    title: 'CS Viewer',
    description: 'Can use CS tools to read',
    includes: ['member'],
  },
  {
    name: 'cs-editor',
    title: 'CS Editor',
    description: 'Can use CS tools to edit',
    includes: ['member', 'cs-viewer'],
  },
  {
    name: 'odl-editor',
    title: 'ODL Editor',
    description: 'Can upload files and build ODL',
    includes: ['member'],
  },
  {
    name: 'odl-admin',
    title: 'ODL Admin',
    description: 'Can upload/remove files and build ODL',
    includes: ['member', 'odl-editor'],
  },
];

export const userRoles = [
  { role: 'admin', environments: [], isBaseRole: true },
  { role: 'data-admin', environments: [], isBaseRole: false },
  { role: 'data-editor', environments: [], isBaseRole: false },
  { role: 'proto-admin', environments: [], isBaseRole: false },
  { role: 'system', environments: [], isBaseRole: true },
  { role: 'ci', environments: [], isBaseRole: false },
  { role: 'odl-admin', environments: [], isBaseRole: false },
  { role: 'odl-editor', environments: [], isBaseRole: false },
  { role: 'deployer', environments: ['dev'], isBaseRole: false },
  { role: 'cs-editor', environments: [], isBaseRole: false },
  { role: 'cs-viewer', environments: [], isBaseRole: false },
];
