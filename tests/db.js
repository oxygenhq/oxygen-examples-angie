var dbInfo = 'Driver={MySQL ODBC 5.3 UNICODE Driver};Server=localhost;Database=myDatabase; User=myUsername;Password=myPassword;'
db.setConnectionString(dbInfo)
var queryResults = db.executeQuery('')
log.info(queryResults.username)
//==================================
//Parabank details:
// Driver: org.hsqldb.jdbcDriver
// URL: jdbc:hsqldb:hsql://PARABANK_HOST/Parabank
// Username: sa
// Password: