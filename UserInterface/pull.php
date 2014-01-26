if ( $_POST['payload'] ) {
  shell_exec( 'cd /srv/www/UI/ && git reset --hard HEAD && git pull' );
}