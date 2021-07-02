#!/bin/bash

for i in {0..11304}; do
  if [ ! -s raw/"$i".json ]
  then
    wget https://api.bastardganpunks.club/"$i" -O raw/"$i".json
  fi
done
