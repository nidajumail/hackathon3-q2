

 const order = {
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:"firstName",
            type:"string",
            title:"First Name",
            
        },

        {
            name:"lastName",
            type:"string",
            title:"Last Name",
        },
        {
            name:"phone",
            type:"string",
            title:"Phone",
        },
        {
            name:"email",
            type:"string",
            title:"Email",
        },
        {
            name:"city",
            type:"string",
            title:"City",
        },
        {
            name:"zipCode",
            type:"string",
            title:"Zip Code",
        },
        {
            name:"discount",
            type:"number",
            title:"Discount",
        },
        {
            name:"address",
            type:"string",
            title:"Address"
        },
        {
            name:"cartItems",
            type:"array",
            title:"Cart Item",
            of:[{type:"reference", to :{
                type:"product"
            }
        }]
        },
        {
            name:"total",
            type:"number",
            title:"Total"
        },
        {
            name:"status",
            type:"string",
            title:"Order Status",
            options:{
                list:[
                     {   title : "Pending", value : "pending"},
                     {   title : "Success", value : "success"},
                     {   title : "Dispatch", value : "dispatch"},
                ],
                layout: "radio"
            },
                 initialValue: "pending"
        }
    ]
 }
 export default order;