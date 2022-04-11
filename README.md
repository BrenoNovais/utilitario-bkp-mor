# Instalar o NodeJs ultima versão disponível
 - https://nodejs.org/en/download/
 
# Instalar o GIT: 
 - https://git-scm.com/download/win
 
# Rodar o atualizador.bat
 - Colocar o atualizador.bat no agendador de tarefas 1x por dia

# Antes de continuar :
  - Cria um arquivo ".env" com as variáveis de ambiente conforme exemplo:
      ID_EMPRESA=1  <<< --- ID da empresa Gerado pelo o sistema de Backup anteriormente !
      QTDE_MES_BKP=1 <<< --- Quantidade de meses de backup na pasta
      DIRETORIO_BKP=C:\Users\User\Desktop\Projetos\Ferramentas\VerificaArquivos\arquivos-exemplo\ <<<<<<< com BARRA NO FINAL
      USUARIO=xxxx
      SENHA=xxxx

# Atenção !!!
  - Antes de iniciar o serviço, é necessário que o arquivo ".env" esteja
      com as variáveis de ambiente preenchidas.
  - O arquivo ".env" deve estar na mesma pasta do projeto.
  - Verifica e confirme se no .env DIRETORIO_BKP está com a barra no FINAL !!!
  - Checar se no .env DIRETORIO_BKP esta certingo o caminho para nao apagar arquivos errados !!!
 
# Para testar se esta tudo ok, rode no terminal do windows:
    pm2 monit

# Se mostrar na tela o processo com o nome " VerificadorMOR ", então está tudo ok.

--fim
