# Copyright (c) 2024, team and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Level(Document):
	pass


@frappe.whitelist()
def get_specializations( category):
	college_doc = frappe.get_doc("Category", category)
	specializations = []
	
	for spec in college_doc.sub_category:  # assuming 'specializations' is the table field
		specializations.append({
			"name1": spec.name1,  # assuming these are the fields in the table
			"number": spec.number
		})

	return specializations

