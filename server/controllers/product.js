import { success } from "zod/v4";
import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
            SELECT * FROM products 
            ORDER BY created_at DESC
        
        `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
  
    if (!name || !price || !image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." })}

    const newProduct = await sql`
        INSERT INTO products (name, price,image)
        VALUES (${name},${price},${image})
        RETURNING *
    `;

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in createProduct function", error);
    res.status(500).json({success: false, message: "Internal Server Error"});
  }
}

export const getProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await sql`
            SELECT * FROM products
            WHERE id = ${productId}
        `
        res.status(200).json({success: true, data: product[0]});
    } catch (error) {
        console.log("Error in getProduct function",error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, price, image} = req.body;

        const updatedProduct = await sql `
            UPDATE products
            SET name = ${name}, price = ${price}, image=${image}
            WHERE id = ${id}
        `

        if(updatedProduct.length == 0) return res.status(404).json({success:true, message: "Product not found"});

        res.status(200).json({success: true, data: updatedProduct[0]})
    
        
    } catch (error) {
        console.log("Error in updateProduct function", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
};

export const deleteProduct = async (req, res) => {
    try {
      const productId = parseInt(req.params.id);

      const deletedProduct = await sql`
          DELETE FROM products 
          WHERE id = ${productId}
          RETURNING *;
        `;

      if (deletedProduct.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found." });
      }

      return res.status(200).json({ success: true, data: deletedProduct[0] });
    } catch (error) {
      console.error("Error in deleteProduct function", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error." });
    }
      
}
