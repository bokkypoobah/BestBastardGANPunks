# BestBastardGANPunks

See https://bokkypoobah.github.io/BestBastardGANPunks/


<br />

## Scraped "Static" Data

### BGANPUNKV2 Server

The script [scripts/01_getIndividualJSONs.sh](scripts/01_getIndividualJSONs.sh) retrieves the JSON files from `https://api.bastardganpunks.club/{tokenId}`.

Sample data for tokenId 666:

```javascript
{
    "attributes": [
        {
            "trait_type": "HYPE TYPE",
            "value": "CALM AF (STILL)"
        },
        {
            "trait_type": "BASTARDNESS",
            "value": "DANK BASTARD"
        },
        {
            "trait_type": "SONG WORD COUNT",
            "value": 37
        },
        {
            "trait_type": "TYPE",
            "value": "APE"
        },
        {
            "trait_type": "BACKGROUND",
            "value": "GLITCHY AF"
        },
        {
            "trait_type": "FACING DIRECTION",
            "value": "RIGHT"
        },
        {
            "trait_type": "BAD HABIT(S)",
            "value": "EDIBLES???"
        }
    ],
    "description": "BOOMER TO BE ON YOUR STREETS\nLET'S MAKE A RAIL, AND GET A HOLE IN THIS SMALL WAY \nAND YOU KNOW THAT EVERYTHING YOU WANTED WAS NOT TOO MUCH \nYOU SEE THERE'S A HOLE IN MY SOUL \n",
    "external_url": "https://www.bastardganpunks.club/v2/666",
    "image": "https://ipfs.io/ipfs/QmS4GcX91uTBpYkCxWNqZd4da23HrMQXcPd5o2kHujcCcb",
    "imageArweave": "https://arweave.net/r3hMQfjFB83cKgGsOzqi-K_rlGlfjiPsJ4g1XPjuP9A",
    "name": "BASTARD GAN PUNK V2 #666",
    "tokenId": 666
}
```

<br />

### OpenSea Data

The script node [scripts/02_getOSJSONs.js](scripts/02_getOSJSONs.js) retrieves the JSON files from OpenSea for the contract.

You may need to run `npm install node-fetch` in the scripts subdirectory.

Sample data:

```javascript
{
    "assets": [
      ...
      {
          "animation_original_url": null,
          "animation_url": null,
          "asset_contract": {
              "address": "0x31385d3520bced94f77aae104b406994d8f2168c",
              "asset_contract_type": "non-fungible",
              "buyer_fee_basis_points": 0,
              "created_date": "2021-03-07T12:04:19.721879",
              "default_to_fiat": false,
              "description": "VERSION 2 OF BASTARD GAN PUNKS ARE COOLER, BETTER AND GOOFIER THAN BOTH BOOMER CRYPTOPUNKS & VERSION 1 BASTARD GAN PUNKS. THIS TIME, ALL CRYPTOPUNK ATTRIBUTES ARE EXTRACTED AND A NEW DATASET OF ALL COMBINATIONS OF THEM ARE TRAINED WITH GAN TO GIVE BIRTH TO EVEN MORE BADASS ONES. ALSO EACH ONE HAS A UNIQUE STORY GENERATED FROM MORE THAN 10K PUNK & EMO SONG LYRICS VIA GPT-2 LANGUAGE PROCESSING ALGORITHM. \r\n\r\nBASTARDS ARE SLOWLY DEGENERATING THE WORLD. ADOPT ONE TO KICK EVERYONE'S ASSES!\r\n\r\nDISCLAIMER: THIS PROJECT IS NOT AFFILIATED WITH LARVA LABS",
              "dev_buyer_fee_basis_points": 0,
              "dev_seller_fee_basis_points": 250,
              "external_link": "https://bastardganpunks.club",
              "image_url": "https://lh3.googleusercontent.com/-_j_RMVSqfDvPfRJhF3BQaf6D3OD31sG6d5pszei8a5V31EKr4Jz11xk-0iAnG4vTKwvhNPx2ICn4r25tbEtQ36EYJRdxlczuppUwg=s120",
              "name": "BASTARD GAN PUNKS V2",
              "nft_version": "3.0",
              "only_proxied_transfers": false,
              "opensea_buyer_fee_basis_points": 0,
              "opensea_seller_fee_basis_points": 250,
              "opensea_version": null,
              "owner": 1483931,
              "payout_address": "0x22fdb03f32a43769781cc3e0853d8fbfd50738a1",
              "schema_name": "ERC721",
              "seller_fee_basis_points": 500,
              "symbol": "BGANPUNKV2",
              "total_supply": "34"
          },
          "background_color": null,
          "collection": {
              "banner_image_url": "https://lh3.googleusercontent.com/InX38GA4YmuR2ukDhN0hjf8-Qj2U3Tdw3wD24IsbjuXNtrTZXNwWiIeWR9bJ_-rEUOnQgkpLbj71TDKrzNzHLHkOSRdLo8Yd2tE3_jg=s2500",
              "chat_url": null,
              "created_date": "2021-03-07T12:04:21.105195",
              "default_to_fiat": false,
              "description": "VERSION 2 OF BASTARD GAN PUNKS ARE COOLER, BETTER AND GOOFIER THAN BOTH BOOMER CRYPTOPUNKS & VERSION 1 BASTARD GAN PUNKS. THIS TIME, ALL CRYPTOPUNK ATTRIBUTES ARE EXTRACTED AND A NEW DATASET OF ALL COMBINATIONS OF THEM ARE TRAINED WITH GAN TO GIVE BIRTH TO EVEN MORE BADASS ONES. ALSO EACH ONE HAS A UNIQUE STORY GENERATED FROM MORE THAN 10K PUNK & EMO SONG LYRICS VIA GPT-2 LANGUAGE PROCESSING ALGORITHM. \r\n\r\nBASTARDS ARE SLOWLY DEGENERATING THE WORLD. ADOPT ONE TO KICK EVERYONE'S ASSES!\r\n\r\nDISCLAIMER: THIS PROJECT IS NOT AFFILIATED WITH LARVA LABS",
              "dev_buyer_fee_basis_points": "0",
              "dev_seller_fee_basis_points": "250",
              "discord_url": "https://discord.gg/qQY9jYX4p7",
              "display_data": {
                  "card_display_style": "contain"
              },
              "external_url": "https://bastardganpunks.club",
              "featured": false,
              "featured_image_url": "https://lh3.googleusercontent.com/vF8johTucYy6yycIOJTM94LH-wcDQIPTn9-eKLMbxajrm7GZfJJWqxdX6uX59pA4n4n0QNEn3bh1RXcAFLeLzJmq79aZmIXVoazmVw=s300",
              "hidden": false,
              "image_url": "https://lh3.googleusercontent.com/-_j_RMVSqfDvPfRJhF3BQaf6D3OD31sG6d5pszei8a5V31EKr4Jz11xk-0iAnG4vTKwvhNPx2ICn4r25tbEtQ36EYJRdxlczuppUwg=s120",
              "instagram_username": "bganpunks",
              "is_subject_to_whitelist": false,
              "large_image_url": "https://lh3.googleusercontent.com/vF8johTucYy6yycIOJTM94LH-wcDQIPTn9-eKLMbxajrm7GZfJJWqxdX6uX59pA4n4n0QNEn3bh1RXcAFLeLzJmq79aZmIXVoazmVw=s300",
              "medium_username": null,
              "name": "BASTARD GAN PUNKS V2",
              "only_proxied_transfers": false,
              "opensea_buyer_fee_basis_points": "0",
              "opensea_seller_fee_basis_points": "250",
              "payout_address": "0x22fdb03f32a43769781cc3e0853d8fbfd50738a1",
              "require_email": false,
              "safelist_request_status": "verified",
              "short_description": null,
              "slug": "bastard-gan-punks-v2",
              "telegram_url": null,
              "twitter_username": "bganpunks",
              "wiki_url": null
          },
          "creator": {
              "address": "0xc5e08104c19dafd00fe40737490da9552db5bfe5",
              "config": "affiliate",
              "discord_id": "",
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/32.png",
              "user": {
                  "username": "berk"
              }
          },
          "decimals": 0,
          "description": "BOOMER TO BE ON YOUR STREETS\nLET'S MAKE A RAIL, AND GET A HOLE IN THIS SMALL WAY \nAND YOU KNOW THAT EVERYTHING YOU WANTED WAS NOT TOO MUCH \nYOU SEE THERE'S A HOLE IN MY SOUL",
          "external_link": "https://www.bastardganpunks.club/v2/666",
          "id": 19063650,
          "image_original_url": "https://ipfs.io/ipfs/QmS4GcX91uTBpYkCxWNqZd4da23HrMQXcPd5o2kHujcCcb",
          "image_preview_url": "https://lh3.googleusercontent.com/aaIi9UHPPJCyhSb6JfNBo6DUEQhDzuWi_ZOE5fw2S6NWrep2Z1dS103LnqLu4mTCbL3bfB8-PS9NLhteI9LcSiZli4S2a3dpncZLFQ=s250",
          "image_thumbnail_url": "https://lh3.googleusercontent.com/aaIi9UHPPJCyhSb6JfNBo6DUEQhDzuWi_ZOE5fw2S6NWrep2Z1dS103LnqLu4mTCbL3bfB8-PS9NLhteI9LcSiZli4S2a3dpncZLFQ=s128",
          "image_url": "https://lh3.googleusercontent.com/aaIi9UHPPJCyhSb6JfNBo6DUEQhDzuWi_ZOE5fw2S6NWrep2Z1dS103LnqLu4mTCbL3bfB8-PS9NLhteI9LcSiZli4S2a3dpncZLFQ",
          "is_presale": false,
          "last_sale": {
              "asset": {
                  "decimals": 0,
                  "token_id": "666"
              },
              "asset_bundle": null,
              "auction_type": null,
              "created_date": "2021-06-23T02:34:38.278523",
              "event_timestamp": "2021-06-23T02:34:26",
              "event_type": "successful",
              "payment_token": {
                  "address": "0x0000000000000000000000000000000000000000",
                  "decimals": 18,
                  "eth_price": "1.000000000000000",
                  "id": 1,
                  "image_url": "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
                  "name": "Ether",
                  "symbol": "ETH",
                  "usd_price": "2091.659999999999854000"
              },
              "quantity": "1",
              "total_price": "1000000000000000000",
              "transaction": {
                  "block_hash": "0xe9ba4ff7ff11274a0e3d5cdc73f6689c615f9433098c337c0f3d4e71e0e15ce8",
                  "block_number": "12687802",
                  "from_account": {
                      "address": "0x279da57c9525bb81ca3fbd80aecebe6b8a691333",
                      "config": "",
                      "discord_id": "",
                      "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
                      "user": null
                  },
                  "id": 128723169,
                  "timestamp": "2021-06-23T02:34:26",
                  "to_account": {
                      "address": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
                      "config": "verified",
                      "discord_id": "",
                      "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/22.png",
                      "user": {
                          "username": "OpenSea-Orders"
                      }
                  },
                  "transaction_hash": "0x36a9e42ec7d533347981dad9527341dce83dfd2a871865df24724159e2f3a3c7",
                  "transaction_index": "152"
              }
          },
          "listing_date": null,
          "name": "BASTARD GAN PUNK V2 #666",
          "num_sales": 1,
          "owner": {
              "address": "0x279da57c9525bb81ca3fbd80aecebe6b8a691333",
              "config": "",
              "discord_id": "",
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
              "user": null
          },
          "permalink": "https://opensea.io/assets/0x31385d3520bced94f77aae104b406994d8f2168c/666",
          "sell_orders": [
              {
                  "approved_on_chain": false,
                  "base_price": "666000000000000000000",
                  "bounty_multiple": "0.01",
                  "calldata": "0x23b872dd000000000000000000000000279da57c9525bb81ca3fbd80aecebe6b8a6913330000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029a",
                  "cancelled": false,
                  "closing_date": null,
                  "closing_extendable": false,
                  "created_date": "2021-06-23T02:39:53.133110",
                  "current_bounty": "6660000000000000000",
                  "current_price": "666000000000000000000",
                  "exchange": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
                  "expiration_time": 0,
                  "extra": "0",
                  "fee_method": 1,
                  "fee_recipient": {
                      "address": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
                      "config": "verified",
                      "discord_id": "",
                      "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/28.png",
                      "user": 3585
                  },
                  "finalized": false,
                  "how_to_call": 0,
                  "listing_time": 1624415886,
                  "maker": {
                      "address": "0x279da57c9525bb81ca3fbd80aecebe6b8a691333",
                      "config": "",
                      "discord_id": "",
                      "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/10.png",
                      "user": null
                  },
                  "maker_protocol_fee": "0",
                  "maker_referrer_fee": "0",
                  "maker_relayer_fee": "500",
                  "marked_invalid": false,
                  "metadata": {
                      "asset": {
                          "address": "0x31385d3520bced94f77aae104b406994d8f2168c",
                          "id": "666"
                      },
                      "schema": "ERC721"
                  },
                  "order_hash": "0x5637c0aa19e86f71a30cc0b2a299dfb7195f54e61a29312715854fbc1eae9130",
                  "payment_token": "0x0000000000000000000000000000000000000000",
                  "payment_token_contract": {
                      "address": "0x0000000000000000000000000000000000000000",
                      "decimals": 18,
                      "eth_price": "1.000000000000000",
                      "id": 1,
                      "image_url": "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
                      "name": "Ether",
                      "symbol": "ETH",
                      "usd_price": "2091.659999999999854000"
                  },
                  "prefixed_hash": "0xec575d21a96c473588bb80f8a9276b673910430518e50471a6d807d2df8123d4",
                  "quantity": "1",
                  "r": "0xfa0cd653694063843c0cbfb9690fee8d9a300077e9da55420622d2daf54b7348",
                  "replacement_pattern": "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000",
                  "s": "0x0058494c61df9cb36d3d5ab003bf518ca731a19f5bef81343d765d62f87334d7",
                  "sale_kind": 0,
                  "salt": "75872777880782999762153777140184943812389857458564247298787649717137084934641",
                  "side": 1,
                  "static_extradata": "0x",
                  "static_target": "0x0000000000000000000000000000000000000000",
                  "taker": {
                      "address": "0x0000000000000000000000000000000000000000",
                      "config": "",
                      "discord_id": "",
                      "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/1.png",
                      "user": 1766
                  },
                  "taker_protocol_fee": "0",
                  "taker_relayer_fee": "0",
                  "target": "0x31385d3520bced94f77aae104b406994d8f2168c",
                  "v": 27
              }
          ],
          "token_id": "666",
          "token_metadata": "https://api.bastardganpunks.club/666",
          "top_bid": null,
          "traits": [
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 115,
                  "trait_type": "BASTARDNESS",
                  "value": "DANK BASTARD"
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 10458,
                  "trait_type": "HYPE TYPE",
                  "value": "CALM AF (STILL)"
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 2003,
                  "trait_type": "BACKGROUND",
                  "value": "GLITCHY AF"
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 1954,
                  "trait_type": "TYPE",
                  "value": "APE"
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 5434,
                  "trait_type": "FACING DIRECTION",
                  "value": "RIGHT"
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 0,
                  "trait_type": "SONG WORD COUNT",
                  "value": 37
              },
              {
                  "display_type": null,
                  "max_value": null,
                  "order": null,
                  "trait_count": 3458,
                  "trait_type": "BAD HABIT(S)",
                  "value": "EDIBLES???"
              }
          ],
          "transfer_fee": null,
          "transfer_fee_payment_token": null
      },
      ...
```

<br />

### Generate Combined Data

Data for all tokens have been combined using [scripts/03_generateData.js](scripts/03_generateData.js) to generate [scripts/bastardData.js](scripts/bastardData.js) and the compact version [scripts/bastardData.min.js](scripts/bastardData.min.js):

```javascript
const BASTARDDATA=[
  ...
  {
    "tokenId": 666,
    "name": "BASTARD GAN PUNK V2 #666",
    "image": "https://ipfs.io/ipfs/QmS4GcX91uTBpYkCxWNqZd4da23HrMQXcPd5o2kHujcCcb",
    "osimage": "https://lh3.googleusercontent.com/aaIi9UHPPJCyhSb6JfNBo6DUEQhDzuWi_ZOE5fw2S6NWrep2Z1dS103LnqLu4mTCbL3bfB8-PS9NLhteI9LcSiZli4S2a3dpncZLFQ",
    "permalink": "https://opensea.io/assets/0x31385d3520bced94f77aae104b406994d8f2168c/666",
    "description": "BOOMER TO BE ON YOUR STREETS\nLET'S MAKE A RAIL, AND GET A HOLE IN THIS SMALL WAY \nAND YOU KNOW THAT EVERYTHING YOU WANTED WAS NOT TOO MUCH \nYOU SEE THERE'S A HOLE IN MY SOUL \n",
    "attributes": [
      {
        "trait_type": "HYPE TYPE",
        "value": "CALM AF (STILL)"
      },
      {
        "trait_type": "BASTARDNESS",
        "value": "DANK BASTARD"
      },
      {
        "trait_type": "SONG WORD COUNT",
        "value": 37
      },
      {
        "trait_type": "TYPE",
        "value": "APE"
      },
      {
        "trait_type": "BACKGROUND",
        "value": "GLITCHY AF"
      },
      {
        "trait_type": "FACING DIRECTION",
        "value": "RIGHT"
      },
      {
        "trait_type": "BAD HABIT(S)",
        "value": "EDIBLES???"
      }
    ]
  },
  {
    "tokenId": 667,
    "name": "BASTARD GAN PUNK V2 #667",
    ...
```

You may find this data useful for your projects.

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Jul 2021. The MIT Licence. Not affiliated with [https://bastardganpunks.club/](https://bastardganpunks.club/).
