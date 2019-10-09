// JavaScript Document

function CalcTax()
{
	var income;
	var deductions;
	var credits;
	var rate;
	var taxes;

	// Todo - input text validation


	income = parseInt(document.getElementById("Income").value);
	deductions = parseInt(document.getElementById("Deductions").value);
	credits = parseInt(document.getElementById("Credits").value);
	rate = 0.08; // Magic number

	taxes = ((income - deductions) * rate) - credits;
	document.getElementById("TaxesDue").value = taxes;
}