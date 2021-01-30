#!/bin/bash

echo "Digite um nome para o commit "

read -a commit

git status

git add .

sleep 1

git status 

git commit -m ${commit[@]}

git oneline --log


