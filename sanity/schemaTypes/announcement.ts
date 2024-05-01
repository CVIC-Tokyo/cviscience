export default {
  name: 'announcement',
  type: 'document',
  title: 'Announcement',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of announcement (Japanese)',
    },
    {
      name: 'entitle',
      type: 'string',
      title: 'Title of announcement (English)',
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
      name: 'contentImage',
      type: 'image',
      title: 'Content Image',
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
