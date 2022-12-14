import axios from "axios";
import { TOKEN } from "./wb";
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

export const products = [
  { id: 1, title: "Куртка", price: 750, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100'},
  { id: 2, title: "Куртка 1", price: 1000, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 3, title: "Куртка 2", price: 1805, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 4, title: "Куртка 3", price: 3245, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 5, title: "Куртка 4", price: 879, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 6, title: "Куртка 5", price: 900, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 7, title: "Куртка 6", price: 1200, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
  { id: 8, title: "Куртка 7", price: 1600, description: "Рыжая красивая", img:'https://cdn.laredoute.ru/products/c/3/3/c33a01d6f20f8551198752c0f32548d8.jpg?imgopt=twic&twic=v1/cover=100x100' },
];