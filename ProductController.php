<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
class ProductController extends Controller
{
    //
    function addProduct(Request $req){
        $product=new Product;
        $product->sku=$req->input('sku');
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->color=$req->input('color');
        $product->file_path=$req->file('file')->store('products');
        $product->product_type=$req->input('product_type');
        $product->save();
        return $product;
    }
    function list()
    {
        return Product::all();
    }
}
