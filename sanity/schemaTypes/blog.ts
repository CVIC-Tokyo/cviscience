export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of article (Japanese)',
    },
    {
      name: 'entitle',
      type: 'string',
      title: 'Title of article (English)',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your article',
      options: {
        source: 'entitle',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description (Japanese)',
    },
    {
      name: 'ensmallDescription',
      type: 'text',
      title: 'Small Description (English)',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content (Japanese)',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'encontent',
      type: 'array',
      title: 'Content (English)',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
