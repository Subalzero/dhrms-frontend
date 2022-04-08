import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../services/AuthProvider";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
const ExcelJS = require("exceljs");

// const background = require("../resources/images/bnhs.jpg");

const clientID =
  "863795583364-h7g3uatn4sqnpg2gmboqsv88c6oh32sm.apps.googleusercontent.com";

export default function LogIn() {
  const auth = useAuth();
  const nav = useNavigate();

  const exportxls = async () => {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/buluanhs-sis-dev.appspot.com/o/SF9-11.xlsx?alt=media&token=51eb5c2a-25a0-49d8-a9e6-1289d03829fc";
    const data = await (await fetch(url)).arrayBuffer();
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(data);
    console.log("Excel: ", wb);
    const ws = wb.getWorksheet("TEST_SHEET");
    ws.state = "veryHidden";
    console.log("ws: ", ws);
    const row = ws.getRow(1);
    row.values = [
      "AMOR, MARK CLIVAN L.",
      "124923070004",
      20,
      "M",
      11,
      "11-SMAW",
      "2021-2022",
    ];

    const output = await wb.xlsx.writeBuffer();

    console.log("Output: ", output);

    saveAs(new Blob([output], { type: "applicationi/xlsx" }), "AMOR.xlsx");
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const responseGoogle = (response) => {
    console.log(response);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    // await exportxls();
    try {
      await auth.login(email, password);
      nav("/");
    } catch (e) {
      console.log(JSON.stringify(e));
      setError(e.code);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <div className="col d-flex justify-content-center align-items-center h-100 row">
        <Card
          style={{ maxWidth: "500px", width: "400px" }}
          className="align-items-center justify-content-center col d-flex"
        >
          <Card.Body>
            <Card.Text className="text-dark h4 text-center">Log in</Card.Text>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formLogin">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className={["text-muted", "h6"]}>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "200px" }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
