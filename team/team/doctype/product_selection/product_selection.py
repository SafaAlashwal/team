# Copyright (c) 2024, team and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ProductSelection(Document):
	pass

# Fetches products based on the selected product type and returns their name, manufacturer, and price.
@frappe.whitelist()
def get_products(product_type):
    query = """
        SELECT product_name, manufacturer, price 
        FROM `tabProduct` 
        WHERE product_type = %s
    """
    products = frappe.db.sql(query, (product_type,), as_dict=True)
    return products
