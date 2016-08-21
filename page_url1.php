<?php

  //呵呵，既然写了，就写完整好了，希望有一天我拿更高工资了
  
  //ini url1
  
  //to be simple,use mysql_connect,attention,it is out of date for new version.
  
  $db = mysql_connect('host','name','psd') or die(mysql_error());
  
  mysql_db_select('sample');
  
  $sql = "select id from sample_table where true";
  
  $res = mysql_query($sql);
  
  $rows = mysql_num_rows($res);
  
  $pageSize = 10;
  
  echo ceil($rows/$pageSize);
  
  
