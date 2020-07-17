<?php

class DBUtils {
	private $host = '127.0.0.1';
	private $db   = 'phplab';
	private $user = 'root';
	private $pass = '';
	private $charset = 'utf8';	

	private $pdo;
	private $error;

	public function __construct () {
		$dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
		$opt = array(PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_EMULATE_PREPARES   => false);
		try {
			$this->pdo = new PDO($dsn, $this->user, $this->pass, $opt);		
		} // Catch any errors
		catch(PDOException $e){
			$this->error = $e->getMessage();
			echo "Error connecting to DB: " . $this->error;
		}
	}

	public function select() {
		$stmt = $this->pdo->query("SELECT * FROM Courses");
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

	public function insert($value) {
		$affected_rows = $this->pdo->exec("INSERT into Courses (name) values ('$value');");
		return $affected_rows;
	}
}
 
?>