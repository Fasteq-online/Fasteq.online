export const project = {
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'tags', title: 'Technologies/Tags', type: 'array', of: [{type: 'string'}] },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'color', title: 'Background Color Class', type: 'string', description: 'e.g. bg-[#0D2E2F]' },
    { name: 'order', title: 'Display Order', type: 'number', description: 'Order number (1, 2, 3, 4 will appear on homepage)' }
  ]
}