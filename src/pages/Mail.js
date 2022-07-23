// material
import { Card, TableBody } from "@mui/material";
import { Button, Container } from "@mui/material";

import React, { useEffect, useState } from "react";

import Page from "../components/Page";

export default function Mail() {
  return (
    <Page title="Mail |  Cryptic Vault">
      <Container pl={0} pr={0} sx={{ height: "80vh" }}>
        <iframe
          src="https://cvxmtp.vercel.app/"
          width="100%"
          height="100%"
        ></iframe>
      </Container>
    </Page>
  );
}
