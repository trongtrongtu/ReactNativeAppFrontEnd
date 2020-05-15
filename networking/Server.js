
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const IpAddress = '192.168.1.138';
const apiGetAllProducts = 'http://' + IpAddress+ ':3001/list_all_products';
const apiInsertNewProduct = 'http://' + IpAddress+ ':3001/insert_new_product';
const apiUpdateAProduct = 'http://' + IpAddress+ ':3001/update_a_product';
const apiDeleteAProduct = 'http://' + IpAddress+ ':3001/delete_a_product';
const apiGetAllCategories = 'http://' + IpAddress+ ':3001/list_all_categories';
const registerUser = 'http://' + IpAddress+ ':3001/register';

async function getProductsFromServer() {
    try {
        let response = await fetch(apiGetAllProducts);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function getProductsWithCategoryFromServer(params) {
    try {
        const category_name = params;
        let response = await fetch(`http://${IpAddress}:3001/list_products_with_category?category_name=${category_name}`);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function login(username, password) {
    try {
        const user_name = username;
        const pass_word = password;
        let response = await fetch(`http://${IpAddress}:3001/login?username=${user_name}&password=${pass_word}`);
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function register(username, password, gioi_tinh, ngay_sinh, email, sdt, dia_chi) {
    try {
        if (!username || !password || !gioi_tinh || !ngay_sinh || !email || !sdt || !dia_chi) {
            return 'empty';
        } else {
            let response = await fetch(registerUser, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    gioi_tinh: gioi_tinh,
                    ngay_sinh: ngay_sinh,
                    email: email,
                    sdt: sdt,
                    dia_chi: dia_chi
                })
            });
            let responseJson = await response.json();
            return responseJson.result;
        }
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function insertNewProductToServer(params) {
    try {
        let response = await fetch(apiInsertNewProduct, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function updateAProduct(params) {
    try {
        let response = await fetch(apiUpdateAProduct, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function DeleteAProduct(params) {
    try {
        let response = await fetch(apiDeleteAProduct, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
async function getCategoriesFromServer(params) {
    try {
        let response = await fetch(apiGetAllCategories);
        let responseJson = await response.json();
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export { getProductsFromServer };
export { insertNewProductToServer };
export { updateAProduct };
export { DeleteAProduct };
export { getCategoriesFromServer };
export { getProductsWithCategoryFromServer };
export { login };
export { register }