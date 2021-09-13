export const fetchProductionReadyBlogThumbnailContent = /* GraphQL */ `
  query FetchBlogsByProduction(
    $production: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fetchBlogsByProduction(
      production: $production
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        image
        createdAt
      }
      nextToken
    }
  }
`;

export const fetchBlogArticleContentByID = /* GraphQL */ `
  query FetchBlogByID(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fetchBlogByID(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category
        name
        content
        image
        embeddedImages
        createdAt
      }
      nextToken
    }
  }
`;
