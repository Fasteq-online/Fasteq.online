export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'category', title: 'Category', type: 'string', description: 'e.g. Development' },
    { name: 'icon', title: 'Icon SVG Path', type: 'string' },
    { name: 'features', title: 'Features', type: 'array', of: [{type: 'string'}] },
    { name: 'color', title: 'Color Class', type: 'string', description: 'e.g. bg-[#0D2E2F]' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}