# Web3Privacy Now Data Repository

Structured database for Web3Privacy Now.

# License

Open Data Commons Open Database License (ODbL)


# Schema specification

| Field                  | Type                  | Required | Description |
|------------------------|-----------------------|----------|-------------|
| type                   | object                | -        |             |
| id                     | string                | x        |             |
| name                   | string                | x        | name of the project |
| categories             | array                 | x        | defined by web3privacy categories |
| ecosystem              | string                |          | Cosmos, Ethereum |
| product_readiness      | string                |          |             |
| security               | string                |          |             |
| have_token             | boolean               |          |             |
| token_link             | string uri            |          |             |
| tokens                 | array                 |          |             |
| description            | string                |          |             |
| project_type           | string                |          | Lending, Trading, Staking, Yield, Transfer, Payment, Mixer, Data storage |
| product_launch_day     | string                |          |             |
| technology type        | string                |          | ZK, Layer0, STARKS... |
| technology name        | string                |          | Ultramixing-protocol |
| technology features    | array                 |          | Positive (Private, Non-traceable,...) / Negative (Unverifiable) |
| links web              | string uri            |          | infrastructure |
| links twitter          | string uri            |          | social link |
| links discord          | string uri            |          | social link |
| links twitter          | string uri            |          |             |
| links blog             | string uri            |          | validation |
| links facebook         | string uri            |          | social link |
| links bloc_explorer    | string uri            |          | infrastructure |
| links whitepaper       | string uri            |          | infrastructure |
| links github           | string uri            |          | infrastructure |
| links docs             | string uri            |          | infrastructure |
| links changelog        | string uri            |          | infrastructure |
| links forum            | string uri            |          | infrastructure |
| links snapshot         | string                |          |             |
| links lens             | string                |          |             |
| links farcaster        | string                |          |             |
| links rss_feed         | string uri            |          | validation |
| blockchain_features p2p | boolean             |          |             |
| blockchain_features encryption | string         |          | 256bit, ... |
| blockchain_features network | string           |          |             |
| blockchain_features upgradability enabled | boolean | |             |
| blockchain_features upgradability type | string | |             |
| blockchain_features upgradability admin_keys | string |  | 5 in Multisign |
| licenses               | string                |          | MIT Licence, Copyright, Commons |
| privacy_policy defined | boolean               |          |             |
| privacy_policy link   | string uri            |          |             |
| privacy_policy data_usage | string            |          | Page Numbers?, How are they using your data?, Selling/Giving data? |
| team anonymous        | boolean               |          |             |
| team teammembers name | string                |          |             |
| team teammembers role | string                |          |             |
| team teammembers link | string uri            |          |             |
| team company name     | string                |          |             |
| team company link     | string uri            |          |             |
| team company contacts | string                |          |             |
| storage decentralized | boolean               |          |             |
| traceability tracked_data | string             |          | IP, Email, Phone, Address, ... |
| traceability kyc      | boolean               |          |             |
| traceability sign_in_type_requirments | string | | Wallet, Email, Gitcoin Pass |
| third_party_dependency | string              |          | Name, Link, Description, Dependency purpose |
| compliance             | string               |          | OFAC, FBI, MasterBlacklist,... |
| audits name            | string                |          |             |
| audits company         | string                |          |             |
| audits logo            | string                |          |             |
| audits link            | string uri            |          |             |
| audits time            | string                |          |             |
| social_trust           | string                |          |             |
| technical_spof         | string                |          |             |
| history title          | string                |          |             |
| history event_type     | string                |          |             |
| history description    | string                |          |             |
| history time           | string                |          |             |
| history link           | string uri            |          |             |
| client_diversability name | string            |          |             |
| client_diversability link | string uri        |          |             |
| default_privacy        | boolean               |          |             |
| funding name           | string                |          |             |
| funding type           | string                |          |             |
| funding link           | string uri            |          |             |
| funding value          | string                |          |             |
| funding time           | string                |          |             |
| project_status live_status | boolean           |          |             |
| project_status version | string                |          |             |
| project_status testnet | boolean               |          |             |
| project_status mainnet | boolean               |          |             |

