// Copyright (c) 2024, team and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Level", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Level', {
    category: function(frm) {
        if (frm.doc.category) {
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'Sub Category',
                    filters: {
                        'category': frm.doc.category
                    },
                    fields: ['name', 'category']
                },
                callback: function(response) {
                    var sub_categories = response.message;
                    if (sub_categories) {
                        frm.clear_table('sup_category_table');

                        sub_categories.forEach(function(sub_category) {
                            var row = frm.add_child('sup_category_table');
                            row.sup_category = sub_category.name;
                        });

                        frm.refresh_field('sup_category_table');
                    }
                }
            });
        }
    }
});

