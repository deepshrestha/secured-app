const express = require("express");
const userModel = require("./models/user.model");
const RoleModel = require("./models/role.model");
const app = express();

app.post("/addUser", (request, response) => {
  const user = new userModel(request.body);
  try {
    user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/registerSubscriber", async (request, response) => {
  console.log("post request hit..");
  console.log(request.body);
  const requestBody = request.body;
  requestBody.uuid = requestBody.systemUuid + requestBody.secretKey;
  const user = new userModel(request.body);
  console.log("user...", user);

  try {
    await userModel.updateOne({ $set: user });
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  console.log("get request hit..");
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/:systemUuid", async (request, response) => {
  let systemUuid = request.params.systemUuid;
  const user = await userModel.findOne({ systemUuid: systemUuid });

  try {
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/email/:email", async (request, response) => {
  let email = request.params.email;
  console.log(email);
  const user = await userModel.findOne({ email });

  try {
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

//roles

app.post("/roles", async (req, resp) => {
  const role = new RoleModel(req.body);
  try {
    await role.save();
    resp.send(role);
  } catch (err) {
    resp.status(500).send(err);
  }
});

app.get("/roles", async (req, resp) => {
  const roles = await RoleModel.find();
  try {
    resp.send(roles);
  } catch (err) {
    resp.status(500).send(err);
  }
});

module.exports = app;
