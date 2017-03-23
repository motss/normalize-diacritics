#!/bin/sh

clear; printf "Running delete-directories script...\n"

has_unused_directories=false
directories="dist/ node_modules/ .nyc_output/ coverage/ npm-debug.log yarn-error.log"

for directory in $directories; do
  if [ -d "$directory" ] || [ -f "$directory" ]; then
    printf "\nRemoving %s...\n" "$directory"
    rm -rf "$directory"
    has_unused_directories=true
  fi
done

if [ "$has_unused_directories" = true ]; then
  printf "\nCleaning done.\n"
else
  printf "\nNothing to clean here.\n\n"
fi
