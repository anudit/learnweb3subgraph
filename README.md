# Learnweb3 DAO Subgraph

Build completed: QmRwzBUbBn2CgnTa7PPyWCksPp5ayHihQNXbkoms7zx7Wo

Deployed to https://thegraph.com/explorer/subgraph/anudit/learnweb3

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/learnweb3
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/learnweb3

### Example Query
```gql
{
  badges(where: {userAddress: "0xaf116bab0c55b2ef2b4386a213334b8fd31c0303"}) {
    id
    operator
    userAddress
    tokenUri
  }
}
```
