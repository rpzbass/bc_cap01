#!/bin/bash

echo "Digite um nome para o commit "

read -a commit

git status

git add .

sleep 1

git status 

sleep 1

git commit -m echo ${commit[@]}

git oneline --log


