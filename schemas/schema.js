// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "author",
      title: "Author",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "url",
          title: "Personal Website",
          type: "string",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "avatar",
          type: "image",
          title: "Avatar",
          validation: Rule => {
            Rule.required();
          },
        },
      ],
    },
    {
      name: "blog",
      type: "document",
      title: "Blog",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "coverImage",
          type: "image",
          title: "Cover Image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Description",
            },
          ],
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  type: "text",
                  name: "alt",
                  title: "Description",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true,
              },
            },
            {
              type: "code",
              options: {
                withFilename: true,
              },
            },
          ],
        },
        {
          name: "date",
          type: "datetime",
          title: "Date",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "isFeatured",
          type: "boolean",
          title: "isFeatured",
          validation: Rule => {
            Rule.required();
          },
        },
        {
          name: "slug",
          type: "slug",
          title: "Slug",
          validation: Rule => {
            Rule.required();
          },
          },
        {
          name: "category",
          type: "string",
          title: "Category",
        },
        {
          name: "author",
          type: "reference",
          title: "Author",
          to: [{ type: "author" }],
        },
      ],
    },
  ]),
});
