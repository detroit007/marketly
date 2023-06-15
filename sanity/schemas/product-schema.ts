const products = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "category",
            title: "Category",
            type: "string"
        },
        {
            name: "type",
            title: "Type",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "number"
        },
        {
            name: "size",
            title: "Sizes",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "quantity",
            title: "Quantity",
            type: "number"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {source: "name"}
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        {
                            name: "alt",
                            title: "Alt",
                            type: "string"
                        },
                    ]
                }
            ],
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "detail",
            title: "Details",
            type: "string"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{type: "block"}]
        },
    ],
    initialValue: {
        size: ["XS", "S", "M", "L", "XL"],
        quantity: 99,
        detail: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        content: [
            {
              "_type": "block",
              "style": "normal",
              "_key": "74fd3ca31fea",
              "listItem": "bullet",
              "markDefs": [],
              "children": [
                {
                  "_type": "span",
                  "marks": [
                    "strong"
                  ],
                  "text": "Hand wash using cold water.",
                  "_key": "a2a649660c730"
                }
              ],
              "level": 1
            },
            {
              "level": 1,
              "_type": "block",
              "style": "normal",
              "_key": "180ace65ea4a",
              "listItem": "bullet",
              "markDefs": [],
              "children": [
                {
                  "marks": [
                    "strong"
                  ],
                  "text": "Do not using bleach.",
                  "_key": "9aa70ddff8620",
                  "_type": "span"
                }
              ]
            },
            {
              "style": "normal",
              "_key": "77eb5d77c81c",
              "listItem": "bullet",
              "markDefs": [],
              "children": [
                {
                  "_type": "span",
                  "marks": [
                    "strong"
                  ],
                  "text": "Hang it to dry.",
                  "_key": "ee3f971258680"
                }
              ],
              "level": 1,
              "_type": "block"
            },
            {
              "_key": "9bb0272502d9",
              "listItem": "bullet",
              "markDefs": [],
              "children": [
                {
                  "marks": [
                    "strong"
                  ],
                  "text": "Iron on low temperature.",
                  "_key": "2d5cb2bb78fe0",
                  "_type": "span"
                }
              ],
              "level": 1,
              "_type": "block",
              "style": "normal"
            }
          ]
    }
}

export default products;