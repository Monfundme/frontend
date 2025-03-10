import { gql } from '@apollo/client';

export const GET_CAMPAIGNS = gql`
 query Campaigns {
  Campaign(order_by: {createdAt: desc}) {
    id
    closedAt
    completedAt
    createdAt
    currentAmount
    deadline
    description
    donations {
      amount
      timestamp
      donator_id
      id
    }
    image
    isClosed
    isCompleted
    owner_id
    status
    targetAmount
    targetReachedAt
    title
  }
}
`;

export const GET_CAMPAIGN_BY_ID = gql`
 query CampaignById($id: String!) {
  Campaign(where: {id: {_eq: $id}}) {
    id
    closedAt
    completedAt
    createdAt
    currentAmount
    deadline
    description
    donations {
      amount
      timestamp
      donator_id
      id
    }
    image
    isClosed
    isCompleted
    owner_id
    status
    targetAmount
    targetReachedAt
    title
  }
}
`;

// export const GET_ACCOUNT = gql`
//    query GetAccount($accountId: String!) {
//      Account(where: {id: {_eq: $accountId}}) {
//     id
//     donations {
//       amount
//       campaign_id
//       id
//       timestamp
//       campaign{ 
//       	description
//         title
//         targetAmount
//       }
//     }
//   }
// `;