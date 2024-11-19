import mssql from "mmsql";
const connectionSettings={
    server: "SERGIO_O\SQLEXPRESS",
    database:"acopio",
    user: "sa",
    passeword: "sergio",
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
};