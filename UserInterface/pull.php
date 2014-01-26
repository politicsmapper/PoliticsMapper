if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/UI/ && git reset --hard HEAD && git pull' );
}