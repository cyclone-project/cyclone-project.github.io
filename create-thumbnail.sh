#!/bin/sh
pdftoppm -singlefile -scale-to 1024 -png "$1" "${1%.*}"
