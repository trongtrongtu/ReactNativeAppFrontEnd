
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllProducts = 'http://192.168.1.138:3001/list_all_products';
const apiInsertNewProduct = 'http://192.168.1.138:3001/insert_new_product';
const apiUpdateAProduct = 'http://192.168.1.138:3001/update_a_product';
const apiDeleteAProduct = 'http://192.168.1.138:3001/delete_a_product';
const apiGetAllCategories = 'http://192.168.1.138:3001/list_all_categories';

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
    console.log(params)
    try {
        const category_name = encodeURIComponent(params);
        let response = await fetch(`http://192.168.1.138:3001/list_products_with_category?category_name=${category_name}`);
        let responseJson = await response.json();
        return responseJson.data;
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
async function getCategoriesFromServer(params){
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
export {getCategoriesFromServer};
export {getProductsWithCategoryFromServer};