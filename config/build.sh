#!/usr/bin/env bash
tsc -p ./tsconfig.json

# copy folder structure and files to the root folder
rsync -aP --include='*.js' --include='*.d.ts' --include='*/' --exclude='*' ../dev/icons/* ../