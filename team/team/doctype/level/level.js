// Copyright (c) 2024, team and contributors
// For license information, please see license.txt

frappe.ui.form.on("Level", {
    category : function(frm) {
        console.log("add feature");
        console.log("add feature2");
        console.log("add feature3");
        console.log("add feature4");
        console.log("add feature6");
        console.log("add jhfjj");
        console.log("add feature10");


        console.log("add jndfjk");





        if (frm.doc.category) {
            frappe.call({
                method: 'team.team.doctype.level.level.get_specializations',
                args: {
                    category: frm.doc.category
                },
                callback: function(r) {
                    if (r.message) {
                        frm.clear_table('sub_category');  
                        r.message.forEach(function(spec) {
                            let row = frm.add_child('sub_category');
                            row.name1 = spec.name1;
                            row.number = spec.number;
                        });
                        frm.refresh_field('sub_category');
                    }
                }
            });
        }
    }
});
