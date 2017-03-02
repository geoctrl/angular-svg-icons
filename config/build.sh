#!/usr/bin/env bash
tsc -p ./tsconfig.json

# copy folder structure and files to the root folder
rsync -aP --include='*.js' --include='*/' --exclude='*' ../dev/icons/* ../