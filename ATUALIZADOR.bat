@echo off
msiexec  /i "C:\utilitario-bkp-mor\instaladores\ATUALIZADOR.msi"
git pull
npm run install-pacotes

