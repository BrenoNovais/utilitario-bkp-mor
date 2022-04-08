@echo off
msiexec "C:\utilitario-bkp-mor\instaladores\node.msi" /quiet  /qn /norestart
git pull
npm run install-pacotes

