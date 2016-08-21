  //呵呵，既然写了，就写完整好了，希望有一天我拿更高工资了
  
  //get data url2
  
  //to be simple,use mysql_connect,attention,it is out of date for new version.
  
  $db = mysql_connect('host','name','psd') or die(mysql_error());
  
  mysql_db_select('sample');
  
  $pageSize = 10;
  
  $page = intval($_GET['page']);
  
  $start = ($page-1)*$pageSize;
  
  $sql = "select id from sample_table where true limit $start,$pageSize";
  
  $res = mysql_query($sql);
  
  $data = [];
  
  while($rows = mysql_fetch_array($res)):
    
      array_push($data,$rows);
  
  endwhile;
  
  echo json_encode($data);
