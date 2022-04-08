@echo off
msiexec C:\utilitario-bkp-mor\instaladores\ATUALIZADOR.msi /quiet 
git pull
npm run install-pacotes

