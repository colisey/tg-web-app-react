import axios from "axios";
// import React, { useEffect, useState } from "react";

const headers = {
    "Content-Type": "application/json",
    Authorization: TOKEN,
  };
export const API = axios.create({
    baseURL: 'https://suppliers-api.wildberries.ru//cursor/list',
    timeout: 1000,
    headers
  });
  // TODO
