export const team = {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'bio', title: 'Short Bio', type: 'text' },
    { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    { name: 'isCEO', title: 'Is this the CEO?', type: 'boolean' }
  ]
}