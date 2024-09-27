// Copyright (c) 2024, team and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Product Selection", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Product Selection', {
    product_type: function(frm) {
        // Fetch related products based on the selected product type
        frappe.call({
            method: "team.team.doctype.product_selection.product_selection.get_products", 
            args: {
                product_type: frm.doc.product_type
            },
            callback: function(response) {
                if (response.message) {
                    // Clear existing child table entries
                    frm.clear_table('products'); // Adjust based on your child table fieldname

                    // Populate the child table with fetched products
                    response.message.forEach(product => {
                        let row = frm.add_child('products'); 
                        row.product_name = product.product_name;
                        row.manufacturer = product.manufacturer;
                        row.price = product.price;
                    });
                    
                    // Refresh the child table to show new data
                    frm.refresh_field('products'); 
                }
            }
        });
    }
});
