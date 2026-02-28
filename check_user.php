<?php
$users = ["admin", "john", "test"];
$username = $_GET['username'];

if(in_array($username, $users)){
  echo "<span style='color:red'>Username already exists</span>";
} else {
  echo "<span style='color:green'>Username available</span>";
}
?>