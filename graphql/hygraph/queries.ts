import { gql } from "@apollo/client";
import { client } from "./client";

export const getPosts = client.query({
  query: gql`
    query MyDevPagePosts {
      myDevPagePosts(orderBy: createdAt_DESC) {
        id
        createdAt
        subtitle
        title
        updatedAt
        color {
          hex
        }
      }
    }
  `,
});

export const getPostById = (id: string) => {
  return client.query({
    query: gql`
      {
        myDevPagePost(where: { id: "${id}" }) {
          color {
            hex
          }
          content
          coverPhoto {
            url
          }
          createdAt
          id
          slug
          subtitle
          title
          updatedAt
        }
      }
    `,
  });
};
