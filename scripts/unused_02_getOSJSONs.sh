#!/bin/bash

for i in `seq 0 50 11304`; do
  echo "$i"
  if [ ! -s osraw/"$i".json ]
  then
    rm -f osraw/"$i".json
    wget https://api.opensea.io/api/v1/assets?asset_contract_address=0x31385d3520bCED94f77AaE104b406994D8F2168C\&order_direction=desc\&limit=50\&offset="$i" -O osraw/"$i".json
  fi
done
