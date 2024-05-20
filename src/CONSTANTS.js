export const DEFAULT_CODE =
  "//JS PDF VISUALIZER \nconst doc = new jsPDF();\n\nconst image = 'https://i.ibb.co/mc5Psb8/jspdf-logo.png'\ndoc.addImage(image,'png',10,5,60,20)\ndoc.setFontSize(38)\ndoc.text('Playground',75,22.5)\ndoc.setDrawColor(0, 0, 0);\ndoc.line(10, 27, 200, 27);\ndoc.setFontSize(20)\ndoc.text('Hello',10,40)\ndoc.text('Start editing to see some magic happen!',10,50)\n//Write your code here!\n\nreturn doc.output('blob');//Don't edit or delete this return statement.\n";

export const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbylM2Ky1_8KkPCcjI4XOEd35N0_YbSB6GvnSCa84ejiP-EkJRF24bfaxTkhvtBVz47g/exec";
