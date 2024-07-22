import Template1Image from "./assets/template_1.png";

export const DEFAULT_CODE =
  "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\nconst image = 'https://i.ibb.co/mc5Psb8/jspdf-logo.png'\ndoc.addImage(image,'png',10,5,60,20)\ndoc.setFontSize(38)\ndoc.text('Playground',75,22.5)\ndoc.setDrawColor(0, 0, 0);\ndoc.line(10, 27, 200, 27);\ndoc.setFontSize(20)\ndoc.text('Hello',10,40)\ndoc.text('Start editing to see some magic happen!',10,50)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n";

const TEMPLATE_1 = `//JS PDF VISUALIZER 
const doc = new jsPDF();

// Mock data
const data = {
  transaction_id: '123456',
  invoice_date: new Date(),
  date: new Date(),
  is_cancelled: false,
  marked_cancelled: false,
  is_approved: true,
  party_name: 'Party Name',
  party_address: '123 Party Street',
  poc_person: 'Contact Person',
  party_contact_no: '1234567890',
  party_email: 'party@example.com',
  party_gst_no: 'GST123456',
  party_pan_no: 'PAN123456',
  raised_by_name: 'Raised By',
  raised_by_email: 'raisedby@example.com',
  raised_by_contact: '0987654321',
  expense_order_details: {
    shipTo: 'Shipping Address',
    po: [
      {
        description: 'Item Description',
        vendor_gstin: 'GSTIN123',
        hsn_sac: 'HSN123',
        taxable_amount: 1000,
        tax_amount: 100,
        total_amount: 1100,
      },
    ],
  },
  account_head: 'Account Head',
  sub_head: 'Sub Head',
  expense_budget_amount: 5000,
  deposite_mode: 'Bank Transfer',
  payment_terms: {
    advanceAmount: 1000,
    retentionAmount: 500,
  },
  invoice_file: 'invoice.pdf',
  bank_name: 'Bank Name',
  amount: 1000,
  gst_number: 'GST123',
  pan_number: 'PAN123',
}

const onBehalf = true
const record = {
  is_cancelled: false,
  marked_cancelled: false,
  is_approved: true,
}
const termsAndCondition = ['These are the terms and conditions 1.','These are the terms and conditions 2.']

  let y = 15

  doc.setFontSize(30)
  doc.setFont('times', 'bold')
  doc.setTextColor(240, 242, 244)
  doc.text(
    record?.is_cancelled
      ? 'REJECTED'
      : record?.marked_cancelled
      ? 'MARKED CANCELLED'
      : record?.is_approved
      ? 'APPROVED'
      : 'APPROVAL PENDING',
    data?.is_cancelled ? 125 : 115,
    doc.internal.pageSize.getHeight() / 2.3,
    {
      angle: 45,
      align: 'center',
    },
  )
  doc.setTextColor(0, 0, 0)

  doc.setFontSize(14)
  doc.setFont('times', 'bold')
  doc.autoTable(['Expense Order'], [], {
    startY: y,
    margin: { top: y },
    styles: { fontSize: 10, lineColor: [0, 0, 0], lineWidth: 0.5 },
    headStyles: {
      fontStyle: 'bold',
      valign: 'middle',
      halign: 'center',
      fillColor: [240, 242, 244],
    },
    theme: 'plain',
  })

  doc.setFontSize(10)
  doc.setFont('times', 'bold')
  y = doc.previousAutoTable.finalY + 5
  doc.text(\`Expense Number: \${
    data?.transaction_id
  }\`, 105, y, null, null, 'center')
  y += 5
  doc.setFont('times', 'normal')
  doc.setFontSize(8)
  let rY = y
  doc.autoTable(
    [
      'Expense Order Date',
      dayjs(data.invoice_date ? data?.invoice_date : data?.date).format('DD/MM/YYYY'),
    ],
    [
      [
        'Expense Order Date',
        dayjs(data.invoice_date ? data?.invoice_date : data?.date).format('DD/MM/YYYY'),
      ],
    ],
    {
      startY: rY,
      margin: { left: 109 },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: { 0: { fillColor: [240, 242, 244], fontStyle: 'bold' } },
      theme: 'plain',
      tableWidth: 87,
      showHead: 'never',
    },
  )
  // y = doc.previousAutoTable.finalY + 6
  var img = new Image()

  doc.addImage(
    'https://i.ibb.co/mc5Psb8/jspdf-logo.png',
    'png',
    135,
    rY + 16,
    37,
    13,
  )

  // doc.addImage(img, 'png', 140, rY + 9, 24, 24)
  rY = doc.previousAutoTable.finalY + rY

  if (onBehalf) {
    doc.autoTable(['On-Behalf Payment Details'], [], {
      margin: { left: 109 },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'bold', fillColor: [240, 242, 244] },
      theme: 'plain',
      tableWidth: 87,
      startY: rY - 2,
    })
    doc.autoTable(
      ['Payment Id', \`\${data?.onbehalf_payment_id}\`],
      [
        ['Payment Id', \`\${data?.onbehalf_payment_id}\`],
        ['Payee Name', data?.onbehalf_payee_name],
        ['Email Id', data?.onbehalf_payee_email],
        ['Contact No', data?.onbehalf_payee_contact],
      ],
      {
        startY: doc.previousAutoTable.finalY,
        margin: { left: 109 },
        styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
        headStyles: { fontStyle: 'normal' },
        columnStyles: { 0: { fontStyle: 'bold', fillColor: [240, 242, 244] } },
        theme: 'plain',
        tableWidth: 87,
        showHead: 'never',
      },
    )
  }
  // y = doc.previousAutoTable.finalY + 10

  doc.autoTable(['Party Name & Address'], [[\`\${data?.party_name} , \${
  data?.party_address
}\`]], {
    startY: y,
    margin: { top: y },
    styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
    headStyles: { fontStyle: 'bold', fillColor: [240, 242, 244] },
    theme: 'plain',
    tableWidth: 87,
  })
  doc.autoTable(
    ['POC Person', \`\${data?.poc_person}\`],
    [
      ['POC Person', \`\${data?.poc_person}\`],
      ['Contact No', data?.party_contact_no],
      ['Email Id', data?.party_email],
      ['GST No', data?.party_gst_no],
      ['PAN No', data?.party_pan_no],
    ],
    {
      startY: doc.previousAutoTable.finalY,
      margin: { top: doc.previousAutoTable.finalY },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: { 0: { fontStyle: 'bold', fillColor: [240, 242, 244] } },
      theme: 'plain',
      tableWidth: 87,
      showHead: 'never',
    },
  )
  y = doc.previousAutoTable.finalY + 6
  doc.autoTable(
    ['Billing & Delivery Name, Address'],
    [[\`\${data?.expense_order_details?.shipTo}\`]],
    {
      startY: y,
      margin: { top: y },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'bold', fillColor: [240, 242, 244] },
      theme: 'plain',
      tableWidth: 87,
    },
  )
  doc.autoTable(
    ['Contact Person', ''],
    [
      ['Contact Person', data?.raised_by_name ? data?.raised_by_name : ''],
      ['Email Id', data?.raised_by_email ? data?.raised_by_email : ''],
      ['Mobile', data?.raised_by_contact ? data?.raised_by_contact : ''],
    ],
    {
      startY: doc.previousAutoTable.finalY,
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: { 0: { cellWidth: 44.5, fontStyle: 'bold', fillColor: [240, 242, 244] } },
      theme: 'plain',
      tableWidth: 87,
      showHead: 'never',
    },
  )

  y = doc.previousAutoTable.finalY + 30
  doc.autoTable(
    ['Head', \`\${data?.account_head}\`, 'Sub Head', \`\${data?.sub_head}\`],
    [
      ['Head', \`\${data?.account_head}\`, 'Sub Head', \`\${data?.sub_head}\`],
      ['Expense Budget', data?.expense_budget_amount, 'Payment Mode', data?.deposite_mode],

      [
        'Advance Amount',
        data?.payment_terms?.advanceAmount,
        'Retention Amount',
        data?.payment_terms?.retentionAmount,
      ],
    ],
    {
      margin: { top: y },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: {
        0: { cellWidth: 44.5, fontStyle: 'bold', fillColor: [240, 242, 244] },
        2: { cellWidth: 44.5, fontStyle: 'bold', fillColor: [240, 242, 244] },
      },
      theme: 'plain',
      showHead: 'never',
    },
  )
  doc.autoTable(
    ['Attachments'],
    [[\`\${data?.invoice_file ? data?.invoice_file?.split("/")?.pop() : ""}\`]],
    {
      startY: doc.previousAutoTable.finalY + 5,
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'bold', fillColor: [240, 242, 244] },
      columnStyles: { 0: { cellWidth: 44.5 } },
      theme: 'plain',
    },
  )

  y = doc.previousAutoTable.finalY + 30

  doc.autoTable(
    [
      'S.No',
      'Particulars',
      'Vendor GSTN/UIN',
      'HSN/SAC',
      'Taxable Amount',
      'Tax Amount',
      'Total Amount',
    ],
    data?.expense_order_details?.po?.map((item, index) => {
      return [
        index + 1,
        item.description,
        item.vendor_gstin,
        item.hsn_sac,
        item.taxable_amount,
        item.tax_amount,
        item.total_amount,
      ]
    }),
    {
      startY: y,
      styles: { fontSize: 8, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'bold', valign: 'middle', halign: 'center', fillColor: [240, 242, 244] },
      columnStyles: { 0: { cellWidth: 7.5 }, 1: { cellWidth: 56 } },
      theme: 'plain',
    },
  )

let previousY = doc.previousAutoTable.finalY
  doc.autoTable(
    [{ header: 'Total Amount In Words' }],
    [["Total Amount In Words : Rupees 100 Only"]],
    {
      startY: doc.previousAutoTable.finalY,
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      theme: 'plain',
    //   tableWidth: 119.1,
      tableHeight: 100,
      showHead: 'never',
    },
  )
  doc.autoTable(
    [{ header: 'Gross Amount' }, "100"],
    [
      ['Gross Amount', 100],
      ['Tax Amount', 0],
      ['Total Amount', 100],
    ],
    {
      startY: previousY,
      margin: { left: 133.1 },
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: {
        0: { cellWidth: 47.2 },
        1: { valign: 'middle', halign: 'center' },
      },
      theme: 'plain',
      showHead: 'never',
    },
  )
  y = doc.previousAutoTable.finalY + 10
  doc.autoTable(
    ['Expense Narration', ''],
    [['Expense Narration', data?.description ? data?.description : '']],
    {
      startY: y,
      styles: { fontSize: 9, lineColor: [0, 0, 0], lineWidth: 0.3 },
      headStyles: { fontStyle: 'normal' },
      columnStyles: { 0: { cellWidth: 40, fillColor: [240, 242, 244], fontStyle: 'bold' } },
      theme: 'plain',
      showHead: 'never',
    },
  )
  y = doc.previousAutoTable.finalY + 5


doc.text(
    "This is electronically generated doesn't require stamp and signature.",
    105,
    doc.internal.pageSize.getHeight() - 6,
    null,
    null,
    'center',
  )
  doc.setFont('Helvetica', 'normal')
  doc.addPage()
  const pageHeight = doc.internal.pageSize.height
  var z = 15

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(14)
  doc.text("Terms and Conditions", 105, z, null, null, 'center')
  z += 8

  doc.setFontSize(9)

  for (let t = 0; t < termsAndCondition?.length; t++) {
    const linesAddress = doc.splitTextToSize(t + 1 + '. ' + termsAndCondition[t], 182)

    var dim = doc.getTextDimensions(linesAddress)
    doc.text(linesAddress, 14, z, null, null, 'left')
    z += dim.h + 2
    if (z >= pageHeight - 12) {
      doc.addPage()
      z = 15 // Restart height position
    }
  }
  
  y = doc.previousAutoTable.finalY + 10

//Write your code here!

return doc.output('blob');//Don't edit or delete this return statement.
`;

export const TEMPLATES = [
  {
    title: "Comprehensive Order Report",
    template: TEMPLATE_1,
    image: Template1Image,
  },
];

export const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbylM2Ky1_8KkPCcjI4XOEd35N0_YbSB6GvnSCa84ejiP-EkJRF24bfaxTkhvtBVz47g/exec";
