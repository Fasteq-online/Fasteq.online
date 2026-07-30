export const pricing = {
  name: 'pricing',
  title: 'Pricing Plans',
  type: 'document',
  fields: [
    { name: 'name', title: 'Plan Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'features', title: 'Features List', type: 'array', of: [{type: 'string'}] },
    { name: 'isPopular', title: 'Highlight as Popular?', type: 'boolean' },
    { name: 'order', title: 'Display Order', type: 'number' }
  ]
}