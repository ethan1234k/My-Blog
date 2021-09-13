/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      type
      category
      production
      name
      content
      image
      embeddedImages
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        category
        production
        name
        content
        image
        embeddedImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const blogsByDate = /* GraphQL */ `
  query BlogsByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        category
        production
        name
        content
        image
        embeddedImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchBlogByID = /* GraphQL */ `
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
        type
        category
        production
        name
        content
        image
        embeddedImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchBlogsByProduction = /* GraphQL */ `
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
        type
        category
        production
        name
        content
        image
        embeddedImages
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
