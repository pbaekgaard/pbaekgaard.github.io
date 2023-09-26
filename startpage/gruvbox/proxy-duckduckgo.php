<?php

$query = isset( $_GET['q'] ) ? str_replace( ' ', '+', $_GET['q'] ) : 'example';

$url = 'https://duckduckgo.com/ac/?q='.$query.'&type=list';

$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, TRUE );
curl_setopt( $ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
$html = curl_exec( $ch );
curl_close( $ch );

echo $html;