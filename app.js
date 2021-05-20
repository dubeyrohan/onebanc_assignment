const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const port = dev.onebanc.ai;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const endpoint = "GetTransactionHistory";
  const userId=req.body.userId;
  const recipientId=req.body.recipientId;
  const url =
    "https://dev.onebanc.ai/assignment.asm" +
    endpoint + "?userId="+userId+"&recipientId="+recipientId;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const Data = JSON.parse(data);
      const userId = Data.main.userId;
      const transactions = Data.main.transactions;
      const transaction = Data.main.transaction;
      const transactionId = Data.main.transactionId;
      const transactionDate = Data.main.transactionDate;
      const expiryDate = Data.main.expiryDate;
      const amount = Data.main.amount;
      const status = Data.main.status;
      const type = Data.main.type;
      const direction = Data.main.direction;
      const customerUpi = Data.main.customerUpi;
      const customerVpayId = Data.main.customerVpayId;
      const customerVpay = Data.main.customerVpay;
      const partnerUpi = Data.main.partnerUpi;
      const partnerVpayId = Data.main.partnerVpayId;
      const partnerVpay = Data.main.partnerVpay;

      res.write("Parameter Name Type IsMandatory Description Sample Value" +".</p>");
      var i,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10;
      for (i = 0; i <5; i++) {
      t1+=userId[i];
      } 
      res.write(t1+".</p>");
      for (i = 0; i <5; i++) {
        t2+=transactions[i];
        } 
        res.write(t2+".</p>");
      for (i = 0; i <5; i++) {
          t3+=transaction[i];
          } 
          res.write(t3+".</p>");
      for (i = 0; i <5; i++) {
          t4+=transactionDate[i];
          } 
          res.write(t4+".</p>");
      for (i = 0; i <5; i++) {
      t5+=expiryDate[i];
      } 
      res.write(t5+".</p>");
      for (i = 0; i <5; i++) {
        t6+=amount[i];
        } 
        res.write(t6+".</p>");
      for (i = 0; i <5; i++) {
          t7+=description[i];
          } 
          res.write(t7+".</p>");
      for (i = 0; i <5; i++) {
          t8+=status[i];
          } 
          res.write(t8+".</p>");   
      for (i = 0; i <5; i++) {
            t9+=customerUpi[i];
            } 
          res.write(t9+".</p>"); 
      for (i = 0; i <5; i++) {
          t10+=customerVpay[i];
      } 
      res.write(t10+".</p>"); 
      res.send();
    });
  });
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
